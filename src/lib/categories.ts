// Category definitions for content grouping
// Used for organizing page content into logical sections

export interface Category {
  id: string;
  name: string;
  description?: string;
  icon?: string; // Icon name from lucide-react
  color: string; // Tailwind color class
  order: number; // Display order
}

export const categories: Category[] = [
  {
    id: 'hero',
    name: 'Hero Section',
    description: 'Main banner and introduction',
    icon: 'Zap',
    color: 'gradient-primary',
    order: 1,
  },
  {
    id: 'services',
    name: 'IT Services',
    description: 'Comprehensive IT solutions and managed services',
    icon: 'Cpu',
    color: 'blue',
    order: 2,
  },
  {
    id: 'benefits',
    name: 'Business Benefits',
    description: 'Key advantages and value propositions',
    icon: 'CheckCircle2',
    color: 'green',
    order: 3,
  },
  {
    id: 'stats',
    name: 'Company Stats',
    description: 'Performance metrics and achievements',
    icon: 'BarChart3',
    color: 'purple',
    order: 4,
  },
  {
    id: 'clients',
    name: 'Client Types',
    description: 'Business sectors we serve',
    icon: 'Users',
    color: 'orange',
    order: 5,
  },
  {
    id: 'bento',
    name: 'Solutions Grid',
    description: 'Interactive exploration of services',
    icon: 'LayoutGrid',
    color: 'indigo',
    order: 6,
  },
  {
    id: 'cta',
    name: 'Call to Action',
    description: 'Contact and consultation sections',
    icon: 'Phone',
    color: 'red',
    order: 7,
  },
];

// Helper function to get category by ID
export function getCategory(id: string): Category | undefined {
  return categories.find(cat => cat.id === id);
}

// Helper function to get all categories sorted by order
export function getSortedCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}