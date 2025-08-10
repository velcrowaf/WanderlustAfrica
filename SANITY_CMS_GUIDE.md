# WanderlustAfrica Sanity CMS User Guide 📝

Welcome to the WanderlustAfrica Content Management System! This guide will help you create, manage, and publish content for the WanderlustAfrica website using Sanity CMS.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Accessing Sanity Studio](#accessing-sanity-studio)
3. [Understanding Content Types](#understanding-content-types)
4. [Creating Destinations](#creating-destinations)
5. [Creating Pages](#creating-pages)
6. [Working with Images](#working-with-images)
7. [Publishing Content](#publishing-content)
8. [Best Practices](#best-practices)
9. [Troubleshooting](#troubleshooting)

## Getting Started

### What is Sanity CMS?

Sanity CMS is the content management system that powers the WanderlustAfrica website. It provides a user-friendly interface (called Sanity Studio) where you can create, edit, and manage all website content including:

- **Destinations**: African travel locations with descriptions, images, and activities
- **Pages**: General website pages like About, Contact, or blog posts
- **Images**: All media content for the website

### Prerequisites

Before you begin, ensure you have:
- Access credentials to the WanderlustAfrica Sanity project
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of web content creation

## Accessing Sanity Studio

### Option 1: Local Development Studio

If you're working on the project locally:

1. **Navigate to the sanity directory:**
   ```bash
   cd sanity
   ```

2. **Start the Sanity Studio:**
   ```bash
   npm run dev
   ```

3. **Open your browser** and go to: `http://localhost:3333`

4. **Sign in** with your Sanity account credentials

### Option 2: Deployed Sanity Studio

If a deployed version is available, you can access it directly through the web:

1. **Open your browser** and navigate to the deployed Sanity Studio URL
2. **Sign in** with your Sanity account credentials

> **Note**: Contact your administrator for the deployed Studio URL and access credentials.

### First Time Setup

When you first access the Studio:

1. You'll be prompted to sign in with your Sanity account
2. Make sure you have access to the **WanderlustAfrica** project (Project ID: `a4oqu4lc`)
3. You should see the Studio interface with content types in the navigation

## Understanding Content Types

WanderlustAfrica uses two main content types:

### 🌍 Destinations
Travel locations across Africa with rich details about places to visit.

**Fields:**
- **Title**: Name of the destination (e.g., "Maasai Mara National Reserve")
- **Slug**: URL-friendly version of the title (auto-generated)
- **Main Image**: Primary photo for the destination
- **Description**: Detailed description of the destination
- **Location**: Geographic location (e.g., "Kenya, East Africa")
- **Activities**: List of activities available at this destination

### 📄 Pages
General website content pages for various purposes.

**Fields:**
- **Title**: Page title (e.g., "About Our Family")
- **Slug**: URL path for the page (auto-generated)
- **Main Image**: Header image for the page
- **Content**: Rich text content with formatting, images, and layout options

## Creating Destinations

### Step-by-Step Guide

1. **Navigate to Destinations**
   - In the Studio sidebar, click on "Destination"
   - You'll see a list of existing destinations

2. **Create New Destination**
   - Click the "+" (plus) button or "Create new document"
   - Select "Destination" from the content type options

3. **Fill in Required Fields**
   
   **Title** (Required)
   - Enter a descriptive name for the destination
   - Example: "Victoria Falls, Zambia/Zimbabwe"
   
   **Slug**
   - Click "Generate" next to the slug field
   - This creates a URL-friendly version of your title
   - Example: `victoria-falls-zambia-zimbabwe`

4. **Add Main Image**
   - Click "Select image" in the Main Image field
   - Upload a high-quality photo (recommended: at least 1200px wide)
   - Add alt text for accessibility
   - Use the hotspot tool to focus on the most important part of the image

5. **Write Description**
   - Provide a compelling description of the destination
   - Include what makes it special and why travelers should visit
   - Keep it engaging and informative (2-3 paragraphs recommended)

6. **Set Location**
   - Enter the geographic location
   - Format: "City/Region, Country" or "Country, Continent"
   - Example: "Cape Town, South Africa"

7. **Add Activities**
   - Click "Add item" for each activity
   - Enter one activity per item
   - Examples: "Safari game drives", "Cultural village visits", "Photography"

8. **Save Your Work**
   - Use Ctrl+S (or Cmd+S on Mac) to save
   - The document will auto-save periodically

### Example Destination Entry

```
Title: Serengeti National Park
Slug: serengeti-national-park
Location: Tanzania, East Africa
Description: Experience the world's most spectacular wildlife migration in the Serengeti. This iconic national park spans 5,700 square miles of endless plains, home to over 2 million wildebeest, zebras, and gazelles. Witness the Great Migration, spot the Big Five, and immerse yourself in one of Africa's most pristine ecosystems.

Activities:
- Wildlife game drives
- Hot air balloon safaris  
- Cultural visits to Maasai communities
- Photography expeditions
- Walking safaris
```

## Creating Pages

### Step-by-Step Guide

1. **Navigate to Pages**
   - In the Studio sidebar, click on "Page"
   - View existing pages for reference

2. **Create New Page**
   - Click the "+" button
   - Select "Page" from content types

3. **Fill in Page Details**
   
   **Title** (Required)
   - Enter the page title as it should appear on the website
   - Example: "Our African Adventure Story"
   
   **Slug** (Required)
   - Generate from title or create custom URL path
   - Example: `our-story` (becomes `/our-story` on the website)

4. **Add Main Image**
   - Upload a header image for the page
   - Recommended size: 1200x600px or larger
   - Use the hotspot feature to set the focal point

5. **Create Content**
   
   The content field supports rich formatting:
   
   **Text Blocks**
   - Click the "+" button to add new content blocks
   - Choose "Block" for text content
   - Use the formatting toolbar for:
     - **Bold** and *italic* text
     - Headers (H1, H2, H3)
     - Bullet points and numbered lists
     - Links to external websites
   
   **Image Blocks**
   - Click "+" and select "Image"
   - Upload images directly into the content
   - Add captions and alt text
   - Set hotspots for responsive display

6. **Preview and Save**
   - Use the preview feature to see how your page will look
   - Save regularly with Ctrl+S (Cmd+S)

### Content Writing Tips

- **Use headers** to break up long content (H2, H3)
- **Keep paragraphs short** for better readability
- **Include compelling images** throughout the content
- **Write for your audience** - travelers interested in Africa
- **Tell stories** - personal experiences resonate with readers

## Working with Images

### Image Upload Process

1. **Supported Formats**
   - JPEG (.jpg, .jpeg)
   - PNG (.png)
   - WebP (.webp)
   - SVG (.svg) for simple graphics

2. **Recommended Specifications**
   - **Destination main images**: 1200x800px minimum
   - **Page headers**: 1200x600px minimum
   - **Content images**: 800x600px minimum
   - **File size**: Under 2MB for optimal performance

3. **Upload Steps**
   - Click "Select image" or drag and drop
   - Choose file from your computer
   - Wait for upload to complete
   - Add descriptive alt text for accessibility
   - Set hotspot/crop if needed

### Image Management Best Practices

**Alt Text Guidelines**
- Describe what's in the image for screen readers
- Be descriptive but concise
- Example: "Family of elephants crossing river in Serengeti National Park"

**Hotspot Tool**
- Click and drag the crosshair to the most important part of the image
- This ensures the focal point is preserved when images are cropped for different screen sizes

**Image Organization**
- Use descriptive filenames before uploading
- Group related images together
- Delete unused images to keep the media library clean

## Publishing Content

### Understanding Document States

**Draft** 📝
- Your work in progress
- Not visible on the live website
- Can be edited freely

**Published** ✅
- Live content visible on the website
- Changes require republishing

### Publishing Process

1. **Review Your Content**
   - Check all required fields are filled
   - Proofread text for spelling and grammar
   - Verify images display correctly

2. **Publish the Document**
   - Click the "Publish" button (top right)
   - Confirm you want to make the content live
   - The document status changes to "Published"

3. **Making Changes to Published Content**
   - Edit the published document
   - You'll see "Changes since last published"
   - Click "Publish" again to update the live version

### Content Review Workflow

Before publishing, consider:
- Is the content accurate and up-to-date?
- Are all images properly credited?
- Does the content align with WanderlustAfrica's brand voice?
- Have you followed SEO best practices (descriptive titles, good structure)?

## Best Practices

### Content Creation

**Writing Style**
- Use an engaging, personal tone
- Share authentic experiences and stories
- Include practical travel information
- Highlight cultural sensitivity and respect

**SEO Optimization**
- Use descriptive, keyword-rich titles
- Structure content with proper headers
- Include location-specific information
- Add internal links where relevant

**Image Guidelines**
- Always include alt text for accessibility
- Use high-quality, original photos when possible
- Ensure you have rights to use all images
- Optimize file sizes before uploading

### Content Management

**Organization**
- Use consistent naming conventions
- Keep related content grouped together
- Regular content audits and updates
- Remove outdated or irrelevant content

**Collaboration**
- Leave comments for team members when needed
- Use descriptive commit messages
- Coordinate with developers for content structure changes

## Troubleshooting

### Common Issues and Solutions

**Can't Access Studio**
- Check your internet connection
- Verify you're using the correct Studio URL
- Clear browser cache and cookies
- Try incognito/private browsing mode
- Contact admin to verify account permissions

**Images Won't Upload**
- Check file format (must be JPEG, PNG, WebP, or SVG)
- Verify file size is under 10MB
- Try a different browser
- Check internet connection stability

**Content Not Appearing on Website**
- Ensure content is published (not just saved as draft)
- Check that all required fields are filled
- Allow time for content to sync (usually immediate)
- Contact developer if issues persist

**Slug/URL Issues**
- Ensure slug is unique (no duplicates)
- Use only lowercase letters, numbers, and hyphens
- Regenerate slug if needed
- Keep slugs descriptive but concise

**Performance Issues**
- Close unnecessary browser tabs
- Refresh the Studio page
- Check internet connection speed
- Try a different browser

### Getting Help

**Technical Support**
- Check the Sanity documentation: [sanity.io/docs](https://sanity.io/docs)
- Contact your development team
- Use the help resources in the Studio

**Content Questions**
- Refer to WanderlustAfrica brand guidelines
- Consult with content team members
- Review existing content for style reference

## Quick Reference

### Keyboard Shortcuts
- **Save**: Ctrl+S (Cmd+S on Mac)
- **Bold text**: Ctrl+B (Cmd+B)
- **Italic text**: Ctrl+I (Cmd+I)
- **Add link**: Ctrl+K (Cmd+K)

### Content Checklist
Before publishing any content:
- [ ] Title is descriptive and engaging
- [ ] Slug is generated and unique
- [ ] Main image is uploaded with alt text
- [ ] All required fields are completed
- [ ] Content is proofread and error-free
- [ ] Images have appropriate alt text
- [ ] Content follows brand voice and style

---

## Need More Help?

This guide covers the basics of using Sanity CMS for WanderlustAfrica. For additional support:

- Contact your project administrator
- Visit the [Sanity Documentation](https://www.sanity.io/docs)
- Join the [Sanity Community Slack](https://slack.sanity.io/)

Happy content creating! 🌍✨