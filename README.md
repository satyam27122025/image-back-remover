# Image Back Remover

A complete, production-ready website to remove image backgrounds using AI. Built with React, Vite, Tailwind CSS, and Cloudflare Workers.

## Features
- AI background removal via configurable API
- Drag and drop up to 5 images
- ZIP downloads and individual PNG downloads
- SEO Optimized
- Fully responsive design
- Cloudflare Serverless architecture

## Tech Stack
- Frontend: React + TypeScript + Vite + Tailwind CSS
- Backend: Cloudflare Workers
- Download: JSZip + FileSaver

## Setup Instructions

### 1. Local Setup
```bash
# Clone the repository
# Navigate to project folder
cd image-back-remover

# Install frontend dependencies
npm install

# Start the frontend
npm run dev
```

### 2. Environment Variables
Create a `.env` file in the `worker/` directory based on `.env.example`:
```env
BACKGROUND_REMOVAL_PROVIDER=removebg
BACKGROUND_REMOVAL_API_URL=https://api.remove.bg/v1.0/removebg
BACKGROUND_REMOVAL_API_KEY=YOUR_API_KEY_HERE
MAX_FILE_SIZE_MB=10
MAX_FILES_PER_BATCH=5
```

### 3. Backend Setup
```bash
cd worker
npm install
# Run local dev server for worker
npx wrangler dev
```
Update your `vite.config.ts` to proxy `/api` requests to the local Wrangler server port (default 8787).

### 4. Cloudflare Deployment
1. Deploy Backend: `cd worker && npx wrangler deploy`
2. Configure Secrets in Cloudflare dashboard for `BACKGROUND_REMOVAL_API_KEY`.
3. Deploy Frontend: Build using `npm run build` and upload the `dist` folder to Cloudflare Pages.
4. Set up Custom Domain in Cloudflare.

### 5. Google AdSense & SEO
- Update the Publisher ID in `public/ads.txt`.
- Set up Google Search Console and submit `public/sitemap.xml`.
- Update the `<title>` and `<meta>` tags as needed.

## Production Checklist
- [ ] Domain purchased and DNS configured
- [ ] HTTPS working
- [ ] Frontend deployed
- [ ] Backend Worker deployed
- [ ] AI provider configured and API key set as secret
- [ ] Upload tested
- [ ] ZIP download tested
- [ ] Privacy policy / Contact forms updated
- [ ] Search Console configured
