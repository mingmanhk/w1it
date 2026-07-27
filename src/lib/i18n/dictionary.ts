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
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  'zh-TW': zhTW,
};
