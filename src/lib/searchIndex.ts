export type SearchEntry = {
  title: string;
  url: string;
  description: string;
  category: 'Case Study' | 'Service' | 'Solution' | 'Page';
};

/**
 * Static, build-time site search index. Hand-curated rather than
 * auto-generated so titles/descriptions stay editorial-quality; update this
 * list whenever a page is added, renamed, or retired.
 */
export const searchIndex: SearchEntry[] = [
  // Case studies
  {
    title: 'Building a Unified, AI-Assisted NOC',
    url: '/case-studies/ai-noc-unified-security-monitoring',
    description: 'Correlating six disconnected security tools into one real-time SIEM dashboard with an on-prem LLM.',
    category: 'Case Study',
  },
  {
    title: 'How Bilingual Documentation Improves Global Trade',
    url: '/case-studies/bilingual-documentation-global-trade',
    description: 'Why English-Chinese technical documentation reduces errors and speeds global expansion.',
    category: 'Case Study',
  },
  {
    title: 'Building an In-House Private AI Assistant',
    url: '/case-studies/building-in-house-private-ai-assistant',
    description: 'An on-prem AI assistant built from open-weight models instead of a commercial cloud tool.',
    category: 'Case Study',
  },
  {
    title: 'Choosing the Right IT Support Model',
    url: '/case-studies/choosing-it-support-model',
    description: 'Managed services vs. on-demand support vs. IT consulting: costs, tradeoffs, and fit.',
    category: 'Case Study',
  },
  {
    title: 'VMware & Veeam Backup Modernization (Ferry Company)',
    url: '/case-studies/ferry-company-backup-modernization',
    description: 'Modernizing multi-site backup infrastructure for a European ferry company.',
    category: 'Case Study',
  },
  {
    title: 'Asymmetric Traffic in a FortiGate Active-Active Cluster',
    url: '/case-studies/fortigate-active-active-asymmetric-traffic-troubleshooting',
    description: 'Diagnosing a healthy-looking HA cluster that was quietly dropping sessions.',
    category: 'Case Study',
  },
  {
    title: 'FortiGate FortiBleed Incident Response',
    url: '/case-studies/fortigate-fortibleed-incident-response',
    description: 'Treating FortiBleed as a credential compromise, not a patch ticket.',
    category: 'Case Study',
  },
  {
    title: 'Fragmented IT to Standardized Infrastructure',
    url: '/case-studies/fragmented-it-standardized-infrastructure',
    description: 'Turning a fragmented IT environment into documented, automated infrastructure.',
    category: 'Case Study',
  },
  {
    title: 'A Missing IT Checklist and a Full Outage',
    url: '/case-studies/missing-it-checklist-outage-recovery',
    description: 'How missing daily IT checklists led to an outage, and how structured recovery saved the business.',
    category: 'Case Study',
  },
  {
    title: 'Network Security Essentials for Remote Teams',
    url: '/case-studies/network-security-remote-teams',
    description: 'VPN setup, secure access protocols, and cybersecurity basics for distributed teams.',
    category: 'Case Study',
  },
  {
    title: 'Top 5 IT Mistakes Small Businesses Make',
    url: '/case-studies/top-it-mistakes-small-businesses',
    description: 'The most common IT pitfalls for small businesses and how to prevent them.',
    category: 'Case Study',
  },
  {
    title: 'VMware to Hyper-V Migration',
    url: '/case-studies/vmware-to-hyperv-migration',
    description: '40 production VMs migrated with 60% lower virtualization costs and minimal downtime.',
    category: 'Case Study',
  },
  {
    title: 'Why Your Business Needs IT Documentation',
    url: '/case-studies/why-businesses-need-it-documentation',
    description: 'The role of IT documentation in continuity, onboarding, and reducing technical debt.',
    category: 'Case Study',
  },
  {
    title: 'WiFi Setup Guide for Seattle Homes and Offices',
    url: '/case-studies/wifi-setup-guide-seattle',
    description: 'Router placement, mesh networks, channel selection, and coverage optimization.',
    category: 'Case Study',
  },

  // Services
  { title: 'Managed Services', url: '/services/managed-services', description: 'Ongoing IT management, monitoring, and support.', category: 'Service' },
  { title: 'Cloud Solutions', url: '/services/cloud-solutions', description: 'Cloud migration, hosting, and infrastructure management.', category: 'Service' },
  { title: 'Network Setup & Configuration', url: '/services/network-setup', description: 'Network design, build-outs, WiFi, VPN, and structured cabling.', category: 'Service' },
  { title: 'Remote IT Support', url: '/services/remote-support', description: 'Fast, secure remote troubleshooting available worldwide.', category: 'Service' },
  { title: 'Security Services', url: '/services/security', description: 'Cybersecurity assessments, hardening, and incident response.', category: 'Service' },
  { title: 'Technical Writing', url: '/services/technical-writing', description: 'IT documentation, runbooks, and knowledge-base authoring.', category: 'Service' },
  { title: 'IT Automation', url: '/services/it-automation', description: 'Scripting and automation to reduce manual IT work.', category: 'Service' },
  { title: 'Website Development', url: '/services/website-development', description: 'Business website design and development.', category: 'Service' },

  // Solutions
  { title: 'Data Analytics', url: '/solutions/data-analytics', description: 'Data warehousing and analytics platforms for business insight.', category: 'Solution' },
  { title: 'Digital Transformation', url: '/solutions/digital-transformation', description: 'Modernizing legacy processes and infrastructure.', category: 'Solution' },
  { title: 'Cybersecurity Strategy', url: '/solutions/cybersecurity-strategy', description: 'Risk management and long-term security roadmaps.', category: 'Solution' },
  { title: 'Custom IT Solutions', url: '/solutions/custom-it-solutions', description: 'Tailored service bundles built around a specific business need.', category: 'Solution' },
  { title: 'Website Optimization', url: '/solutions/website-optimization', description: 'Performance, SEO, and conversion improvements for existing sites.', category: 'Solution' },

  // Core pages
  { title: 'About W1IT Solutions', url: '/about', description: 'Who we are and how we work with clients.', category: 'Page' },
  { title: 'Contact', url: '/contact', description: 'Get in touch for a consultation or support request.', category: 'Page' },
  { title: 'IT Services Overview', url: '/it-services', description: 'Full menu of managed and project-based IT services.', category: 'Page' },
  { title: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting and advisory engagements.', category: 'Page' },
  { title: 'Blog', url: '/blog', description: 'Articles and updates from W1IT Solutions.', category: 'Page' },
  { title: 'Industries We Serve', url: '/industries', description: 'Sectors and verticals W1IT has delivered IT work in.', category: 'Page' },
  { title: 'Testimonials', url: '/testimonials', description: 'What clients say about working with W1IT.', category: 'Page' },
  { title: 'IT Checklists', url: '/checklists', description: 'Practical IT checklists for common business scenarios.', category: 'Page' },
];
