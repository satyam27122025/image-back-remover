import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

const routes = [
  {
    path: '/',
    title: 'Free Background Remover Online – Remove Image Background | Image Back Remover',
    desc: 'Remove backgrounds from images online for free. Upload up to 5 images, automatically remove the background, preview transparent results, and download PNG files or ZIP.'
  },
  {
    path: '/how-it-works',
    title: 'How It Works – AI Background Removal Technology | Image Back Remover',
    desc: 'Learn how our automated neural network isolates foreground subjects and strips backgrounds in under 5 seconds with zero quality loss.'
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions – Free Online Background Remover | Image Back Remover',
    desc: 'Find answers to common questions about image formats, file size limits, batch processing, transparency, and data privacy.'
  },
  {
    path: '/about',
    title: 'About Us – Editorial Mission & Privacy Guarantee | Image Back Remover',
    desc: 'Learn about our mission to make professional design accessible for all, our computer vision technology, and our strict zero-retention privacy standards.'
  },
  {
    path: '/contact',
    title: 'Contact Us & Support – Image Back Remover Team',
    desc: 'Have questions or need assistance? Contact the Image Back Remover team. We reply within 24-48 business hours.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy – GDPR, CCPA & Data Protection | Image Back Remover',
    desc: 'Read our transparent privacy policy explaining zero permanent storage, encrypted image processing, Google AdSense cookies, and user privacy rights.'
  },
  {
    path: '/terms',
    title: 'Terms of Service – Image Back Remover',
    desc: 'Review the terms and conditions for using our free online background removal service.'
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy – Google AdSense & Analytics Settings | Image Back Remover',
    desc: 'Understand how we use essential, analytics, and advertising cookies to support our free background remover tool.'
  },
  {
    path: '/disclaimer',
    title: 'Disclaimer – Image Back Remover',
    desc: 'Important legal disclaimers regarding service availability, AI output accuracy, and user content.'
  },
  {
    path: '/ecommerce-product-photos',
    title: 'E-Commerce Product Background Remover – Amazon & Shopify Ready | Image Back Remover',
    desc: 'Batch remove backgrounds from product photos for Amazon, eBay, Shopify, Etsy, and Google Shopping. Free white and transparent PNG cutouts.'
  },
  {
    path: '/transparent-signature-maker',
    title: 'Free Transparent Signature Maker Online – Clean PNG for PDFs & Documents',
    desc: 'Convert handwritten signatures into clean transparent PNG stamps for PDF contracts, Word documents, and digital invoices without gray scanner boxes.'
  },
  {
    path: '/portrait-headshot-remover',
    title: 'AI Portrait & Headshot Background Remover – Studio Quality for LinkedIn',
    desc: 'Create professional headshots for LinkedIn and company directories with organic hair matting and executive studio backgrounds.'
  },
  {
    path: '/blog',
    title: 'Blog & Knowledge Base – Image Editing & Photography Guides | Image Back Remover',
    desc: 'Explore expert articles on product photography lighting, digital signatures, AI computer vision, file formats, and print-on-demand cutouts.'
  },
  {
    path: '/blog/ecommerce-backgrounds',
    title: 'Why E-Commerce Stores Need Pure White Backgrounds | Image Back Remover',
    desc: 'Learn why marketplaces like Amazon mandate white backgrounds and how clean product cutouts boost sales conversion rates.'
  },
  {
    path: '/blog/ai-image-editing',
    title: 'How AI is Revolutionizing Image Editing & Semantic Segmentation | Image Back Remover',
    desc: 'Discover the deep learning neural networks, U-Net architectures, and alpha matting algorithms powering modern background removal.'
  },
  {
    path: '/blog/top-5-uses',
    title: 'Top Creative Uses for a Transparent Background Remover Tool | Image Back Remover',
    desc: 'From viral YouTube thumbnails to real estate property flyers and custom stickers, explore how creators utilize transparent PNG cutouts.'
  },
  {
    path: '/blog/transparent-signature-guide',
    title: 'How to Create a Clean Transparent PNG Signature for PDFs & Documents',
    desc: 'Step-by-step tutorial on turning a handwritten paper signature into a flawless transparent PNG cutout for Word, PDF contracts, and Google Docs.'
  },
  {
    path: '/blog/product-photography-lighting',
    title: 'Product Photography Lighting 101: How to Avoid Harsh Shadows & Edge Bleed',
    desc: 'Master budget-friendly 3-point lighting setups to ensure clean, razor-sharp AI edge segmentation for e-commerce product photos.'
  },
  {
    path: '/blog/png-vs-webp-vs-jpg',
    title: 'PNG vs WebP vs JPG: Which Format Should You Use for Transparent Images?',
    desc: 'Compare PNG-24 lossless transparency, modern WebP alpha channels, and JPG compression. Find out which format fits your workflow.'
  },
  {
    path: '/blog/professional-headshots-guide',
    title: 'How to Create Studio-Quality Headshots at Home Using AI Background Removal',
    desc: 'Save hundreds of dollars on studio photographers. Learn how to take high-converting executive portraits at home with a smartphone.'
  },
  {
    path: '/blog/print-on-demand-merch-guide',
    title: 'Complete Guide to Background Removal for Print-on-Demand (Etsy, Redbubble, Shopify)',
    desc: 'Eliminate direct-to-garment (DTG) printer white haze. How POD sellers prepare clean 300 DPI transparent graphics for t-shirts and stickers.'
  }
];

