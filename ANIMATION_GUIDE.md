# Animation Guide 🎬

## Overview of New Animations

Your portfolio now features **8 new CSS animations** plus **multiple component-level animations** for a truly dynamic experience.

---

## 🎨 CSS Animations (in `src/index.css`)

### 1. **Float Animation**
```css
animation: float 3s ease-in-out infinite;
```
- **Duration**: 3 seconds
- **Effect**: Smooth vertical floating motion
- **Used on**: CTA buttons, some card hovers
- **Easing**: ease-in-out for natural feel

### 2. **Float Slow Animation**
```css
animation: float-slow 4s ease-in-out infinite;
```
- **Duration**: 4 seconds (slower than float)
- **Effect**: Gentle vertical floating
- **Used on**: Large background elements, About section cards
- **Easing**: ease-in-out for smooth transitions

### 3. **Pulse Glow Animation**
```css
animation: pulse-glow 2s ease-in-out infinite;
```
- **Effect**: Glowing pulse that grows and shrinks
- **Used on**: Timeline dots, emphasis elements
- **Colors**: Purple glow with opacity changes

### 4. **Rotate Slow Animation**
```css
animation: rotate-slow 20s linear infinite;
```
- **Duration**: 20 seconds
- **Effect**: Continuous 360° rotation
- **Used on**: Decorative elements
- **Linear timing**: Constant rotation speed

### 5. **Shimmer Animation**
```css
animation: shimmer 2s infinite;
```
- **Effect**: Light sweeping across text/elements
- **Used on**: Gradient text effects
- **Colors**: White gradient sweep

### 6. **Blob Animation**
```css
animation: blob 7s infinite;
```
- **Duration**: 7 seconds
- **Effect**: Organic morphing blob shapes
- **Used on**: Background gradient blobs
- **Transform**: Translate + scale for organic feel

### 7. **Gradient Shift Animation**
```css
animation: gradient-shift 4s ease infinite;
```
- **Duration**: 4 seconds
- **Effect**: Gradient colors shift smoothly
- **Used on**: Background overlays
- **Technique**: background-position animation

### 8. **Fade In Animation**
```css
animation: fade-in 0.8s ease-out forwards;
```
- **Duration**: 0.8 seconds
- **Effect**: Smooth opacity and translate up
- **Used on**: Section headers, text content
- **Fill Mode**: forwards (stays at final state)

---

## 🎯 Component-Level Animations

### Hero Section
```tsx
// Button with float animation
<a className="animate-float">View My Work</a>

// Social icons with staggered float
<a className="animate-float" style={{ animationDelay: '0.2s' }}>
  <Github />
</a>

// Ping dots for visual interest
<div className="animate-ping" />
```

### Project Cards
```tsx
// Scale on hover
<div className="hover:scale-[1.02]">
  {/* Card content */}
</div>

// Glow on hover
<div className="hover:shadow-2xl hover:shadow-purple-500/20">
  {/* Card content */}
</div>

// Staggered fade-in
<div className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
  {/* Card content */}
</div>
```

### Skill Badges
```tsx
// Floating badges
<div className="animate-float" style={{ animationDelay: `${i * 0.05}s` }}>
  <span className="group-hover/skill:scale-110 transition-transform">
    {skill}
  </span>
</div>

// Glow effect on hover
<div className="group-hover/skill:opacity-50 transition-opacity">
  {/* Glow backdrop */}
</div>
```

### Timeline Elements
```tsx
// Animated timeline line
<div className="animate-pulse">
  {/* Gradient line */}
</div>

// Expanding dots on hover
<div className="group-hover:scale-125 transition-transform" />

// Slide in effect
<div className="animate-slide-in-left">
  {/* Content */}
</div>
```

---

## 🎭 Transition Effects

### Hover Transitions
```tsx
// Smooth color transitions
className="hover:text-purple-400 transition-colors duration-300"

// Scale with spring-like feel
className="hover:scale-110 transition-transform duration-300"

// Shadow glow effect
className="hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"

// Border color fade
className="hover:border-purple-500/50 transition-all duration-300"
```

### Staggered Animations
```tsx
// Elements appear one after another
{items.map((item, index) => (
  <div style={{ animationDelay: `${index * 100}ms` }}>
    {item}
  </div>
))}
```

---

## 🌌 Background Animations

### Cosmic Background (`CosmicBackground.tsx`)
- **Animated Particles**: 80 interactive particles that react to mouse movement
- **Floating Blobs**: 3 gradient blobs with staggered animations
- **Blob Movement**: Translate and scale transforms
- **Gradient Shift**: Dynamic overlay that shifts colors
- **Radial Gradient**: Subtle depth effect with radial patterns

```tsx
<div className="animate-blob" />
<div className="animate-blob" style={{ animationDelay: '2s' }} />
<div className="animate-float" />
<div className="animate-float-slow" />
<div className="animate-gradient-shift" />
```

---

## 📊 Animation Performance Tips

1. **Use `will-change` sparingly** - Only on elements that animate frequently
2. **Prefer transform & opacity** - These don't trigger reflows
3. **GPU acceleration** - Use `transform: translateZ(0)` if needed
4. **Stagger animations** - Prevents janky simultaneous animations
5. **Respect prefers-reduced-motion** - Consider adding this in future updates

---

## 🎨 Customizing Animations

### Speed Up an Animation
```tsx
// Change from 3s to 1.5s
className="animate-float" 
// Create custom animation in index.css
// animation: float 1.5s ease-in-out infinite;
```

### Change Animation Direction
```tsx
// Add to index.css
@keyframes float-reverse {
  0%, 100% { transform: translateY(-30px); }
  50% { transform: translateY(0px); }
}
```

### Adjust Hover Scale
```tsx
// From scale-110 to scale-125
className="hover:scale-125 transition-transform"
```

### Change Glow Color
```tsx
// From purple to cyan
className="hover:shadow-cyan-500/50"
```

---

## ✨ Key Animation Classes Used

| Class | Purpose |
|-------|---------|
| `animate-fade-in` | Fade in with slide up |
| `animate-slide-in-left` | Slide from left |
| `animate-slide-in-right` | Slide from right |
| `animate-gradient` | Animated gradient background |
| `animate-float` | Floating motion |
| `animate-float-slow` | Slower floating |
| `animate-pulse-glow` | Glowing pulse |
| `animate-rotate-slow` | Slow rotation |
| `animate-shimmer` | Shimmer effect |
| `animate-blob` | Organic blob morph |
| `animate-gradient-shift` | Shifting gradients |
| `animate-pulse` | Standard pulse (Tailwind) |
| `hover:scale-*` | Scale on hover |
| `transition-all` | Smooth transitions |

---

## 🚀 Browser Compatibility

All animations use standard CSS and are supported in:
- ✅ Chrome/Edge (88+)
- ✅ Firefox (87+)
- ✅ Safari (14+)
- ✅ Mobile browsers

---

**Enjoy your beautifully animated portfolio!** ✨
