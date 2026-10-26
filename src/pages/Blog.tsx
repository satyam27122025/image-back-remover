import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';

const articles = [
  {
    id: 'ecommerce-backgrounds',
    title: 'Why E-commerce Stores Need Pure White Backgrounds',
    description: 'Learn why marketplaces like Amazon require pure white backgrounds and how removing backgrounds can boost your product sales and conversion rates.',
    date: 'October 18, 2026',
    author: 'Alex Rivera',
    readTime: '6 min read',
    category: 'E-Commerce',
    path: '/blog/ecommerce-backgrounds',
  },
  {
    id: 'transparent-signature-guide',
    title: 'How to Create a Clean Transparent PNG Signature for PDFs & Documents',
    description: 'Step-by-step tutorial on turning a paper handwritten signature into a flawless transparent PNG cutout for Word, PDF contracts, and Google Docs.',
    date: 'October 15, 2026',
    author: 'Alex Rivera',
    readTime: '6 min read',
    category: 'Productivity',
    path: '/blog/transparent-signature-guide',
  },
  {
    id: 'product-photography-lighting',
    title: 'Product Photography Lighting 101: How to Avoid Harsh Shadows & Edge Bleed',
    description: 'The definitive lighting guide for e-commerce sellers. Discover how simple 3-point lighting setups ensure razor-sharp AI edge segmentation.',
    date: 'October 12, 2026',
    author: 'Maya Kapoor',
    readTime: '8 min read',
    category: 'Photography',
    path: '/blog/product-photography-lighting',
  },
  {
    id: 'png-vs-webp-vs-jpg',
    title: 'PNG vs WebP vs JPG: Which Format Should You Use for Transparent Images?',
    description: 'An in-depth technical analysis of 24-bit PNG, modern WebP with alpha channels, and why standard JPEG cannot support transparency.',
    date: 'October 9, 2026',
    author: 'Alex Rivera',
    readTime: '7 min read',
    category: 'Tech & Formats',
    path: '/blog/png-vs-webp-vs-jpg',
  },
  {
    id: 'professional-headshots-guide',
    title: 'How to Create Studio-Quality Headshots at Home Using AI Background Removal',
    description: 'Save hundreds of dollars on studio photographers. Learn how to take high-converting executive portraits at home with a smartphone.',
    date: 'October 5, 2026',
    author: 'Maya Kapoor',
    readTime: '7 min read',
    category: 'Portraits',
    path: '/blog/professional-headshots-guide',
  },
  {
    id: 'print-on-demand-merch-guide',
    title: 'Complete Guide to Background Removal for Print-on-Demand (Etsy, Redbubble, Shopify)',
    description: 'Eliminate direct-to-garment (DTG) printer white haze. How POD sellers prepare clean 300 DPI transparent graphics for t-shirts and stickers.',
    date: 'September 28, 2026',
    author: 'Alex Rivera',
    readTime: '8 min read',
    category: 'Merchandise',
    path: '/blog/print-on-demand-merch-guide',
  },
  {
    id: 'ai-image-editing',
    title: 'How AI is Revolutionizing Image Editing & Semantic Segmentation',
    description: 'Discover the machine learning technology, convolutional neural networks, and semantic segmentation algorithms powering modern background removal.',
    date: 'September 20, 2026',
    author: 'Alex Rivera',
    readTime: '6 min read',
    category: 'AI Technology',
    path: '/blog/ai-image-editing',
  },
  {
    id: 'top-5-uses',
    title: 'Top Creative Uses for a Transparent Background Remover Tool',
    description: 'From viral YouTube thumbnails to real estate property flyers and custom WhatsApp stickers, explore how creators utilize transparent PNG cutouts.',
    date: 'September 12, 2026',
    author: 'Editorial Team',
    readTime: '5 min read',
    category: 'Creative Design',
    path: '/blog/top-5-uses',
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-semibold uppercase tracking-wider mb-3">
          <BookOpen size={14} />
          <span>Knowledge Base & Tutorials</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-brand-dark mb-4 tracking-tight">
          Image Back Remover Blog & Guides
        </h1>
        <p className="text-brand-muted text-base sm:text-lg">
          Expert articles on e-commerce photography, machine learning computer vision, digital signatures, and practical graphic design workflows.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md hover:border-brand-purple/30 transition-all group"
          >
            <div>
              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-gray-100 font-semibold text-brand-purple">
                  {article.category}
                </span>
                <span className="flex items-center text-gray-400">
                  <Clock size={13} className="mr-1" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <Link to={article.path} className="block group-hover:text-brand-purple transition-colors">
                <h2 className="text-xl sm:text-2xl font-bold text-brand-dark mb-3 leading-snug">
                  {article.title}
                </h2>
              </Link>

              {/* Description */}
              <p className="text-sm text-brand-muted leading-relaxed mb-6">
                {article.description}
              </p>
            </div>

            {/* Footer / Meta */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-medium">
                By {article.author} • {article.date}
              </span>
              <Link
                to={article.path}
                className="font-bold text-brand-purple group-hover:text-brand-magenta flex items-center transition-colors"
              >
                <span>Read Full</span>
                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Free Tool Banner */}
      <div className="mt-16 bg-gradient-to-r from-brand-purple/10 to-brand-magenta/10 p-8 rounded-2xl border border-brand-purple/20 text-center">
        <h3 className="text-2xl font-bold text-brand-dark mb-2">Ready to Put These Guides into Practice?</h3>
        <p className="text-brand-muted max-w-xl mx-auto mb-6 text-sm">
          Remove backgrounds from up to 5 images simultaneously in under 5 seconds. 100% free with no registration required.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-8 py-3 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-magenta transition-all shadow-md"
        >
          <Sparkles size={16} className="mr-2" />
          <span>Try Image Back Remover Free</span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
