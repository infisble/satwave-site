# SatWave Website - Site Map

## рџЊђ Live Routes

### Main Pages

#### 1. Homepage - `/`
**Sections (with hash anchors):**
- `#hero` - Main hero with tagline & CTA
- `#featured` - Featured in (logos)
- `#testimonials` - User testimonials carousel
- `#how-it-works` - 5-stage process
- `#features` - 4 core features
- `#mission` - Mission statement
- `#pricing` - Pricing tiers
- `#faq` - Frequently asked questions

**Navigation:**
- Top nav links to above sections
- Sticky on scroll with blur
- Mobile: Burger menu в†’ right tray

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
- Email: support@satwave.com
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
- `making-waste-visible`
- `computer-vision-for-recyclers`
- `citizen-ecosystem`
- `impact-reporting`

**Each post includes:**
- Full article (800-1200 words)
- Header with meta (date, read time, tags)
- Cover image
- Formatted content
- CTA at bottom

---

## рџ“± Navigation Structure

### Primary Navigation (Top Bar)
*Only hash links to homepage sections*
- Features в†’ `/#features`
- How It Works в†’ `/#how-it-works`
- Testimonials в†’ `/#testimonials`
- Pricing в†’ `/#pricing`
- FAQ в†’ `/#faq`
- **Get Started** (CTA button)

### Secondary Navigation (Footer)

**Product**
- Features в†’ `/#features`
- Pricing в†’ `/#pricing`
- FAQ в†’ `/#faq`

**Company**
- About в†’ `/about`
- Blog в†’ `/blog`
- Contact в†’ `/contact`

**Legal**
- Privacy Policy в†’ `#`
- Terms of Service в†’ `#`
- Data Ethics ???????T `#`

### Mobile Navigation (Burger Menu)
*Same as primary nav, plus:*
- About в†’ `/about`
- Blog в†’ `/blog`
- Contact в†’ `/contact`
- **Get Started** (CTA button)

---

## рџЋЁ Component Map

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
- `<HowItWorks />` - 5-stage process
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

## рџ“‚ File Structure Map

```
satwave-site/
в”‚
в”њв”Ђв”Ђ app/                         # Next.js App Router
в”‚   в”њв”Ђв”Ђ layout.tsx               # Root layout (metadata, font)
в”‚   в”њв”Ђв”Ђ page.tsx                 # Homepage
в”‚   в”њв”Ђв”Ђ globals.css              # Global styles
в”‚   в”‚
в”‚   в”њв”Ђв”Ђ about/
в”‚   в”‚   в””в”Ђв”Ђ page.tsx             # About page
в”‚   в”‚
в”‚   в”њв”Ђв”Ђ contact/
в”‚   в”‚   в””в”Ђв”Ђ page.tsx             # Contact page
в”‚   в”‚
в”‚   в””в”Ђв”Ђ blog/
в”‚       в”њв”Ђв”Ђ page.tsx             # Blog listing
в”‚       в””в”Ђв”Ђ [slug]/
в”‚           в””в”Ђв”Ђ page.tsx         # Blog post detail
в”‚
в”њв”Ђв”Ђ components/                  # React components
в”‚   в”њв”Ђв”Ђ Navbar.tsx               # Top navigation
в”‚   в”њв”Ђв”Ђ MobileTray.tsx           # Mobile menu
в”‚   в”њв”Ђв”Ђ Footer.tsx               # Site footer
в”‚   в”‚
в”‚   в”њв”Ђв”Ђ Hero.tsx                 # Hero section
в”‚   в”њв”Ђв”Ђ PipelineScene.tsx        # 3D canvas animation
в”‚   в”њв”Ђв”Ђ Featured.tsx             # Logos
в”‚   в”њв”Ђв”Ђ Testimonials.tsx         # Carousel
в”‚   в”њв”Ђв”Ђ HowItWorks.tsx           # 5-stage
в”‚   в”њв”Ђв”Ђ Features.tsx             # Feature grid
в”‚   в”њв”Ђв”Ђ Mission.tsx              # Mission text
в”‚   в”њв”Ђв”Ђ Pricing.tsx              # Pricing table
в”‚   в”њв”Ђв”Ђ FAQ.tsx                  # Accordion
в”‚   в”‚
в”‚   в”њв”Ђв”Ђ NeumorphButton.tsx       # Reusable button
в”‚   в””в”Ђв”Ђ GlassCard.tsx            # Reusable card
в”‚
в”њв”Ђв”Ђ lib/
в”‚   в””в”Ђв”Ђ content.ts               # All site content & blog posts
в”‚
в”њв”Ђв”Ђ public/                      # Static assets (future)
в”‚   в””в”Ђв”Ђ images/                  # Placeholder for images
в”‚
в”њв”Ђв”Ђ Configuration Files
в”‚   в”њв”Ђв”Ђ package.json             # Dependencies
в”‚   в”њв”Ђв”Ђ tsconfig.json            # TypeScript config
в”‚   в”њв”Ђв”Ђ tailwind.config.ts       # Tailwind config
в”‚   в”њв”Ђв”Ђ postcss.config.mjs       # PostCSS config
в”‚   в”њв”Ђв”Ђ next.config.ts           # Next.js config
в”‚   в”њв”Ђв”Ђ .eslintrc.json           # ESLint rules
в”‚   в””в”Ђв”Ђ .gitignore               # Git ignore
в”‚
в””в”Ђв”Ђ Documentation
    в”њв”Ђв”Ђ README.md                # Technical docs
    в”њв”Ђв”Ђ QUICKSTART.md            # Quick start guide
    в”њв”Ђв”Ђ PROJECT_SUMMARY.md       # Project overview
    в””в”Ђв”Ђ SITEMAP.md               # This file
```

