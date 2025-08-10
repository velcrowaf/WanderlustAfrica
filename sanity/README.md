# WanderlustAfrica Sanity Studio 🌍

This directory contains the Sanity Content Studio configuration for the WanderlustAfrica website. Sanity Studio is the admin interface where content creators can manage destinations, pages, and media for the website.

## Quick Start

### For Content Creators
If you're here to create or edit content, see the comprehensive **[Sanity CMS User Guide](../SANITY_CMS_GUIDE.md)** for detailed instructions.

### For Developers

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Studio locally:**
   ```bash
   npm run dev
   ```
   
   The Studio will be available at `http://localhost:3333`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Deploy Studio:**
   ```bash
   npm run deploy
   ```

## Project Configuration

- **Project ID**: `a4oqu4lc`
- **Dataset**: `production`
- **Studio Title**: WanderlustAfrica

## Content Types

This Studio manages two main content types:

### 🌍 Destinations
Travel locations across Africa with:
- Title and URL slug
- Main image with hotspot support
- Description and location
- List of activities

### 📄 Pages  
General website pages with:
- Title and URL slug
- Header image
- Rich text content with embedded images

## Studio Features

- **Real-time collaboration**: Multiple users can edit simultaneously
- **Rich text editing**: Full WYSIWYG editor with image support
- **Media management**: Drag-and-drop image uploads with hotspot cropping
- **Visual editing**: Preview changes in development mode
- **Version history**: Track all content changes

## Development

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to Sanity hosting |
| `npm run start` | Start production server |

### Environment Variables

The Studio uses these environment variables (configured in the parent directory):

```env
VITE_SANITY_PROJECT_ID=a4oqu4lc
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-04-24
VITE_SANITY_TOKEN=your_token_here
```

### Schema Development

Content schemas are defined in `./schemaTypes/`:
- `destination.ts` - African travel destinations
- `page.ts` - General website pages
- `index.ts` - Schema exports

## Resources

- **User Guide**: [WanderlustAfrica CMS Guide](../SANITY_CMS_GUIDE.md)
- **Sanity Documentation**: [sanity.io/docs](https://www.sanity.io/docs)
- **Community Support**: [Sanity Slack](https://slack.sanity.io/)
- **Studio Extensions**: [sanity.io/plugins](https://www.sanity.io/plugins)

## Support

For content creation questions, refer to the [Sanity CMS User Guide](../SANITY_CMS_GUIDE.md).

For technical issues or development questions, consult the development team or Sanity documentation.