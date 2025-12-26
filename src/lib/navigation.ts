// Navigation configuration - no JSX allowed here
// Icons are referenced by name and will be rendered in components

export interface NavigationItem {
  name: string;
  href: string;
  iconName?: string; // Icon name instead of React component
  description?: string;
  badge?: string;
  featured?: boolean;
}

export interface NavigationGroup {
  name: string;
  items: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  {
    name: 'Home',
    href: '/',
    iconName: 'Zap',
  },
  {
    name: 'Services',
    href: '/services',
    iconName: 'Wrench',
    badge: 'Popular',
  },
  {
    name: 'Solutions',
    href: '/solutions',
    iconName: 'BarChart',
  },
  {
    name: 'Apps',
    href: '/apps',
    iconName: 'Code',
    badge: 'New',
  },
  {
    name: 'Blog',
    href: '/blog',
    iconName: 'MessageSquare',
  },
  {
    name: 'About',
    href: '/about',
    iconName: 'Globe',
  },
];

export const servicesNavigation: NavigationGroup[] = [
  {
    name: 'Core Services',
    items: [
      {
        name: 'Managed IT Services',
        href: '/it-services',
        iconName: 'Cpu',
        description: '24/7 monitoring and proactive maintenance',
        featured: true,
      },
      {
        name: 'Security Solutions',
        href: '/services/security',
        iconName: 'Shield',
        description: 'Cybersecurity and threat protection',
        featured: true,
      },
      {
        name: 'Cloud Migration',
        href: '/services/cloud-solutions',
        iconName: 'Cloud',
        description: 'AWS, Azure, Google Cloud solutions',
      },
      {
        name: 'Network Setup',
        href: '/services/network-setup',
        iconName: 'Network',
        description: 'Secure and scalable infrastructure',
      },
    ],
  },
  {
    name: 'Support & Consulting',
    items: [
      {
        name: 'IT Consulting',
        href: '/it-consulting',
        iconName: 'BarChart',
        description: 'Strategic technology planning',
        featured: true,
      },
      {
        name: 'Remote Support',
        href: '/services/remote-support',
        iconName: 'Headphones',
        description: 'Quick response troubleshooting',
      },
      {
        name: 'Technical Writing',
        href: '/services/technical-writing',
        iconName: 'FileText',
        description: 'Professional documentation',
      },
      {
        name: 'Managed Services',
        href: '/services/managed-services',
        iconName: 'Server',
        description: '24/7 monitoring and maintenance',
      },
    ],
  },
];

export const solutionsNavigation: NavigationItem[] = [
  {
    name: 'Data Analytics',
    href: '/solutions/data-analytics',
    iconName: 'Database',
    description: 'Business intelligence and insights',
    featured: true,
  },
  {
    name: 'Digital Transformation',
    href: '/solutions/digital-transformation',
    iconName: 'RefreshCw',
    description: 'Modernize processes and innovation',
    featured: true,
  },
];

export const appsNavigation: NavigationItem[] = [
  {
    name: 'Pixel Color Picker',
    href: '/apps/pixel-color-picker',
    description: 'Advanced color detection tools',
    featured: true,
  },
  {
    name: 'DeepTicker',
    href: '/apps/deepticker',
    description: 'Real-time financial analytics',
    featured: true,
  },
  {
    name: 'ScreenGrabber',
    href: '/apps/screengrabber',
    description: 'Capture and annotate screenshots',
  },
  {
    name: 'Contact SyncMate',
    href: '/apps/contact-syncmate',
    description: 'Sync contacts across platforms',
  },
];

export const quickLinks: NavigationItem[] = [
  {
    name: 'Free Consultation',
    href: '/contact',
    iconName: 'Phone',
    badge: 'Free',
  },
  {
    name: 'Case Studies',
    href: '/case-studies',
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Pricing',
    href: '/pricing',
  },
];

// Helper function to get navigation for a specific section
export function getNavigationForSection(section: string): NavigationGroup[] | NavigationItem[] {
  switch (section) {
    case 'services':
      return servicesNavigation;
    case 'solutions':
      return solutionsNavigation;
    case 'apps':
      return appsNavigation;
    default:
      return mainNavigation;
  }
}