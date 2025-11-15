# Lunexa - AI-Powered Crypto Trading Platform

Production-ready website for Lunexa, featuring:

## Features

- **Modern Design**: Glassmorphism cards, neumorphic buttons, luxury aesthetic
- **3D Pipeline Scene**: Custom canvas-based animation with orbital particles
- **Fully Responsive**: Desktop to mobile with burger menu
- **Performance**: Optimized animations with Framer Motion
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Content-Rich**: Auto-generated content adapted from SatWave context
- **Blog**: 4 pre-filled articles with markdown rendering

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Phosphor Icons

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /globals.css           # Global styles with custom utilities
  /layout.tsx            # Root layout with metadata
  /page.tsx              # Homepage
  /about/page.tsx        # About page
  /contact/page.tsx      # Contact page
  /blog/page.tsx         # Blog listing
  /blog/[slug]/page.tsx  # Individual blog posts

/components
  /Navbar.tsx            # Sticky navigation with blur effect
  /MobileTray.tsx        # Slide-in mobile menu
  /Hero.tsx              # Hero section with pipeline scene
  /PipelineScene.tsx     # 3D orbital animation
  /Featured.tsx          # Featured logos
  /Testimonials.tsx      # Auto-scroll carousel
  /HowItWorks.tsx        # 3-step process
  /Features.tsx          # Feature grid
  /Mission.tsx           # Mission statement
  /Pricing.tsx           # 3-tier pricing
  /FAQ.tsx               # Accordion FAQ
  /Footer.tsx            # Site footer
  /NeumorphButton.tsx    # Reusable neumorphic button
  /GlassCard.tsx         # Reusable glass card with animations

/lib
  /content.ts            # All site content (auto-generated from context)

## Design Tokens

- **Font**: Inter (300-700 weights)
- **Colors**:
  - Background: #0b0f14
  - Accent Cyan: #00e0ff
  - Accent Purple: #7a5cff
  - Accent Green: #00ffa3
- **Effects**:
  - Glass: `bg-white/8 backdrop-blur-xl`
  - Neumorphism: Inset shadows with hover glow
  - Animations: Fade/blur/slide-up with Framer Motion

## Deployment

Deploy to Vercel, Netlify, or any hosting platform supporting Next.js:

```bash
npm run build
```

## License

Proprietary - Lunexa © 2025
