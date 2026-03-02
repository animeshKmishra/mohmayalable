# MohMaya - Threads of Elegance 🧵✨

> Your online showcase for exquisite custom-designed sarees

**Website:** https://mohmaya-elegance.netlify.app
**CMS Admin:** https://mohmaya-elegance.netlify.app/admin
**Instagram:** [@mohmayalabel](https://www.instagram.com/mohmayalabel)

---

## 📱 For Website Owners: Managing Your Products

### Accessing the Admin Panel

1. Open your browser (Chrome, Safari, or Firefox)
2. Go to: `https://mohmaya-elegance.netlify.app/admin`
3. Click "Login with Netlify Identity"
4. Enter your email and password
5. You'll see the Content Manager dashboard

### Adding a New Saree Product

1. Click "Saree Products" in the left sidebar
2. Click "New Saree Product" button
3. Fill in the product information:

**Required Fields:**
- **Product ID:** Format `MML-001`, `MML-002`, etc.
- **Product Title:** Full name (e.g., "Royal Blue Kanjeevaram Silk Saree")
- **Price:** Number only (e.g., `15999` for ₹15,999)
- **Short Description:** One-line summary
- **Main Image:** Click "Choose an image" (1200×1600px recommended, under 5MB)
- **Fabric Type:** Select from dropdown
- **Color:** Main color
- **Full Description:** Detailed story with formatting

**Optional Fields:**
- Gallery Images (additional photos)
- Featured Product (shows on homepage)
- Available (toggle OFF if sold out)
- Display Order (lower = shows first)

4. Preview on the right side
5. Click "Publish"
6. Wait 2-3 minutes for changes to go live!

### Editing/Deleting Products

- **Edit:** Click product → Make changes → Publish
- **Delete:** Click product → Delete button (⚠️ permanent!)

---

## 📸 Photography Tips

- **Lighting:** Natural daylight or bright, even lighting
- **Background:** Clean, neutral (white/cream)
- **Resolution:** Minimum 1200px wide
- **Format:** JPG (recommended) or PNG
- **Consistency:** Same angle for all photos

---

## ✍️ Writing Descriptions

### Short Description (One Line)
✅ Good: "Exquisite royal blue Kanjeevaram with gold zari temple border"
❌ Bad: "This is a nice saree"

### Full Description
Include:
1. What makes it special
2. Key features (fabric, zari work, borders)
3. Occasion (weddings, festivals)
4. Specifications (length, width, weight)
5. Care instructions (dry clean, storage)

---

## 🛠️ Troubleshooting

**Changes not showing?**
- Wait 3 minutes for build to complete
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+F5` (Windows)
- Check you clicked "Publish" not "Save Draft"

**Can't upload image?**
- Check file size (must be under 5MB)
- Check file type (JPG, PNG, WEBP only)
- Remove special characters from filename
- Try different browser

**Forgot password?**
- Click "Forgot password?" on login page
- Check email (may be in spam)

**Product ID already exists?**
- Each product needs unique ID
- Use next available number in sequence
- Format must be `MML-XXX` (3 digits)

---

## 💡 Best Practices

1. **Add new products regularly** (weekly/monthly)
2. **Update sold items immediately** (mark unavailable)
3. **Feature 6-8 best pieces** on homepage
4. **Use sequential numbering** (MML-001, MML-002...)
5. **Display order:** Use increments of 10 (10, 20, 30...)
6. **Keep photos consistent** (lighting, angle, background)
7. **Write compelling descriptions** (tell a story)

---

## 🚀 For Developers

See [SETUP.md](SETUP.md) for development instructions.

### Quick Start

```bash
npm install
npm run dev  # http://localhost:4321
npm run build
```

### Tech Stack

- **Framework:** Astro 5.x (Static Site Generator)
- **Styling:** Tailwind CSS v3
- **Animations:** AOS (Animate On Scroll)
- **CMS:** Decap CMS (Git-based)
- **Hosting:** Netlify (free tier)
- **Content:** Markdown with Zod schema validation

### Project Structure

```
mohmaya-elegance/
├── public/
│   ├── admin/              # Decap CMS
│   └── images/             # Static images
├── src/
│   ├── components/         # UI components
│   ├── content/
│   │   └── products/       # Product markdown files
│   ├── layouts/            # Page layouts
│   ├── pages/              # Routes
│   └── styles/             # Global CSS
├── netlify.toml            # Deployment config
└── package.json
```

---

## 📞 Need Help?

**Common Questions:**

**Q: Do I need to know coding?**
A: No! CMS is visual and user-friendly.

**Q: Can I break the website?**
A: No, you can only edit products safely.

**Q: Can customers buy directly?**
A: Currently via Instagram DM. Payment integration can be added.

**Q: How often should I update?**
A: Add new products weekly, update availability immediately.

---

*Built with ❤️ using Astro, Tailwind CSS, and Decap CMS. Hosted for free on Netlify.*
