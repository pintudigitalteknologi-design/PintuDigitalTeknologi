# Pintu Digital Teknologi - CSS Animation Guide

## 🎬 Animation System Overview

All animations are pure CSS-based, providing smooth 60fps performance without JavaScript overhead. Animations are GPU-accelerated and battery-efficient.

---

## 📚 Available Animations

### Core Animations

#### 1. **fadeInUp**
```css
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```
- **Duration**: 0.6s
- **Effect**: Fade in + slide up 30px
- **Use Case**: Section headers, cards, buttons
- **Example**: Hero headline, service cards

#### 2. **fadeInDown**
```css
.animate-fade-in-down {
  animation: fadeInDown 0.6s ease-out;
}
```
- **Duration**: 0.6s
- **Effect**: Fade in + slide down 30px
- **Use Case**: Navigation, header elements
- **Example**: Sticky header entrance

#### 3. **slideInLeft**
```css
.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-out;
}
```
- **Duration**: 0.6s
- **Effect**: Fade in + slide from left 40px
- **Use Case**: Left-aligned content
- **Example**: Contact form section content

#### 4. **slideInRight**
```css
.animate-slide-in-right {
  animation: slideInRight 0.6s ease-out;
}
```
- **Duration**: 0.6s
- **Effect**: Fade in + slide from right 40px
- **Use Case**: Right-aligned content, CTAs
- **Example**: "View All Projects" button

#### 5. **scaleIn**
```css
.animate-scale-in {
  animation: scaleIn 0.5s ease-out;
}
```
- **Duration**: 0.5s
- **Effect**: Fade in + scale from 0.95 to 1
- **Use Case**: Modal dialogs, emphasis
- **Example**: Success message in contact form

#### 6. **fadeIn**
```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}
```
- **Duration**: 0.6s
- **Effect**: Simple fade in
- **Use Case**: Background elements, text
- **Example**: Section backgrounds

#### 7. **slideUp**
```css
.animate-slide-up {
  animation: slideUp 0.8s ease-out;
}
```
- **Duration**: 0.8s
- **Effect**: Fade in + slide up 60px
- **Use Case**: Strong entrance animations
- **Example**: Featured pricing card

### Continuous/Loop Animations

#### 8. **float**
```css
.animate-float {
  animation: float 3s ease-in-out infinite;
}
```
- **Duration**: 3s (infinite loop)
- **Effect**: Vertical floating motion (-20px)
- **Use Case**: Decorative elements, icons
- **Example**: Scroll indicator at bottom

#### 9. **glow**
```css
.animate-glow {
  animation: glow 2s ease-in-out infinite;
}
```
- **Duration**: 2s (infinite loop)
- **Effect**: Box-shadow pulse effect
- **Use Case**: Highlight important elements
- **Example**: Featured/popular badges

#### 10. **pulse-slow**
```css
.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}
```
- **Duration**: 2s (infinite loop)
- **Effect**: Opacity oscillation
- **Use Case**: Blinking indicators, highlights
- **Example**: Loading states

---

## 🎯 Using Stagger Animations

Create sequential animations by combining an animation class with stagger delay classes:

```html
<!-- Sequential entrance -->
<div class="animate-fade-in-up stagger-1">Item 1</div>
<div class="animate-fade-in-up stagger-2">Item 2</div>
<div class="animate-fade-in-up stagger-3">Item 3</div>
```

### Stagger Delays
```css
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

### Example Implementation
```tsx
// PortfolioSection.tsx - Project cards
{portfolioProjects.map((project, index) => (
  <div
    key={project.title}
    className="animate-fade-in-up"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Card content */}
  </div>
))}
```

---

## 🛠️ Implementation Examples

### Example 1: Section Header with Stagger
```tsx
<div className="space-y-4 mb-16">
  <h2 className="text-4xl md:text-5xl font-bold animate-fade-in-up">
    Our Services
  </h2>
  <p className="text-lg text-foreground/70 animate-fade-in-up stagger-1">
    Comprehensive web solutions...
  </p>
</div>
```

### Example 2: Grid with Progressive Animation
```tsx
<div className="grid md:grid-cols-3 gap-6">
  {services.map((service, index) => (
    <div
      key={service.title}
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Service card */}
    </div>
  ))}
</div>
```

### Example 3: Hover Animation with CSS
```tsx
<div className="group hover:-translate-y-2 transition-transform duration-300">
  {/* Card content - hover state moves up */}
</div>
```

### Example 4: Complex Animation Sequence
```tsx
<div className="space-y-8">
  {steps.map((step, index) => (
    <div
      key={step.number}
      className="animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Step content */}
    </div>
  ))}
