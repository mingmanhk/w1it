import {
  Zap,
  Wrench,
  BarChart,
  Code,
  MessageSquare,
  Globe,
  Phone,
  Cpu,
  Shield,
  Cloud,
  Network,
  Server,
  FileText,
  Database,
  RefreshCw,
  Smartphone,
  Headphones,
} from 'lucide-react';

export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
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
    icon: <Zap className="w-4 h-4" />,
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Wrench className="w-4 h-4" />,
    badge: 'Popular',
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <BarChart className="w-4 h-4" />,
  },
  {
    name: 'Apps',
    href: '/apps',
    icon: <Code className="w-4 h-4" />,
    badge: 'New',
  },
  {
    name: 'Blog',
    href: '/blog',
    icon: <MessageSquare className="w-4 h-4" />,
  },
  {
    name: 'About',
    href: '/about',
    icon: <Globe className="w-4 h-4" />,
  },
];

export const servicesNavigation: NavigationGroup[] = [
  {
    name: 'Core Services',
    items: [
      {
        name: 'Managed IT Services',
        href: '/it-services',
        icon: <Cpu className="w-4 h-4" />,
        description: '24/7 monitoring and proactive maintenance',
        featured: true,
      },
      {
        name: 'Security Solutions',
        href: '/services/security',
        icon: <Shield className="w-4 h-4" />,
        description: 'Cybersecurity and threat protection',
        featured: true,
      },
      {
        name: 'Cloud Migration',
        href: '/services/cloud-solutions',
        icon: <Cloud className="w-4 h-4" />,
        description: 'AWS, Azure, Google Cloud solutions',
      },
      {
        name: 'Network Setup',
        href: '/services/network-setup',
        icon: <Network className="w-4 h-4" />,
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
        icon: <BarChart className="w-4 h-4" />,
        description: 'Strategic technology planning',
        featured: true,
      },
      {
        name: 'Remote Support',
        href: '/services/remote-support',
        icon: <Headphones className="w-4 h-4" />,
        description: 'Quick response troubleshooting',
      },
      {
        name: 'Technical Writing',
        href: '/services/technical-writing',
        icon: <FileText className="w-4 h-4" />,
        description: 'Professional documentation',
      },
      {
        name: 'Managed Services',
        href: '/services/managed-services',
        icon: <Server className="w-4 h-4" />,
        description: '24/7 monitoring and maintenance',
      },
    ],
  },
];

export const solutionsNavigation: NavigationItem[] = [
  {
    name: 'Data Analytics',
    href: '/solutions/data-analytics',
    icon: <Database className="w-4 h-4" />,
    description: 'Business intelligence and insights',
    featured: true,
  },
  {
    name: 'Digital Transformation',
    href: '/solutions/digital-transformation',
    icon: <RefreshCw className="w-4 h-4" />,
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
    icon: <Phone className="w-4 h-4" />,
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