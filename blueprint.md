# Blueprint: Seattle IT Solutions Provider Website

## Overview

This document outlines the development plan for a modern, serverless website for a Seattle-based IT solutions provider. The goal is to build a high-performance, scalable, and feature-rich platform using Next.js and Vercel.

The application will feature a comprehensive product/service catalog, an advanced inquiry system, and a robust back-end built on serverless technologies.

## Implemented Features (as of Initial Setup)

*   **Framework:** Next.js with App Router.
*   **Initial Project:** Basic Next.js boilerplate.

## Current Development Plan: Phase 1 - Foundation

This phase focuses on setting up the project structure, installing core dependencies, and building the foundational frontend and backend components.

### Step 1: Project Setup & Dependency Installation
- [ ] Install core dependencies for database, forms, and utilities: `@vercel/postgres`, `drizzle-orm`, `zod`, `react-hook-form`, `lucide-react`, `sharp`.
- [ ] Install development dependencies: `drizzle-kit`.
- [ ] Configure Tailwind CSS.

### Step 2: Basic Layout and Branding
- [ ] Clean up default Next.js boilerplate styles and components.
- [ ] Create a new root layout in `src/app/layout.tsx`.
- [ ] Design a new homepage in `src/app/page.tsx` with branding for "Seattle IT Solutions".
- [ ] The design will be clean, modern, and professional, incorporating a suitable color palette and typography.

### Step 3: Database & ORM Setup
- [ ] Configure Drizzle ORM to connect to Vercel Postgres.
- [ ] Define the initial database schema in `src/lib/db/schema.ts` based on the project plan.
- [ ] Create drizzle configuration file `drizzle.config.ts`.

### Step 4: Core API Endpoints
- [ ] Create initial API routes for core functionalities.
