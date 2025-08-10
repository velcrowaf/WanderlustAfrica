# WanderlustAfrica Content Workflow 📊

This document outlines the content creation and publishing workflow for the WanderlustAfrica website using Sanity CMS.

## Content Creation Workflow

```
📝 Content Creation Process
│
├── 1️⃣ ACCESS STUDIO
│   ├── Local: http://localhost:3333
│   └── Production: [Deployed URL]
│
├── 2️⃣ CHOOSE CONTENT TYPE
│   ├── 🌍 Destination (Travel locations)
│   └── 📄 Page (General content)
│
├── 3️⃣ CREATE & EDIT
│   ├── Fill required fields
│   ├── Upload images with alt text
│   ├── Write compelling content
│   └── Preview changes
│
├── 4️⃣ REVIEW & OPTIMIZE
│   ├── Proofread content
│   ├── Check image quality
│   ├── Verify SEO elements
│   └── Test responsive display
│
└── 5️⃣ PUBLISH
    ├── Click "Publish" button
    ├── Content goes live on website
    └── Changes sync immediately
```

## Content Types Overview

### 🌍 Destinations
**Purpose**: Showcase African travel locations  
**Use for**: Countries, cities, national parks, cultural sites

**Required Fields:**
- Title ✅
- Slug (auto-generated) ✅

**Optional Fields:**
- Main Image 🖼️
- Description 📝
- Location 📍
- Activities 🎯

**Example Structure:**
```
Title: "Serengeti National Park"
Slug: serengeti-national-park
Location: "Tanzania, East Africa"
Description: "Experience the Great Migration..."
Activities: ["Game drives", "Hot air balloons", "Cultural visits"]
```

### 📄 Pages
**Purpose**: General website content  
**Use for**: About pages, blog posts, educational content

**Required Fields:**
- Title ✅
- Slug ✅

**Optional Fields:**
- Main Image 🖼️
- Content (Rich Text) 📄

**Example Structure:**
```
Title: "Our Family's African Adventure"
Slug: our-story
Content: [Rich text with headers, paragraphs, images]
```

## Publishing States

```
📋 Document States
│
├── 🟡 DRAFT
│   ├── Work in progress
│   ├── Not visible on website
│   └── Can edit freely
│
└── 🟢 PUBLISHED
    ├── Live on website
    ├── Visible to all users
    └── Requires republishing for changes
```

## Content Management Best Practices

### Writing Guidelines
- **Voice**: Personal, engaging, authentic
- **Tone**: Inspiring and educational
- **Length**: 2-3 paragraphs for descriptions
- **Keywords**: Include location-specific terms

### Image Standards
- **Format**: JPEG, PNG, WebP
- **Size**: Minimum 1200px width
- **Quality**: High resolution, well-lit
- **Alt Text**: Descriptive for accessibility

### SEO Optimization
- **Titles**: Descriptive and keyword-rich
- **Slugs**: Clear URL-friendly paths
- **Structure**: Use headers (H2, H3) properly
- **Content**: Include relevant keywords naturally

## Team Collaboration

### Roles & Responsibilities

**Content Creators**
- Write and upload content
- Manage images and media
- Follow brand guidelines
- Regular content updates

**Editors**
- Review content quality
- Ensure consistency
- Approve for publication
- Maintain editorial calendar

**Developers**
- Maintain CMS functionality
- Handle technical issues
- Deploy content updates
- Manage user permissions

### Communication Workflow

```
💬 Content Collaboration
│
├── 📝 CREATION
│   ├── Content creator drafts
│   ├── Saves as draft
│   └── Notifies editor
│
├── ✏️ REVIEW
│   ├── Editor reviews content
│   ├── Suggests changes
│   └── Approves or requests revisions
│
└── 🚀 PUBLICATION
    ├── Editor publishes content
    ├── Content goes live
    └── Team is notified
```

## Quality Assurance Checklist

### Before Publishing Content
- [ ] **Content Quality**
  - [ ] Grammar and spelling checked
  - [ ] Facts verified and accurate
  - [ ] Brand voice maintained
  - [ ] Engaging and informative

- [ ] **Technical Requirements**
  - [ ] All required fields completed
  - [ ] Images optimized and have alt text
  - [ ] Slug is SEO-friendly
  - [ ] Links work correctly

- [ ] **Visual Elements**
  - [ ] Images are high quality
  - [ ] Hotspots set for responsive display
  - [ ] Content formatting is consistent
  - [ ] Mobile display checked

## Troubleshooting Common Issues

### Content Not Appearing
1. Check if content is published (not draft)
2. Verify all required fields are filled
3. Allow time for cache refresh
4. Contact development team if issues persist

### Image Upload Problems
1. Check file format (JPEG, PNG, WebP)
2. Verify file size is under 10MB
3. Try different browser
4. Clear browser cache

### Publishing Errors
1. Ensure all required fields are completed
2. Check internet connection
3. Try refreshing the Studio
4. Contact administrator for permissions

## Resources & Support

- **📚 Complete Guide**: [SANITY_CMS_GUIDE.md](./SANITY_CMS_GUIDE.md)
- **⚡ Quick Reference**: [SANITY_QUICK_REFERENCE.md](./SANITY_QUICK_REFERENCE.md)
- **🔧 Technical Setup**: [sanity/README.md](./sanity/README.md)
- **🌐 Sanity Docs**: [sanity.io/docs](https://www.sanity.io/docs)

---

**🚀 Ready to create amazing content about African adventures!**