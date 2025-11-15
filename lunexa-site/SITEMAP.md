# Lunexa Website - Site Map

## 🌐 Live Routes

### Main Pages

#### 1. Homepage - `/`
**Sections (with hash anchors):**
- `#hero` - Main hero with tagline & CTA
- `#featured` - Featured in (logos)
- `#testimonials` - User testimonials carousel
- `#how-it-works` - 3-step process
- `#features` - 4 core features
- `#mission` - Mission statement
- `#pricing` - Pricing tiers
- `#faq` - Frequently asked questions

**Navigation:**
- Top nav links to above sections
- Sticky on scroll with blur
- Mobile: Burger menu → right tray

#### 2. About - `/about`
**Sections:**
- Mission & Vision
- Core Values (4 cards)
- Team (4 members)
- Technology Stack
- Compliance Notice

#### 3. Contact - `/contact`
**Content:**
- Contact form (name, email, message)
- Email: support@lunexa.com
- Office address
- Social links (Twitter, Discord)

#### 4. Blog - `/blog`
**Content:**
- Blog post listing
- 4 articles with:
  - Cover image
  - Title & excerpt
  - Read time
  - Publication date
  - Tags

#### 5. Blog Post - `/blog/[slug]`
**Available slugs:**
- `ai-driven-crypto-trading`
- `risk-first-approach`
- `backtesting-without-self-deception`
- `explainable-ai-in-trading`

**Each post includes:**
- Full article (800-1200 words)
- Header with meta (date, read time, tags)
- Cover image
- Formatted content
- CTA at bottom

---

## 📱 Navigation Structure

### Primary Navigation (Top Bar)
*Only hash links to homepage sections*
- Features → `/#features`
- How It Works → `/#how-it-works`
- Testimonials → `/#testimonials`
- Pricing → `/#pricing`
- FAQ → `/#faq`
- **Get Started** (CTA button)

### Secondary Navigation (Footer)

**Product**
- Features → `/#features`
- Pricing → `/#pricing`
- FAQ → `/#faq`

**Company**
- About → `/about`
- Blog → `/blog`
- Contact → `/contact`

**Legal**
- Privacy Policy → `#`
- Terms of Service → `#`
- Risk Disclosure → `#`

### Mobile Navigation (Burger Menu)
*Same as primary nav, plus:*
- About → `/about`
- Blog → `/blog`
- Contact → `/contact`
- **Get Started** (CTA button)

---

## 🎨 Component Map

### Global Components
- `<Navbar />` - Sticky header (all pages)
- `<Footer />` - Site footer (all pages)

### Homepage Components
- `<Hero />` - Hero section
  - `<PipelineScene />` - 3D orbital animation
  - `<NeumorphButton />` - CTAs
- `<Featured />` - Logo section
- `<Testimonials />` - Carousel
  - `<GlassCard />` (repeated)
- `<HowItWorks />` - 3-step process
  - `<GlassCard />` (repeated)
- `<Features />` - Feature grid
  - `<GlassCard />` (repeated)
- `<Mission />` - Mission text
- `<Pricing />` - Pricing table
  - `<GlassCard />` (repeated)
  - `<NeumorphButton />` (repeated)
- `<FAQ />` - Accordion

### About Page Components
- `<GlassCard />` - Various sections

### Contact Page Components
- `<GlassCard />` - Form & info
- `<NeumorphButton />` - Submit

### Blog Components
- `<GlassCard />` - Post cards (listing)
- Article renderer (post detail)

---

## 📂 File Structure Map

```
lunexa-site/
│
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout (metadata, font)
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles
│   │
│   ├── about/
│   │   └── page.tsx             # About page
│   │
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   │
│   └── blog/
│       ├── page.tsx             # Blog listing
│       └── [slug]/
│           └── page.tsx         # Blog post detail
│
├── components/                  # React components
│   ├── Navbar.tsx               # Top navigation
│   ├── MobileTray.tsx           # Mobile menu
│   ├── Footer.tsx               # Site footer
│   │
│   ├── Hero.tsx                 # Hero section
│   ├── PipelineScene.tsx        # 3D canvas animation
│   ├── Featured.tsx             # Logos
│   ├── Testimonials.tsx         # Carousel
│   ├── HowItWorks.tsx           # 3-step
│   ├── Features.tsx             # Feature grid
│   ├── Mission.tsx              # Mission text
│   ├── Pricing.tsx              # Pricing table
│   ├── FAQ.tsx                  # Accordion
│   │
│   ├── NeumorphButton.tsx       # Reusable button
│   └── GlassCard.tsx            # Reusable card
│
├── lib/
│   └── content.ts               # All site content & blog posts
│
├── public/                      # Static assets (future)
│   └── images/                  # Placeholder for images
│
├── Configuration Files
│   ├── package.json             # Dependencies
│   ├── tsconfig.json            # TypeScript config
│   ├── tailwind.config.ts       # Tailwind config
│   ├── postcss.config.mjs       # PostCSS config
│   ├── next.config.ts           # Next.js config
│   ├── .eslintrc.json           # ESLint rules
│   └── .gitignore               # Git ignore
│
└── Documentation
    ├── README.md                # Technical docs
    ├── QUICKSTART.md            # Quick start guide
    ├── PROJECT_SUMMARY.md       # Project overview
    └── SITEMAP.md               # This file
```

