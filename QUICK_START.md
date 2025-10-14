# 🚀 Quick Start Guide

## Test Locally (2 minutes)

### Option 1: Open in Browser (Simplest)
```bash
# Just open the index.html file in your browser
open index.html  # macOS
# or drag index.html into Chrome/Firefox/Safari
```

### Option 2: Local Server (Recommended)
```bash
# Navigate to your site folder
cd /Users/cheng_en/Code/xNTsai.github.io

# Start a simple HTTP server
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## What to Check

### ✅ Home Page (`index.html`)
- [ ] Dark theme by default (pure black background)
- [ ] Profile photo appears on the right (currently placeholder)
- [ ] Social icons (5 circles) below your name
- [ ] Hover over social icons - they should change color
- [ ] Click theme toggle (top right) - switches to light mode
- [ ] Theme persists when you refresh
- [ ] Education card has hover effect (slight lift)
- [ ] All links work

### ✅ Projects Page (`projects.html`)
- [ ] Project cards appear in a grid
- [ ] Hover over a card - it lifts up
- [ ] Click a card - modal opens with details
- [ ] Click X or outside modal - modal closes
- [ ] ESC key closes modal
- [ ] Theme toggle works

### ✅ Publications Page (`publications.html`)
- [ ] Publications listed with icons
- [ ] Links have icons (PDF, GitHub, BibTeX)
- [ ] Your name is bold in author list

### ✅ News Page (`news.html`)
- [ ] News items listed in timeline format
- [ ] Dates are formatted nicely
- [ ] Clean borders between items

### ✅ Responsive Design
1. Resize your browser window to ~500px wide
2. Check that:
   - [ ] Navigation stacks vertically
   - [ ] Profile photo moves above bio text
   - [ ] Project cards go full-width
   - [ ] Everything is still readable

## Customize Before Deploy

### 1. Update Profile Photo
```bash
# Replace this file:
assets/img/profile.jpg

# Recommended size: 500x500px (square)
```

### 2. Update CV
```bash
# Replace this file:
cv/Cheng-En_Tsai_CV.pdf
```

### 3. Update Personal Info in `index.html`
Find and update:
- [ ] Email: `xntsai@ntu.edu.tw`
- [ ] Google Scholar link
- [ ] LinkedIn: `https://www.linkedin.com/in/xntsai/`
- [ ] Bio text in the subtitle
- [ ] Education details
- [ ] Research interests
- [ ] Highlights

### 4. Update Projects in `assets/data/projects.json`
Edit the JSON file to add/remove/modify projects.

### 5. Update Publications in `publications.html`
Add your real publications, update links.

### 6. Update News in `news.html`
Add your real news items with correct dates.

## Deploy to GitHub

```bash
# Check what changed
git status

# Add all files
git add .

# Commit
git commit -m "Beautify website with professional design"

# Push to GitHub
git push origin main
```

## Enable GitHub Pages

1. Go to: https://github.com/xNTsai/xNTsai.github.io
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** main
   - **Folder:** / (root)
5. Click **Save**
6. Wait 1-2 minutes
7. Visit: **https://xntsai.github.io/**

## Troubleshooting

### Theme toggle not working?
- Make sure `theme-toggle.js` is loaded
- Check browser console for errors (F12)

### Projects not showing?
- Check `projects.json` is valid JSON
- Open browser console to see fetch errors

### Images not loading?
- Check file paths are correct
- Make sure files exist in `assets/img/`

### Site not deploying?
- Make sure repo is public
- Check GitHub Actions tab for build errors
- Wait a few minutes after enabling Pages

## Tips

### Test on Mobile
- Use browser dev tools (F12)
- Toggle device toolbar
- Test iPhone, iPad, Android sizes

### Customize Colors
Edit `assets/css/styles.css`:
```css
:root {
  --bg-color: #000000;  /* Dark theme background */
  --link-color: #58a6ff; /* Link color */
  /* ... change any color */
}
```

### Add More Pages
1. Copy `news.html`
2. Rename it (e.g., `teaching.html`)
3. Update content
4. Add link to navigation in all pages

---

**Need Help?**
- Check `README.md` for detailed docs
- Check `IMPROVEMENTS.md` for what changed
- Open GitHub issues if needed

