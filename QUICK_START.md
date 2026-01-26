# ⚡ PixelForge - Quick Start Guide

Get your professional web development agency landing page live in minutes!

---

## 🚀 5-Minute Setup

### Step 1: Start Development Server
```bash
pnpm install      # Install dependencies
pnpm dev          # Start server
```
Open `http://localhost:3000` in your browser ✨

### Step 2: Customize Company Info (5 minutes)

#### Update Company Name
```tsx
// components/Header.tsx (Line 13)
<span className="bg-gradient-to-r from-primary to-accent">
  Your Company Name
</span>

// components/Footer.tsx (Line 27)
<Link href="/" className="text-2xl font-bold">
  Your Company Name
</Link>
```

#### Update Contact Information
```tsx
// components/sections/ContactSection.tsx

// Line 80 - Email
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

// Line 92 - Phone
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>

// Line 102 - Location
<p>Your City, State<br />Country</p>
```

#### Update Navigation Links
```tsx
// components/Header.tsx (Line 12-17)
const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  // Update labels as needed
]
```

### Step 3: Update Key Sections (5 minutes)

#### Hero Headline
```tsx
// components/sections/HeroSection.tsx (Line 34)
<span className="text-primary">Elevate Your</span>
<br />
<span className="bg-gradient-to-r from-accent to-accent/60">
  Digital Presence  // Change this
</span>
```

#### Hero Subheading
```tsx
// components/sections/HeroSection.tsx (Line 41)
<p className="text-xl text-foreground/70">
  We craft beautiful, fast, and conversion-optimized websites...
  // Update this text
</p>
```

#### Update Services
```tsx
// components/sections/ServicesSection.tsx (Line 10-49)
const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built websites...', // Update
  },
  // Edit all 6 services
]
```

#### Update Pricing
```tsx
// components/sections/PricingSection.tsx (Line 8-45)
const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',  // Change to your price
    description: 'Perfect for...',  // Your description
    features: ['Feature 1', 'Feature 2'],  // Your features
  },
]
```

#### Update Portfolio Projects
```tsx
// components/sections/PortfolioSection.tsx (Line 5-27)
const portfolioProjects = [
  {
    title: 'Your Project Name',
    description: 'What the project does',
    tags: ['Technology', 'Stack'],
    link: 'https://project-link.com',
  },
]
```

### Step 4: Add Images (10 minutes)

#### Portfolio Project Images
Replace gradient backgrounds in `PortfolioSection.tsx`:
```tsx
// OLD: image: 'bg-gradient-to-br from-blue-50 to-blue-100',
// NEW: Use actual image
import Image from 'next/image'

<Image
  src="/portfolio/project1.jpg"
  alt="Project name"
  width={800}
  height={600}
/>
```

#### Add Logo
1. Replace `/public/placeholder-logo.svg` with your logo
2. Update in Header.tsx if using different path

---

## 🎨 Customization Guide

### Change Colors (Gray Theme)
```css
/* app/globals.css - Around line 8-40 */
:root {
  --primary: #2d2d2d;      /* Main dark color */
  --accent: #3b82f6;       /* Blue accent - CHANGE THIS */
  --background: #f8f8f8;   /* Light background */
  --secondary: #e8e8e8;    /* Medium gray */
}
```

#### Quick Color Changes
- **Primary (Dark)**: Used for headings, text
- **Accent (Blue)**: Used for buttons, highlights
- **Secondary (Gray)**: Used for backgrounds
- **Background (Light)**: Main page background

Example - Change accent to purple:
```css
--accent: #a855f7;  /* Purple instead of blue */
```

### Change Fonts
```tsx
// app/layout.tsx (Line 4-5)
import { YourFont, YourMonoFont } from 'next/font/google'

const _yourFont = YourFont({ subsets: ["latin"] })

// app/globals.css (Line 128)
@theme inline {
  --font-sans: 'Your Font', fallback;
  --font-mono: 'Your Mono', fallback;
}
```

### Update Brand Names/References
```bash
# Search and replace all instances
Search: "PixelForge"
Replace: "Your Company"

Search: "pixelforge.dev"
Replace: "your-domain.com"

Search: "TechFlow" (client names)
Replace: "Actual Client Names"
```

---

## 📱 Testing Your Changes

### Desktop Testing
```bash
pnpm dev
# Visit http://localhost:3000
# Test all sections
# Click all buttons and links
```

### Mobile Testing
```bash
# In Chrome DevTools (F12)
# Press Ctrl+Shift+M (Cmd+Shift+M on Mac)
# Test at various screen sizes:
# - iPhone SE (375px)
# - Tablet (768px)
# - Desktop (1440px)
```

