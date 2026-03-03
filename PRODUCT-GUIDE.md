# 📚 Product Management Guide - Step by Step

This guide will show you exactly how to add and edit saree products on your MohMaya website.

---

## 🗂️ **File Structure Overview**

```
mohmaya-elegance/
├── public/
│   └── images/
│       └── sarees/          ← PUT YOUR SAREE PHOTOS HERE
│           ├── DSC_3989.jpeg
│           ├── saree-001.jpg
│           ├── saree-002.jpg
│           └── ...
│
└── src/
    └── content/
        └── products/        ← EDIT PRODUCT DETAILS HERE
            ├── royal-blue-kanjeevaram.md
            ├── emerald-banarasi.md
            └── ruby-red-georgette.md
```

---

## 📸 **STEP 1: Add Your Saree Images**

### Where to Put Images

**Folder Path:**
```
public/images/sarees/
```

### How to Add Images

**Option 1: Using Finder (Easy)**
1. Open Finder
2. Navigate to your project folder
3. Go to: `mohmaya-elegance` → `public` → `images` → `sarees`
4. Drag and drop your saree photos into this folder

**Option 2: Using Terminal**
```bash
# Copy an image to the sarees folder
cp ~/Downloads/my-saree-photo.jpg public/images/sarees/
```

### Image Naming Tips

**Good names (descriptive):**
- `royal-blue-kanjeevaram.jpg`
- `emerald-green-banarasi.jpg`
- `pink-silk-saree.jpg`
- `MML-001.jpg` (using product ID)

**Bad names (avoid):**
- `IMG_1234.jpg`
- `photo.jpg`
- `untitled.png`

### Image Requirements

✅ **Recommended:**
- **Resolution:** 1200px × 1600px or higher
- **Format:** JPG (best), PNG, or WEBP
- **File size:** 500KB - 2MB (under 5MB maximum)
- **Orientation:** Portrait (vertical)
- **Background:** Clean, neutral color

📸 **Photography Tips:**
- Use natural daylight or good lighting
- Show full saree (folded or draped)
- Take detail shots for gallery images
- Keep background clean (white/cream)
- Consistent lighting across all photos

---

## ✏️ **STEP 2: Edit Product Details**

### Find Your Product File

**Location:**
```
src/content/products/royal-blue-kanjeevaram.md
```

**How to Open:**
1. In VS Code: Click `src` → `content` → `products` → `royal-blue-kanjeevaram.md`
2. Or use terminal: `code src/content/products/royal-blue-kanjeevaram.md`

### Understanding the File Structure

Every product file has **two parts**:

```markdown
---
← PART 1: FRONTMATTER (Product Metadata)
---

← PART 2: DESCRIPTION (Full Product Story)
```

---

## 🔧 **STEP 3: Edit the Frontmatter**

The frontmatter (between `---` lines) contains all the key product information:

### **Complete Example with Explanations:**

```markdown
---
productId: "MML-001"
  ↑ Product ID - Must be unique!
  ↑ Format: MML-XXX (3 digits)
  ↑ Examples: MML-001, MML-002, MML-003

title: "Royal Blue Kanjeevaram Silk Saree"
  ↑ Product name shown everywhere
  ↑ Keep it descriptive and elegant

price: 18999
  ↑ Price in rupees (numbers only, no ₹ symbol)
  ↑ Examples: 15999, 12500, 22999

description: "An exquisite royal blue Kanjeevaram silk saree"
  ↑ Short one-line summary
  ↑ Shows on product cards
  ↑ Keep it under 100 characters

image: "/images/sarees/DSC_3989.jpeg"
  ↑ Path to your main image
  ↑ Format: /images/sarees/YOUR-IMAGE.jpg
  ↑ Change only the filename part

fabric: "Kanjeevaram"
  ↑ Type of fabric
  ↑ Options: Silk, Cotton, Georgette, Chiffon, Banarasi,
  ↑          Kanjeevaram, Chanderi, Tussar, Other

color: "Royal Blue"
  ↑ Main color of the saree
  ↑ Examples: Royal Blue, Emerald Green, Ruby Red

featured: true
  ↑ Show on homepage?
  ↑ Options: true (yes) or false (no)
  ↑ Recommend featuring 6-8 best products

available: true
  ↑ Is this saree available for purchase?
  ↑ Options: true (available) or false (sold out)
  ↑ If false, shows "Sold Out" badge

order: 1
  ↑ Display order (lower number = shows first)
  ↑ Use: 10, 20, 30, 40... (leaves room to insert later)
---
```

---

## ✍️ **STEP 4: Edit the Full Description**

After the `---` line, write the full product description in **markdown format**.

### **Example Structure:**