---

## 🔗 Internal Links

### Cross-Page Links
- Homepage → About: Footer or mobile menu
- Homepage → Contact: Footer or mobile menu
- Homepage → Blog: Footer or mobile menu
- Blog listing → Individual posts: Click card
- Any page → Homepage: Click logo

### Hash Links (Homepage only)
- All work within `/#section-id`
- Smooth scroll behavior
- Highlight on scroll (optional future enhancement)

---

## 🎯 User Flows

### New Visitor Flow
1. Land on homepage (`/`)
2. Read hero → scroll through sections
3. See testimonials → How It Works → Features
4. Check pricing → Compare tiers
5. Read FAQ → Answer questions
6. Click "Get Started" CTA

### Blog Reader Flow
1. Navigate to `/blog` (footer link)
2. Browse 4 articles
3. Click article card
4. Read full post at `/blog/[slug]`
5. Click CTA "Get Started" at bottom
6. Return to homepage or pricing

### Contact Flow
1. Navigate to `/contact` (footer link)
2. Fill form (name, email, message)
3. Submit (future: send to backend)
4. Confirmation (future enhancement)

### Mobile User Flow
1. Land on homepage
2. Tap burger icon → menu slides in
3. Navigate via menu
4. Close menu → explore page
5. Sticky nav available on scroll

---

## 📊 Content Hierarchy

### Homepage Hierarchy
```
Hero (h1)
├── Tagline (main message)
├── Subtitle (explanation)
└── CTAs (primary + secondary)

Featured (h2)
└── Logos (visual credibility)

Testimonials (h2)
└── 6 cards (social proof)

How It Works (h2)
└── 3 steps (process clarity)

Features (h2)
└── 4 features (value props)

Mission (h2)
└── 2 paragraphs (vision/mission)

Pricing (h2)
└── 3 tiers (monetization)

FAQ (h2)
└── 8 Q&A pairs (objection handling)
```

### About Page Hierarchy
```
Title (h1)
└── Subtitle

Mission (h2)
└── Story paragraphs

Values (h2)
└── 4 value cards (h3 each)

Team (h2)
└── 4 member cards

Technology (h2)
└── Stack list

Compliance (notice)
```

### Contact Page Hierarchy
```
Title (h1)
└── Subtitle

Form (h2)
├── Name field
├── Email field
├── Message field
└── Submit button

Contact Info
├── Email (h3)
├── Office (h3)
└── Social (h3)
```

### Blog Hierarchy
```
Blog (h1)
└── Subtitle

Post Listing
└── 4 post cards
    ├── Cover
    ├── Meta (date, time)
    ├── Title (h2)
    ├── Excerpt
    └── Tags
```

### Blog Post Hierarchy
```
Back link

Meta info

Title (h1)
└── Tags

Cover image

Content
├── h2 (main sections)
├── h3 (subsections)
├── Paragraphs
├── Lists
└── Code snippets

CTA card
```

---

## 🚀 Future Expansion

**Potential new routes:**
- `/dashboard` - User dashboard
- `/login` - Authentication
- `/signup` - Registration
- `/docs` - API documentation
- `/pricing` - Dedicated pricing page (currently section)
- `/testimonials` - Full testimonials page
- `/case-studies` - Success stories
- `/api-reference` - API docs
- `/changelog` - Product updates

**Potential blog categories:**
- `/blog/category/[category]`
- Categories: Trading, AI, Risk, Strategy, Market Analysis

**Potential user flows:**
- `/onboarding` - New user setup
- `/profile` - User settings
- `/integrations` - Exchange connections
- `/strategies` - Strategy builder
- `/backtest` - Backtesting tool
- `/live-trading` - Live dashboard

---

## 📱 Responsive Breakpoints

**Desktop**: `1024px+`
- Full navigation visible
- Multi-column layouts
- Expanded cards

**Tablet**: `768px - 1023px`
- Burger menu appears
- 2-column grids
- Adjusted spacing

**Mobile**: `< 768px`
- Single column layouts
- Burger menu
- Stacked elements
- Touch-optimized spacing

---

## ♿ Accessibility Map

**Keyboard Navigation:**
- Tab through all interactive elements
- Enter to activate buttons/links
- Escape to close mobile menu
- Arrow keys in FAQ (future enhancement)

**Screen Readers:**
- ARIA labels on all icons
- Semantic HTML (nav, main, footer, article)
- Alt text ready for images
- Form labels properly associated

**Focus States:**
- Visible focus indicators
- Skip-to-content link (future)
- Focus trap in mobile menu

---

**Last Updated**: Build completion
**Version**: 1.0.0
**Status**: Production-ready ✅
