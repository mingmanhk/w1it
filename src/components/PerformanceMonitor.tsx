'use client';

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';

export default function PerformanceMonitor() {
  // Report Web Vitals to Google Analytics or other analytics service
  useReportWebVitals((metric) => {
    // You can send metrics to your analytics service here
    console.log('Web Vitals:', metric);

    // Example: Send to Google Analytics
    const windowWithGtag = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (typeof window !== 'undefined' && windowWithGtag.gtag) {
      windowWithGtag.gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  });

  // Monitor performance metrics
  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const perfEntry = entry as PerformanceEventTiming;
          if (perfEntry.processingStart) {
            console.log('FID:', perfEntry.processingStart - perfEntry.startTime);
          }
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsEntries: PerformanceEntry[] = [];

      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsEntries.push(entry);
            clsValue += layoutShiftEntry.value || 0;
            console.log('CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}