</div>
```

---

## 🎨 Animation Best Practices

### ✅ DO's

1. **Use animations for guidance**
   ```tsx
   // ✅ Good: Animation directs attention
   <button className="animate-pulse-slow">Limited Time Offer</button>
   ```

2. **Keep animations subtle**
   ```tsx
   // ✅ Good: 0.6s is noticeable but not intrusive
   <div className="animate-fade-in-up">Content</div>
   ```

3. **Stagger related elements**
   ```tsx
   // ✅ Good: Cards appear in sequence
   items.map((item, i) => (
     <div 
       key={i}
       className="animate-fade-in-up"
       style={{ animationDelay: `${i * 100}ms` }}
     />
   ))
   ```

4. **Combine with meaningful hover states**
   ```tsx
   // ✅ Good: Animation + hover feedback
   <div className="group hover:shadow-lg transition-shadow animate-fade-in-up">
     Card content
   </div>
   ```

### ❌ DON'Ts

1. **Don't animate on every element**
   ```tsx
   // ❌ Bad: Too many animations
   <div className="animate-fade-in-up">
     <div className="animate-slide-in-left">
       <div className="animate-bounce">Overwhelming!</div>
     </div>
   </div>
   ```

2. **Don't use long animations**
   ```tsx
   // ❌ Bad: Animation too slow (feels broken)
   animation: fadeInUp 3s ease-out;
   
   // ✅ Good: 0.5-0.8s is sweet spot
   animation: fadeInUp 0.6s ease-out;
   ```

3. **Don't disable animations for accessibility**
   ```tsx
   // ❌ Bad: Ignores user preferences
   animation: always-on;
   
   // ✅ Good: Respects prefers-reduced-motion
   @media (prefers-reduced-motion: reduce) {
     * {
       animation-duration: 0.01ms !important;
     }
   }
   ```

4. **Don't mix too many animation types on one element**
   ```tsx
   // ❌ Bad: Confusing visual effect
   class="animate-bounce animate-pulse animate-spin"
   
   // ✅ Good: One animation per element
   class="animate-fade-in-up"
   ```

---

## 📱 Performance Considerations

### GPU Acceleration
```css
/* These properties trigger GPU acceleration */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
  /* Uses: transform (translate), opacity */
  /* Avoids: width, height, left, top */
}
```

### Mobile Performance
- All animations run at 60fps on mobile devices
- No JavaScript thread blocking
- Minimal battery drain
- Smooth scrolling not affected

### Disable Animations Optionally
```css
/* For accessibility - respects prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🎯 Animation Timing Guide

| Duration | Use Case | Example |
|----------|----------|---------|
| 0.3s | Quick feedback | Button hover, icon change |
| 0.5s | Emphasis animations | Form submit, modal open |
| 0.6s | Standard entrance | Section header, card entrance |
| 0.8s | Prominent entrance | Hero content, featured section |
| 1s | Smooth transitions | Page transitions, major changes |
| 2-3s | Continuous loop | Floating icons, pulsing elements |
| 4s+ | Background effects | Very slow animations (rare) |

---

## 🎬 Animation Reference in Components

### Header.tsx
```tsx
// Mobile menu entrance
{isMenuOpen && (
  <div className="animate-fade-in-down">
    {/* Mobile menu */}
  </div>
)}
```

### HeroSection.tsx
```tsx
// Hero elements with stagger
<div className="animate-fade-in-down" />      {/* Badge */}
<div className="animate-fade-in-up" />         {/* Headline */}
<div className="animate-fade-in-up stagger-1" /> {/* Subheading */}
<div className="animate-bounce" />             {/* Scroll indicator */}
```

### ServicesSection.tsx
```tsx
// Service cards with stagger
services.map((service, index) => (
  <div
    className="animate-fade-in-up group hover:-translate-y-2"
    style={{ animationDelay: `${index * 100}ms` }}
  />
))
```

### ContactSection.tsx
```tsx
// Split layout animations
<div className="animate-slide-in-left" />    {/* Content */}
<div className="animate-slide-in-right" />   {/* Form */}
```

---

## 🔄 Customizing Animations

### Adding a New Animation
```css
@keyframes customAnimation {
  from {
    opacity: 0;
    transform: translateY(10px) rotate(-5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(0deg);
  }
}

.animate-custom {
  animation: customAnimation 0.6s ease-out;
}
```

### Adjusting Timing
```css
/* Slower animation */
.animate-fade-in-up {
  animation-duration: 0.8s; /* was 0.6s */
}

/* Faster animation */
.animate-fade-in-up {
  animation-duration: 0.4s; /* was 0.6s */
}
```

### Easing Functions Explained
- `ease-out`: Starts fast, ends slow (natural feel)
- `ease-in`: Starts slow, ends fast (emphasis)
- `ease-in-out`: Slow start and end (smooth)
- `linear`: Constant speed (robotic feel)

---

## 🧪 Testing Animations

### Chrome DevTools
1. Open DevTools (F12)
2. Go to Animations tab
3. Refresh page to capture animations
4. Slow down playback to verify smoothness

### Performance Testing
```bash
# Lighthouse audit
npx lighthouse https://your-site.com --view
```

### Browser Compatibility
- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support
- ✅ Safari: Full support
- ✅ Mobile browsers: Full support (60fps)

---

## 📋 Animation Checklist

- [ ] No animation blocks user interaction
- [ ] Animations complete within 1 second for UI feedback
- [ ] Continuous animations are subtle (< 0.3 second per cycle)
- [ ] Animation direction makes sense (up for positive, down for content reveal)
- [ ] Stagger creates clear visual hierarchy
- [ ] No more than 3 different animation types per section
- [ ] Animations work on mobile (60fps)
- [ ] Respects prefers-reduced-motion (accessibility)
- [ ] Page remains usable during animations
- [ ] Loading states clearly indicate progress

---

## 🚀 Next Steps

1. **Monitor performance**: Use Chrome DevTools to verify 60fps
2. **Gather feedback**: Ask users if animations feel natural
3. **Adjust timing**: Fine-tune based on user perception
4. **Add more animations**: Use this guide to extend
5. **Maintain consistency**: Keep animation style across the site

---

Last updated: 2026
