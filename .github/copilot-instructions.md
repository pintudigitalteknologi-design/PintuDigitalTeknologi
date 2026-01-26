# Copilot Instructions for Webindulu

This document guides AI agents in developing for the Webindulu landing page—a high-performance Next.js agency site with custom animations and gray-primary color palette.

## Project Overview

**Webindulu** is a modern landing page for a digital services agency built with:

- **Next.js 16** (App Router) + React 19
- **Tailwind CSS v4** with custom CSS animations
- **Framer Motion** for interactive animations
- **shadcn/ui** components + custom styling
- **Lucide React** for icons
- **TypeScript** for type safety

The site consists of **9 sections** (Hero → Services → Portfolio → Features → Testimonials → Contact → Footer) arranged in [app/page.tsx](app/page.tsx).

## Architecture & Component Patterns

### Section-Based Layout

All major content sections live in [components/sections/](components/sections/) as standalone, exported components:

```tsx
// Pattern: Use motion.div with whileInView for scroll animations
export function FeatureName() {
  return (
    <section id="feature-id" className="relative py-24 md:py-36 overflow-hidden">
      <motion.div initial={{...}} whileInView={{...}} viewport={{once: true}}>
        {/* Content */}
      </motion.div>
    </section>
  );
}
```

**Key patterns:**

- `id` attribute for anchor links (e.g., `id="services"`)
- Gradient backgrounds with `bg-gradient-to-b from-background to-secondary/5`
- Radial gradient overlays for depth (see HeroSection, ServicesSection)
- Grid layouts: `md:grid-cols-2 lg:grid-cols-3` for responsive card grids

### Animation Philosophy

- **Framer Motion**: Scroll-triggered (`whileInView`) + stagger animations via `delay: index * 0.1`
- **CSS Animations**: Custom keyframes in [app/globals.css](app/globals.css) (e.g., `animate-gradient-shift`, `animate-fade-down`)
- **GPU-Optimized**: Use `transform`, `opacity`, `scale` only—avoid layout shifts
- **Respect user preferences**: Animations should respect `prefers-reduced-motion`

### UI Component Library

[components/ui/](components/ui/) contains shadcn/ui components. **Do not modify these directly**—they're generated from the shadcn CLI. Customization happens via Tailwind classes at usage sites, not in component definitions.

Example custom button styling:

```tsx
<Button
  className="bg-gradient-to-r from-accent to-primary hover:from-accent/90 
    hover:to-primary/90 text-white px-12 py-6 rounded-xl shadow-2xl 
    hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] transform hover:scale-105"
/>
```

## Design System & Styling Conventions

### Color Palette (in [app/globals.css](app/globals.css))

```
--background: #f8f8f8 (light) / #0f0f0f (dark)
--foreground: #1a1a1a (light) / #f5f5f5 (dark)
--primary: #2d2d2d (dark gray)
--accent: #3b82f6 (blue) – used for highlights, CTAs, links
--secondary: #e8e8e8 (light gray)
```

**Usage rules:**

- **Text**: `text-foreground` (primary text), `text-foreground/80` (secondary), `text-foreground/60` (tertiary)
- **Backgrounds**: `bg-background`, `bg-secondary`, `bg-primary` for dark text areas
- **Accents**: `text-accent`, `from-accent`, `to-primary` for gradients and CTAs
- **Borders**: `border-border` or `border-accent/40` on hover
- **Gradients**: Always use `from-accent via-primary to-accent` or similar for hero/CTA sections

### Responsive Breakpoints

- **Mobile**: Default (no prefix)
- **md**: `md:` (768px+)
- **lg**: `lg:` (1024px+)
- **xl**: Not used in current design

**Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Spacing & Radius

- **Radius**: `--radius: 0.75rem` (applied via `rounded-xl` or `rounded-2xl`)
- **Section padding**: `py-24 md:py-36` (6rem mobile, 9rem desktop)
- **Card padding**: `p-8` (typical)
- **Gap between cards**: `gap-6`

## Critical Developer Workflows

### Setup & Development

```bash
pnpm install          # Install dependencies (uses pnpm, not npm)
pnpm run dev          # Start dev server (localhost:3000)
pnpm run build        # Build for production
pnpm run start        # Run production build
pnpm run lint         # Run ESLint
```

### Build & Performance Optimizations

