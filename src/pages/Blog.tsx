import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'ecommerce-backgrounds',
    title: 'Why E-commerce Stores Need Pure White Backgrounds',
    description: 'Learn why marketplaces like Amazon require pure white backgrounds and how removing backgrounds can boost your sales.',
    date: 'September 15, 2026',
    path: '/blog/ecommerce-backgrounds',
  },
  {
    id: 'ai-image-editing',
    title: 'How AI is Revolutionizing Image Editing',
    description: 'Discover the machine learning technology behind modern background removal tools and how they compare to manual editing.',
    date: 'September 10, 2026',
    path: '/blog/ai-image-editing',
  },
  {
    id: 'top-5-uses',
    title: 'Top 5 Uses for a Background Remover Tool',
    description: 'From YouTube thumbnails to real estate listings, see the most common and creative ways professionals use transparent backgrounds.',
    date: 'September 5, 2026',
    path: '/blog/top-5-uses',
  }
];

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark text-center">Blog & Resources</h1>
      <p className="text-lg text-brand-muted text-center mb-12">
        Read the latest articles about image editing, background removal tips, and how to improve your digital photography workflow.
      </p>

      <div className="space-y-8">
        {articles.map(article => (
          <div key={article.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
            <Link to={article.path} className="block">
              <h2 className="text-2xl font-bold text-brand-dark mb-2 hover:text-brand-purple transition-colors">
                {article.title}
              </h2>
            </Link>
            <p className="text-sm text-brand-purple/70 mb-4 font-medium">{article.date}</p>
            <p className="text-brand-muted mb-4">{article.description}</p>
            <Link to={article.path} className="text-brand-purple font-semibold hover:underline flex items-center">
              Read Article <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