async function prerender() {
  console.log('🚀 Starting Pre-rendering (SSG) for Google AdSense & SEO compliance...');
  
  const templatePath = path.resolve(distDir, 'index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found! Run vite build first.');
  }
  const template = fs.readFileSync(templatePath, 'utf-8');

  // Dynamically locate server entry file (can be entry-server.js or assets/entry-server-[hash].js)
  let serverEntryPath = path.resolve(distSsrDir, 'entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    const assetsDir = path.resolve(distSsrDir, 'assets');
    if (fs.existsSync(assetsDir)) {
      const files = fs.readdirSync(assetsDir);
      const match = files.find(f => f.startsWith('entry-server') && f.endsWith('.js'));
      if (match) {
        serverEntryPath = path.resolve(assetsDir, match);
      }
    }
  }

  if (!fs.existsSync(serverEntryPath)) {
    const files = fs.readdirSync(distSsrDir);
    const match = files.find(f => f.includes('entry-server') && f.endsWith('.js'));
    if (match) {
      serverEntryPath = path.resolve(distSsrDir, match);
    }
  }

  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Could not find entry-server file in ${distSsrDir}. Files: ${fs.readdirSync(distSsrDir).join(', ')}`);
  }

  console.log(`  ✓ Loaded SSR entry from: ${path.relative(rootDir, serverEntryPath)}`);
  const { render } = await import(`file://${serverEntryPath}`);

  for (const route of routes) {
    try {
      const appHtml = render(route.path);
      const canonicalUrl = `https://image-back-remover.pages.dev${route.path === '/' ? '' : route.path}`;

      let html = template
        // Inject rendered HTML into #root
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
        // Update Title
        .replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`)
        // Update Meta Description
        .replace(/<meta\s+name="description"\s+content=".*?"\s*\/?>/, `<meta name="description" content="${route.desc}" />`)
        // Update Canonical
        .replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/?>/, `<link rel="canonical" href="${canonicalUrl}" />`)
        // Update OG Tags
        .replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/?>/, `<meta property="og:title" content="${route.title}" />`)
        .replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/?>/, `<meta property="og:description" content="${route.desc}" />`)
        .replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/?>/, `<meta property="og:url" content="${canonicalUrl}" />`)
        // Update Twitter Tags
        .replace(/<meta\s+property="twitter:title"\s+content=".*?"\s*\/?>/, `<meta property="twitter:title" content="${route.title}" />`)
        .replace(/<meta\s+property="twitter:description"\s+content=".*?"\s*\/?>/, `<meta property="twitter:description" content="${route.desc}" />`)
        .replace(/<meta\s+property="twitter:url"\s+content=".*?"\s*\/?>/, `<meta property="twitter:url" content="${canonicalUrl}" />`);

      let targetFile;
      if (route.path === '/') {
        targetFile = path.resolve(distDir, 'index.html');
      } else {
        const routeSubdir = path.resolve(distDir, route.path.replace(/^\//, ''));
        if (!fs.existsSync(routeSubdir)) {
          fs.mkdirSync(routeSubdir, { recursive: true });
        }
        targetFile = path.resolve(routeSubdir, 'index.html');
      }

      fs.writeFileSync(targetFile, html, 'utf-8');
      console.log(`  ✓ Pre-rendered: ${route.path} -> ${path.relative(rootDir, targetFile)} (${appHtml.length} bytes)`);
    } catch (err) {
      console.error(`  ✗ Error rendering ${route.path}:`, err);
    }
  }

  // Clean up any old _redirects from dist if present to avoid Cloudflare 100324 loop error
  const redirectsDest = path.resolve(distDir, '_redirects');
  if (fs.existsSync(redirectsDest)) {
    fs.unlinkSync(redirectsDest);
  }

  console.log('🎉 Pre-rendering complete! All 21 pages have full static publisher content.');
}

prerender().catch(err => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
