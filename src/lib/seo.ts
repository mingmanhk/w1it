import { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    images?: string[];
  };
}

export const defaultSEO = {
  siteName: 'W1IT Solutions',
  siteUrl: 'https://w1it.com',
  twitterHandle: '@w1itsolutions',
  defaultImage: '/og-image.png',
};

export function generateSEO(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    openGraph = {},
  } = config;

  const fullTitle = title.includes('W1IT Solutions')
    ? title
    : `${title} | W1IT Solutions`;

  const url = canonical
    ? `${defaultSEO.siteUrl}${canonical}`
    : defaultSEO.siteUrl;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: openGraph.title || fullTitle,
      description: openGraph.description || description,
      url,
      siteName: defaultSEO.siteName,
      locale: 'en_US',
      type: (openGraph.type as 'website' | 'article') || 'website',
      images: openGraph.images || [
        {
          url: defaultSEO.defaultImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraph.title || fullTitle,
      description: openGraph.description || description,
      images: openGraph.images || [defaultSEO.defaultImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Schema.org structured data generators
export interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone?: string;
  email?: string;
  address?: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  priceRange?: string;
  areaServed?: string[];
}

export function generateLocalBusinessSchema(
  config: LocalBusinessSchema
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.description,
    url: config.url,
    telephone: config.telephone,
    email: config.email,
    address: config.address
      ? {
          '@type': 'PostalAddress',
          streetAddress: config.address.streetAddress,
          addressLocality: config.address.addressLocality,
          addressRegion: config.address.addressRegion,
          postalCode: config.address.postalCode,
          addressCountry: config.address.addressCountry,
        }
      : undefined,
    geo: config.geo
      ? {
          '@type': 'GeoCoordinates',
          latitude: config.geo.latitude,
          longitude: config.geo.longitude,
        }
      : undefined,
    priceRange: config.priceRange,
    areaServed: config.areaServed?.map((area) => ({
      '@type': 'City',
      name: area,
    })),
  };
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string[];
  serviceType?: string;
}

export function generateServiceSchema(config: ServiceSchema): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.name,
    description: config.description,
    provider: {
      '@type': 'Organization',
      name: config.provider.name,
      url: config.provider.url,
    },
    areaServed: config.areaServed?.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: config.serviceType,
  };
}

export interface SoftwareApplicationSchema {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export function generateSoftwareApplicationSchema(
  config: SoftwareApplicationSchema
): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: config.name,
    description: config.description,
    applicationCategory: config.applicationCategory,
    operatingSystem: config.operatingSystem,
    offers: config.offers
      ? {
          '@type': 'Offer',
          price: config.offers.price,
          priceCurrency: config.offers.priceCurrency,
        }
      : undefined,
  };
}

// Generate BreadcrumbList schema
export interface Breadcrumb {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(breadcrumbs: Breadcrumb[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

// Organization schema
export function generateOrganizationSchema(): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'W1IT Solutions',
    url: 'https://w1it.com',
    logo: 'https://w1it.com/images/optimized/Logo.webp',
    description:
      'Enterprise-grade IT support for small businesses in Bellevue, WA. Managed services, 24/7 monitoring, security, help desk support, and IT consulting designed specifically for small business success. Serving Seattle Metro Area.',
    telephone: '(832) 472-7991',
    email: 'contact@w1it.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bellevue',
      addressRegion: 'WA',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Bellevue',
      },
      {
        '@type': 'City',
        name: 'Seattle',
      },
      {
        '@type': 'City',
        name: 'Redmond',
      },
      {
        '@type': 'City',
        name: 'Kirkland',
      },
    ],
    priceRange: '$$',
    sameAs: [
      // Add social media links here when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '(832) 472-7991',
      email: 'contact@w1it.com',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  };
}
