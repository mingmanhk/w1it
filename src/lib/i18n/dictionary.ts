/**
 * Site-wide translation dictionary.
 *
 * This is a client-side toggle (not locale-prefixed routing) so every page
 * keeps its single canonical URL, sitemap entry, and JSON-LD — the SEO work
 * already done for the site is untouched. `zh-TW` currently covers the
 * highest-traffic surfaces (nav, footer, homepage, contact); pages not yet
 * translated simply render their original English copy regardless of the
 * selected language, so nothing is ever blank.
 */

export type Locale = 'en' | 'zh-TW';

export interface Dictionary {
  common: {
    langToggleLabel: string;
    getStarted: string;
  };
  nav: {
    services: string;
    solutions: string;
    apps: string;
    industries: string;
    resources: string;
    about: string;
    servicesDropdown: {
      managedServices: string;
      cloudSolutions: string;
      networkSetup: string;
      remoteSupport: string;
      security: string;
      technicalWriting: string;
      itServices: string;
      itConsulting: string;
    };
    solutionsDropdown: {
      dataAnalytics: string;
      digitalTransformation: string;
      cybersecurityStrategy: string;
      customItSolutions: string;
    };
    appsDropdown: {
      contactSyncMate: string;
      deepTicker: string;
      pixelColorPicker: string;
      screenGrabber: string;
    };
    resourcesDropdown: {
      caseStudies: string;
      blog: string;
      knowledgeBase: string;
      itChecklists: string;
      freeTools: string;
      testimonials: string;
      support: string;
    };
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    solutionsHeading: string;
    companyHeading: string;
    legalHeading: string;
    connectHeading: string;
    rightsReserved: string;
    services: Record<
      | 'managedServices'
      | 'cloudSolutions'
      | 'networkSetup'
      | 'remoteSupport'
      | 'security'
      | 'technicalWriting'
      | 'itSupport'
      | 'emergencyItHelp',
      string
    >;
    solutions: Record<
      | 'dataAnalytics'
      | 'digitalTransformation'
      | 'cybersecurityStrategy'
      | 'customItSolutions'
      | 'websiteOptimization'
      | 'knowledgeBase'
      | 'itChecklists'
      | 'freeTools',
      string
    >;
    company: Record<
      | 'about'
      | 'industries'
      | 'blog'
      | 'caseStudies'
      | 'testimonials'
      | 'documentation'
      | 'bellevueItSupport'
      | 'apps'
      | 'talkToSales'
      | 'contact',
      string
    >;
    legal: Record<'privacy' | 'terms' | 'cookies' | 'sla', string>;
  };
  home: {
    hero: { title: string; subtitle: string; cta: string };
    services: {
      heading: string;
      subheading: string;
      items: { title: string; description: string }[];
    };
    pillars: {
      heading: string;
      subheading: string;
      items: { title: string; description: string }[];
    };
    featureHighlights: {
      heading: string;
      subheading: string;
      items: { title: string; description: string }[];
    };
    industriesTeaser: {
      heading: string;
      subheading: string;
      items: { name: string }[];
      cta: string;
    };
    testimonials: {
      heading: string;
      subheading: string;
      items: { quote: string; author: string; company: string }[];
    };
    ctaBanner: {
      heading: string;
      subheading: string;
      body: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  /** Flat slug -> label lookup used by the shared Breadcrumbs component. English falls back to auto Title Case. */
  breadcrumbSegments: Record<string, string>;
  about: {
    hero: { title: string; subtitle: string };
    values: { heading: string; subheading: string; items: { name: string; description: string }[] };
    mission: { heading: string; paragraph1: string; paragraph2: string };
    whyChoose: { heading: string; items: string[] };
    cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
  };
  servicesHub: {
    hero: { title: string; subtitle: string };
    keyFeaturesLabel: string;
    requestQuote: string;
    categories: { title: string; description: string; features: string[] }[];
    cta: { heading: string; body: string; cta: string };
  };
  solutionsHub: {
    hero: { title: string; subtitle: string };
    keyOutcomesLabel: string;
    learnMore: string;
    items: { title: string; description: string; outcomes: string[] }[];
    cta: { heading: string; body: string; cta: string };
  };
  industriesHub: {
    hero: { title: string; subtitle: string };
    ourServicesLabel: string;
    inquireNow: string;
    items: { name: string; description: string; services: string[] }[];
    cta: { heading: string; body: string; cta: string };
  };
  appsHub: {
    hero: { title: string; subtitle: string };
    learnMore: string;
    apps: { title: string; description: string }[];
    whyHeading: string;
    whySubheading: string;
    benefits: { title: string; description: string }[];
    cta: { heading: string; body: string; cta: string };
  };
  contact: {
    hero: { title: string; subtitle: string };
    form: {
      heading: string;
      intro: string;
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
      submitting: string;
    };
    info: {
      heading: string;
      phoneLabel: string;
      emailLabel: string;
      serviceAreaLabel: string;
      serviceAreaValue: string;
      partnerHeading: string;
      partnerBody: string;
      serviceAreasLabel: string;
      serviceAreasValue: string;
    };
  };
  servicesDetail: {
    managedServices: {
      hero: { title: string; subtitle: string; cta: string };
      overview: {
        heading: string;
        paragraph1: string;
        paragraph2: string;
        cta: string;
        benefitsHeading: string;
        benefits: string[];
      };
      services: { heading: string; subheading: string; items: { title: string; description: string }[] };
      tiers: {
        heading: string;
        subheading: string;
        items: { name: string; description: string; features: string[] }[];
        getStarted: string;
      };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    cloudSolutions: {
      hero: { title: string; subtitle: string; cta: string };
      platformsHeading: string;
      services: { heading: string; subheading: string; items: { title: string; description: string }[] };
      benefits: { heading: string; items: { title: string; description: string }[] };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    networkSetup: {
      hero: { title: string; subtitle: string; cta: string };
      services: { heading: string; subheading: string; items: { title: string; description: string }[] };
      commonIssues: { heading: string; items: { title: string; description: string }[] };
      serviceArea: { heading: string; intro: string; remoteNote: string; cta: string };
      whyChoose: { heading: string; items: { title: string; description: string }[] };
      architectureOptimization: {
        heading: string;
        body: string;
        costAudit: { title: string; body: string };
        rightSized: { title: string; body: string };
        migrationPlan: { title: string; body: string };
      };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    remoteSupport: {
      hero: { title: string; subtitle: string; cta: string };
      howItWorks: { heading: string; steps: { step: string; title: string; description: string }[] };
      services: { heading: string; items: { title: string; description: string }[] };
      benefits: {
        heading: string;
        items: { title: string; description: string }[];
        perfectForRemoteWorkers: { title: string; body: string };
      };
      security: { title: string; body: string; features: string[] };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    security: {
      hero: { title: string; subtitle: string; cta: string };
      compliance: { heading: string; items: { name: string; description: string }[] };
      services: { heading: string; subheading: string; items: { title: string; description: string }[] };
      threats: { heading: string; subheading: string; items: { title: string; description: string }[] };
      networkAssessment: {
        heading: string;
        body: string;
        items: { title: string; body: string }[];
        footer: string;
      };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    technicalWriting: {
      hero: { title: string; subtitle: string; cta: string };
      whyMatters: { heading: string; paragraph1: string; paragraph2: string };
      services: { heading: string; subheading: string; items: { title: string; description: string }[] };
      benefits: { heading: string; items: { title: string; description: string }[] };
      useCases: { heading: string; items: { title: string; description: string }[] };
      cta: { heading: string; body: string; cta: string };
    };
    itAutomation: {
      hero: { title: string; subtitle: string; cta: string };
      intro: { heading: string; paragraph1: string; paragraph2: string };
      services: {
        heading: string;
        subheading: string;
        benefitsLabel: string;
        items: { title: string; description: string; benefits: string[] }[];
      };
      benefits: { heading: string; subheading: string; items: string[] };
      process: { heading: string; steps: { number: string; title: string; description: string }[] };
      cta: { heading: string; body: string; ctaPrimary: string; ctaSecondary: string };
    };
    websiteDevelopment: {
      hero: { title: string; subtitle: string; cta: string };
      features: { heading: string; subheading: string; items: { title: string; description: string }[] };
      technologies: { heading: string; subheading: string };
      cta: { heading: string; body: string; cta: string };
    };
  };
  itConsulting: {
    hero: { title: string; subtitleBeforeLink: string; linkText: string; subtitleAfterLink: string; cta: string };
    intro: string;
    offer: { heading: string; subheading: string; items: { title: string; description: string }[] };
    benefits: { heading: string; items: { title: string; description: string }[] };
    cta: { heading: string; body: string; cta: string };
  };
  itServices: {
    hero: { title: string; subtitleBeforeLink: string; linkText: string; subtitleAfterLink: string; cta: string };
    about: { heading: string; paragraph: string };
    experience: { heading: string; subheading: string; items: { title: string; description: string }[] };
    servicesOffered: { heading: string; subheading: string; items: string[]; note: string };
    whyWorkWithMe: { heading: string; items: { title: string; description: string }[] };
    cta: { heading: string; body: string; cta: string };
  };
}

export const en: Dictionary = {
  common: {
    langToggleLabel: '中文',
    getStarted: 'Get Started',
  },
  nav: {
    services: 'Services',
    solutions: 'Solutions',
    apps: 'Apps',
    industries: 'Industries',
    resources: 'Resources',
    about: 'About',
    servicesDropdown: {
      managedServices: 'Managed IT Services',
      cloudSolutions: 'Cloud Solutions',
      networkSetup: 'Network Setup',
      remoteSupport: 'Remote Support',
      security: 'Security',
      technicalWriting: 'Technical Writing',
      itServices: 'IT Services',
      itConsulting: 'IT Consulting',
    },
    solutionsDropdown: {
      dataAnalytics: 'Data Analytics',
      digitalTransformation: 'Digital Transformation',
      cybersecurityStrategy: 'Cybersecurity Strategy',
      customItSolutions: 'Custom IT Solutions',
    },
    appsDropdown: {
      contactSyncMate: 'Contact SyncMate',
      deepTicker: 'DeepTicker',
      pixelColorPicker: 'Pixel Color Picker',
      screenGrabber: 'ScreenGrabber',
    },
    resourcesDropdown: {
      caseStudies: 'Case Studies',
      blog: 'Blog',
      knowledgeBase: 'Knowledge Base',
      itChecklists: 'IT Checklists',
      freeTools: 'Free Tools',
      testimonials: 'Testimonials',
      support: 'Support',
    },
  },
  footer: {
    tagline: 'Professional IT solutions for Seattle businesses and beyond.',
    servicesHeading: 'Services',
    solutionsHeading: 'Solutions',
    companyHeading: 'Company',
    legalHeading: 'Legal',
    connectHeading: 'Connect',
    rightsReserved: 'W1IT Solutions. All rights reserved.',
    services: {
      managedServices: 'Managed Services',
      cloudSolutions: 'Cloud Solutions',
      networkSetup: 'Network Setup',
      remoteSupport: 'Remote Support',
      security: 'Security',
      technicalWriting: 'Technical Writing',
      itSupport: 'IT Support',
      emergencyItHelp: 'Emergency IT Help',
    },
    solutions: {
      dataAnalytics: 'Data Analytics',
      digitalTransformation: 'Digital Transformation',
      cybersecurityStrategy: 'Cybersecurity Strategy',
      customItSolutions: 'Custom IT Solutions',
      websiteOptimization: 'Website Optimization',
      knowledgeBase: 'Knowledge Base',
      itChecklists: 'IT Checklists',
      freeTools: 'Free Tools',
    },
    company: {
      about: 'About',
      industries: 'Industries',
      blog: 'Blog',
      caseStudies: 'Case Studies',
      testimonials: 'Testimonials',
      documentation: 'Documentation',
      bellevueItSupport: 'Bellevue IT Support',
      apps: 'Apps',
      talkToSales: 'Talk to Sales',
      contact: 'Contact',
    },
    legal: {
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
      sla: 'SLA',
    },
  },
  home: {
    hero: {
      title: 'Enterprise-Grade IT, Right-Sized for Your Business',
      subtitle:
        'We design, build, and secure networks that cost less to run. From network architecture optimization that cuts recurring spend, to full network build-outs and security assessments — we keep your business fast, safe, and focused on growth.',
      cta: 'Get a Free Network Assessment',
    },
    services: {
      heading: 'Our Services',
      subheading: 'Complete IT solutions designed for small businesses',
      items: [
        {
          title: 'Network Architecture Optimization',
          description:
            'We audit your current network, eliminate over-provisioned hardware and licensing, and redesign the architecture — most clients cut recurring IT costs by 20-40%.',
        },
        {
          title: 'Network Design & Build',
          description:
            'Complete network build-outs for offices, warehouses, and multi-site businesses: structured cabling plans, WiFi coverage, VPN, and vendor-neutral hardware selection.',
        },
        {
          title: 'Network Security Assessment',
          description:
            'A practical, prioritized review of your firewall rules, access controls, patching, and exposure — with a remediation plan ranked by risk, not a scare report.',
        },
        {
          title: 'Managed IT Services',
          description:
            'Proactive monitoring, patching, and helpdesk support with predictable monthly pricing — problems fixed before they interrupt your team.',
        },
        {
          title: 'Cloud Migration',
          description:
            'Structured moves to cloud infrastructure with minimal downtime — and honest advice when staying on-prem is the cheaper, better answer.',
        },
        {
          title: 'IT Automation',
          description:
            'Replace repetitive manual work with reliable automated workflows: onboarding, backups, monitoring, and reporting that run themselves.',
        },
      ],
    },
    pillars: {
      heading: 'Our Foundation',
      subheading: 'The three pillars that guide everything we do',
      items: [
        {
          title: 'Clarity',
          description:
            'Plain-English recommendations and documented systems — you always know what you run and what it costs.',
        },
        {
          title: 'Resilience',
          description:
            'Fault-tolerant networks engineered for uptime, with tested backups and a recovery plan that actually works.',
        },
        {
          title: 'IT Optimization & Strategy',
          description:
            'Architecture reviews that right-size your infrastructure — spend less on hardware, licensing, and rework.',
        },
      ],
    },
    featureHighlights: {
      heading: 'What Sets Us Apart',
      subheading: 'Our approach combines technical excellence with operational clarity.',
      items: [
        {
          title: 'Modern Infrastructure, Built Right',
          description: 'High availability, zero‑trust security, and scalable automation.',
        },
        {
          title: 'Automation That Works for You',
          description: 'Reduce manual overhead with predictable, repeatable workflows.',
        },
        {
          title: 'Migration Without the Chaos',
          description: 'Structured, step‑by‑step modernization with zero guesswork.',
        },
      ],
    },
    industriesTeaser: {
      heading: 'Supporting Small Businesses Across Industries',
      subheading:
        'From manufacturing to professional services, we understand the unique challenges facing small businesses in every sector.',
      items: [
        { name: 'Manufacturing' },
        { name: 'Small Business' },
        { name: 'Startups' },
        { name: 'Professional Services' },
      ],
      cta: 'Explore All Industries',
    },
    testimonials: {
      heading: 'Industry Expertise',
      subheading: 'Trusted by businesses across diverse industries',
      items: [
        {
          quote:
            "W1IT transformed our outdated website into a modern, professional platform that truly represents our company's legacy.",
          author: 'Kam Ling Trading Team',
          company: 'Kam Ling International Trading Co.',
        },
      ],
    },
    ctaBanner: {
      heading: 'Ready to Get Started?',
      subheading: "Let's Build Your Success Story Together",
      body: "Talk to us about your goals, your challenges, and how W1IT can help you build a stronger, smarter foundation for growth.",
      ctaPrimary: 'Get Your Free Consultation',
      ctaSecondary: 'View All Services',
    },
  },
  breadcrumbSegments: {},
  about: {
    hero: {
      title: 'About W1IT Solutions',
      subtitle: 'Enterprise-grade IT support designed for small businesses—without the complexity or overhead.',
    },
    values: {
      heading: 'Our Values',
      subheading: 'The principles that guide everything we do.',
      items: [
        { name: 'Clarity', description: 'Clear communication, transparent pricing, and straightforward solutions.' },
        { name: 'Resilience', description: 'Reliable IT infrastructure that keeps your business running smoothly.' },
        { name: 'Partnership', description: "We treat your business like our own—tailored solutions, not one-size-fits-all." },
        { name: 'Confidence', description: 'Empower your team with technology that drives growth, not frustration.' },
      ],
    },
    mission: {
      heading: 'Our Mission',
      paragraph1:
        'W1IT provides small businesses with enterprise-grade IT support—minus the complexity. We solve everyday tech problems and prevent future disruptions so you can focus on growth, not troubleshooting.',
      paragraph2:
        'Founded by Victor, a seasoned IT professional with over a decade of experience, W1IT was born from frustration with overpriced, overcomplicated IT support. We treat small businesses like valued partners, not ticket numbers.',
    },
    whyChoose: {
      heading: 'Why Choose W1IT?',
      items: [
        'Expert support tailored for small business needs',
        "Proactive monitoring—stop problems before they start",
        'Fast, responsive help desk when you need us',
        'Transparent pricing with plans that fit your budget',
        'Strategic IT consulting for smarter growth',
        'Enterprise-grade security without the complexity',
      ],
    },
    cta: {
      heading: 'Ready to Get Started?',
      body: "Let's build a stronger IT foundation for your business.",
      ctaPrimary: 'Schedule Consultation',
      ctaSecondary: 'Explore Our Services',
    },
  },
  servicesHub: {
    hero: {
      title: 'Our Services',
      subtitle: 'Enterprise-grade IT solutions designed for small business success.',
    },
    keyFeaturesLabel: 'Key Features:',
    requestQuote: 'Request a Quote',
    categories: [
      {
        title: 'Managed IT Services',
        description: 'Proactive IT support that keeps your systems running smoothly and your team productive.',
        features: [
          '24/7 monitoring and maintenance',
          'Help desk and end-user support',
          'Network and server management',
          'Security and patch management',
          'Backup and disaster recovery',
        ],
      },
      {
        title: 'IT Consulting & Strategy',
        description: 'Expert guidance to align technology with business goals and drive measurable growth.',
        features: [
          'IT roadmap and strategy development',
          'Cloud strategy and migration planning',
          'Cybersecurity assessments',
          'IT budget optimization',
          'Digital transformation consulting',
        ],
      },
      {
        title: 'Website Development & Optimization',
        description: 'High-performance websites that deliver results and exceptional user experiences.',
        features: [
          'Custom website design and development',
          'E-commerce solutions',
          'Performance optimization',
          'Search engine optimization (SEO)',
          'Analytics and conversion tracking',
        ],
      },
      {
        title: 'Data & Analytics',
        description: 'Turn your data into actionable insights for smarter business decisions.',
        features: [
          'Business intelligence dashboards',
          'Data warehousing and ETL',
          'Predictive analytics',
          'Data governance',
          'Reporting and visualization',
        ],
      },
      {
        title: 'On-Demand IT Support',
        description: "Flexible support when you need it—no long-term commitments required.",
        features: [
          'Pay-as-you-go hourly support',
          'Remote and on-site assistance',
          'Troubleshooting and resolution',
          'Software installation',
          'Hardware repair and upgrades',
        ],
      },
    ],
    cta: {
      heading: 'Ready to Get Started?',
      body: 'We help small businesses succeed with reliable, enterprise-grade IT solutions.',
      cta: 'Get in Touch',
    },
  },
  solutionsHub: {
    hero: {
      title: 'IT Solutions for Small Business Success',
      subtitle: 'Complete technology solutions designed to help your business thrive.',
    },
    keyOutcomesLabel: 'Key Outcomes:',
    learnMore: 'Learn More',
    items: [
      {
        title: 'Managed IT Solutions',
        description: 'Proactive IT management keeps your business running smoothly 24/7.',
        outcomes: [
          'Proactive monitoring and maintenance',
          '24/7 help desk support',
          'Reduced downtime and IT costs',
          'Predictable monthly budgeting',
        ],
      },
      {
        title: 'Hardware & Software Integration',
        description: 'Seamless integration for new hardware and software without disruption.',
        outcomes: [
          'Minimal disruption to operations',
          'Improved system compatibility',
          'Enhanced productivity',
          'Expert configuration',
        ],
      },
      {
        title: 'Migration & Deployment',
        description: 'Expert migration services with zero downtime and complete data integrity.',
        outcomes: [
          'Zero-downtime migrations',
          'Cloud and on-premise deployments',
          'Data integrity guaranteed',
          'Complete testing and validation',
        ],
      },
      {
        title: 'Cybersecurity & Protection',
        description: 'Protect your business from cyber threats with comprehensive security.',
        outcomes: [
          'Multi-layered protection',
          'Regular security assessments',
          'Virus and malware prevention',
          'Compliance and risk management',
        ],
      },
      {
        title: 'Business Continuity Planning',
        description: 'Robust backup and disaster recovery to keep your business operational.',
        outcomes: [
          'Automated backup solutions',
          'Quick disaster recovery',
          'Business continuity planning',
          'Minimal data loss protection',
        ],
      },
    ],
    cta: {
      heading: 'Ready to Get Started?',
      body: 'We help small businesses succeed with reliable IT solutions.',
      cta: 'Schedule Consultation',
    },
  },
  industriesHub: {
    hero: {
      title: 'Industries We Serve',
      subtitle: 'Tailored IT solutions for the unique challenges of your industry.',
    },
    ourServicesLabel: 'Our Services:',
    inquireNow: 'Inquire Now',
    items: [
      {
        name: 'Manufacturing',
        description: 'Efficient and scalable IT solutions for the manufacturing sector.',
        services: [
          'Factory automation and IoT solutions',
          'Supply chain management systems',
          'Enterprise Resource Planning (ERP) support',
          'Process optimization and automation',
        ],
      },
      {
        name: 'Small Business',
        description: 'Affordable and effective IT solutions for small businesses.',
        services: [
          'Managed IT services',
          'Cloud solutions (Office 365, Google Workspace)',
          'Data backup and recovery',
          'Website and email hosting',
        ],
      },
      {
        name: 'Startups',
        description: 'Scalable and agile IT solutions to fuel startup growth.',
        services: [
          'Cloud infrastructure setup (AWS, Azure, GCP)',
          'DevOps and CI/CD automation',
          'Scalable and secure application architecture',
          'Cost-effective IT strategy and consulting',
        ],
      },
      {
        name: 'Professional Services',
        description: 'Reliable and efficient IT for professional service firms.',
        services: [
          'Client relationship management (CRM) systems',
          'Secure document management',
          'Remote work and collaboration tools',
          'Time and billing software support',
        ],
      },
    ],
    cta: {
      heading: 'Ready to Get Started?',
      body: "Let's discuss how we can support your industry's specific needs.",
      cta: 'Contact Us',
    },
  },
  appsHub: {
    hero: {
      title: 'W1IT Applications',
      subtitle: 'We build powerful, user-focused applications to streamline your workflows and solve critical business challenges.',
    },
    learnMore: 'Learn More',
    apps: [
      { title: 'Contact SyncMate', description: 'Intelligent contact management and synchronization across all your devices and platforms.' },
      { title: 'Pixel Color Picker', description: 'Advanced color detection tool with palette generation and accessibility checking.' },
      { title: 'ScreenGrabber', description: 'Professional screenshot and screen recording tool with annotation capabilities.' },
      { title: 'DeepTicker', description: 'Real-time financial data analysis and market insights platform.' },
    ],
    whyHeading: 'Why Our Apps Stand Out',
    whySubheading: 'We combine technical expertise with user-centered design to create applications that are both powerful and easy to use.',
    benefits: [
      { title: 'User-Centric Design', description: 'Intuitive interfaces designed with user experience as the top priority.' },
      { title: 'Cross-Platform', description: 'Applications that work seamlessly across web, mobile, and desktop platforms.' },
      { title: 'Enterprise Security', description: 'Bank-level security with encryption, authentication, and compliance standards.' },
      { title: 'Regular Updates', description: 'Continuous improvement with feature updates and performance enhancements.' },
    ],
    cta: {
      heading: 'Have a Custom App Idea?',
      body: "We specialize in building bespoke applications tailored to your unique business needs. Let's turn your vision into reality.",
      cta: 'Start Your Project',
    },
  },
  contact: {
    hero: {
      title: 'Ready to Get Started?',
      subtitle: "Contact us today and let's build your success story together.",
    },
    form: {
      heading: 'Get in Touch',
      intro:
        "Have questions about our services? Need help with a tech challenge? Fill out the form below and we'll respond within 24 hours.",
      name: 'Name',
      email: 'Email',
      company: 'Company (Optional)',
      message: 'Message',
      submit: 'Send Message',
      submitting: 'Submitting...',
    },
    info: {
      heading: 'Contact Information',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      serviceAreaLabel: 'Service Area',
      serviceAreaValue: 'Seattle Metropolitan Area & Remote Nationwide',
      partnerHeading: 'Your Local IT Partner',
      partnerBody:
        'Based in Bellevue, WA, we proudly serve small businesses throughout the Seattle Metro Area with on-site support and remote assistance nationwide.',
      serviceAreasLabel: 'Service Areas:',
      serviceAreasValue: 'Bellevue, Seattle, Redmond, Kirkland, Issaquah, Sammamish, and surrounding communities.',
    },
  },
  servicesDetail: {
    managedServices: {
      hero: {
        title: 'Proactive IT Management',
        subtitle:
          'Comprehensive IT management with 24/7 monitoring, strategic consulting, and dedicated support for your business.',
        cta: 'Get Started',
      },
      overview: {
        heading: 'Your Dedicated IT Team',
        paragraph1:
          'Managed IT Services provide a comprehensive solution for businesses that want to focus on their core operations while leaving technology management to experts.',
        paragraph2:
          'We act as an extension of your team, providing proactive monitoring, strategic guidance, and rapid support to ensure your technology drives business success.',
        cta: 'Schedule Consultation',
        benefitsHeading: 'Key Benefits',
        benefits: [
          'Predictable monthly costs with no surprise expenses',
          'Access to enterprise-grade expertise and tools',
          'Proactive problem resolution before issues impact business',
          'Scalable solutions that grow with your business',
          'Compliance with industry standards and regulations',
          'Focus on core business while we manage your IT',
        ],
      },
      services: {
        heading: 'Comprehensive Managed Services',
        subheading: 'End-to-end IT management solutions tailored to your business needs.',
        items: [
          { title: 'Proactive Monitoring', description: '24/7 monitoring of your IT infrastructure with automated alerts.' },
          { title: 'Help Desk Support', description: 'Dedicated technical support team for rapid issue resolution.' },
          { title: 'Security Management', description: 'Comprehensive security services including patch management and threat detection.' },
          { title: 'Backup & Recovery', description: 'Automated data backup and disaster recovery solutions.' },
          { title: 'Network Management', description: 'Optimization and management of your network infrastructure.' },
          { title: 'Strategic Consulting', description: 'IT strategy planning and technology roadmap development.' },
        ],
      },
      tiers: {
        heading: 'Flexible Service Plans',
        subheading: 'Choose the level of service that matches your business requirements and budget.',
        items: [
          { name: 'Essential', description: 'Basic monitoring and support for small businesses', features: ['24/7 Monitoring', 'Help Desk Support', 'Basic Security'] },
          { name: 'Professional', description: 'Comprehensive management for growing businesses', features: ['Proactive Maintenance', 'Advanced Security', 'Strategic Planning'] },
          { name: 'Enterprise', description: 'Full-scale IT management for large organizations', features: ['Dedicated Team', 'Compliance Management', 'Business Continuity'] },
        ],
        getStarted: 'Get Started',
      },
      cta: {
        heading: 'Ready to Simplify Your IT Management?',
        body: 'Partner with us to build scalable, secure, and innovative IT solutions that drive business growth.',
        ctaPrimary: 'Schedule Free Assessment',
        ctaSecondary: 'View All Services',
      },
    },
    cloudSolutions: {
      hero: {
        title: 'Enterprise Cloud Excellence',
        subtitle: 'Transform your infrastructure with scalable, secure, and cost-effective cloud solutions.',
        cta: 'Start Cloud Journey',
      },
      platformsHeading: 'Cloud Platforms We Support',
      services: {
        heading: 'Comprehensive Cloud Services',
        subheading: 'End-to-end cloud solutions designed to accelerate your digital transformation.',
        items: [
          { title: 'Cloud Migration', description: 'Seamless migration of applications and data to cloud platforms.' },
          { title: 'Infrastructure as Code', description: 'Automated infrastructure provisioning and management.' },
          { title: 'Cloud Database Solutions', description: 'Managed database services and data platform optimization.' },
          { title: 'Cloud Security', description: 'Comprehensive security architecture and compliance management.' },
          { title: 'Cost Optimization', description: 'Monitoring and optimization of cloud spending and resources.' },
          { title: 'Multi-Cloud Strategy', description: 'Strategic planning and implementation across multiple cloud providers.' },
        ],
      },
      benefits: {
        heading: 'Why Move to the Cloud?',
        items: [
          { title: 'Scalability', description: 'Easily scale resources up or down based on demand' },
          { title: 'Cost Efficiency', description: 'Pay only for what you use with flexible pricing models' },
          { title: 'Security', description: 'Enterprise-grade security with continuous monitoring' },
          { title: 'Innovation', description: 'Access to latest technologies and services' },
        ],
      },
      cta: {
        heading: 'Ready for Cloud Transformation?',
        body: 'Partner with experienced cloud specialists to build scalable, secure, and innovative cloud solutions.',
        ctaPrimary: 'Schedule Cloud Assessment',
        ctaSecondary: 'View All Services',
      },
    },
    networkSetup: {
      hero: {
        title: 'Network Setup & Configuration',
        subtitle:
          'Professional network installation and support for Seattle, Bellevue, Issaquah, and Snoqualmie. Fast, reliable network setup for homes and businesses with same-day service available.',
        cta: 'Schedule Network Setup',
      },
      services: {
        heading: 'Network Services We Offer',
        subheading: 'Complete network solutions tailored to your business needs.',
        items: [
          { title: 'WiFi Installation & Optimization', description: 'Professional WiFi setup with optimal coverage, security configuration, and performance tuning for homes and offices.' },
          { title: 'Router & Switch Configuration', description: 'Expert configuration of routers, switches, and network equipment including Meraki, Ubiquiti, and enterprise solutions.' },
          { title: 'VPN Setup & Security', description: 'Secure VPN configuration for remote work, site-to-site connections, and secure access to company resources.' },
          { title: 'Business Network Design', description: 'Complete network infrastructure design for small businesses and growing companies in the Seattle area.' },
          { title: 'Network Troubleshooting', description: 'Fast diagnosis and resolution of network issues, slow connections, and connectivity problems.' },
          { title: 'Network Monitoring Setup', description: 'PRTG, Meraki dashboard, and SNMP monitoring configuration to keep your network healthy.' },
        ],
      },
      commonIssues: {
        heading: 'Common Network Problems We Solve',
        items: [
          { title: 'Slow WiFi or Dead Zones', description: "We'll analyze your space and install access points or mesh systems for perfect coverage throughout your home or office." },
          { title: 'Unreliable Internet Connection', description: 'Diagnose and fix connectivity issues, optimize router settings, and ensure stable internet for remote work.' },
          { title: 'Network Security Concerns', description: 'Implement proper security: WPA3 encryption, firewall configuration, guest networks, and VPN access.' },
          { title: "Can't Connect Devices", description: 'Troubleshoot device connectivity, configure network settings, and ensure all your devices work seamlessly.' },
        ],
      },
      serviceArea: {
        heading: 'Serving Greater Seattle',
        intro: 'On-site network installation and support in:',
        remoteNote: 'Remote support also available for network configuration and troubleshooting',
        cta: 'Get Network Help Today',
      },
      whyChoose: {
        heading: 'Why Choose w1IT for Network Setup',
        items: [
          { title: 'Fast Response', description: "Same-day or next-day service available. We understand network issues can't wait." },
          { title: 'Expert Configuration', description: 'Years of experience with Meraki, PRTG, enterprise routers, and home networking solutions.' },
          { title: 'Clear Communication', description: "No tech jargon. We explain what we're doing and why, in plain English (or Chinese)." },
        ],
      },
      architectureOptimization: {
        heading: 'Network Architecture Optimization — Spend Less, Run Faster',
        body: 'Most business networks grow by accretion: gear gets added, licenses renew on autopilot, and nobody removes what is no longer needed. We audit what you actually run, redesign the architecture around what your business needs today, and cut the recurring costs that come with the excess.',
        costAudit: { title: 'Cost Audit', body: 'Inventory of hardware, licensing, circuits, and cloud spend — with every over-provisioned or duplicated item flagged and priced.' },
        rightSized: { title: 'Right-Sized Redesign', body: 'A simplified target architecture: fewer devices, consolidated vendors, and capacity matched to real usage — typically 20-40% lower recurring cost.' },
        migrationPlan: { title: 'Migration Plan', body: 'A phased, low-risk path from current to target state, scheduled around your business hours — no big-bang cutovers.' },
      },
      cta: {
        heading: 'Ready for Better Network Performance?',
        body: 'Contact us today for fast, professional network setup in the Seattle area.',
        ctaPrimary: 'Schedule Service',
        ctaSecondary: 'View All Services',
      },
    },
    remoteSupport: {
      hero: {
        title: 'Remote IT Support',
        subtitle:
          'Fast, secure remote troubleshooting from Seattle. Available worldwide. Same-day support available with secure connections and bilingual service (English/Chinese).',
        cta: 'Get Help Now',
      },
      howItWorks: {
        heading: 'How Remote Support Works',
        steps: [
          { step: '1', title: 'Contact Us', description: 'Email or call to describe your issue' },
          { step: '2', title: 'Schedule Session', description: "We'll find a time that works for you" },
          { step: '3', title: 'Secure Connection', description: 'We connect remotely via secure tools' },
          { step: '4', title: 'Problem Solved', description: 'We fix the issue while you watch' },
        ],
      },
      services: {
        heading: 'Remote Support Services',
        items: [
          { title: 'Remote Desktop Support', description: 'Secure remote access to diagnose and fix issues on your computer in real-time.' },
          { title: 'Software Troubleshooting', description: 'Fix application errors, installation problems, and software configuration issues.' },
          { title: 'System Performance', description: 'Optimize slow computers, clean up systems, and improve overall performance.' },
          { title: 'Security Updates', description: 'Ensure systems are updated, secure, and protected from vulnerabilities.' },
          { title: 'Email & Cloud Setup', description: 'Configure email clients, cloud storage, and productivity tools.' },
          { title: 'User Training', description: 'Remote training sessions on software, tools, and best practices.' },
        ],
      },
      benefits: {
        heading: 'Why Choose Remote Support',
        items: [
          { title: 'Faster Response', description: 'No need to wait for an on-site visit. We can start helping you within hours, not days.' },
          { title: 'More Affordable', description: 'No travel time or trip charges. You only pay for the time spent solving your problem.' },
          { title: 'Available Anywhere', description: "Whether you're in Seattle or working remotely from anywhere in the world." },
        ],
        perfectForRemoteWorkers: {
          title: 'Perfect for Remote Workers',
          body: 'Working from home in the Seattle area or anywhere else? We specialize in supporting remote workers with home office setup, VPN configuration, video conferencing troubleshooting, and productivity tool support. Get back to work faster with expert remote assistance.',
        },
      },
      security: {
        title: 'Secure & Private',
        body: 'Your security is our priority. We use industry-standard remote support tools with end-to-end encryption. You control the session and can see everything we do. We never access your system without your explicit permission.',
        features: [
          'Encrypted remote connections',
          'You approve every action',
          'Session recordings available on request',
          'No persistent access to your systems',
        ],
      },
      cta: {
        heading: 'Need IT Help Right Now?',
        body: 'Contact us for fast, secure remote support. Available for Seattle locals and worldwide clients.',
        ctaPrimary: 'Request Remote Support',
        ctaSecondary: 'View All Services',
      },
    },
    security: {
      hero: {
        title: 'Enterprise Security Solutions',
        subtitle: 'Protect your business with comprehensive cybersecurity solutions, threat detection, and compliance management.',
        cta: 'Security Assessment',
      },
      compliance: {
        heading: 'Compliance & Standards',
        items: [
          { name: 'SOC 2', description: 'Service organization controls' },
          { name: 'ISO 27001', description: 'Information security management' },
          { name: 'HIPAA', description: 'Healthcare data protection' },
          { name: 'GDPR', description: 'Data privacy regulation' },
          { name: 'PCI DSS', description: 'Payment card security' },
          { name: 'NIST', description: 'Cybersecurity framework' },
        ],
      },
      services: {
        heading: 'Comprehensive Security Services',
        subheading: 'End-to-end cybersecurity solutions to protect your business from evolving threats.',
        items: [
          { title: 'Security Assessment', description: 'Comprehensive evaluation of your security posture and vulnerabilities.' },
          { title: 'Penetration Testing', description: 'Simulated attacks to identify security weaknesses in your systems.' },
          { title: '24/7 Monitoring', description: 'Continuous security monitoring and threat detection services.' },
          { title: 'Incident Response', description: 'Rapid response and recovery from security incidents and breaches.' },
          { title: 'Data Protection', description: 'Encryption, access controls, and data loss prevention solutions.' },
          { title: 'Network Security', description: 'Firewall management, intrusion detection, and network segmentation.' },
        ],
      },
      threats: {
        heading: 'Protecting Against Evolving Threats',
        subheading: 'Modern cybersecurity challenges require comprehensive defense strategies.',
        items: [
          { title: 'Ransomware', description: 'Protection against encryption-based attacks and data extortion' },
          { title: 'Phishing', description: 'Defense against social engineering and credential theft' },
          { title: 'Zero-Day', description: 'Detection and mitigation of unknown vulnerabilities' },
          { title: 'Insider Threats', description: 'Monitoring and prevention of internal security risks' },
        ],
      },
      networkAssessment: {
        heading: 'Network Security Assessment',
        body: 'A fixed-scope, practical review of how exposed your business actually is — delivered as a prioritized remediation plan your team (or ours) can execute, not a 60-page scare report.',
        items: [
          { title: 'Perimeter & Firewall', body: 'Rule review, exposed services, VPN configuration, and remote-access hygiene.' },
          { title: 'Access & Identity', body: 'MFA coverage, stale accounts, privilege sprawl, and password policy reality-check.' },
          { title: 'Patch & Endpoint', body: 'OS and firmware patch levels, endpoint protection status, and unmanaged devices.' },
          { title: 'Backup & Recovery', body: 'Backup coverage, restore testing, and ransomware resilience — verified, not assumed.' },
        ],
        footer: 'Findings ranked by real-world risk, each with effort estimate and cost impact — so you fix what matters first.',
      },
      cta: {
        heading: 'Ready to Secure Your Business?',
        body: 'Partner with cybersecurity experts to build robust defenses against evolving threats.',
        ctaPrimary: 'Schedule Security Audit',
        ctaSecondary: 'View All Services',
      },
    },
    technicalWriting: {
      hero: {
        title: 'Bilingual Technical Writing',
        subtitle: 'Professional technical documentation in English and Chinese. Bridge the communication gap for international teams and global businesses.',
        cta: 'Request a Quote',
      },
      whyMatters: {
        heading: 'Why Bilingual Documentation Matters',
        paragraph1:
          "In today's global economy, businesses increasingly operate across English and Chinese-speaking markets. Effective technical communication isn't just about translation—it requires deep understanding of both technical concepts and cultural context.",
        paragraph2:
          "Whether you're a Seattle-based company expanding to Asian markets, or an international team needing documentation in both languages, professional bilingual technical writing ensures clarity, accuracy, and consistency across all your technical communications.",
      },
      services: {
        heading: 'Documentation Services',
        subheading: 'Comprehensive technical writing services tailored to your needs.',
        items: [
          { title: 'IT Documentation', description: 'System architecture docs, runbooks, SOPs, and infrastructure documentation in English and Chinese.' },
          { title: 'User Guides & Manuals', description: 'Clear, user-friendly documentation for software applications and technical products.' },
          { title: 'API Documentation', description: 'Comprehensive API references, integration guides, and developer documentation.' },
          { title: 'Release Notes', description: 'Professional release notes and changelog documentation for software updates.' },
          { title: 'Training Materials', description: 'Technical training guides and educational content for teams and end users.' },
          { title: 'Cross-Cultural Communication', description: 'Bridge technical and business communication for international teams working across English and Chinese-speaking markets.' },
        ],
      },
      benefits: {
        heading: 'What Sets Us Apart',
        items: [
          { title: 'True Bilingual Expertise', description: 'Native-level proficiency in both English and Chinese, not just translation.' },
          { title: 'IT Industry Experience', description: 'Deep understanding of technical concepts, infrastructure, and software development.' },
          { title: 'Clear & Structured', description: 'Documentation that follows industry best practices and is easy to maintain.' },
          { title: 'Cultural Nuance', description: 'Understanding of business culture in both Western and Chinese markets.' },
        ],
      },
      useCases: {
        heading: 'Common Use Cases',
        items: [
          { title: 'For Seattle Businesses Going Global', description: "You're expanding to China or working with Chinese partners. You need product documentation, user guides, or technical specs that work for both English and Chinese-speaking audiences." },
          { title: 'For International Teams', description: 'Your development team spans multiple countries. You need consistent technical documentation that serves both your US-based engineers and your Chinese development center.' },
          { title: 'For Software Companies', description: "You're selling software in both markets and need API docs, SDKs, and integration guides that work seamlessly in English and Chinese." },
          { title: 'For Enterprise IT Teams', description: 'Your company has offices in Seattle and Asia. You need IT documentation, procedures, and training materials that work across all locations.' },
        ],
      },
      cta: {
        heading: 'Ready to Improve Your Global Communication?',
        body: "Let's discuss how bilingual technical documentation can support your business goals.",
        cta: 'Get Started',
      },
    },
    itAutomation: {
      hero: {
        title: 'IT Automation Services',
        subtitle: 'Streamline your operations with automated workflows and intelligent systems that work for you 24/7.',
        cta: 'Get Started',
      },
      intro: {
        heading: 'Automation That Works for You',
        paragraph1:
          "In today's fast-paced business environment, manual processes slow you down and increase the risk of errors. Our IT automation solutions help small businesses reduce manual overhead, increase efficiency, and scale operations without adding headcount.",
        paragraph2:
          'From workflow automation to infrastructure management, we implement predictable, repeatable automation that lets you focus on growing your business instead of managing routine tasks.',
      },
      services: {
        heading: 'Our Automation Services',
        subheading: 'Comprehensive automation solutions tailored to your business needs.',
        benefitsLabel: 'Key Benefits:',
        items: [
          {
            title: 'Workflow Automation',
            description: 'Automate repetitive tasks and streamline your business processes for maximum efficiency.',
            benefits: ['Automated data entry and processing', 'Document generation and management', 'Email and communication automation', 'Task scheduling and reminders'],
          },
          {
            title: 'IT Infrastructure Automation',
            description: 'Automated monitoring, maintenance, and updates to keep your systems running smoothly.',
            benefits: ['Automated patch management', 'System monitoring and alerts', 'Backup automation', 'Network configuration management'],
          },
          {
            title: 'Process Optimization',
            description: 'Identify bottlenecks and optimize workflows with intelligent automation solutions.',
            benefits: ['Business process analysis', 'Workflow optimization', 'Performance monitoring', 'Continuous improvement automation'],
          },
          {
            title: 'Security Automation',
            description: 'Automated security monitoring and response to protect your business 24/7.',
            benefits: ['Automated threat detection', 'Security patch deployment', 'Compliance monitoring', 'Incident response automation'],
          },
        ],
      },
      benefits: {
        heading: 'Why Automate with W1IT?',
        subheading: 'The benefits of intelligent automation for your small business.',
        items: [
          'Reduce manual overhead and human error',
          'Increase productivity and efficiency',
          'Save time and reduce operational costs',
          'Scale operations without adding headcount',
          'Improve accuracy and consistency',
          'Free your team to focus on strategic work',
        ],
      },
      process: {
        heading: 'Our Automation Process',
        steps: [
          { number: '1', title: 'Assessment', description: 'We analyze your current workflows to identify automation opportunities and bottlenecks.' },
          { number: '2', title: 'Strategy', description: 'We design a custom automation strategy aligned with your business goals and priorities.' },
          { number: '3', title: 'Implementation', description: 'We build and deploy automation solutions with minimal disruption to your operations.' },
          { number: '4', title: 'Optimization', description: 'We monitor, refine, and continuously improve your automation for maximum efficiency.' },
        ],
      },
      cta: {
        heading: 'Ready to Automate Your Business?',
        body: "Let's discuss how automation can transform your operations and free your team to focus on what matters most.",
        ctaPrimary: 'Schedule a Consultation',
        ctaSecondary: 'View All Services',
      },
    },
    websiteDevelopment: {
      hero: {
        title: 'Website Development & Optimization',
        subtitle: 'Build fast, beautiful, and conversion-focused websites that drive business growth',
        cta: 'Start Your Project',
      },
      features: {
        heading: 'What We Offer',
        subheading: 'Comprehensive web development services tailored to your business needs',
        items: [
          { title: 'Custom Development', description: 'Tailored websites built with modern frameworks like Next.js, React, and TypeScript for optimal performance.' },
          { title: 'Responsive Design', description: 'Mobile-first approach ensuring your website looks perfect on all devices and screen sizes.' },
          { title: 'Performance Optimization', description: 'Lightning-fast load times with optimized images, code splitting, and edge caching.' },
          { title: 'SEO Optimization', description: 'Built-in SEO best practices with metadata, sitemaps, and structured data for better rankings.' },
          { title: 'E-Commerce Solutions', description: 'Robust online stores with secure payment processing and inventory management.' },
          { title: 'Analytics & Insights', description: 'Integrated analytics to track performance, user behavior, and conversion metrics.' },
        ],
      },
      technologies: {
        heading: 'Modern Technology Stack',
        subheading: 'We use industry-leading technologies to build robust, scalable websites',
      },
      cta: {
        heading: 'Ready to Build Your Website?',
        body: "Let's discuss your project and create a website that exceeds expectations",
        cta: 'Schedule a Consultation',
      },
    },
  },
  itConsulting: {
    hero: {
      title: 'IT Consulting Services',
      subtitleBeforeLink: 'Smart IT Consulting — Clear Strategies for Secure, Scalable Growth. Need hands-on support? Explore our ',
      linkText: 'managed IT services',
      subtitleAfterLink: '.',
      cta: 'Schedule a Consultation',
    },
    intro:
      'Beyond hands-on IT management, I provide consulting services that help businesses make informed, strategic technology decisions. My consulting approach blends technical expertise with clear communication, ensuring that every recommendation is practical, scalable, and aligned with business goals.',
    offer: {
      heading: 'What I Offer',
      subheading: 'Strategic consulting services designed to help your business make smarter technology decisions.',
      items: [
        { title: 'Technology Strategy & Roadmapping', description: 'Helping organizations plan IT investments, align infrastructure with business objectives, and prepare for future growth.' },
        { title: 'System & Network Architecture Consulting', description: 'Advising on secure, efficient designs for networks, servers, and cloud environments, tailored to your operational needs.' },
        { title: 'Process Optimization', description: 'Identifying inefficiencies in IT workflows and recommending automation or restructuring to improve productivity.' },
        { title: 'Security & Compliance Guidance', description: 'Consulting on SSL/DNS configurations, MFA integration, and best practices to keep systems secure and compliant.' },
        { title: 'Cross-Cultural Communication in IT', description: 'Supporting international teams with bilingual (English/Chinese) documentation and messaging to bridge technical and business communication gaps.' },
      ],
    },
    benefits: {
      heading: 'How Clients Benefit',
      items: [
        { title: 'Clarity in Decision-Making', description: 'Complex IT challenges explained in simple, actionable terms.' },
        { title: 'Cost Efficiency', description: 'Strategic recommendations that reduce unnecessary spending and maximize ROI.' },
        { title: 'Scalability', description: 'Solutions designed to grow with your business.' },
        { title: 'Local & Remote Support', description: 'Available for consulting sessions both remotely worldwide and locally in the Greater Seattle area.' },
      ],
    },
    cta: {
      heading: 'Ready to Make Smarter IT Decisions?',
      body: "Let's discuss how strategic IT consulting can help your business grow securely and efficiently.",
      cta: 'Get Started Today',
    },
  },
  itServices: {
    hero: {
      title: 'Managed IT Services',
      subtitleBeforeLink: 'Comprehensive IT service management tailored to businesses that need reliable, scalable, and secure solutions. Available remotely worldwide and locally in the Greater Seattle area. Looking for strategic guidance? See our ',
      linkText: 'IT consulting services',
      subtitleAfterLink: '.',
      cta: 'Get in Touch',
    },
    about: {
      heading: 'About Me',
      paragraph:
        'I am an experienced IT consultant and strategist with a proven track record in managing complex systems and delivering clear, actionable solutions. My background spans system administration, network monitoring, and technical documentation, combined with strong skills in bilingual communication (English/Chinese) for international business contexts. I bring both technical rigor and creative problem-solving to every project.',
    },
    experience: {
      heading: 'My IT Experience',
      subheading: 'Years of hands-on experience across diverse IT environments, from infrastructure management to international team collaboration.',
      items: [
        { title: 'System Administration & Troubleshooting', description: 'Skilled in managing platforms such as Matrix42, Empirum, JIRA, Confluence, Meraki, and PRTG. I specialize in diagnosing and resolving SSL certificate chain issues, DNS/Cloudflare configurations, and MFA service integrations.' },
        { title: 'Network Monitoring & Automation', description: 'Advanced workflow design for PRTG, Meraki, and SNMP, including PowerShell automation to streamline device management and monitoring.' },
        { title: 'Documentation & Communication', description: 'Expert in creating clear, modular documentation for stakeholders, ensuring visibility and alignment across IT projects. I refine technical messaging for cross-cultural audiences, bridging communication between technical teams and business leaders.' },
        { title: 'Project Management & Optimization', description: 'Proactive in aligning IT processes with business goals, optimizing workflows, and ensuring smooth stakeholder collaboration.' },
      ],
    },
    servicesOffered: {
      heading: 'IT Services I Offer',
      subheading: 'I provide comprehensive IT service management tailored to businesses that need reliable, scalable, and secure solutions.',
      items: [
        'End-to-end IT infrastructure management',
        'Network monitoring and workflow automation',
        'SSL/DNS troubleshooting and secure configuration',
        'Technical documentation and stakeholder communication',
        'Cross-cultural IT messaging for international teams',
      ],
      note: 'Services are available remotely worldwide and locally in the Greater Seattle area, offering flexibility for both on-site and virtual support.',
    },
    whyWorkWithMe: {
      heading: 'Why Work With Me',
      items: [
        { title: 'Clarity & Professionalism', description: 'I translate complex IT issues into clear, actionable steps.' },
        { title: 'Reliability', description: 'I ensure systems run securely and efficiently, minimizing downtime.' },
        { title: 'Global Perspective', description: 'My bilingual expertise supports international collaboration.' },
        { title: 'Customization', description: 'I adapt solutions to fit your business needs, whether small-scale or enterprise-level.' },
        { title: 'Local Presence', description: "Based in the Seattle area, I'm available for in-person consultations and hands-on support." },
      ],
    },
    cta: {
      heading: 'Ready to Optimize Your IT Infrastructure?',
      body: "Let's discuss how I can help streamline your IT operations and support your business goals.",
      cta: 'Contact Me Today',
    },
  },
};

export const zhTW: Dictionary = {
  common: {
    langToggleLabel: 'EN',
    getStarted: '立即開始',
  },
  nav: {
    services: '服務項目',
    solutions: '解決方案',
    apps: '應用程式',
    industries: '產業別',
    resources: '資源中心',
    about: '關於我們',
    servicesDropdown: {
      managedServices: '委外資訊管理服務',
      cloudSolutions: '雲端解決方案',
      networkSetup: '網路建置',
      remoteSupport: '遠端支援',
      security: '資訊安全',
      technicalWriting: '技術文件撰寫',
      itServices: 'IT 服務總覽',
      itConsulting: 'IT 顧問諮詢',
    },
    solutionsDropdown: {
      dataAnalytics: '數據分析',
      digitalTransformation: '數位轉型',
      cybersecurityStrategy: '資安策略規劃',
      customItSolutions: '客製化 IT 解決方案',
    },
    appsDropdown: {
      contactSyncMate: 'Contact SyncMate',
      deepTicker: 'DeepTicker',
      pixelColorPicker: 'Pixel Color Picker',
      screenGrabber: 'ScreenGrabber',
    },
    resourcesDropdown: {
      caseStudies: '成功案例',
      blog: '部落格',
      knowledgeBase: '知識庫',
      itChecklists: 'IT 檢核清單',
      freeTools: '免費工具',
      testimonials: '客戶推薦',
      support: '技術支援',
    },
  },
  footer: {
    tagline: '為西雅圖及周邊地區中小企業提供專業 IT 解決方案。',
    servicesHeading: '服務項目',
    solutionsHeading: '解決方案',
    companyHeading: '公司資訊',
    legalHeading: '法律聲明',
    connectHeading: '聯繫我們',
    rightsReserved: 'W1IT Solutions. 版權所有，翻印必究。',
    services: {
      managedServices: '委外資訊管理服務',
      cloudSolutions: '雲端解決方案',
      networkSetup: '網路建置',
      remoteSupport: '遠端支援',
      security: '資訊安全',
      technicalWriting: '技術文件撰寫',
      itSupport: 'IT 技術支援',
      emergencyItHelp: '緊急 IT 支援',
    },
    solutions: {
      dataAnalytics: '數據分析',
      digitalTransformation: '數位轉型',
      cybersecurityStrategy: '資安策略規劃',
      customItSolutions: '客製化 IT 解決方案',
      websiteOptimization: '網站優化',
      knowledgeBase: '知識庫',
      itChecklists: 'IT 檢核清單',
      freeTools: '免費工具',
    },
    company: {
      about: '關於我們',
      industries: '產業別',
      blog: '部落格',
      caseStudies: '成功案例',
      testimonials: '客戶推薦',
      documentation: '技術文件',
      bellevueItSupport: 'Bellevue IT 支援',
      apps: '應用程式',
      talkToSales: '聯繫業務團隊',
      contact: '聯絡我們',
    },
    legal: {
      privacy: '隱私權政策',
      terms: '服務條款',
      cookies: 'Cookie 政策',
      sla: '服務水準協議 (SLA)',
    },
  },
  home: {
    hero: {
      title: '企業級 IT 服務，量身打造適合您公司的規模',
      subtitle:
        '我們為您設計、建置並保護能降低營運成本的網路架構。從優化網路架構、降低固定支出，到完整網路建置與資安評估——讓您的企業運作更快速、更安全，專注於成長。',
      cta: '免費申請網路健檢',
    },
    services: {
      heading: '我們的服務',
      subheading: '專為中小企業打造的完整 IT 解決方案',
      items: [
        {
          title: '網路架構優化，降低成本',
          description:
            '我們會全面檢視您現有的網路架構，找出過度配置的硬體與授權並重新設計——多數客戶的固定 IT 支出因此降低 20% 至 40%。',
        },
        {
          title: '網路搭建與建置',
          description:
            '為辦公室、倉儲及多據點企業提供完整網路建置服務：結構化佈線規劃、Wi-Fi 涵蓋範圍、VPN 設定，以及不受單一廠商綁定的硬體選型。',
        },
        {
          title: '網路資安評估',
          description:
            '針對防火牆規則、存取控管與修補狀況進行實務性、依風險排序的完整檢視，提供具體改善計畫，而非嚇唬人的報告。',
        },
        {
          title: '委外資訊管理服務',
          description:
            '主動式監控、系統修補與客服支援，並提供可預測的月費方案——問題在影響您團隊運作之前就已解決。',
        },
        {
          title: '雲端遷移服務',
          description:
            '以結構化流程將系統遷移至雲端基礎架構，將停機時間降到最低——若維持本地部署更省錢、更合適，我們也會誠實建議。',
        },
        {
          title: 'IT 流程自動化',
          description:
            '以穩定可靠的自動化流程取代重複性人工作業：員工到職流程、備份、監控與報表，全部自動執行。',
        },
      ],
    },
    pillars: {
      heading: '我們的核心理念',
      subheading: '三大核心價值，貫穿我們所做的每一件事',
      items: [
        {
          title: '清晰透明',
          description:
            '以淺顯易懂的建議與完整文件化的系統，讓您隨時清楚掌握自己運行的系統與實際支出。',
        },
        {
          title: '穩定可靠',
          description:
            '打造具容錯能力、追求高可用性的網路架構，搭配經過測試的備份機制與真正可執行的復原計畫。',
        },
        {
          title: 'IT 優化與策略規劃',
          description:
            '透過架構檢視為您的基礎設施量身調整規模——減少不必要的硬體、授權與重工支出。',
        },
      ],
    },
    featureHighlights: {
      heading: '我們的與眾不同之處',
      subheading: '我們將技術實力與清晰的營運管理結合在一起。',
      items: [
        {
          title: '打造正確的現代化基礎架構',
          description: '高可用性、零信任資安架構，以及可擴展的自動化流程。',
        },
        {
          title: '真正為您服務的自動化',
          description: '以可預測、可重複執行的流程，降低人工作業負擔。',
        },
        {
          title: '井然有序的遷移流程，不再混亂',
          description: '結構化、按步驟推進的現代化轉型，無需臆測。',
        },
      ],
    },
    industriesTeaser: {
      heading: '服務各行各業的中小企業',
      subheading:
        '從製造業到專業服務業，我們深知每個產業的中小企業所面臨的獨特挑戰。',
      items: [
        { name: '製造業' },
        { name: '中小企業' },
        { name: '新創公司' },
        { name: '專業服務業' },
      ],
      cta: '探索所有產業',
    },
    testimonials: {
      heading: '產業專業經驗',
      subheading: '深受各行各業企業信賴',
      items: [
        {
          quote:
            'W1IT 將我們過時的網站轉變為現代化、專業的平台，真正展現出我們公司的傳承與價值。',
          author: 'Kam Ling Trading 團隊',
          company: 'Kam Ling International Trading Co.',
        },
      ],
    },
    ctaBanner: {
      heading: '準備好開始了嗎？',
      subheading: '讓我們一起打造屬於您的成功案例',
      body: '與我們聊聊您的目標與挑戰，看看 W1IT 如何協助您打造更穩健、更聰明的成長基礎。',
      ctaPrimary: '預約免費諮詢',
      ctaSecondary: '查看所有服務',
    },
  },
  breadcrumbSegments: {
    about: '關於我們',
    apps: '應用程式',
    'contact-syncmate': 'Contact SyncMate',
    deepticker: 'DeepTicker',
    'pixel-color-picker': 'Pixel Color Picker',
    screengrabber: 'ScreenGrabber',
    blog: '部落格',
    'case-studies': '成功案例',
    'bilingual-documentation-global-trade': '國際貿易雙語文件案例',
    'choosing-it-support-model': '選擇合適的 IT 支援模式',
    'ferry-company-backup-modernization': '渡輪公司備份現代化案例',
    'fragmented-it-standardized-infrastructure': '整合分散式 IT 基礎架構',
    'missing-it-checklist-outage-recovery': 'IT 檢核清單與斷線復原',
    'network-security-remote-teams': '遠端團隊網路資安',
    'top-it-mistakes-small-businesses': '中小企業常見 IT 錯誤',
    'vmware-to-hyperv-migration': 'VMware 遷移至 Hyper-V',
    'why-businesses-need-it-documentation': '企業為何需要 IT 文件化',
    'wifi-setup-guide-seattle': '西雅圖 WiFi 建置指南',
    checklists: 'IT 檢核清單',
    contact: '聯絡我們',
    cookies: 'Cookie 政策',
    documentation: '技術文件',
    emergency: '緊急 IT 支援',
    industries: '產業別',
    'it-consulting': 'IT 顧問諮詢',
    'it-services': 'IT 服務總覽',
    'knowledge-base': '知識庫',
    locations: '服務據點',
    bellevue: 'Bellevue',
    privacy: '隱私權政策',
    sales: '業務團隊',
    services: '服務項目',
    'cloud-solutions': '雲端解決方案',
    'it-automation': 'IT 流程自動化',
    'managed-services': '委外資訊管理服務',
    'network-setup': '網路建置',
    'remote-support': '遠端支援',
    security: '資訊安全',
    'technical-writing': '技術文件撰寫',
    'website-development': '網站開發',
    sla: '服務水準協議 (SLA)',
    solutions: '解決方案',
    'custom-it-solutions': '客製化 IT 解決方案',
    'cybersecurity-strategy': '資安策略規劃',
    'data-analytics': '數據分析',
    'digital-transformation': '數位轉型',
    'website-optimization': '網站優化',
    support: '技術支援',
    terms: '服務條款',
    testimonials: '客戶推薦',
    tools: '免費工具',
  },
  about: {
    hero: {
      title: '關於 W1IT Solutions',
      subtitle: '專為中小企業打造的企業級 IT 支援服務——沒有複雜流程，沒有沉重負擔。',
    },
    values: {
      heading: '我們的核心價值',
      subheading: '引導我們一切作為的核心原則。',
      items: [
        { name: '清晰透明', description: '清楚的溝通、透明的收費，以及直截了當的解決方案。' },
        { name: '穩定可靠', description: '可靠的 IT 基礎架構，讓您的業務持續順暢運作。' },
        { name: '真誠夥伴', description: '我們像對待自己的事業一樣對待您的公司——量身打造，而非一體適用。' },
        { name: '安心自信', description: '以真正助力成長的科技，賦能您的團隊，而非帶來挫折。' },
      ],
    },
    mission: {
      heading: '我們的使命',
      paragraph1:
        'W1IT 為中小企業提供企業級 IT 支援服務——同時去除不必要的複雜流程。我們解決日常技術問題並預防未來的中斷，讓您能專注於成長，而非疲於排除故障。',
      paragraph2:
        'W1IT 由擁有超過十年資歷的資深 IT 專業人士 Victor 創立，源於對過度昂貴、過度複雜 IT 支援服務的不滿。我們將中小企業視為珍貴的合作夥伴，而非一張張的服務單號。',
    },
    whyChoose: {
      heading: '為什麼選擇 W1IT？',
      items: [
        '專為中小企業需求量身打造的專業支援',
        '主動式監控——在問題發生前就先發現並處理',
        '快速、反應迅速的客服支援團隊',
        '透明收費，方案彈性符合您的預算',
        '策略性 IT 顧問服務，協助您更聰明地成長',
        '企業級資安防護，操作簡單不複雜',
      ],
    },
    cta: {
      heading: '準備好開始了嗎？',
      body: '讓我們一起為您的企業打造更穩固的 IT 基礎。',
      ctaPrimary: '預約諮詢',
      ctaSecondary: '探索我們的服務',
    },
  },
  servicesHub: {
    hero: {
      title: '我們的服務',
      subtitle: '為中小企業成功打造的企業級 IT 解決方案。',
    },
    keyFeaturesLabel: '主要特色：',
    requestQuote: '索取報價',
    categories: [
      {
        title: '委外資訊管理服務',
        description: '主動式 IT 支援，讓您的系統穩定運作、團隊保持高效生產力。',
        features: [
          '24/7 全天候監控與維護',
          '客服支援與終端使用者協助',
          '網路與伺服器管理',
          '資安防護與修補程式管理',
          '備份與災難復原',
        ],
      },
      {
        title: 'IT 顧問諮詢與策略規劃',
        description: '專業指導，讓科技與企業目標一致，帶來可衡量的成長。',
        features: [
          'IT 發展藍圖與策略規劃',
          '雲端策略與遷移規劃',
          '資安風險評估',
          'IT 預算優化',
          '數位轉型顧問諮詢',
        ],
      },
      {
        title: '網站開發與優化',
        description: '打造高效能網站，帶來實際成效與卓越使用者體驗。',
        features: [
          '客製化網站設計與開發',
          '電商解決方案',
          '效能優化',
          '搜尋引擎優化（SEO）',
          '分析追蹤與轉換率優化',
        ],
      },
      {
        title: '數據與分析',
        description: '將您的數據轉化為可行的洞察，助您做出更明智的商業決策。',
        features: [
          '商業智慧儀表板',
          '數據倉儲與 ETL 流程',
          '預測性分析',
          '數據治理',
          '報表與視覺化呈現',
        ],
      },
      {
        title: '隨需 IT 支援',
        description: '需要時才付費的彈性支援服務——無需長期合約。',
        features: [
          '按時計費、隨需使用的支援服務',
          '遠端與現場協助',
          '故障排除與問題解決',
          '軟體安裝',
          '硬體維修與升級',
        ],
      },
    ],
    cta: {
      heading: '準備好開始了嗎？',
      body: '我們以可靠的企業級 IT 解決方案，協助中小企業邁向成功。',
      cta: '立即聯繫',
    },
  },
  solutionsHub: {
    hero: {
      title: '助中小企業成功的 IT 解決方案',
      subtitle: '完整的科技解決方案，助您的企業蓬勃發展。',
    },
    keyOutcomesLabel: '主要成效：',
    learnMore: '了解更多',
    items: [
      {
        title: '委外 IT 管理解決方案',
        description: '主動式 IT 管理，讓您的企業 24/7 全天候順暢運作。',
        outcomes: [
          '主動式監控與維護',
          '24/7 全天候客服支援',
          '降低停機時間與 IT 成本',
          '可預測的每月預算規劃',
        ],
      },
      {
        title: '硬體與軟體整合',
        description: '新硬體與軟體的無縫整合，不影響營運。',
        outcomes: [
          '將營運中斷降到最低',
          '提升系統相容性',
          '提高工作效率',
          '專業設定與配置',
        ],
      },
      {
        title: '遷移與部署',
        description: '專業遷移服務，零停機時間、確保數據完整性。',
        outcomes: [
          '零停機時間遷移',
          '雲端與地端部署',
          '確保數據完整性',
          '完整測試與驗證',
        ],
      },
      {
        title: '資安與防護',
        description: '以全方位的資安防護，保護您的企業免於網路威脅。',
        outcomes: [
          '多層次防護機制',
          '定期資安評估',
          '病毒與惡意軟體防護',
          '合規與風險管理',
        ],
      },
      {
        title: '業務持續性規劃',
        description: '強健的備份與災難復原機制，確保企業持續運作。',
        outcomes: [
          '自動化備份解決方案',
          '快速災難復原',
          '業務持續性規劃',
          '將數據遺失風險降到最低',
        ],
      },
    ],
    cta: {
      heading: '準備好開始了嗎？',
      body: '我們以可靠的 IT 解決方案，協助中小企業邁向成功。',
      cta: '預約諮詢',
    },
  },
  industriesHub: {
    hero: {
      title: '我們服務的產業',
      subtitle: '針對您產業的獨特挑戰，量身打造 IT 解決方案。',
    },
    ourServicesLabel: '我們的服務：',
    inquireNow: '立即諮詢',
    items: [
      {
        name: '製造業',
        description: '為製造業打造高效、可擴展的 IT 解決方案。',
        services: [
          '工廠自動化與物聯網（IoT）解決方案',
          '供應鏈管理系統',
          '企業資源規劃（ERP）支援',
          '流程優化與自動化',
        ],
      },
      {
        name: '中小企業',
        description: '為中小企業提供實惠且有效的 IT 解決方案。',
        services: [
          '委外資訊管理服務',
          '雲端解決方案（Office 365、Google Workspace）',
          '數據備份與復原',
          '網站與電子郵件託管',
        ],
      },
      {
        name: '新創公司',
        description: '可擴展、靈活的 IT 解決方案，助力新創公司成長。',
        services: [
          '雲端基礎架構建置（AWS、Azure、GCP）',
          'DevOps 與 CI/CD 自動化',
          '可擴展且安全的應用程式架構',
          '具成本效益的 IT 策略與顧問諮詢',
        ],
      },
      {
        name: '專業服務業',
        description: '為專業服務公司提供可靠、高效的 IT 服務。',
        services: [
          '客戶關係管理（CRM）系統',
          '安全文件管理',
          '遠端工作與協作工具',
          '計時與計費軟體支援',
        ],
      },
    ],
    cta: {
      heading: '準備好開始了嗎？',
      body: '讓我們討論如何滿足您產業的特定需求。',
      cta: '聯絡我們',
    },
  },
  appsHub: {
    hero: {
      title: 'W1IT 應用程式',
      subtitle: '我們打造強大、以使用者為核心的應用程式，簡化您的工作流程並解決關鍵業務挑戰。',
    },
    learnMore: '了解更多',
    apps: [
      { title: 'Contact SyncMate', description: '跨裝置與平台的智慧聯絡人管理與同步工具。' },
      { title: 'Pixel Color Picker', description: '進階色彩偵測工具，具備調色盤生成與無障礙檢測功能。' },
      { title: 'ScreenGrabber', description: '專業螢幕截圖與錄製工具，具備標註功能。' },
      { title: 'DeepTicker', description: '即時財務數據分析與市場洞察平台。' },
    ],
    whyHeading: '我們的應用程式與眾不同之處',
    whySubheading: '我們結合技術專業與以使用者為中心的設計理念，打造既強大又易於使用的應用程式。',
    benefits: [
      { title: '以使用者為核心的設計', description: '將使用者體驗列為首要考量的直覺化介面。' },
      { title: '跨平台支援', description: '在網頁、行動裝置與桌面平台上無縫運作的應用程式。' },
      { title: '企業級資安防護', description: '銀行等級的安全防護，具備加密、身分驗證與合規標準。' },
      { title: '持續更新', description: '持續改善，不斷推出功能更新與效能優化。' },
    ],
    cta: {
      heading: '有客製化應用程式的構想嗎？',
      body: '我們專精於打造符合您獨特業務需求的客製化應用程式，讓我們一起將您的構想化為現實。',
      cta: '啟動您的專案',
    },
  },
  contact: {
    hero: {
      title: '準備好開始了嗎？',
      subtitle: '立即聯繫我們，一起打造屬於您的成功案例。',
    },
    form: {
      heading: '與我們聯繫',
      intro:
        '對我們的服務有任何疑問嗎？遇到技術難題需要協助嗎？請填寫以下表單，我們將於 24 小時內回覆您。',
      name: '姓名',
      email: '電子郵件',
      company: '公司名稱（選填）',
      message: '訊息內容',
      submit: '送出訊息',
      submitting: '傳送中...',
    },
    info: {
      heading: '聯絡資訊',
      phoneLabel: '電話',
      emailLabel: '電子郵件',
      serviceAreaLabel: '服務範圍',
      serviceAreaValue: '大西雅圖都會區，並提供全美遠端支援',
      partnerHeading: '您在地的 IT 合作夥伴',
      partnerBody:
        '我們總部位於華盛頓州 Bellevue，長期為大西雅圖都會區的中小企業提供現場與遠端技術支援，並可支援全美各地客戶。',
      serviceAreasLabel: '服務地區：',
      serviceAreasValue: 'Bellevue、Seattle、Redmond、Kirkland、Issaquah、Sammamish 及周邊社區。',
    },
  },
  servicesDetail: {
    managedServices: {
      hero: {
        title: '主動式 IT 管理服務',
        subtitle: '提供全方位 IT 管理服務，包含 24/7 全天候監控、策略顧問諮詢，以及專屬支援團隊。',
        cta: '立即開始',
      },
      overview: {
        heading: '您的專屬 IT 團隊',
        paragraph1: '委外資訊管理服務為想專注核心業務、將技術管理交給專家的企業，提供全方位解決方案。',
        paragraph2: '我們如同您團隊的延伸，提供主動式監控、策略指導與快速支援，確保科技真正驅動您的業務成功。',
        cta: '預約諮詢',
        benefitsHeading: '主要優勢',
        benefits: [
          '固定月費，無隱藏額外支出',
          '取得企業級專業技術與工具',
          '在問題影響業務前主動排除',
          '可隨業務成長彈性擴展的解決方案',
          '符合產業標準與法規要求',
          '專注核心業務，IT 交給我們管理',
        ],
      },
      services: {
        heading: '全方位委外管理服務',
        subheading: '依您的業務需求量身打造的端到端 IT 管理解決方案。',
        items: [
          { title: '主動式監控', description: '24/7 全天候監控您的 IT 基礎架構，並提供自動化警示。' },
          { title: '客服支援', description: '專屬技術支援團隊，快速排解各類問題。' },
          { title: '資安管理', description: '全方位資安服務，涵蓋修補程式管理與威脅偵測。' },
          { title: '備份與復原', description: '自動化數據備份與災難復原解決方案。' },
          { title: '網路管理', description: '優化並管理您的網路基礎架構。' },
          { title: '策略顧問諮詢', description: 'IT 策略規劃與技術發展藍圖擬定。' },
        ],
      },
      tiers: {
        heading: '彈性服務方案',
        subheading: '選擇符合您業務需求與預算的服務等級。',
        items: [
          { name: '基礎方案', description: '為中小企業提供基本監控與支援', features: ['24/7 全天候監控', '客服支援', '基礎資安防護'] },
          { name: '專業方案', description: '為成長中企業提供全方位管理', features: ['主動式維護', '進階資安防護', '策略規劃'] },
          { name: '企業方案', description: '為大型組織提供全面 IT 管理', features: ['專屬服務團隊', '合規管理', '業務持續性規劃'] },
        ],
        getStarted: '立即開始',
      },
      cta: {
        heading: '準備好簡化您的 IT 管理了嗎？',
        body: '與我們合作，打造可擴展、安全且創新的 IT 解決方案，驅動業務成長。',
        ctaPrimary: '預約免費健檢',
        ctaSecondary: '查看所有服務',
      },
    },
    cloudSolutions: {
      hero: {
        title: '企業級雲端服務',
        subtitle: '以可擴展、安全且具成本效益的雲端解決方案，全面升級您的基礎架構。',
        cta: '啟動雲端之旅',
      },
      platformsHeading: '我們支援的雲端平台',
      services: {
        heading: '全方位雲端服務',
        subheading: '端到端雲端解決方案，加速您的數位轉型。',
        items: [
          { title: '雲端遷移', description: '將應用程式與數據無縫遷移至雲端平台。' },
          { title: '基礎架構即程式碼', description: '自動化的基礎架構建置與管理。' },
          { title: '雲端數據庫解決方案', description: '委外資料庫服務與數據平台優化。' },
          { title: '雲端資安', description: '全方位資安架構與合規管理。' },
          { title: '成本優化', description: '監控並優化雲端支出與資源配置。' },
          { title: '多雲策略', description: '跨多家雲端服務供應商的策略規劃與導入。' },
        ],
      },
      benefits: {
        heading: '為什麼要導入雲端？',
        items: [
          { title: '可擴展性', description: '依需求輕鬆擴增或縮減資源' },
          { title: '成本效益', description: '彈性計費模式，用多少付多少' },
          { title: '資安防護', description: '企業級資安防護，持續監控' },
          { title: '創新技術', description: '掌握最新技術與服務' },
        ],
      },
      cta: {
        heading: '準備好進行雲端轉型了嗎？',
        body: '與經驗豐富的雲端專家合作，打造可擴展、安全且創新的雲端解決方案。',
        ctaPrimary: '預約雲端健檢',
        ctaSecondary: '查看所有服務',
      },
    },
    networkSetup: {
      hero: {
        title: '網路建置與設定',
        subtitle: '為 Seattle、Bellevue、Issaquah 及 Snoqualmie 提供專業網路安裝與支援。快速、可靠的住家與企業網路建置服務，並提供當日到府服務。',
        cta: '預約網路建置',
      },
      services: {
        heading: '我們提供的網路服務',
        subheading: '依您的業務需求量身打造的完整網路解決方案。',
        items: [
          { title: 'WiFi 安裝與優化', description: '專業 WiFi 建置服務，提供最佳訊號涵蓋範圍、資安設定與效能調校，適用於住家與辦公室。' },
          { title: '路由器與交換器設定', description: '專業設定路由器、交換器及網路設備，涵蓋 Meraki、Ubiquiti 及企業級解決方案。' },
          { title: 'VPN 建置與資安', description: '為遠端工作、據點間連線及公司資源安全存取提供 VPN 安全設定。' },
          { title: '企業網路架構設計', description: '為西雅圖地區中小企業及成長中企業提供完整網路基礎架構設計。' },
          { title: '網路故障排除', description: '快速診斷並排除網路問題、連線緩慢及連通性障礙。' },
          { title: '網路監控建置', description: 'PRTG、Meraki 儀表板及 SNMP 監控設定，確保網路穩定健全。' },
        ],
      },
      commonIssues: {
        heading: '我們協助解決的常見網路問題',
        items: [
          { title: 'WiFi 訊號慢或有死角', description: '我們會分析您的空間，安裝分點式基地台或 Mesh 系統，確保住家或辦公室全面涵蓋。' },
          { title: '網路連線不穩定', description: '診斷並排除連線問題，優化路由器設定，確保遠端工作連線穩定。' },
          { title: '網路資安疑慮', description: '導入完善資安防護：WPA3 加密、防火牆設定、訪客網路，以及 VPN 存取。' },
          { title: '裝置無法連線', description: '排除裝置連線問題、設定網路參數，確保所有裝置順暢運作。' },
        ],
      },
      serviceArea: {
        heading: '服務大西雅圖地區',
        intro: '提供現場網路安裝與支援的地區：',
        remoteNote: '亦提供遠端網路設定與故障排除支援',
        cta: '立即取得網路協助',
      },
      whyChoose: {
        heading: '為什麼選擇 w1IT 進行網路建置',
        items: [
          { title: '快速回應', description: '提供當日或隔日到府服務。我們深知網路問題不能等。' },
          { title: '專業設定', description: '在 Meraki、PRTG、企業級路由器及居家網路解決方案方面擁有多年經驗。' },
          { title: '清楚溝通', description: '不使用艱澀術語。我們會用淺顯的中英文，清楚說明我們在做什麼、為什麼這麼做。' },
        ],
      },
      architectureOptimization: {
        heading: '網路架構優化——花更少，跑更快',
        body: '多數企業網路是逐年累加而成：設備不斷增加、授權自動續約，卻沒有人移除已不再需要的項目。我們會稽核您實際運行的系統，依當前業務需求重新設計架構，並削減這些過度配置帶來的固定支出。',
        costAudit: { title: '成本稽核', body: '盤點硬體、授權、線路與雲端支出——標示並估算每一項配置過度或重複的項目。' },
        rightSized: { title: '合理規模重新設計', body: '精簡化的目標架構：更少設備、整合供應商，並讓容量符合實際使用需求——通常可降低 20% 至 40% 的固定支出。' },
        migrationPlan: { title: '遷移計畫', body: '從現況到目標架構的分階段、低風險路徑，並配合您的營業時間排程——不會有一次到位的大規模停機。' },
      },
      cta: {
        heading: '準備好提升網路效能了嗎？',
        body: '立即聯繫我們，取得西雅圖地區快速、專業的網路建置服務。',
        ctaPrimary: '預約服務',
        ctaSecondary: '查看所有服務',
      },
    },
    remoteSupport: {
      hero: {
        title: '遠端 IT 支援',
        subtitle: '來自西雅圖的快速、安全遠端故障排除服務，服務範圍遍及全球。提供當日支援、安全連線，並提供中英雙語服務。',
        cta: '立即取得協助',
      },
      howItWorks: {
        heading: '遠端支援如何運作',
        steps: [
          { step: '1', title: '聯繫我們', description: '透過電子郵件或電話說明您的問題' },
          { step: '2', title: '預約時段', description: '我們會為您安排合適的時間' },
          { step: '3', title: '建立安全連線', description: '我們透過安全工具進行遠端連線' },
          { step: '4', title: '問題解決', description: '我們在您眼前完成問題排除' },
        ],
      },
      services: {
        heading: '遠端支援服務',
        items: [
          { title: '遠端桌面支援', description: '安全的遠端存取，即時診斷並排除您電腦上的問題。' },
          { title: '軟體故障排除', description: '排除應用程式錯誤、安裝問題及軟體設定疑難雜症。' },
          { title: '系統效能優化', description: '優化運作緩慢的電腦，清理系統並整體提升效能。' },
          { title: '資安更新', description: '確保系統保持更新、安全，並防範各類漏洞威脅。' },
          { title: '電子郵件與雲端設定', description: '設定電子郵件用戶端、雲端儲存空間及生產力工具。' },
          { title: '使用者訓練', description: '提供軟體、工具及最佳實務的遠端訓練課程。' },
        ],
      },
      benefits: {
        heading: '為什麼選擇遠端支援',
        items: [
          { title: '更快速的回應', description: '無需等待現場到府服務，我們可在數小時內（而非數天）開始為您提供協助。' },
          { title: '更實惠的價格', description: '無需支付交通時間或到府費用，您只需為實際解決問題的時間付費。' },
          { title: '隨處可得的服務', description: '無論您身在西雅圖，或在世界任何角落遠端工作，都能獲得協助。' },
        ],
        perfectForRemoteWorkers: {
          title: '最適合遠端工作者',
          body: '無論您是在西雅圖地區在家工作，還是身處世界其他地方，我們專精於協助遠端工作者，包括居家辦公環境建置、VPN 設定、視訊會議故障排除，以及生產力工具支援，讓您能更快回到工作崗位。',
        },
      },
      security: {
        title: '安全私密',
        body: '您的資安是我們的首要考量。我們使用具備端對端加密的業界標準遠端支援工具，您能全程掌控連線並清楚看見我們所做的每一步操作，未經您明確授權，我們絕不會存取您的系統。',
        features: [
          '加密遠端連線',
          '每項操作都需經您核准',
          '可依需求提供連線紀錄',
          '不保留對您系統的持續存取權限',
        ],
      },
      cta: {
        heading: '現在就需要 IT 協助嗎？',
        body: '立即聯繫我們，取得快速、安全的遠端支援服務。服務範圍涵蓋西雅圖本地及全球客戶。',
        ctaPrimary: '申請遠端支援',
        ctaSecondary: '查看所有服務',
      },
    },
    security: {
      hero: {
        title: '企業級資安解決方案',
        subtitle: '以全方位資安解決方案、威脅偵測與合規管理，保護您的企業。',
        cta: '資安評估',
      },
      compliance: {
        heading: '合規與標準',
        items: [
          { name: 'SOC 2', description: '服務機構控制標準' },
          { name: 'ISO 27001', description: '資訊安全管理標準' },
          { name: 'HIPAA', description: '醫療數據保護法規' },
          { name: 'GDPR', description: '數據隱私保護法規' },
          { name: 'PCI DSS', description: '支付卡資安標準' },
          { name: 'NIST', description: '網路資安框架' },
        ],
      },
      services: {
        heading: '全方位資安服務',
        subheading: '端到端網路資安解決方案，保護您的企業免於不斷演變的威脅。',
        items: [
          { title: '資安評估', description: '全面評估您的資安現況與潛在漏洞。' },
          { title: '滲透測試', description: '模擬攻擊情境，找出系統中的資安弱點。' },
          { title: '24/7 全天候監控', description: '持續進行資安監控與威脅偵測服務。' },
          { title: '事件應變處理', description: '快速應變並從資安事件與資料外洩中復原。' },
          { title: '數據保護', description: '加密、存取控管與數據外洩防護解決方案。' },
          { title: '網路資安', description: '防火牆管理、入侵偵測與網路區隔。' },
        ],
      },
      threats: {
        heading: '防範不斷演變的資安威脅',
        subheading: '現代網路資安挑戰需要全方位的防禦策略。',
        items: [
          { title: '勒索軟體', description: '防範加密式攻擊與數據勒索' },
          { title: '網路釣魚', description: '防範社交工程與憑證竊取' },
          { title: '零時差漏洞', description: '偵測並緩解未知漏洞威脅' },
          { title: '內部威脅', description: '監控並防範內部資安風險' },
        ],
      },
      networkAssessment: {
        heading: '網路資安評估',
        body: '固定範圍、務實的評估，具體檢視您的企業實際曝險程度——最終交付的是可由您團隊（或我們團隊）執行的優先改善計畫，而非一份 60 頁的恐嚇式報告。',
        items: [
          { title: '邊界與防火牆', body: '規則檢視、暴露服務、VPN 設定，以及遠端存取安全習慣檢查。' },
          { title: '存取與身分', body: 'MFA 覆蓋率、閒置帳號、權限氾濫問題，以及密碼政策實際落實情況檢視。' },
          { title: '修補與端點', body: '作業系統與韌體修補程度、端點防護狀態，以及未受管理的裝置。' },
          { title: '備份與復原', body: '備份覆蓋率、還原測試，以及勒索軟體韌性——經過實際驗證，而非假設。' },
        ],
        footer: '依實際風險排序的評估結果，每項均附上執行工時預估與成本影響，讓您優先處理最關鍵的問題。',
      },
      cta: {
        heading: '準備好保護您的企業了嗎？',
        body: '與網路資安專家合作，打造穩固防禦，抵禦不斷演變的威脅。',
        ctaPrimary: '預約資安稽核',
        ctaSecondary: '查看所有服務',
      },
    },
    technicalWriting: {
      hero: {
        title: '雙語技術文件撰寫',
        subtitle: '提供專業中英雙語技術文件服務，弭平國際團隊與全球企業間的溝通落差。',
        cta: '索取報價',
      },
      whyMatters: {
        heading: '為什麼雙語文件如此重要',
        paragraph1: '在當今全球化經濟中，企業日益需要橫跨中英文市場運作。有效的技術溝通不只是翻譯而已——更需要對技術概念與文化脈絡具備深刻理解。',
        paragraph2: '無論您是拓展亞洲市場的西雅圖企業，或是需要中英雙語文件的國際團隊，專業雙語技術寫作都能確保所有技術溝通的清晰度、準確性與一致性。',
      },
      services: {
        heading: '文件撰寫服務',
        subheading: '依您的需求量身打造的全方位技術寫作服務。',
        items: [
          { title: 'IT 技術文件', description: '以中英文提供系統架構文件、操作手冊、標準作業程序（SOP）及基礎架構文件。' },
          { title: '使用者指南與操作手冊', description: '為軟體應用程式及技術產品提供清晰易懂的使用者文件。' },
          { title: 'API 文件', description: '完整的 API 參考文件、整合指南及開發者文件。' },
          { title: '版本發布說明', description: '為軟體更新提供專業的版本發布說明與變更紀錄文件。' },
          { title: '訓練教材', description: '為團隊與終端使用者提供技術訓練指南與教育內容。' },
          { title: '跨文化溝通', description: '為橫跨中英文市場運作的國際團隊，銜接技術與商業溝通落差。' },
        ],
      },
      benefits: {
        heading: '我們的與眾不同之處',
        items: [
          { title: '真正的雙語專業', description: '中英文皆具備母語等級的熟練度，而非僅止於翻譯。' },
          { title: 'IT 產業經驗', description: '對技術概念、基礎架構與軟體開發具備深刻理解。' },
          { title: '清晰且結構化', description: '遵循產業最佳實務、易於維護的文件內容。' },
          { title: '文化細膩度', description: '深諳西方與華人市場的商業文化。' },
        ],
      },
      useCases: {
        heading: '常見應用情境',
        items: [
          { title: '拓展全球市場的西雅圖企業', description: '您正拓展至中國市場或與中國合作夥伴合作，需要能同時服務中英文讀者的產品文件、使用者指南或技術規格書。' },
          { title: '跨國團隊', description: '您的開發團隊橫跨多個國家，需要一致的技術文件，同時服務美國工程師與中國開發中心。' },
          { title: '軟體公司', description: '您同時在中英文市場銷售軟體，需要能在兩種語言間無縫運作的 API 文件、SDK 及整合指南。' },
          { title: '企業 IT 團隊', description: '貴公司在西雅圖與亞洲皆設有據點，需要能跨所有據點通用的 IT 文件、作業程序與訓練教材。' },
        ],
      },
      cta: {
        heading: '準備好提升您的全球溝通了嗎？',
        body: '讓我們一起討論雙語技術文件如何協助您達成業務目標。',
        cta: '立即開始',
      },
    },
    itAutomation: {
      hero: {
        title: 'IT 流程自動化服務',
        subtitle: '透過自動化工作流程與智慧系統，全天候 24/7 為您精簡營運流程。',
        cta: '立即開始',
      },
      intro: {
        heading: '真正為您服務的自動化',
        paragraph1: '在步調快速的現代商業環境中，人工作業流程會拖慢腳步並提高出錯風險。我們的 IT 自動化解決方案協助中小企業降低人工作業負擔、提升效率，並在不增加人力的情況下擴展營運規模。',
        paragraph2: '從工作流程自動化到基礎架構管理，我們導入可預測、可重複執行的自動化機制，讓您能專注於企業成長，而非日常瑣事管理。',
      },
      services: {
        heading: '我們的自動化服務',
        subheading: '依您的業務需求量身打造的全方位自動化解決方案。',
        benefitsLabel: '主要優勢：',
        items: [
          {
            title: '工作流程自動化',
            description: '自動化重複性工作，精簡您的業務流程，提升最大效率。',
            benefits: ['自動化數據輸入與處理', '文件生成與管理', '電子郵件與通訊自動化', '任務排程與提醒'],
          },
          {
            title: 'IT 基礎架構自動化',
            description: '自動化監控、維護與更新，確保系統穩定運作。',
            benefits: ['自動化修補程式管理', '系統監控與警示', '自動化備份', '網路設定管理'],
          },
          {
            title: '流程優化',
            description: '找出流程瓶頸，並透過智慧自動化解決方案優化工作流程。',
            benefits: ['業務流程分析', '工作流程優化', '效能監控', '持續改善自動化'],
          },
          {
            title: '資安自動化',
            description: '自動化資安監控與應變處理，全天候 24/7 保護您的企業。',
            benefits: ['自動化威脅偵測', '資安修補程式部署', '合規監控', '事件應變自動化'],
          },
        ],
      },
      benefits: {
        heading: '為什麼選擇 W1IT 進行自動化？',
        subheading: '智慧自動化為您的中小企業帶來的實際效益。',
        items: [
          '降低人工作業負擔與人為疏失',
          '提升生產力與工作效率',
          '節省時間並降低營運成本',
          '無需增加人力即可擴展營運規模',
          '提升準確度與一致性',
          '讓團隊得以專注於策略性工作',
        ],
      },
      process: {
        heading: '我們的自動化流程',
        steps: [
          { number: '1', title: '需求評估', description: '我們分析您現有的工作流程，找出自動化機會與瓶頸所在。' },
          { number: '2', title: '策略規劃', description: '我們依您的業務目標與優先順序，設計客製化自動化策略。' },
          { number: '3', title: '導入實施', description: '我們建置並部署自動化解決方案，將對營運的干擾降到最低。' },
          { number: '4', title: '持續優化', description: '我們持續監控、調整並改善您的自動化機制，達到最大效率。' },
        ],
      },
      cta: {
        heading: '準備好為您的企業導入自動化了嗎？',
        body: '讓我們一起討論自動化如何轉型您的營運方式，讓團隊專注於最重要的事。',
        ctaPrimary: '預約諮詢',
        ctaSecondary: '查看所有服務',
      },
    },
    websiteDevelopment: {
      hero: {
        title: '網站開發與優化',
        subtitle: '打造快速、精美且以轉換率為導向的網站，驅動業務成長',
        cta: '啟動您的專案',
      },
      features: {
        heading: '我們提供的服務',
        subheading: '依您的業務需求量身打造的全方位網站開發服務',
        items: [
          { title: '客製化開發', description: '採用 Next.js、React、TypeScript 等現代化框架打造的量身客製網站，效能表現最佳化。' },
          { title: '響應式設計', description: '以行動裝置優先的設計理念，確保網站在各種裝置與螢幕尺寸上都完美呈現。' },
          { title: '效能優化', description: '透過圖片優化、程式碼分割與邊緣快取技術，實現極速載入表現。' },
          { title: 'SEO 搜尋引擎優化', description: '內建 SEO 最佳實務，包含中繼資料、網站地圖與結構化資料，提升搜尋排名。' },
          { title: '電商解決方案', description: '穩健的線上商店，具備安全金流處理與庫存管理功能。' },
          { title: '分析與洞察', description: '整合分析工具，追蹤效能表現、使用者行為與轉換率指標。' },
        ],
      },
      technologies: {
        heading: '現代化技術架構',
        subheading: '我們採用業界領先技術，打造穩健、可擴展的網站',
      },
      cta: {
        heading: '準備好打造您的網站了嗎？',
        body: '讓我們一起討論您的專案，打造超越期待的網站',
        cta: '預約諮詢',
      },
    },
  },
  itConsulting: {
    hero: {
      title: 'IT 顧問諮詢服務',
      subtitleBeforeLink: '明智的 IT 顧問諮詢——為安全、可擴展的成長提供清晰策略。需要實際動手的支援嗎？歡迎瞭解我們的',
      linkText: '委外資訊管理服務',
      subtitleAfterLink: '。',
      cta: '預約諮詢',
    },
    intro: '除了實際的 IT 管理服務外，我也提供顧問諮詢服務，協助企業做出明智的策略性科技決策。我的顧問方式結合技術專業與清晰溝通，確保每一項建議都務實可行、具擴展性，並與企業目標一致。',
    offer: {
      heading: '我提供的服務',
      subheading: '專為協助您的企業做出更明智科技決策而設計的策略顧問服務。',
      items: [
        { title: '技術策略與發展藍圖規劃', description: '協助組織規劃 IT 投資、讓基礎架構與業務目標一致，並為未來成長做好準備。' },
        { title: '系統與網路架構顧問', description: '針對網路、伺服器與雲端環境提供安全、高效的設計建議，依您的營運需求量身打造。' },
        { title: '流程優化', description: '找出 IT 工作流程中的低效環節，並建議透過自動化或重新規劃來提升生產力。' },
        { title: '資安與合規指導', description: '就 SSL/DNS 設定、多重要素驗證（MFA）整合及最佳實務提供顧問服務，確保系統安全合規。' },
        { title: 'IT 跨文化溝通', description: '協助國際團隊提供中英雙語文件與溝通內容，銜接技術與商業溝通落差。' },
      ],
    },
    benefits: {
      heading: '客戶獲得的效益',
      items: [
        { title: '決策更清晰', description: '將複雜的 IT 挑戰化為簡單、可執行的具體步驟。' },
        { title: '成本效益', description: '策略性建議可減少不必要的支出，並將投資報酬率最大化。' },
        { title: '可擴展性', description: '解決方案可隨您的企業成長而擴展。' },
        { title: '在地與遠端支援', description: '提供全球遠端顧問諮詢，以及大西雅圖地區在地諮詢服務。' },
      ],
    },
    cta: {
      heading: '準備好做出更明智的 IT 決策了嗎？',
      body: '讓我們一起討論策略性 IT 顧問諮詢如何協助您的企業安全、高效地成長。',
      cta: '立即開始',
    },
  },
  itServices: {
    hero: {
      title: '委外資訊管理服務',
      subtitleBeforeLink: '為需要可靠、可擴展且安全解決方案的企業，提供全方位 IT 服務管理。提供全球遠端服務，以及大西雅圖地區在地服務。需要策略性指導嗎？歡迎瞭解我們的',
      linkText: 'IT 顧問諮詢服務',
      subtitleAfterLink: '。',
      cta: '立即聯繫',
    },
    about: {
      heading: '關於我',
      paragraph: '我是一位經驗豐富的 IT 顧問與策略規劃師，擁有管理複雜系統並提供清晰、可執行解決方案的實績。我的專業橫跨系統管理、網路監控與技術文件撰寫，並具備出色的中英雙語溝通能力，能勝任國際商業情境。我為每個專案帶來扎實的技術實力與創意的問題解決能力。',
    },
    experience: {
      heading: '我的 IT 經驗',
      subheading: '橫跨多元 IT 環境的多年實務經驗，從基礎架構管理到國際團隊協作皆有涉獵。',
      items: [
        { title: '系統管理與故障排除', description: '擅長管理 Matrix42、Empirum、JIRA、Confluence、Meraki 及 PRTG 等平台，專精於診斷並解決 SSL 憑證鏈問題、DNS/Cloudflare 設定，以及 MFA 服務整合。' },
        { title: '網路監控與自動化', description: '為 PRTG、Meraki 及 SNMP 進行進階工作流程設計，並運用 PowerShell 自動化來簡化設備管理與監控作業。' },
        { title: '文件撰寫與溝通', description: '擅長為利害關係人建立清晰、模組化的文件，確保 IT 專案的透明度與一致性。我會為跨文化受眾精煉技術訊息，銜接技術團隊與企業主管之間的溝通落差。' },
        { title: '專案管理與優化', description: '主動讓 IT 流程與業務目標一致，優化工作流程，並確保利害關係人之間順暢協作。' },
      ],
    },
    servicesOffered: {
      heading: '我提供的 IT 服務',
      subheading: '為需要可靠、可擴展且安全解決方案的企業，提供全方位 IT 服務管理。',
      items: [
        '端到端 IT 基礎架構管理',
        '網路監控與工作流程自動化',
        'SSL/DNS 故障排除與安全設定',
        '技術文件撰寫與利害關係人溝通',
        '為國際團隊提供跨文化 IT 溝通',
      ],
      note: '服務提供全球遠端支援，以及大西雅圖地區在地服務，兼顧現場與線上支援的彈性。',
    },
    whyWorkWithMe: {
      heading: '為什麼與我合作',
      items: [
        { title: '清晰專業', description: '我會將複雜的 IT 問題，轉化為清楚、可執行的具體步驟。' },
        { title: '可靠穩定', description: '我確保系統安全、高效運作，將停機時間降到最低。' },
        { title: '國際視野', description: '我的雙語專業能力，有助於支援國際協作。' },
        { title: '客製化服務', description: '無論規模大小，我都能依您的業務需求調整解決方案。' },
        { title: '在地服務', description: '我常駐西雅圖地區，可提供實體諮詢與現場支援服務。' },
      ],
    },
    cta: {
      heading: '準備好優化您的 IT 基礎架構了嗎？',
      body: '讓我們一起討論我能如何協助您精簡 IT 營運並達成業務目標。',
      cta: '立即聯繫我',
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  'zh-TW': zhTW,
};
