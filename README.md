# Cheng-En Tsai — Personal Website

A clean, simple personal website inspired by [Tsung-Min (Vincent) Pai's website](https://bai1026.github.io/). Built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Simple & Clean Design** - Directly inspired by your senior's website
- **Dark/Light Mode Toggle** - Beautiful theme switching with localStorage
- **Responsive Layout** - Works great on all devices
- **Font Awesome Icons** - Professional social media icons
- **Easy to Edit** - All content in simple HTML files

## 📁 Structure

```
xNTsai.github.io/
├── index.html              # About Me page
├── projects.html           # Projects page
├── publications.html       # Publications page
├── news.html              # News & updates page
├── assets/
│   ├── css/
│   │   └── style.css      # All styles (copied from your senior)
│   ├── js/
│   │   └── theme-toggle.js # Theme switching
│   └── img/
│       └── profile.jpg    # ⚠️ REPLACE with your photo
└── cv/
    └── Cheng-En_Tsai_CV.pdf # ⚠️ REPLACE with your CV
```

## 🚀 Quick Start

### 1. Test Locally

```bash
cd /Users/cheng_en/Code/xNTsai.github.io

# Start local server
python3 -m http.server 8000

# Open in browser: http://localhost:8000
```

### 2. Replace Placeholders

- **Profile photo:** Replace `assets/img/profile.jpg` (recommended: 500x500px square)
- **CV:** Replace `cv/Cheng-En_Tsai_CV.pdf`

### 3. Update Personal Info

Edit the HTML files directly:
- `index.html` - Update bio, email, links, news
- `projects.html` - Add/edit your projects
- `publications.html` - Add your publications
- `news.html` - Update news items

## 🎨 What You'll See

**Home Page (`index.html`):**
- Clean intro with text left, circular photo right
- 5 circular social icons (Email, Scholar, GitHub, LinkedIn, CV)
- Icons change color on hover
- News section with emoji bullets
- Theme toggle (top right)

**Projects Page (`projects.html`):**
- Clean list of projects with descriptions
- Tech stack shown on the right
- Easy to add more projects

**Publications Page (`publications.html`):**
- Publications with thumbnail images
- Author names, venue, links
- Clean formatting

**All Pages:**
- Simple navigation at top
- Theme toggle button
- Consistent styling
- Mobile-friendly

## ✏️ Customization

### Change Colors

Edit `assets/css/style.css`:

```css
:root {
    --bg-color: #000000;      /* Dark theme background */
    --link-color: #58a6ff;    /* Link color */
    /* ... more colors */
}

[data-theme="light"] {
    --bg-color: #ffffff;      /* Light theme background */
    /* ... */
}
```

### Add a Project

Edit `projects.html`, add a new `.experience-entry`:

```html
<div class="experience-entry">
  <h3>Project Name <small style="float: right; font-weight: normal;">Tech Stack</small></h3>
  <p><strong>Type</strong> | Date</p>
  <ul>
    <li>Description point 1</li>
    <li>Description point 2</li>
  </ul>
</div>
```

### Add a Publication

Edit `publications.html`, add a new `.publication-entry`:

```html
<div class="publication-entry">
  <div class="publication-image">
    <img src="image-url.jpg" alt="Description">
  </div>
  <div class="publication-details">
    <h3>Paper Title</h3>
    <div class="authors"><strong>Your Name</strong>, et al.</div>
    <div class="venue">Conference/Journal</div>
    <div class="links">
      <a href="#"><i class="fas fa-file-alt"></i> Paper</a>
    </div>
    <p>Brief description...</p>
  </div>
</div>
```

## 📤 Deploy to GitHub Pages

```bash
# Commit changes
git add .
git commit -m "Setup personal website"
git push origin main

# Then enable GitHub Pages:
# Settings → Pages → Deploy from branch "main" → Save
```

Your site will be at: **https://xntsai.github.io/**

## 🎯 This Design vs Previous

**What Changed:**
- ✅ Copied exact structure from your senior's site
- ✅ Much simpler - no complex framework
- ✅ Easy to understand and modify
- ✅ Clean, professional academic look
- ✅ All content in simple HTML (no JSON files)

**Key Features from Senior's Site:**
- Text left, photo right intro layout
- Circular social icons with hover effects
- Simple navigation
- Clean typography
- News section with emojis
- Theme toggle

## 📝 To-Do Before Deploy

- [ ] Replace `assets/img/profile.jpg` with your photo
- [ ] Replace `cv/Cheng-En_Tsai_CV.pdf` with your CV
- [ ] Update email, Google Scholar, LinkedIn URLs
- [ ] Review and update news items
- [ ] Review and update projects
- [ ] Review and update publications
- [ ] Test theme toggle
- [ ] Test on mobile (resize browser)

## 🆘 Need Help?

- **Theme not working?** Check browser console (F12) for errors
- **Links broken?** Make sure file paths are correct
- **Want to change something?** All code is simple HTML/CSS - just edit directly!

---

**Design Credit:** Inspired by [Tsung-Min (Vincent) Pai](https://bai1026.github.io/)  
**Built with:** Vanilla HTML, CSS, JavaScript
