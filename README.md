# Boxxburn Kakkanad Landing Page

A premium, high-performance landing page for Boxxburn Kakkanad (BxB) — a community-driven functional fitness gym in Kochi.

## 🚀 Features

- **Modern Design**: Dark theme with neon orange accents (#FF6A00)
- **Fully Responsive**: Mobile-first design for all devices
- **Smooth Animations**: Framer Motion powered interactions
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Accessible**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section with X5 Method
│   ├── Programs.tsx     # Programs grid
│   ├── Reviews.tsx      # Testimonials carousel
│   ├── TimingsLocation.tsx # Timings and location
│   └── Footer.tsx       # Footer with CTAs
└── public/              # Static assets
```

## 🎨 Brand Colors

- **Primary**: Black (#000000) / Dark Grey (#0a0a0a)
- **Accent**: Neon Orange (#FF6A00)
- **Secondary**: White (#FFFFFF) / Cool Grey (#E5E5E5)

## 📱 Sections

1. **Hero Section** - Full-screen with animated background
2. **About Boxxburn** - X5 Method framework explanation
3. **Programs** - 8 program cards with CTAs
4. **Reviews** - Testimonials carousel with 4 reviews
5. **Timings & Location** - Schedule and Google Maps embed
6. **Footer** - Contact info, links, and final CTA

## 🔧 Customization

- Update contact information in `components/Footer.tsx`
- Modify Google Maps embed URL in `components/TimingsLocation.tsx`
- Adjust colors in `tailwind.config.ts`
- Update metadata in `app/layout.tsx`

## 📈 Performance

Optimized for Lighthouse scores 90+:
- Image optimization
- Code splitting
- Minimal JavaScript
- CSS optimization
- Semantic HTML

## 🚢 Deployment

Ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 📄 License

All rights reserved. Boxxburn Kakkanad (BxB) © 2024

---

**Built with ❤️ for Boxxburn Kakkanad | #theX5method**