- **Next.js Config** ([next.config.mjs](next.config.mjs)): Compression enabled, type errors ignored, headers set for caching static assets
- **TypeScript**: `ignoreBuildErrors: true` in next.config—be aware this bypasses strict type checking at build time
- **Images**: Using Tailwind gradients instead of image files for most backgrounds (except hero background image)

### Deployment

- Production-ready on Vercel (includes Analytics integration via `@vercel/analytics`)
- No build warnings expected; configuration is production-hardened

## Integration Points & Data Flow

### Navigation & Anchor Links

- Header navigation (sticky, in [components/Header.tsx](components/Header.tsx)) links to section IDs
- CTA buttons use `href="#contact"`, `href="#portfolio"` for smooth scrolling
- Mobile menu toggle state managed via `useState` in Header component

### Form Integration

- Contact section uses native HTML form (see [components/sections/ContactSection.tsx](components/sections/ContactSection.tsx))
- No external form library; form handling should be minimal (placeholder for backend integration)

### Analytics

- Vercel Analytics integrated (`import { Analytics } from '@vercel/analytics/react'`)
- Tracks page views and Core Web Vitals automatically

## Project-Specific Conventions

### File Naming

- **Section components**: PascalCase with full name, e.g., `HeroSection.tsx`, `ServicesSection.tsx`
- **UI components**: Kebab-case, e.g., `accordion.tsx`, `button.tsx`
- **Utilities**: Kebab-case, e.g., `use-toast.ts`

### "Use Client" Directive

- Applied to **all interactive sections** (Header, Hero, Services, etc.)
- Required for: `useState`, event handlers, scroll listeners, Framer Motion animations
- **Never forget** `"use client"` when adding interactivity

### Importing & Path Aliases

- Use `@/` alias for all imports (configured in [tsconfig.json](tsconfig.json))
- Correct: `import { Button } from "@/components/ui/button"`
- Wrong: `import { Button } from "../ui/button"`

## Common Patterns by Section Type

### Card Component Pattern (Services, Portfolio, Testimonials)

```tsx
{
  items.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative rounded-2xl border border-border/50 
      hover:border-accent/40 transition-all duration-500 
      hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)] hover:-translate-y-2 
      bg-background backdrop-blur-sm overflow-hidden"
    >
      {/* Card content with group-hover: prefix for hover states */}
    </motion.div>
  ));
}
```

### Stats Section Pattern

```tsx
{
  stats.map((stat) => (
    <div
      key={stat.label}
      className="p-6 rounded-2xl 
    bg-gradient-to-br from-primary/10 to-accent/10 
    border border-border hover:border-accent/40 
    transition-all duration-500 group text-center"
    >
      <div
        className="text-3xl font-bold text-transparent 
      bg-clip-text bg-gradient-to-r from-primary to-accent"
      >
        {stat.value}
      </div>
      <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
    </div>
  ));
}
```

### CTA (Call-to-Action) Section Pattern

- Always include `Zap` icon (from Lucide)
- Use gradient button with shadow: `shadow-2xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)]`
- Include secondary outline button alternative
- Gradient background: `from-accent/10 via-primary/10 to-accent/10`

## Troubleshooting & Edge Cases

### Performance Issues

- If Lighthouse score drops: Check for layout shifts in card animations, excessive shadow effects, or unoptimized images
- GPU acceleration: Ensure animations use `transform` and `opacity`, not `width`/`height`

### Mobile Responsiveness

- Test on `md:` (768px) and `lg:` (1024px) breakpoints
- Verify `px-4 sm:px-6 lg:px-8` padding stack works correctly
- Check CTA buttons stack vertically on mobile (`flex-col sm:flex-row`)

### Type Safety

- Despite `ignoreBuildErrors: true`, maintain strict typing for AI-assisted development clarity
- Use explicit type annotations for props and state

## Quick Reference: Key Files

| File                                           | Purpose                                       |
| ---------------------------------------------- | --------------------------------------------- |
| [app/page.tsx](app/page.tsx)                   | Main page—section composition and order       |
| [app/globals.css](app/globals.css)             | Design tokens (colors, animations, fonts)     |
| [components/Header.tsx](components/Header.tsx) | Sticky nav + mobile menu                      |
| [components/sections/](components/sections/)   | All major content sections                    |
| [next.config.mjs](next.config.mjs)             | Performance & build config                    |
| [package.json](package.json)                   | Dependencies (pnpm + Next.js 16, Tailwind v4) |

---

**Last Updated**: January 2026 | **Framework**: Next.js 16 | **Status**: Production-Ready
