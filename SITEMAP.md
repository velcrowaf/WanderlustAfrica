# WanderlustAfrica Site Map

## 🏠 Main Application Structure

### Frontend Routes (React Router)
```
/                    - Home Page
├── /about          - About Page  
├── /destinations   - Destinations Listing
├── /education      - Education Content
├── /impact         - Impact Stories
└── /contact        - Contact Form
```

### 📱 Main Site Pages

#### 1. **Home Page** (`/`)
- **File**: `src/pages/Home.tsx`
- **Components Used**:
  - Hero section with call-to-action
  - YouTube feed integration
  - Featured content sections
- **Features**:
  - Hero video/image background
  - Navigation to all other sections
  - Social media integration
  - YouTube content feed

#### 2. **About Page** (`/about`)
- **File**: `src/pages/About.tsx`
- **Purpose**: Family story and mission
- **Content**: Information about the traveling family

#### 3. **Destinations Page** (`/destinations`)
- **File**: `src/pages/Destinations.tsx`
- **Purpose**: Showcase African destinations
- **Integration**: Connected to Sanity CMS for destination content
- **Components**:
  - DestinationCard components
  - Dynamic destination data from CMS

#### 4. **Education Page** (`/education`)
- **File**: `src/pages/Education.tsx`
- **Purpose**: Educational content about Africa
- **Features**: Learning resources and cultural information

#### 5. **Impact Page** (`/impact`)
- **File**: `src/pages/Impact.tsx`
- **Purpose**: Social impact and community projects
- **Content**: Stories of positive change

#### 6. **Contact Page** (`/contact`)
- **File**: `src/pages/Contact.tsx`
- **Features**:
  - Contact form with validation
  - Contact information display
  - Social media links
  - Response time information

## 🎨 Component Architecture

### Core Components
```
src/components/
├── ErrorBoundary.tsx       - Error handling wrapper
├── Footer.tsx              - Site footer
├── Logo.tsx                - Brand logo component
├── Navigation.tsx          - Main navigation (duplicate?)
├── Navbar.tsx              - Navigation bar
├── SocialLinks.tsx         - Social media links
├── DestinationCard.tsx     - Destination display card
├── YouTubeFeed.tsx         - YouTube integration
├── VisualEditor.tsx        - Sanity visual editing
├── ContentEditor.tsx       - Content editing interface
├── RichTextEditor.tsx      - Text editing component
└── SanityStudioIntegration.tsx - Sanity CMS integration
```

### Shared Components
- **ErrorBoundary**: Global error handling with user-friendly fallback
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Site-wide footer with links and information
- **Logo**: Consistent branding across the site

## 🗄️ Content Management (Sanity CMS)

### Content Types
```
sanity/schemaTypes/
├── destination.ts          - Destination content schema
├── page.ts                 - General page content schema
└── index.ts               - Schema exports
```

#### Destination Schema
- **Fields**: title, slug, mainImage, description, location, activities
- **Purpose**: Manage destination information
- **Integration**: Connected to Destinations page

#### Page Schema
- **Fields**: title, slug, mainImage, content (rich text)
- **Purpose**: Manage general page content
- **Features**: Rich text editing with images

### Sanity Studio Access
- **URL**: `/studio` (development)
- **Configuration**: `sanity/sanity.config.ts`
- **Visual Editing**: Enabled in development mode

## 🚀 Backend API (Strapi)

### Content Types
```
server/src/api/
├── about/                  - About page content
├── article/                - Article content
├── author/                 - Author information
├── category/               - Content categories
└── global/                 - Global site settings
```

### API Endpoints
- **About**: `/api/about` - About page data
- **Articles**: `/api/articles` - Article listings
- **Authors**: `/api/authors` - Author information
- **Categories**: `/api/categories` - Content categorization
- **Global**: `/api/global` - Site-wide settings

## 🏡 Family Website Subdirectory

### Structure
```
wanderlustafricanfamily/
├── src/                    - Source files
├── public/                 - Static assets
├── config/                 - Configuration files
└── database/               - Database files
```

**Purpose**: Separate family-focused website section
**Technology**: Independent application within the repository

## 🔧 Technical Infrastructure

### Build System
- **Main Build**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React hooks (useState, useEffect)
- **Routing**: React Router DOM

### Environment Configuration
- **Development**: Environment variables in `.env.example`
- **Production**: Configurable via environment variables
- **Security**: Environment validation and type safety

### Key Integrations
1. **Sanity CMS**: Content management and visual editing
2. **Strapi**: Backend API and content types
3. **YouTube**: Video content integration
4. **Social Media**: Links and sharing capabilities

## 🔒 Security & Best Practices

### Environment Variables
- ✅ `.env` moved to `.env.example`
- ✅ Environment validation with TypeScript
- ✅ Secure token handling

### Code Quality
- ✅ ESLint configuration
- ✅ TypeScript strict mode
- ✅ Error boundaries for graceful error handling
- ✅ Responsive design patterns

### SEO & Accessibility
- ✅ Meta tags and Open Graph
- ✅ Semantic HTML structure
- ✅ Screen reader friendly navigation
- ✅ Mobile responsive design

## 📊 Site Flow

```
User Journey:
Landing (/) → About → Destinations → Education → Impact → Contact
              ↓
        YouTube Content
              ↓
        Social Media
```

### Navigation Flow
1. **Primary Navigation**: Fixed header with all main sections
2. **Mobile Navigation**: Collapsible hamburger menu
3. **Footer Navigation**: Secondary links and social media
4. **CTA Flow**: Home → Contact for consultations

This site map provides a comprehensive overview of the WanderlustAfrica project structure, including all routes, components, content management systems, and technical architecture.