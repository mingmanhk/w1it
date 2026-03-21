export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ITManagedServiceProvider",
    "@id": "https://w1it.com/#business",
    "name": "W1IT Solutions",
    "description": "Professional IT managed services provider in Washington State offering comprehensive IT support, cybersecurity, cloud solutions, and network management.",
    "url": "https://w1it.com",
    "logo": "https://w1it.com/logo.png",
    "image": "https://w1it.com/og-image.jpg",
    "telephone": "+1-206-123-4567",
    "email": "info@w1it.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Street",
      "addressLocality": "Seattle",
      "addressRegion": "WA",
      "postalCode": "98101",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.6062,
      "longitude": -122.3321
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.6062,
        "longitude": -122.3321
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.linkedin.com/company/w1it",
      "https://twitter.com/w1it",
      "https://facebook.com/w1it"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
