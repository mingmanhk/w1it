'''# W1IT Website Redesign Blueprint

## Overview

This document outlines the design, features, and development plan for the W1IT website redesign. The goal is to create a modern, professional, and performant website that reflects W1IT's brand identity as a leading IT consultancy.

## Style, Design, and Features

### Global Design

*   **Layout:** 1200px max width, 12-column grid, 24px gutters, 32px page padding.
*   **Typography:**
    *   Headings: Space Grotesk
    *   Body: Inter
    *   Code: JetBrains Mono
*   **Color Palette:**
    *   Primary: Deep Navy (#0A1A2F), Electric Blue (#2F80ED), Aqua Cyan (#4FD1C5)
    *   Neutral: Soft Gray (#F2F4F7), Slate Gray (#475569)
    *   Dark Mode: Background (#0B0F19), Surface (#111827), Text (#E5E7EB)

### Components

*   **Header:** 72px height, white background, bottom border, navigation with 32px spacing, and a primary CTA button.
*   **Footer:** 4-column layout, navy background, white text, and a divider.
*   **Buttons:**
    *   Primary: Blue background, white text, 16px 28px padding, 6px radius.
    *   Secondary: Blue border, blue text, transparent background.
*   **Cards:** White/soft gray background, 1px border, 8px radius, 24px padding, and a subtle shadow.

### Homepage Structure

1.  **Header**
2.  **Hero Section:** 2-column layout with a text stack and a geometric illustration.
3.  **Value Proposition Section:** Highlighting Infrastructure, Automation, and Security.
4.  **CTA Banner:** Navy background with a centered text and button.
5.  **Footer**

## Development Plan (Initial Revamp)

*   [x] **Setup Design System:** Update `tailwind.config.ts` and `globals.css` with new typography, colors, and spacing.
*   [x] **Update Fonts:** Load and apply `Space Grotesk`, `Inter`, and `JetBrains Mono` in `layout.tsx`.
*   [x] **Revamp Header:** Rebuild `Header.tsx` to match the mockup specifications.
*   [x] **Revamp Footer:** Rebuild `Footer.tsx` to match the mockup specifications.
*   [x] **Update Homepage:** Rebuild the Hero Section, Value Proposition, and CTA Banner on `page.tsx`.

'''