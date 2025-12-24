import { pgTable, serial, varchar, text, boolean, timestamp, integer, jsonb, inet } from 'drizzle-orm/pg-core';
import { InferSelectModel, InferInsertModel } from 'drizzle-orm';

// Services/Products Catalog
export const services = pgTable('services', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  category: varchar('category', { length: 50 }).notNull(),
  isActive: boolean('is_active').default(true).notNull(),
  featured: boolean('featured').default(false),
  displayOrder: integer('display_order').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const serviceContent = pgTable('service_content', {
  id: serial('id').primaryKey(),
  serviceId: integer('service_id').references(() => services.id).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  shortDescription: text('short_description'),
  fullDescription: text('full_description'),
  features: jsonb('features'), // Array of features
  specifications: jsonb('specifications'), // Key-value pairs
  pricing: text('pricing'),
  imageUrl: varchar('image_url', { length: 500 }),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
});

export const serviceImages = pgTable('service_images', {
  id: serial('id').primaryKey(),
  serviceId: integer('service_id').references(() => services.id).notNull(),
  url: varchar('url', { length: 500 }).notNull(),
  altText: varchar('alt_text', { length: 255 }),
  displayOrder: integer('display_order').default(0),
  isPrimary: boolean('is_primary').default(false),
});

// Inquiry/Lead Management
export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  company: varchar('company', { length: 255 }),
  serviceId: integer('service_id').references(() => services.id),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  status: varchar('status', { length: 20 }).default('new').notNull(), // new, contacted, qualified, converted, closed
  priority: varchar('priority', { length: 20 }).default('medium'), // low, medium, high
  source: varchar('source', { length: 50 }), // website, referral, etc.
  userAgent: text('user_agent'),
  ipAddress: inet('ip_address'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const inquiryFiles = pgTable('inquiry_files', {
  id: serial('id').primaryKey(),
  inquiryId: integer('inquiry_id').references(() => inquiries.id).notNull(),
  fileUrl: varchar('file_url', { length: 500 }).notNull(),
  fileName: varchar('file_name', { length: 255 }),
  fileSize: integer('file_size'),
  fileType: varchar('file_type', { length: 100 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Analytics & Tracking
export const serviceViews = pgTable('service_views', {
  id: serial('id').primaryKey(),
  serviceId: integer('service_id').references(() => services.id),
  viewedAt: timestamp('viewed_at').defaultNow().notNull(),
  sessionId: varchar('session_id', { length: 255 }),
  referrer: varchar('referrer', { length: 500 }),
  userAgent: text('user_agent'),
  ipAddress: inet('ip_address'),
});

// Blog/Content Management
export const blogPosts = pgTable('blog_posts', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 100 }).unique().notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  excerpt: text('excerpt'),
  content: text('content').notNull(),
  author: varchar('author', { length: 100 }),
  category: varchar('category', { length: 50 }),
  tags: jsonb('tags'), // Array of tags
  featuredImage: varchar('featured_image', { length: 500 }),
  isPublished: boolean('is_published').default(false),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  metaTitle: varchar('meta_title', { length: 255 }),
  metaDescription: text('meta_description'),
});

// Testimonials/Reviews
export const testimonials = pgTable('testimonials', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  company: varchar('company', { length: 255 }),
  role: varchar('role', { length: 100 }),
  content: text('content').notNull(),
  rating: integer('rating'), // 1-5
  serviceId: integer('service_id').references(() => services.id),
  isApproved: boolean('is_approved').default(false),
  isFeatured: boolean('is_featured').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Email Subscribers / Newsletter
export const subscribers = pgTable('subscribers', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  name: varchar('name', { length: 100 }),
  status: varchar('status', { length: 20 }).default('active'), // active, unsubscribed
  source: varchar('source', { length: 50 }),
  subscribedAt: timestamp('subscribed_at').defaultNow().notNull(),
  unsubscribedAt: timestamp('unsubscribed_at'),
});

// Team Members / Experience (from comprehensive plan)
export const teamMembers = pgTable('team_members', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  bio: text('bio'),
  imageUrl: varchar('image_url', { length: 500 }),
  email: varchar('email', { length: 255 }),
  phone: varchar('phone', { length: 50 }),
  linkedinUrl: varchar('linkedin_url', { length: 500 }),
  githubUrl: varchar('github_url', { length: 500 }),
  displayOrder: integer('display_order').default(0),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const teamMemberExperience = pgTable('team_member_experience', {
  id: serial('id').primaryKey(),
  teamMemberId: integer('team_member_id').references(() => teamMembers.id).notNull(),
  title: varchar('title', { length: 255 }).notNull(),
  company: varchar('company', { length: 255 }).notNull(),
  location: varchar('location', { length: 255 }),
  startDate: varchar('start_date', { length: 20 }).notNull(),
  endDate: varchar('end_date', { length: 20 }),
  isCurrent: boolean('is_current').default(false),
  description: text('description'),
  achievements: jsonb('achievements'), // Array of achievements
  displayOrder: integer('display_order').default(0),
});

export const certifications = pgTable('certifications', {
  id: serial('id').primaryKey(),
  teamMemberId: integer('team_member_id').references(() => teamMembers.id).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  issuer: varchar('issuer', { length: 255 }).notNull(),
  issueDate: varchar('issue_date', { length: 20 }).notNull(),
  expiryDate: varchar('expiry_date', { length: 20 }),
  credentialId: varchar('credential_id', { length: 100 }),
  credentialUrl: varchar('credential_url', { length: 500 }),
  displayOrder: integer('display_order').default(0),
});

export const skills = pgTable('skills', {
  id: serial('id').primaryKey(),
  teamMemberId: integer('team_member_id').references(() => teamMembers.id).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  proficiency: integer('proficiency'), // 1-5 scale
  yearsOfExperience: integer('years_of_experience'),
  displayOrder: integer('display_order').default(0),
});

// Availability / Scheduling (from comprehensive plan)
export const availabilitySlots = pgTable('availability_slots', {
  id: serial('id').primaryKey(),
  teamMemberId: integer('team_member_id').references(() => teamMembers.id).notNull(),
  dayOfWeek: integer('day_of_week').notNull(), // 0-6 (Sunday-Saturday)
  startTime: varchar('start_time', { length: 10 }).notNull(), // HH:MM format
  endTime: varchar('end_time', { length: 10 }).notNull(), // HH:MM format
  timezone: varchar('timezone', { length: 50 }).default('America/Los_Angeles'),
  slotType: varchar('slot_type', { length: 50 }).default('consultation'), // consultation, support, meeting
  isRecurring: boolean('is_recurring').default(true),
  maxBookingsPerSlot: integer('max_bookings_per_slot').default(1),
  isActive: boolean('is_active').default(true).notNull(),
});

export const bookedAppointments = pgTable('booked_appointments', {
  id: serial('id').primaryKey(),
  teamMemberId: integer('team_member_id').references(() => teamMembers.id).notNull(),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientEmail: varchar('client_email', { length: 255 }).notNull(),
  clientPhone: varchar('client_phone', { length: 50 }),
  appointmentDate: timestamp('appointment_date').notNull(),
  durationMinutes: integer('duration_minutes').default(60),
  meetingType: varchar('meeting_type', { length: 50 }).default('consultation'), // consultation, support, followup
  meetingTopic: varchar('meeting_topic', { length: 255 }),
  meetingNotes: text('meeting_notes'),
  meetingLink: varchar('meeting_link', { length: 500 }),
  status: varchar('status', { length: 20 }).default('scheduled'), // scheduled, confirmed, completed, cancelled, no-show
  reminderSent: boolean('reminder_sent').default(false),
  followupSent: boolean('followup_sent').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Type exports for use in the application
export type Service = InferSelectModel<typeof services>;
export type NewService = InferInsertModel<typeof services>;
export type ServiceContent = InferSelectModel<typeof serviceContent>;
export type NewServiceContent = InferInsertModel<typeof serviceContent>;
export type Inquiry = InferSelectModel<typeof inquiries>;
export type NewInquiry = InferInsertModel<typeof inquiries>;
export type BlogPost = InferSelectModel<typeof blogPosts>;
export type NewBlogPost = InferInsertModel<typeof blogPosts>;
export type Testimonial = InferSelectModel<typeof testimonials>;
export type NewTestimonial = InferInsertModel<typeof testimonials>;
export type Subscriber = InferSelectModel<typeof subscribers>;
export type NewSubscriber = InferInsertModel<typeof subscribers>;

// New types for experience and availability
export type TeamMember = InferSelectModel<typeof teamMembers>;
export type NewTeamMember = InferInsertModel<typeof teamMembers>;
export type TeamMemberExperience = InferSelectModel<typeof teamMemberExperience>;
export type NewTeamMemberExperience = InferInsertModel<typeof teamMemberExperience>;
export type Certification = InferSelectModel<typeof certifications>;
export type NewCertification = InferInsertModel<typeof certifications>;
export type Skill = InferSelectModel<typeof skills>;
export type NewSkill = InferInsertModel<typeof skills>;
export type AvailabilitySlot = InferSelectModel<typeof availabilitySlots>;
export type NewAvailabilitySlot = InferInsertModel<typeof availabilitySlots>;
export type BookedAppointment = InferSelectModel<typeof bookedAppointments>;
export type NewBookedAppointment = InferInsertModel<typeof bookedAppointments>;
