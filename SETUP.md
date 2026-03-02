# Developer Setup Guide

This document is for developers who want to work on the MohMaya website locally or make modifications.

---

## Prerequisites

- **Node.js 18.x** (via Homebrew or nvm)
- **Git** installed
- **GitHub account** with access to the repository
- **Code editor** (VS Code recommended)
- **Netlify account** (for deployment)

---

## Local Development Setup

### 1. Clone the Repository

```bash
git clone https://github.com/animeshKmishra/mohmayalable.git
cd mohmaya-elegance
```

### 2. Install Node.js 18 (if not installed)

**Using Homebrew (macOS):**
```bash
brew install node@18
echo 'export PATH="/opt/homebrew/opt/node@18/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Using nvm:**
```bash
nvm install 18
nvm use 18
```

Verify installation:
```bash
node --version  # Should show v18.x.x
npm --version   # Should show 9.x.x or higher
```

### 3. Install Dependencies

```bash
npm install
```

This installs:
- Astro 5.x
- Tailwind CSS v3
- AOS (animations)
- Sharp (image optimization)
- Decap CMS (loaded via CDN, not npm)

**Total dependencies: 7 packages (~50MB)**

### 4. Run Development Server

```bash
npm run dev
```

- Opens at: `http://localhost:4321`
- Hot reload enabled
- CMS accessible at: `http://localhost:4321/admin`

### 5. Build for Production

```bash
npm run build
```

- Outputs to `/dist` folder
- Optimizes images to WebP
- Minifies CSS/JS
- Generates static HTML

### 6. Preview Production Build

```bash
npm run preview
```

- Serves production build locally
- Test before deploying

---

## Project Architecture

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Astro | 5.17.1 | Static site generator |
| Tailwind CSS | 3.4.19 | Utility-first CSS framework |
| AOS | 2.3.4 | Scroll animations (3KB) |
| Sharp | 0.34.5 | Image optimization |
| Decap CMS | 3.0.0 | Git-based content management |

**Why these choices?**
- **Astro:** Zero JS by default, perfect for content sites
- **Tailwind v3:** Node 18 compatible, fast builds, PurgeCSS
- **AOS:** Lightweight animations (3KB gzipped)
- **Decap CMS:** Free, git-based, no backend needed

### Directory Structure

```
mohmaya-elegance/
├── public/                 # Static assets (served as-is)
│   ├── admin/              # Decap CMS interface
│   │   ├── index.html      # CMS app entry point
│   │   └── config.yml      # CMS configuration
│   ├── images/             # Static images
│   │   ├── logo.png        # MohMaya logo
│   │   └── sarees/         # Product images (uploaded via CMS)
│   ├── favicon.ico
│   └── robots.txt
│
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── Header.astro    # Navigation
│   │   ├── Footer.astro    # Footer with social links
│   │   ├── Hero.astro      # Homepage hero section
│   │   ├── ProductCard.astro      # Product grid item
│   │   ├── ProductGrid.astro      # Product listing
│   │   ├── InstagramButton.astro  # CTA button
│   │   └── Toast.astro     # Notification system
│   │
│   ├── content/            # Content collections
│   │   ├── config.ts       # Zod schemas
│   │   └── products/       # Product markdown files
│   │       ├── royal-blue-kanjeevaram.md
│   │       ├── emerald-banarasi.md
│   │       └── ruby-red-georgette.md
│   │
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro       # Base HTML structure
│   │
│   ├── pages/              # Routes (file-based routing)
│   │   ├── index.astro     # Homepage (/)
│   │   ├── about.astro     # About page (/about)
│   │   └── product/
│   │       └── [slug].astro       # Product detail (/product/*)
│   │
│   └── styles/             # Global styles
│       └── global.css      # CSS variables, Tailwind imports
│
├── .gitignore
├── astro.config.mjs        # Astro configuration
├── tailwind.config.cjs     # Tailwind CSS configuration
├── package.json            # Dependencies
├── netlify.toml            # Netlify deployment config
├── README.md               # User documentation
└── SETUP.md                # This file (developer docs)
```

---

## Content Management

### Content Collections

Products are defined as a content collection in `src/content/config.ts`:

```typescript
const productsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    productId: z.string().regex(/^MML-\d{3}$/),
    title: z.string().min(1),
    price: z.number().positive(),
    description: z.string(),
    image: image(),
    gallery: z.array(image()).optional(),
    fabric: z.enum(['Silk', 'Cotton', 'Georgette', ...]),
    color: z.string(),
    featured: z.boolean().default(false),
    available: z.boolean().default(true),
    order: z.number().default(0),
  })
});
```

### Adding Products Programmatically

Create a new file in `src/content/products/`:

```markdown
---
productId: "MML-004"
title: "Midnight Blue Banarasi Silk Saree"
price: 17999
description: "Elegant midnight blue Banarasi with silver zari"
image: "../../../public/images/sarees/midnight-blue.jpg"
fabric: "Banarasi"
color: "Midnight Blue"
featured: true
available: true
order: 10
---

Full description here with **markdown formatting**.

- Feature 1
- Feature 2
```

