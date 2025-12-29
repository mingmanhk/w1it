'use client';

import Button from '@/components/Button';
import Image from 'next/image';
import {
  Database,
  BarChart3,
  Cloud,
  Cpu,
  Shield,
  Zap,
} from 'lucide-react';

/**
 * W1IT Data Analytics Page - LIGHT-MODE Design System
 * Colors: navy #050816, green #00A878, blue #3A81F7, surface-0 #FFFFFF, surface-1 #F8FAFC, surface-2 #F1F5F9
 * Typography: Display/42 Bold, Heading/28 Bold, Heading/20 Semibold, Body/17 Regular, Body/16 Regular
 * Spacing: 8, 16, 24, 32, 48, 64, 96px only
 */

export default function DataAnalyticsPage() {
  const services = [
    {
      icon: Database,
      title: 'Data Warehousing',
      description: 'Modern data platforms for centralized, scalable data storage and management.',
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reports for data-driven decision making.',
    },
    {
      icon: Cpu,
      title: 'AI/ML Integration',
      description: 'Predictive analytics and machine learning models for advanced insights.',
    },
    {
      icon: Cloud,
      title: 'Cloud Analytics',
      description: 'Scalable analytics solutions on AWS, Azure, and Google Cloud platforms.',
    },
    {
      icon: Shield,
      title: 'Data Governance',
      description: 'Policies and processes for data quality, security, and compliance.',
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Streaming data processing for immediate insights and action.',
    },
  ];

  const benefits = [
    'Improved decision-making with data-driven insights',
    'Increased operational efficiency through automation',
    'Enhanced customer understanding and personalization',
    'Competitive advantage with predictive analytics',
    'Reduced costs through optimized operations',
    'Compliance with data regulations and standards',
  ];

  const technologies = [
    { name: 'Snowflake', category: 'Data Cloud' },
    { name: 'Databricks', category: 'Lakehouse' },
    { name: 'AWS Redshift', category: 'Cloud Data Warehouse' },
    { name: 'Google BigQuery', category: 'Serverless Data Warehouse' },
    { name: 'Tableau', category: 'Business Intelligence' },
    { name: 'Power BI', category: 'Data Visualization' },
    { name: 'Apache Spark', category: 'Data Processing' },
    { name: 'dbt', category: 'Data Transformation' },
  ];

  return (
    <div className="bg-[#FFFFFF]">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/hero-graphic.webp"
            alt="Data Analytics Solutions"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/60 to-[#050816]/80" />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="max-w-[800px] mx-auto text-center">
            <h1 className="text-[42px] font-bold text-white mb-6">
              Transform Data into Actionable Insights
            </h1>
            <p className="text-[17px] text-white/90 max-w-3xl mx-auto mb-8">
              Unlock the power of your data with modern analytics platforms, AI-driven insights, and strategic data solutions.
            </p>
            <Button href="/contact" variant="primary">
              Explore Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[28px] font-bold text-[#050816] mb-6">
                Modern Analytics Solutions
              </h2>
              <p className="text-[16px] text-[#4A4A4A] mb-6 leading-relaxed">
                In today's data-rich environment, organizations that effectively leverage their data gain significant competitive advantages. Our data analytics solutions transform raw data into strategic assets.
              </p>
              <p className="text-[16px] text-[#4A4A4A] mb-8 leading-relaxed">
                We help you build scalable data platforms, implement advanced analytics, and create data-driven cultures that drive innovation and growth.
              </p>
              <Button href="/contact" variant="primary">
                Schedule Assessment
              </Button>
            </div>
            <div className="bg-[#FFFFFF] p-8 border-2 border-[#3A81F7]">
              <h3 className="text-[20px] font-semibold text-[#050816] mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#00A878] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[16px] text-[#4A4A4A]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Comprehensive Analytics Services
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              End-to-end data and analytics solutions tailored to your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-[#F8FAFC] p-8">
                  <div className="w-16 h-16 bg-[#3A81F7] flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#050816] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[16px] text-[#4A4A4A] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[28px] font-bold text-[#050816] mb-4">
              Modern Analytics Platforms
            </h2>
            <p className="text-[17px] text-[#4A4A4A] max-w-3xl mx-auto">
              We work with leading technologies to deliver best-in-class analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-8 bg-[#FFFFFF] border-2 border-[#D9D9D9]">
                <div className="text-[20px] font-semibold text-[#050816] mb-2">
                  {tech.name}
                </div>
                <div className="text-[16px] text-[#4A4A4A]">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#FFFFFF]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center">
            <h2 className="text-[28px] font-bold text-[#050816] mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-[16px] text-[#4A4A4A] mb-8 max-w-2xl mx-auto">
              Transform your data into strategic assets that drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary">
                Start Data Assessment
              </Button>
              <Button href="/services" variant="secondary">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
