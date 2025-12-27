# 🚀 Quick Start: Adding Images to Your Portfolio

## 📁 Where to Put Images

```
public/
├── profile/
│   └── profile.jpg          ← YOUR PHOTO HERE
│
├── projects/
│   ├── vru-detection.jpg    ← PROJECT SCREENSHOTS HERE
│   ├── med-ai-care.jpg
│   ├── recruitedge-ai.jpg
│   ├── sql-genius.jpg
│   ├── multilingual-rag.jpg
│   └── soybean-weed.jpg
│
├── og-images/
│   └── og-image.jpg         ← SOCIAL MEDIA IMAGE HERE
│
└── resume.pdf               ← YOUR RESUME PDF HERE
```

## ✅ Step-by-Step Instructions

### 1. Add Your Profile Photo
```bash
# Copy your photo to:
cp ~/Downloads/my-photo.jpg public/profile/profile.jpg
```

### 2. Add Project Screenshots
```bash
# For each project, copy the screenshot:
cp ~/Downloads/project1.jpg public/projects/med-ai-care.jpg
cp ~/Downloads/project2.jpg public/projects/recruitedge-ai.jpg
# ... and so on
```

### 3. Add Your Resume
```bash
# Copy your resume PDF:
cp ~/Downloads/resume.pdf public/resume.pdf
```

### 4. Verify Images Are Working
Open your browser and check:
- http://localhost:5173/profile/profile.jpg
- http://localhost:5173/projects/med-ai-care.jpg
- http://localhost:5173/resume.pdf

## 🎨 Image Requirements

| Type | Size | Format | Max File Size |
|------|------|--------|---------------|
| Profile Photo | 800x800px | JPG/PNG | 500KB |
| Project Screenshots | 1200x800px | JPG/PNG | 300KB |
| OG Image | 1200x630px | JPG/PNG | 1MB |
| Resume | Any | PDF | 2MB |

## 🔧 How Images Are Used in Code

### Profile Photo
```javascript
// In src/data/personal.js (you can add this)
export const personalInfo = {
  avatar: "/profile/profile.jpg",
  // ...
}
```

### Project Screenshots
```javascript
// In src/data/projects.js (already configured)
{
  id: "med-ai-care",
  image: "/projects/med-ai-care.jpg",  // ← Automatically loads from public/
  // ...
}
```

### Resume
```javascript
// In src/data/personal.js (already configured)
contact: {
  resume: "/resume.pdf"  // ← Automatically loads from public/
}
```

## 💡 Pro Tips

1. **Compress images first**: Use https://tinypng.com/
2. **Use descriptive filenames**: `med-ai-care.jpg` not `IMG_1234.jpg`
3. **Keep filenames lowercase**: Use hyphens, not spaces
4. **Test locally first**: Check images load before deploying

## 🐛 Troubleshooting

**Images not showing?**
- Check file path starts with `/` (e.g., `/projects/image.jpg`)
- Verify filename matches exactly (case-sensitive)
- Check browser console for 404 errors
- Restart dev server: `npm run dev`

**Images too large?**
- Compress with TinyPNG or Squoosh
- Resize to recommended dimensions
- Convert to WebP for better compression

## 📸 Where to Get Images

**Profile Photo:**
- Hire a professional photographer
- Use a high-quality smartphone camera
- Good lighting + clean background = great photo

**Project Screenshots:**
- Take browser screenshots of deployed projects
- Use design tools (Figma, Canva) to create mockups
- Screen recording → extract best frame
- Use browser dev tools to simulate different devices

**Placeholder Images (temporary):**
- Unsplash: https://unsplash.com/
- Pexels: https://pexels.com/
- Your code already uses placeholders until you add real images

## ✨ Next Steps

1. Add your profile photo to `public/profile/profile.jpg`
2. Add project screenshots to `public/projects/`
3. Add your resume to `public/resume.pdf`
4. Check the website to see your images live!

Need more help? Check `IMAGE_GUIDE.md` for detailed information.