### Performance Testing
```bash
# Run Lighthouse audit in Chrome DevTools
# Target: 90+ on all metrics
# LCP (Largest Contentful Paint): < 2.5s
# CLS (Cumulative Layout Shift): < 0.1
```

---

## 🚀 Deploy to Production

### Option 1: Vercel (Recommended - 2 minutes)
```bash
# 1. Push code to GitHub
git push origin main

# 2. Import project to Vercel
# - Go to vercel.com
# - Click "Import Project"
# - Select your GitHub repo
# - Click "Deploy"

# 3. Configure custom domain
# - Go to Project Settings
# - Domains section
# - Add your domain
```

### Option 2: Netlify
```bash
# 1. Install Netlify CLI
npm i -g netlify-cli

# 2. Build project
pnpm build

# 3. Deploy
netlify deploy --prod --dir=.next
```

### Option 3: Self-hosted
```bash
# 1. Build project
pnpm build

# 2. Start production server
pnpm start

# 3. Use process manager (PM2)
npm i -g pm2
pm2 start "pnpm start" --name "pixelforge"
```

---

## 📋 Pre-Launch Checklist

Before going live, complete these:

```
CONTENT
☐ Update all company information
☐ Replace placeholder testimonials
☐ Add real portfolio projects
☐ Update pricing and features
☐ Add actual client logos
☐ Update contact email/phone

LINKS
☐ Update all navigation links
☐ Test all internal links
☐ Add social media links
☐ Update footer links
☐ Test contact form

IMAGES
☐ Add portfolio project images
☐ Add team/company images
☐ Add logo
☐ Create Open Graph image

SEO
☐ Update meta title
☐ Update meta description
☐ Update keywords
☐ Submit sitemap to Google
☐ Set up Google Analytics

TESTING
☐ Test on mobile device
☐ Test all forms
☐ Test all links
☐ Run Lighthouse audit (90+)
☐ Check console for errors

DEPLOYMENT
☐ Custom domain configured
☐ SSL certificate installed
☐ Analytics installed
☐ Forms connected to email service
☐ Monitoring enabled
```

---

## 🔗 Connect Forms to Email Service

### Option 1: Formspree (Easiest)
```tsx
// components/sections/ContactSection.tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
  onSubmit={handleSubmit}
>
  {/* Form fields stay the same */}
</form>
```
1. Go to formspree.io
2. Create new form
3. Copy form ID
4. Update in component

### Option 2: SendGrid
```tsx
// api/send-email.ts (Create new file)
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function sendEmail(data: any) {
  const msg = {
    to: 'your-email@example.com',
    from: 'noreply@yourdomain.com',
    subject: 'New Contact Form Submission',
    html: `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Message: ${data.message}</p>
    `,
  }
  await sgMail.send(msg)
}
```

### Option 3: Mailgun
Similar to SendGrid - see Mailgun docs

---

## 🆘 Troubleshooting

### Issue: Page looks different on mobile
**Solution**: Use responsive design tools
```tsx
// Use Tailwind responsive classes
<div className="text-base md:text-xl lg:text-2xl">
  Responsive text
</div>
```

### Issue: Animations not working
**Solution**: Check CSS is loaded
```bash
# In DevTools, go to Sources tab
# Check that globals.css is included
# Animations are in styles
```

### Issue: Form not submitting
**Solution**: Check form connection
```tsx
// Verify handleSubmit is working
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log('Form submitted:', formData)
  // Connect to email service here
}
```

### Issue: Images not showing
**Solution**: Check file paths
```tsx
// Images must be in /public folder
<Image src="/images/project.jpg" alt="Project" />
// File path: /public/images/project.jpg
```

---

## 📚 Useful Resources

### Documentation
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Complete guide
- [PERFORMANCE.md](./PERFORMANCE.md) - Optimization tips
- [ANIMATIONS.md](./ANIMATIONS.md) - Animation reference
- [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md) - Full checklist

### External Resources
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Deployment: https://vercel.com/docs
- Form Services: https://formspree.io

---

## ✅ You're Ready!

Your landing page is now customized and ready to deploy!

### Summary
1. ✅ Installed dependencies
2. ✅ Updated company information
3. ✅ Customized sections
4. ✅ Added images
5. ✅ Changed colors/fonts
6. ✅ Tested everything
7. ✅ Deployed to production

### Next Steps
1. Monitor performance with Lighthouse
2. Track analytics
3. Update content regularly
4. Collect customer feedback
5. Add more features as needed

---

## 🎉 Congratulations!

Your professional web development agency landing page is live! 🚀

Need help? Check the documentation files or refer to the resource links above.

---

**Made with ❤️ for modern web development**

Last updated: January 2026