### Querying Products

```astro
---
import { getCollection } from 'astro:content';

const allProducts = await getCollection('products');
const featuredProducts = allProducts.filter(p => p.data.featured);
const sortedProducts = allProducts.sort((a, b) => a.data.order - b.data.order);
---
```

---

## Styling

### Tailwind CSS

Configured in `tailwind.config.cjs` with custom theme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        purple: '#4A148C',      // Deep purple
        'royal-blue': '#1A237E', // Royal blue
      },
      gold: '#FFD700',
      // ... more colors
    },
    fontFamily: {
      heading: ['Playfair Display', 'serif'],
      body: ['Inter', 'sans-serif'],
    }
  }
}
```

### Custom CSS Variables

Defined in `src/styles/global.css`:

```css
:root {
  --color-primary-purple: #4A148C;
  --color-gold: #FFD700;
  --spacing-lg: 6rem;
  --radius-lg: 1rem;
  --shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.15);
  --transition-base: 0.3s ease;
}
```

### Animations

Using AOS (Animate On Scroll):

```astro
<div data-aos="fade-up" data-aos-delay="100">
  Content animates on scroll
</div>
```

Configuration in `BaseLayout.astro`:
```javascript
AOS.init({
  duration: 800,
  easing: 'ease-out',
  once: true,
  offset: 100
});
```

---

## Components

### InstagramButton

Instagram DM integration with clipboard:

```astro
<InstagramButton
  productId={data.productId}
  productName={data.title}
  productPrice={formattedPrice}
  variant="instagram"  // or "outline", "primary"
  size="large"          // or "small", "medium"
  fullWidth={true}
/>
```

**Features:**
- Copies pre-filled message to clipboard
- Opens Instagram app (mobile) or web (desktop)
- Toast notification for feedback
- Fallback for clipboard API failure

### Toast Notifications

Global notification system:

```javascript
window.showToast({
  type: 'success',  // 'success', 'error', 'info'
  title: 'Success!',
  message: 'Product added successfully'
});
```

---

## Decap CMS

### Configuration

Located at `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: "public/images/sarees"
public_folder: "/images/sarees"

collections:
  - name: "products"
    label: "Saree Products"
    folder: "src/content/products"
    create: true
    fields:
      - {label: "Product ID", name: "productId", widget: "string"}
      # ... more fields
```

### Local CMS Development

**Option 1: Use proxy server (recommended)**

1. Install Decap CMS Proxy:
   ```bash
   npx decap-server
   ```

2. Uncomment in `config.yml`:
   ```yaml
   local_backend: true
   ```

3. Access CMS at `http://localhost:4321/admin`

**Option 2: Test on Netlify deploy preview**

More realistic testing environment with full authentication.

---

## Deployment

