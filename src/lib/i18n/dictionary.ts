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
