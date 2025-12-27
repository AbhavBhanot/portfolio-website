# Image Storage Guide for Portfolio Website

## Directory Structure

```
public/
├── profile/
│   ├── profile.jpg          # Your main profile photo (recommended: 800x800px)
│   ├── profile-hero.jpg     # Hero section profile (recommended: 1200x800px)
│   └── profile-about.jpg    # About page profile (optional)
│
├── projects/
│   ├── vru-detection.jpg    # VRU Detection project screenshot
│   ├── med-ai-care.jpg      # Med AI Care project screenshot
│   ├── recruitedge-ai.jpg   # RecruitEdge project screenshot
│   ├── sql-genius.jpg       # SQL Genius project screenshot
│   ├── multilingual-rag.jpg # Multilingual RAG project screenshot
│   └── soybean-weed.jpg     # Soybean Weed project screenshot
│
├── og-images/
│   └── og-image.jpg         # Open Graph image for social sharing (1200x630px)
│
└── resume.pdf               # Your resume PDF

```

## How to Use Images in Your Code

### 1. Profile Images
In your components, reference images like this:

```jsx
// For profile photo
<img src="/profile/profile.jpg" alt="Abhav Bhanot" />

// Or in data files
avatar: "/profile/profile.jpg"
```

### 2. Project Screenshots
Your project data already references these paths:

```javascript
// In src/data/projects.js
{
  id: "med-ai-care",
  image: "/projects/med-ai-care.jpg",  // ← Place image here
  // ...
}
```

### 3. Resume
```javascript
// In src/data/personal.js
contact: {
  resume: "/resume.pdf"  // ← Place PDF here
}
```

## Image Recommendations

### Profile Photos
- **Format**: JPG or PNG
- **Size**: 800x800px (square) for profile, 1200x800px for hero
- **File size**: Keep under 500KB (use compression tools like TinyPNG)
- **Quality**: High quality, professional headshot with good lighting

### Project Screenshots
- **Format**: JPG or PNG
- **Size**: 1200x800px (3:2 aspect ratio)
- **File size**: Keep under 300KB per image
- **Content**: Show the main interface or key features of your project
- **Tip**: Use browser screenshots or design mockups

### Open Graph Image
- **Format**: JPG or PNG
- **Size**: 1200x630px (required for social media)
- **File size**: Keep under 1MB
- **Content**: Your name, title, and a professional photo or design

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use https://tinypng.com/ or https://squoosh.app/
   - Aim for 70-80% quality for JPGs

2. **Use WebP format** for better compression (optional):
   - Convert JPG/PNG to WebP for smaller file sizes
   - Vite will serve them automatically

3. **Responsive images** (already handled in your CSS):
   - Your CSS uses `object-fit: cover` for proper scaling
   - Images will automatically adapt to different screen sizes

## Current Image References in Your Code

### Projects (src/data/projects.js)
- `/projects/vru-detection.jpg`
- `/projects/med-ai-care.jpg`
- `/projects/recruitedge-ai.jpg`
- `/projects/sql-genius.jpg`
- `/projects/multilingual-rag.jpg`
- `/projects/soybean-weed.jpg`

### Profile (src/data/personal.js)
- `/profile/profile.jpg` (recommended to add)

### Resume
- `/resume.pdf`

### SEO/Social
- `/og-image.jpg` (for social media sharing)

## Quick Start

1. **Add your profile photo**:
   ```bash
   # Copy your photo to:
   public/profile/profile.jpg
   ```

2. **Add project screenshots**:
   ```bash
   # Copy each project screenshot to:
   public/projects/[project-name].jpg
   ```

3. **Add your resume**:
   ```bash
   # Copy your resume PDF to:
   public/resume.pdf
   ```

4. **Images will be automatically available** at:
   - http://localhost:5173/profile/profile.jpg
   - http://localhost:5173/projects/med-ai-care.jpg
   - http://localhost:5173/resume.pdf

## Fallback Images

If you don't have images yet, the code uses placeholder images from:
- `https://via.placeholder.com/` (automatically generated)
- These will show until you add your real images

## Need Help?

- Images not showing? Check the browser console for 404 errors
- File path should start with `/` (e.g., `/projects/image.jpg`)
- File names are case-sensitive on production servers
- Use lowercase and hyphens (e.g., `my-project.jpg` not `My Project.jpg`)
