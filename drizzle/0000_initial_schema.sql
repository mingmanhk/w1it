-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL,
  is_active BOOLEAN DEFAULT true NOT NULL,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create service_content table
CREATE TABLE IF NOT EXISTS service_content (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id) NOT NULL,
  title VARCHAR(255) NOT NULL,
  short_description TEXT,
  full_description TEXT,
  features JSONB,
  specifications JSONB,
  pricing TEXT,
  image_url VARCHAR(500),
  meta_title VARCHAR(255),
  meta_description TEXT
);

-- Create service_images table
CREATE TABLE IF NOT EXISTS service_images (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id) NOT NULL,
  url VARCHAR(500) NOT NULL,
  alt_text VARCHAR(255),
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false
);

-- Create inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  service_id INTEGER REFERENCES services(id),
  subject VARCHAR(255),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' NOT NULL,
  priority VARCHAR(20) DEFAULT 'medium',
  source VARCHAR(50),
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create inquiry_files table
CREATE TABLE IF NOT EXISTS inquiry_files (
  id SERIAL PRIMARY KEY,
  inquiry_id INTEGER REFERENCES inquiries(id) NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  file_name VARCHAR(255),
  file_size INTEGER,
  file_type VARCHAR(100),
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create service_views table
CREATE TABLE IF NOT EXISTS service_views (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES services(id),
  viewed_at TIMESTAMP DEFAULT NOW() NOT NULL,
  session_id VARCHAR(255),
  referrer VARCHAR(500),
  user_agent TEXT,
  ip_address INET
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  author VARCHAR(100),
  category VARCHAR(50),
  tags JSONB,
  featured_image VARCHAR(500),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  meta_title VARCHAR(255),
  meta_description TEXT
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(100),
  content TEXT NOT NULL,
  rating INTEGER,
  service_id INTEGER REFERENCES services(id),
  is_approved BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create subscribers table
CREATE TABLE IF NOT EXISTS subscribers (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(100),
  status VARCHAR(20) DEFAULT 'active',
  source VARCHAR(50),
  subscribed_at TIMESTAMP DEFAULT NOW() NOT NULL,
  unsubscribed_at TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(featured);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_service_views_service ON service_views(service_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);
CREATE INDEX IF NOT EXISTS idx_testimonials_approved ON testimonials(is_approved);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured);
