# Cheng-En (Johnny) Tsai — Personal Website

A clean, professional personal website built with vanilla HTML, CSS, and JavaScript. Inspired by modern academic website designs with a focus on simplicity and elegance.

## ✨ Features

- **Clean & Professional Design** - Inspired by top academic personal websites
- **Dark/Light Mode Toggle** - Automatic theme switching with localStorage persistence
- **Responsive Layout** - Works beautifully on all devices
- **Font Awesome Icons** - Professional icon set for social links
- **Interactive Project Gallery** - Click-to-expand modal for project details
- **Simple & Maintainable** - No frameworks, just vanilla HTML/CSS/JS

## 📁 Folder Structure

```
xNTsai.github.io/
├─ index.html              # Home page with bio, education, highlights
├─ projects.html           # Project gallery with modal details
├─ publications.html       # Publications list
├─ news.html              # News & updates
├─ assets/
│  ├─ css/
│  │  └─ styles.css       # All styles (dark/light theme)
│  ├─ js/
│  │  ├─ main.js          # Utility functions
│  │  ├─ theme-toggle.js  # Theme switching logic
│  │  └─ projects.js      # Project grid & modal
│  ├─ data/
│  │  └─ projects.json    # Project data (easy to edit!)
│  └─ img/
│     └─ profile.jpg      # ⚠️ REPLACE with your photo
└─ cv/
   └─ Cheng-En_Tsai_CV.pdf # ⚠️ REPLACE with your CV
```

## 🎨 Design Features

### Color Scheme
- **Dark Theme (Default):** Deep black background (#000000) with subtle grays
- **Light Theme:** Clean white background with professional typography
- Both themes use carefully selected accent colors for links and interactive elements

### Typography
- System font stack for optimal performance and native feel
- Clear hierarchy with thoughtful spacing
- Responsive font sizes that scale well on all devices

### Layout
- **Hero Section:** Photo on right, bio and social icons on left
- **Education & Highlights:** Card-based layout with hover effects
- **Project Cards:** Grid layout with hover effects and click-to-expand modals
- **Publications:** Clean list format with proper citation styling

## 🚀 Quick Start

### Before You Deploy

1. **Replace placeholder files:**
   - `assets/img/profile.jpg` → your profile photo (recommended: 500x500px, square)
   - `cv/Cheng-En_Tsai_CV.pdf` → your actual CV PDF

2. **Update personal information in `index.html`:**
   - Email address
   - Google Scholar URL
   - LinkedIn URL
   - Bio text
   - Education details
   - Research interests
   - Highlights

3. **Update content:**
   - Publications in `publications.html`
   - News items in `news.html`
   - Projects in `assets/data/projects.json`

### Deploy to GitHub Pages

```bash
# Navigate to your repo
cd /Users/cheng_en/Code/xNTsai.github.io

# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "Beautify website with clean professional design"

# Push to GitHub
git push origin main
```

Then enable GitHub Pages:
1. Go to your repo: https://github.com/xNTsai/xNTsai.github.io
2. **Settings** → **Pages**
3. **Source:** Deploy from a branch
4. **Branch:** `main`, folder: `/ (root)`
5. Click **Save**

Your site will be live at **https://xntsai.github.io/** in 1-2 minutes!

## 🎯 Customization Guide

### Change Colors

Edit the CSS variables at the top of `assets/css/styles.css`:

```css
/* Dark theme colors */
:root {
  --bg-color: #000000;
  --text-color: #e0e0e0;
  --link-color: #58a6ff;
  /* ... */
}

/* Light theme colors */
[data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #24292f;
  /* ... */
}
```

### Add a Project

Edit `assets/data/projects.json`:

```json
{
  "title": "Your Project Name",
  "meta": "Technologies used",
  "teaser": "Short description shown on card",
  "description": "Full description shown in modal",
  "image": "https://link-to-image.jpg",
  "tags": ["Tag1", "Tag2"],
  "links": [
    {"text": "GitHub", "href": "https://github.com/..."}
  ]
}
```

### Update Publications

Edit the `<ol class="pub-list">` in `publications.html` - just add new `<li>` items following the existing format.

### Add News Items

Edit the `<ul class="news-list">` in `news.html` - add new `<li>` items with `<time>` tags.

## 🔧 Advanced Customization

### Change Fonts

Add a Google Fonts link in the `<head>` and update the `font-family` in CSS:

```css
body {
  font-family: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Modify Layout

All layouts are in `assets/css/styles.css`. Key sections:
- `.hero` - Main intro section
- `.grid` - Project card grid
- `.item` - Education/experience cards
- `.two-col` - Two-column sections

### Add More Pages

1. Duplicate any HTML file (e.g., `news.html`)
2. Update the content
3. Add a link to it in the `<nav>` on all pages

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- **860px:** Hero switches to single column
- **768px:** Navigation stacks vertically, cards go full-width

## 🌐 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📝 License

Feel free to use this template for your own personal website! No attribution required.

## 🙏 Acknowledgments

Design inspired by:
- [Tsung-Min (Vincent) Pai](https://bai1026.github.io/) - Clean, academic style
- Various academic personal websites
- GitHub's design system for color palette

---

**Built with vanilla HTML/CSS/JS** • **No framework required** • **Easy to customize**

For questions or issues, feel free to reach out!