```markdown
---
(frontmatter above)
---

This stunning royal blue Kanjeevaram silk saree is a perfect blend of tradition and elegance. Handwoven by skilled artisans, it features:

- **Pure Kanjeevaram Silk** with rich texture and natural sheen
- **Intricate Gold Zari Work** with traditional motifs
- **Temple Border** design showcasing South Indian heritage
- **Contrasting Pallu** with elaborate detailing

Perfect for weddings, festive occasions, and special celebrations. This saree comes with a matching blouse piece.

### Specifications
- **Length:** 5.5 meters + 0.8 meter blouse piece
- **Width:** 1.15 meters (46 inches)
- **Weight:** Approximately 750 grams
- **Care:** Dry clean only

*Each MohMaya saree is a unique piece of wearable art, handcrafted with love and attention to detail.*
```

### **Markdown Formatting:**

| Format | Syntax | Example |
|--------|--------|---------|
| **Bold** | `**text**` | `**Pure Silk**` |
| *Italic* | `*text*` | `*handcrafted*` |
| Heading | `### Title` | `### Specifications` |
| Bullet list | `- Item` | `- Gold zari work` |
| Numbered list | `1. Item` | `1. First step` |

---

## 📝 **STEP 5: Creating a New Product**

### Method 1: Copy an Existing File

1. **Copy an existing product file:**
   ```bash
   cp src/content/products/royal-blue-kanjeevaram.md src/content/products/pink-silk-saree.md
   ```

2. **Open the new file and edit everything:**
   - Change product ID (must be unique!)
   - Change title, price, description
   - Change image path
   - Update all other fields
   - Rewrite the full description

### Method 2: Create from Scratch

1. **Create new file:**
   ```bash
   touch src/content/products/new-saree-name.md
   ```

2. **Copy this template:**

```markdown
---
productId: "MML-004"
title: "Your Saree Name Here"
price: 15999
description: "Short one-line description here"
image: "/images/sarees/your-image.jpg"
fabric: "Silk"
color: "Color Name"
featured: false
available: true
order: 40
---

Write your full product description here.

- **Feature 1:** Description
- **Feature 2:** Description
- **Feature 3:** Description

Perfect for occasions like weddings, festivals, or special events.

### Specifications
- **Length:** 5.5 meters + blouse piece
- **Width:** 1.15 meters
- **Weight:** Approximately 700-800 grams
- **Care:** Dry clean only

*Handcrafted with love and attention to detail.*
```

3. **Fill in all the details**
4. **Save the file**

---

## 🔄 **STEP 6: Building and Seeing Changes**

After editing, you need to **build** the website to see changes:

### **Build Command:**

```bash
# Navigate to project folder
cd /Users/mishraanimeshkumar/Library/CloudStorage/OneDrive-SAPSE/Misc/mml/mohmaya-elegance

# Build the website
npm run build
```

### **View Locally (Optional):**

```bash
# Start development server
npm run dev

# Open in browser: http://localhost:4321
```

### **Push to GitHub (Deploy):**

```bash
# Add changes
git add .

# Commit with message
git commit -m "Updated product: Royal Blue Kanjeevaram"

# Push to GitHub (triggers Netlify build)
git push origin main
```

**Wait 2-3 minutes** for Netlify to rebuild and deploy your changes.

---

## 🎯 **STEP 7: Common Tasks**

### **Change Price**

**Edit this line in frontmatter:**
```markdown
price: 18999  ← Change this number
```

**Example:** To change from ₹18,999 to ₹16,500:
```markdown
price: 16500
```

### **Change Image**

**Edit this line in frontmatter:**
```markdown
image: "/images/sarees/DSC_3989.jpeg"
```

**Steps:**
1. Add new image to `public/images/sarees/`
2. Update the filename in the path
3. Keep the `/images/sarees/` part the same

**Example:**
```markdown
# Before
image: "/images/sarees/old-image.jpg"

# After (just change the filename)
image: "/images/sarees/new-image.jpg"
```

### **Mark as Sold Out**

**Edit this line in frontmatter:**
```markdown
available: false  ← Change true to false
```

This will show a "Sold Out" badge on the product card.

### **Feature on Homepage**

**Edit this line in frontmatter:**
```markdown
featured: true  ← Change false to true
```

**Tip:** Feature only your 6-8 best sarees on the homepage.

### **Change Display Order**

**Edit this line in frontmatter:**
```markdown
order: 10  ← Lower number = shows first
```

**Recommended numbering:**
- Use increments of 10: `10, 20, 30, 40...`
- This leaves room to insert products later
- Example: Insert between 20 and 30? Use 25.

### **Update Description**

**Edit the text after the `---` line:**
```markdown
---
(frontmatter)
---

← Edit everything below this line
This is where you write your full product description...
```

---

## 📋 **Quick Reference**

### **File Locations:**

| What | Where |
|------|-------|
| Saree images | `public/images/sarees/` |
| Product files | `src/content/products/` |
| Logo | `public/images/logo.png` |

### **Image Path Format:**

```markdown
image: "/images/sarees/FILENAME.jpg"
         ↑ Keep this part          ↑ Change only this
```

