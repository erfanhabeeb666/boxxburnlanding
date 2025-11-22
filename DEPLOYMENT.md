# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Pre-Deployment Checklist

### 1. Update Contact Information
- Edit `components/Footer.tsx`:
  - Replace phone number placeholder: `+91 XXXXX XXXXX`
  - Update email: `info@boxxburn.com`
  - Verify Instagram handle: `@boxxburn.bxb`

### 2. Update Google Maps Embed
- Edit `components/TimingsLocation.tsx`
- Replace the placeholder Google Maps embed URL with the actual location coordinates
- Get embed code from: https://www.google.com/maps
- Search for "Boxxburn Kakkanad" or use exact coordinates

### 3. Verify SEO Metadata
- Check `app/layout.tsx` for:
  - Title tags
  - Meta descriptions
  - Open Graph tags
  - Twitter card tags

### 4. Add Real Images (Optional)
- Replace placeholder images in components
- Add gym photos to `public/` directory
- Update image paths in components

## Deployment Platforms

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add environment variables if needed

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`
3. Ensure Node.js 18+ is installed

## Performance Optimization

- Images: Use Next.js Image component for optimized loading
- Fonts: Already optimized with Next.js font optimization
- Code splitting: Automatic with Next.js
- Lighthouse: Target 90+ scores (already optimized)

## Environment Variables (if needed)

Create `.env.local` for:
- Analytics IDs
- API keys
- Contact form endpoints

## Post-Deployment

1. Test all links and CTAs
2. Verify mobile responsiveness
3. Check Google Maps embed
4. Test form submissions (if added)
5. Verify Instagram link
6. Run Lighthouse audit

---

**Note**: Update the Google Maps embed URL in `components/TimingsLocation.tsx` with the actual gym location coordinates before deploying.