### Initial Deployment to Netlify

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify:**
   - Log into [Netlify](https://app.netlify.com)
   - "Add new site" → "Import from Git"
   - Select GitHub repository
   - Build settings (auto-detected from `netlify.toml`):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy site

3. **Enable Netlify Identity:**
   - Site Settings → Identity → Enable Identity
   - Registration: "Invite only"
   - External providers: None (email only)
   - Services → Git Gateway → Enable

4. **Invite User:**
   - Identity tab → "Invite users"
   - Enter owner's email
   - User receives email with setup link

### Continuous Deployment

- **Automatic:** Every push to `main` triggers a new build
- **CMS edits:** Automatically commit to Git and trigger rebuild
- **Build time:** ~2-3 minutes
- **Preview deploys:** Pull requests get unique preview URLs

### Environment Variables

If needed (currently none required):

```bash
# Netlify Dashboard → Site Settings → Environment Variables
VARIABLE_NAME=value
```

Access in Astro:
```javascript
const apiKey = import.meta.env.API_KEY;
```

---

## Testing

### Manual Testing Checklist

**Functionality:**
- [ ] Homepage loads with hero and products
- [ ] Product cards display correctly
- [ ] Instagram buttons open and copy message
- [ ] Toast notifications appear
- [ ] Product detail pages load
- [ ] About page displays
- [ ] Navigation works (all links)
- [ ] Mobile menu toggles

**CMS:**
- [ ] Can login to `/admin`
- [ ] Can add product
- [ ] Can edit product
- [ ] Can delete product
- [ ] Image uploads work
- [ ] Changes trigger rebuild
- [ ] Changes appear on site

**Responsive:**
- [ ] Mobile (320px - 480px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (1280px+)

**Cross-Browser:**
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

**Performance:**
- [ ] Lighthouse score > 95
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s

### Automated Testing (Future)

Consider adding:
- Playwright for E2E testing
- Vitest for unit tests
- Lighthouse CI for performance regression

---

## Common Tasks

### Adding a New Component

1. Create `.astro` file in `src/components/`
2. Export as default if using TypeScript
3. Import in pages: `import MyComponent from '../components/MyComponent.astro'`

### Adding a New Page

1. Create `.astro` file in `src/pages/`
2. File name becomes route: `blog.astro` → `/blog`
3. Use `BaseLayout` for consistent structure

### Modifying Styles

**Tailwind classes:**
```astro
<div class="bg-purple-900 text-white p-4 rounded-lg">
```

**Custom CSS:**
Add to `global.css` or component `<style>` tag

**Responsive:**
```astro
<div class="text-base md:text-lg lg:text-xl">
```

### Updating Dependencies

```bash
npm update                  # Update all to latest minor/patch
npm outdated                # Check for newer versions
npm install astro@latest    # Update specific package
```

**Before updating major versions:**
- Check changelog for breaking changes
- Test thoroughly in development
- Update documentation if needed

### Debugging

**Build errors:**
```bash
npm run build  # See full error trace
```

**Dev server issues:**
```bash
rm -rf node_modules dist .astro
npm install
npm run dev
```

**Image optimization errors:**
```bash
# Check Sharp installation
npm rebuild sharp
```

---

## Performance Optimization

### Current Optimizations

1. **Image optimization:** Sharp converts to WebP (117KB → 7-10KB)
2. **CSS purging:** Tailwind removes unused styles
3. **Zero JS by default:** Astro ships only necessary scripts
4. **Static generation:** Pre-renders all pages at build time
5. **Cache headers:** Long cache for static assets

### Bundle Size

- **HTML:** ~15KB per page
- **CSS:** ~10KB (after PurgeCSS)
- **JS:** ~15KB total (AOS + scripts)
- **Images:** 7-10KB WebP per product

**Total page weight:** ~50-70KB (excluding images)

### Further Optimizations

- Enable Netlify's image CDN (automatic)
- Add more aggressive caching
- Implement service worker for offline support
- Lazy load below-the-fold images

---

## Security

### Current Measures

1. **HTTPS:** Enforced by Netlify (free SSL)
2. **CSP Headers:** Prevent XSS attacks
3. **Authentication:** Netlify Identity for CMS
4. **Input validation:** Zod schemas
5. **Git-based CMS:** No database to hack
6. **No sensitive data:** No payments, customer data

### Security Headers

Configured in `netlify.toml`:
```toml
[headers.values]
  X-Frame-Options = "DENY"
  X-Content-Type-Options = "nosniff"
  Strict-Transport-Security = "max-age=31536000; includeSubDomains"
```

### Dependency Security

```bash
npm audit          # Check for vulnerabilities
npm audit fix      # Auto-fix if possible
```

---

## Troubleshooting

### Build Fails on Netlify

**Check:**
- Node version in `netlify.toml` matches local
- All dependencies in `package.json`
- No environment variables required
- Build logs in Netlify dashboard

### Images Not Optimizing

**Check:**
- Image paths relative to `src/content/products/`
- Images exist in `public/images/`
- Sharp installed: `npm install sharp`

### CMS Not Saving

**Check:**
- Git Gateway enabled in Netlify
- User has write permissions
- No merge conflicts in Git
- Network tab for API errors

### Styles Not Applying

**Check:**
- Tailwind classes spelled correctly
- `global.css` imported in `BaseLayout`
- Browser cache cleared
- Build completed successfully

---

## Contributing

### Git Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b feature/new-component
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Add new component for testimonials"
   ```

3. **Push and create PR:**
   ```bash
   git push origin feature/new-component
   ```

4. **Review and merge:**
   - Create Pull Request on GitHub
   - Request review if needed
   - Merge to `main` after approval

### Commit Message Format

```
Type: Short description

Longer description if needed.

- Bullet points for details
- Multiple lines okay
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Formatting, no code change
- `refactor:` Code restructuring
- `test:` Adding tests
- `chore:` Maintenance

---

## Resources

### Documentation

- **Astro:** https://docs.astro.build
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Decap CMS:** https://decapcms.org/docs
- **AOS:** https://michalsnik.github.io/aos/
- **Netlify:** https://docs.netlify.com

### Tools

- **VS Code Extensions:**
  - Astro (official extension)
  - Tailwind CSS IntelliSense
  - Prettier (code formatting)
  - ESLint (linting)

### Community

- **Astro Discord:** https://astro.build/chat
- **GitHub Issues:** https://github.com/animeshKmishra/mohmayalable/issues

---

## FAQ

**Q: Why Astro over Next.js/Gatsby?**
A: Astro ships zero JS by default, perfect for content-heavy sites. 10x faster than React-based SSGs.

**Q: Why Tailwind v3 instead of v4?**
A: Node 18 compatibility. Tailwind v4 requires native bindings unavailable in Node 18.

**Q: Why not use a database for products?**
A: Git-based content is simpler, versionable, and free. No backend/database maintenance.

**Q: Can we add e-commerce later?**
A: Yes! Can integrate Stripe, Razorpay, or other payment gateways.

**Q: How to add more product fields?**
A: Update `src/content/config.ts` schema and `public/admin/config.yml` in parallel.

**Q: How to change Instagram handle?**
A: Update in `InstagramButton.astro` (line 33) and Footer social links.

---

*Last updated: March 2026*