### **Price Format:**

```markdown
✅ Correct: price: 18999
❌ Wrong:   price: ₹18,999
❌ Wrong:   price: "18999"
```

### **Product ID Format:**

```markdown
✅ Correct: "MML-001", "MML-002", "MML-003"
❌ Wrong:   "MML1", "MML-01", "001"
```

### **Boolean Values:**

```markdown
✅ Correct: true, false
❌ Wrong:   True, False, "true", yes, no
```

---

## 🛠️ **Troubleshooting**

### **Image not showing?**

**Check:**
1. Image exists in `public/images/sarees/`
2. Filename in markdown matches exactly (case-sensitive!)
3. Path starts with `/images/sarees/`
4. File extension correct (`.jpg`, `.jpeg`, `.png`)
5. Image size under 5MB

**Fix:**
```bash
# Check if image exists
ls public/images/sarees/your-image.jpg

# If not, copy it there
cp ~/Downloads/your-image.jpg public/images/sarees/
```

### **Build fails?**

**Common issues:**
1. **Missing quotes:** All text values need quotes
   ```markdown
   ✅ title: "Saree Name"
   ❌ title: Saree Name
   ```

2. **Product ID format wrong:**
   ```markdown
   ✅ productId: "MML-001"
   ❌ productId: "MML1"
   ```

3. **Duplicate product ID:** Each must be unique!

4. **Invalid fabric:** Must be one of the allowed values
   ```markdown
   ✅ fabric: "Kanjeevaram"
   ❌ fabric: "My Custom Fabric"
   ```

### **Changes not appearing?**

1. **Did you build?** Run `npm run build`
2. **Did you push?** Run `git push origin main`
3. **Wait 2-3 minutes** for Netlify to deploy
4. **Hard refresh browser:** Cmd+Shift+R (Mac) or Ctrl+F5 (Windows)

---

## 📚 **Example: Complete Product File**

Here's a complete, working example you can copy:

```markdown
---
productId: "MML-005"
title: "Elegant Pink Banarasi Silk Saree"
price: 16999
description: "Beautiful pink Banarasi silk saree with silver zari work and floral motifs"
image: "/images/sarees/pink-banarasi.jpg"
fabric: "Banarasi"
color: "Pink"
featured: true
available: true
order: 50
---

This elegant pink Banarasi silk saree is a timeless masterpiece that combines traditional craftsmanship with modern elegance.

## Key Features

- **Pure Banarasi Silk** from the looms of Varanasi
- **Silver Zari Work** with intricate floral motifs
- **Meenakari Borders** showcasing exquisite artistry
- **Lightweight and Comfortable** for all-day wear

Perfect for:
- Wedding ceremonies
- Festive celebrations
- Special occasions
- Cultural events

### Product Specifications

- **Fabric:** Pure Banarasi Silk
- **Length:** 6 meters (includes 1 meter blouse piece)
- **Width:** 1.15 meters (46 inches)
- **Weight:** Approximately 650 grams
- **Origin:** Varanasi, India
- **Wash Care:** Dry clean only
- **Storage:** Store in a cool, dry place away from direct sunlight

### Why Choose This Saree?

Each thread of this Banarasi saree tells a story of centuries-old weaving traditions. The intricate silver zari work is done by skilled artisans who have inherited this craft through generations. The soft pink hue adds a touch of femininity while the silver borders provide an elegant contrast.

This saree drapes beautifully and feels luxurious against the skin. The lightweight fabric ensures comfort even during long events.

*Handwoven with love, this saree is a celebration of India's rich textile heritage.*

---

**Note:** Each MohMaya saree comes with a quality assurance certificate and care instructions card.
```

---

## 🎓 **Summary Checklist**

When adding/editing a product:

- [ ] **Images:** Added to `public/images/sarees/`
- [ ] **Product ID:** Unique format `MML-XXX`
- [ ] **Title:** Descriptive and elegant
- [ ] **Price:** Numbers only (no ₹ or commas)
- [ ] **Description:** Short one-liner for cards
- [ ] **Image path:** Correct path to your image
- [ ] **Fabric:** Valid type from dropdown
- [ ] **Color:** Main saree color
- [ ] **Featured:** true/false (feature 6-8 products)
- [ ] **Available:** true/false (toggle for sold items)
- [ ] **Order:** Number for sorting (use increments of 10)
- [ ] **Full description:** Written with markdown formatting
- [ ] **Build:** Ran `npm run build` successfully
- [ ] **Push:** Committed and pushed to GitHub
- [ ] **Deploy:** Waited 2-3 minutes for Netlify

---

## 🆘 **Need More Help?**

1. **Check the main README.md** for general guidance
2. **Check SETUP.md** for technical details
3. **Look at existing product files** for examples
4. **Test locally** with `npm run dev` before deploying

---

**Happy Product Management! ✨**

*This guide is part of the MohMaya - Threads of Elegance website.*
