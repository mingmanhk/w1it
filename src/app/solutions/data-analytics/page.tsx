'use client';

import React from 'react';
import Container from '@/components/Container';
import Button from '@/components/Button';
import {
  Database,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Cloud,
  Cpu,
  Shield,
  Zap,
} from 'lucide-react';

export default function DataAnalyticsPage() {
  const services = [
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Warehousing',
      description: 'Modern data platforms for centralized, scalable data storage and management.',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Business Intelligence',
      description: 'Interactive dashboards and reports for data-driven decision making.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'AI/ML Integration',
      description: 'Predictive analytics and machine learning models for advanced insights.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Analytics',
      description: 'Scalable analytics solutions on AWS, Azure, and Google Cloud platforms.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Governance',
      description: 'Policies and processes for data quality, security, and compliance.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
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

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse-subtle" />

        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center space-x-2 glass px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Database className="w-4 h-4" />
              <span className="font-inter">Data & Analytics</span>
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight animate-fade-in-up">
              Transform Data into
              <span className="block text-gradient-amber mt-2">Actionable Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed font-inter animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Unlock the power of your data with modern analytics platforms, AI-driven insights, and strategic data solutions.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <Button href="/contact" size="xl" className="group bg-gradient-amber hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-medium mb-6 font-inter">
                Data-Driven Excellence
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-8">
                Modern Analytics Solutions
              </h2>
              <p className="text-lg text-neutral-600 mb-6 font-inter leading-relaxed">
                In today&apos;s data-rich environment, organizations that effectively leverage their data gain significant competitive advantages. Our data analytics solutions transform raw data into strategic assets.
              </p>
              <p className="text-lg text-neutral-600 mb-8 font-inter leading-relaxed">
                We help you build scalable data platforms, implement advanced analytics, and create data-driven cultures that drive innovation and growth.
              </p>
              <Button href="/contact" className="group">
                Schedule Assessment
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-8 text-white">
              <h3 className="font-display font-bold text-2xl mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Our Services
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Comprehensive Analytics Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              End-to-end data and analytics solutions tailored to your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                  <div className="text-amber-600">{service.icon}</div>
                </div>
                <h3 className="font-display font-semibold text-xl text-neutral-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4 font-inter">
              Technology Stack
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-900 mb-6">
              Modern Analytics Platforms
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-inter">
              We work with leading technologies to deliver best-in-class analytics solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Snowflake', category: 'Data Cloud' },
              { name: 'Databricks', category: 'Lakehouse' },
              { name: 'AWS Redshift', category: 'Cloud Data Warehouse' },
              { name: 'Google BigQuery', category: 'Serverless Data Warehouse' },
              { name: 'Tableau', category: 'Business Intelligence' },
              { name: 'Power BI', category: 'Data Visualization' },
              { name: 'Apache Spark', category: 'Data Processing' },
              { name: 'dbt', category: 'Data Transformation' },
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl font-bold text-neutral-900 font-display mb-2">
                  {tech.name}
                </div>
                <div className="text-sm text-neutral-600 font-inter">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-amber text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-dot-pattern opacity-10" />
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <Container size="lg">
          <div className="text-center relative z-10">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8">
              Ready to Unlock Your Data&apos;s Potential?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-inter">
              Transform your data into strategic assets that drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                href="/contact"
                variant="secondary"
                size="xl"
                className="bg-white text-amber-600 hover:bg-neutral-100 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Start Data Assessment
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="xl"
                className="border-white text-white hover:bg-white/10"
              >
                View All Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}