---

## рџ”— Internal Links

### Cross-Page Links
- Homepage в†’ About: Footer or mobile menu
- Homepage в†’ Contact: Footer or mobile menu
- Homepage в†’ Blog: Footer or mobile menu
- Blog listing в†’ Individual posts: Click card
- Any page в†’ Homepage: Click logo

### Hash Links (Homepage only)
- All work within `/#section-id`
- Smooth scroll behavior
- Highlight on scroll (optional future enhancement)

---

## рџЋЇ User Flows

### New Visitor Flow
1. Land on homepage (`/`)
2. Read hero в†’ scroll through sections
3. See testimonials в†’ How It Works в†’ Features
4. Check pricing в†’ Compare tiers
5. Read FAQ в†’ Answer questions
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
2. Tap burger icon в†’ menu slides in
3. Navigate via menu
4. Close menu в†’ explore page
5. Sticky nav available on scroll

---

## рџ“Љ Content Hierarchy

### Homepage Hierarchy
```
Hero (h1)
в”њв”Ђв”Ђ Tagline (main message)
в”њв”Ђв”Ђ Subtitle (explanation)
в””в”Ђв”Ђ CTAs (primary + secondary)

Featured (h2)
в””в”Ђв”Ђ Logos (visual credibility)

Testimonials (h2)
в””в”Ђв”Ђ 6 cards (social proof)

How It Works (h2)
в””в”Ђв”Ђ 5 stages (orbit-to-ground process)

Features (h2)
в””в”Ђв”Ђ 4 features (value props)

Mission (h2)
в””в”Ђв”Ђ 2 paragraphs (vision/mission)

Pricing (h2)
в””в”Ђв”Ђ 3 tiers (monetization)

FAQ (h2)
в””в”Ђв”Ђ 8 Q&A pairs (objection handling)
```

### About Page Hierarchy
```
Title (h1)
в””в”Ђв”Ђ Subtitle

Mission (h2)
в””в”Ђв”Ђ Story paragraphs

Values (h2)
в””в”Ђв”Ђ 4 value cards (h3 each)

Team (h2)
в””в”Ђв”Ђ 4 member cards

Technology (h2)
в””в”Ђв”Ђ Stack list

Compliance (notice)
```

### Contact Page Hierarchy
```
Title (h1)
в””в”Ђв”Ђ Subtitle

Form (h2)
в”њв”Ђв”Ђ Name field
в”њв”Ђв”Ђ Email field
в”њв”Ђв”Ђ Message field
в””в”Ђв”Ђ Submit button

Contact Info
в”њв”Ђв”Ђ Email (h3)
в”њв”Ђв”Ђ Office (h3)
в””в”Ђв”Ђ Social (h3)
```

### Blog Hierarchy
```
Blog (h1)
в””в”Ђв”Ђ Subtitle

Post Listing
в””в”Ђв”Ђ 4 post cards
    в”њв”Ђв”Ђ Cover
    в”њв”Ђв”Ђ Meta (date, time)
    в”њв”Ђв”Ђ Title (h2)
    в”њв”Ђв”Ђ Excerpt
    в””в”Ђв”Ђ Tags
```

### Blog Post Hierarchy
```
Back link

Meta info

Title (h1)
в””в”Ђв”Ђ Tags

Cover image

Content
в”њв”Ђв”Ђ h2 (main sections)
в”њв”Ђв”Ђ h3 (subsections)
в”њв”Ђв”Ђ Paragraphs
в”њв”Ђв”Ђ Lists
в””в”Ђв”Ђ Code snippets

CTA card
```

---

## рџљЂ Future Expansion

**Potential new routes:**
- `/impact-dashboard` - Live metrics on dumps cleared, tons diverted, and CO₂ savings
- `/material-exchange` - Standalone marketplace for recyclers
- `/citizen-app` - Progressive web app for community reporting
- `/data-room` - Secure access to satellite scenes and ground truth
- `/docs` - API documentation for sensor and IoT partners
- `/pricing` - Dedicated pricing page (currently section)
- `/testimonials` - Full success stories
- `/case-studies` - Deep dives on deployments
- `/api-reference` - Developer portal
- `/changelog` - Product updates

**Potential blog categories:**
- `/blog/category/[category]`
- Categories: Earth Observation, Computer Vision, Circular Economy, Civic Tech, Impact Reporting

**Potential user flows:**
- `/onboarding` - New municipality setup
- `/cleanup-schedule` - Assign field crews to satellite alerts
- `/recycler-marketplace` - Bid, schedule pickup, and close the loop
- `/citizen-reports` - Community engagement + gamification
- `/sensor-network` - Manage smart bins, drones, and camera feeds
- `/impact-reporting` - Export ESG/CSRD packets

---

## рџ“± Responsive Breakpoints

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

## в™ї Accessibility Map

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
**Status**: Production-ready вњ…




