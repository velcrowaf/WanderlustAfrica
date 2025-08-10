# WanderlustAfrica 🌍

A modern travel and education website showcasing the extraordinary journey of a family of six across Africa. Experience African destinations, educational content, and impactful community stories through immersive digital storytelling.

## 🚀 Overview

WanderlustAfrica is a comprehensive travel platform that combines:
- **Family Travel Stories**: Follow our family's adventures across African destinations
- **Educational Content**: Learn about African culture, history, and geography
- **Destination Guides**: Detailed information about must-visit African locations
- **Social Impact**: Stories of positive change and community projects
- **Travel Consultations**: Professional travel planning services

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.x
- **Routing**: React Router DOM 6.x
- **Animations**: Framer Motion 12.x
- **Icons**: Lucide React + React Icons
- **Content Management**: Sanity CMS 3.x
- **Backend**: Strapi (in `/server` directory)
- **Deployment**: Netlify
- **Code Quality**: ESLint + TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/velcrowaf/WanderlustAfrica.git
cd WanderlustAfrica
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

1. Copy the environment example file:
```bash
cp .env.example .env
```

2. Configure your environment variables in `.env`:
```env
# Sanity CMS Configuration
SANITY_TOKEN=your_sanity_token_here
PUBLIC_SANITY_PROJECT_ID=a4oqu4lc
PUBLIC_SANITY_DATASET=production

# Vite Environment Variables
VITE_SANITY_PROJECT_ID=a4oqu4lc
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-04-24
VITE_SANITY_TOKEN=your_sanity_token_here
```

### 4. Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

### 6. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
WanderlustAfrica/
├── public/                     # Static assets
│   ├── admin/                  # Admin interface assets
│   └── favicon.svg            # Site favicon
├── src/                       # Source code
│   ├── components/            # Reusable React components
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   ├── Footer.tsx         # Site footer
│   │   ├── Logo.tsx           # Brand logo
│   │   ├── YouTubeFeed.tsx    # YouTube integration
│   │   └── VisualEditor.tsx   # Sanity visual editing
│   ├── pages/                 # Page components
│   │   ├── Home.tsx           # Landing page
│   │   ├── About.tsx          # About the family
│   │   ├── Destinations.tsx   # Destination listings
│   │   ├── Education.tsx      # Educational content
│   │   ├── Impact.tsx         # Social impact stories
│   │   └── Contact.tsx        # Contact form
│   ├── api/                   # API integration logic
│   ├── data/                  # Static data files
│   ├── lib/                   # Utility functions
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles
├── sanity/                    # Sanity CMS configuration
│   ├── schemaTypes/           # Content schemas
│   ├── sanity.config.ts       # Sanity configuration
│   └── package.json           # Sanity dependencies
├── server/                    # Strapi backend (optional)
└── wanderlustafricanfamily/   # Family-specific content
```

## 🎨 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm start` | Start production server (for deployment) |

### Sanity CMS Scripts (in `/sanity` directory)

```bash
cd sanity
npm run dev          # Start Sanity Studio
npm run build        # Build Sanity Studio
npm run deploy       # Deploy Sanity Studio
```

## 🖥️ Pages & Features

### Home Page (`/`)
- Hero section with call-to-action
- YouTube content feed
- Featured destinations
- Navigation to all sections

### About Page (`/about`)
- Family story and mission
- Travel philosophy
- Meet the team

### Destinations Page (`/destinations`)
- Interactive destination cards
- Dynamic content from Sanity CMS
- Detailed destination information

### Education Page (`/education`)
- Cultural and historical content
- Learning resources
- Educational articles

### Impact Page (`/impact`)
- Community project stories
- Social impact initiatives
- Positive change narratives

### Contact Page (`/contact`)
- Contact form with validation
- Consultation booking
- Social media links

## 🎯 Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Content Management**: Dynamic content via Sanity CMS
- **Visual Editing**: Live preview editing in development
- **Performance**: Optimized with Vite and modern React patterns
- **SEO Friendly**: Structured data and meta tags
- **Accessibility**: WCAG compliant with semantic HTML
- **Error Handling**: Graceful error boundaries
- **Social Integration**: YouTube feeds and social media links

## 🔧 Configuration

### Sanity CMS Setup

1. Create a Sanity account at [sanity.io](https://sanity.io)
2. Create a new project or use existing project ID: `a4oqu4lc`
3. Get your API token from the Sanity dashboard
4. Update environment variables with your credentials

### Netlify Deployment

The project is configured for Netlify deployment with:
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables configured in Netlify dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure responsive design
- Add proper error handling
- Test on multiple devices
- Maintain accessibility standards

## 🔍 Code Quality

- **Linting**: ESLint with TypeScript rules
- **Type Safety**: Strict TypeScript configuration
- **Error Boundaries**: Graceful error handling
- **Performance**: Optimized bundle with Vite

Run linting:
```bash
npx eslint src/ --ext .ts,.tsx
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsiveness

The application is fully responsive with:
- Mobile-first design approach
- Optimized touch interactions
- Responsive navigation menu
- Adaptive layouts for all screen sizes

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SANITY_TOKEN` | Sanity API token | Yes |
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID | Yes |
| `PUBLIC_SANITY_DATASET` | Sanity dataset name | Yes |
| `VITE_SANITY_PROJECT_ID` | Vite-specific Sanity project ID | Yes |
| `VITE_SANITY_DATASET` | Vite-specific Sanity dataset | Yes |
| `VITE_SANITY_API_VERSION` | Sanity API version | Yes |
| `VITE_SANITY_TOKEN` | Vite-specific Sanity token | Yes |

## 🚨 Troubleshooting

### Common Issues

1. **Build failures**: Ensure all environment variables are set
2. **Sanity connection issues**: Verify API tokens and project ID
3. **Port conflicts**: Change port with `npm run dev -- --port 3000`
4. **Module resolution**: Clear node_modules and reinstall

### Getting Help

- Check the [Issues](https://github.com/velcrowaf/WanderlustAfrica/issues) page
- Review the [SITEMAP.md](./SITEMAP.md) for detailed structure
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- African communities for inspiring this journey
- Open source contributors
- The React and Vite communities
- Sanity CMS for excellent content management

---

**Ready to explore Africa with us?** Start your development journey today! 🚀

[Edit in StackBlitz ⚡️](https://stackblitz.com/~/github.com/velcrowaf/WanderlustAfrica)