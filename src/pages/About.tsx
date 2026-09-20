import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-brand">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-dark">About Image Back Remover</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-brand-muted">
        <p className="mb-4">
          Image Back Remover was created with a simple goal: to make professional image editing accessible to everyone. We believe that you shouldn't need expensive software or advanced design skills to create high-quality, transparent images.
        </p>
        <p className="mb-8">
          Powered by state-of-the-art artificial intelligence, our tool automatically detects subjects and removes backgrounds with incredible precision. Whether you're a small business owner preparing product photos, a creator making thumbnails, or just having fun, we're here to save you time.
        </p>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-100">
          <a href="/" className="inline-block px-6 py-2 bg-brand-purple/10 text-brand-purple font-semibold rounded-lg hover:bg-brand-purple hover:text-white transition-colors">
            Try the Background Remover
          </a>
        </div>
      </div>

      <div className="bg-white p-8 mt-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Our Mission</h2>
        <p className="text-brand-muted mb-6">
          Our mission is to democratize digital design. We believe that everyone—from established e-commerce giants to independent creators—deserves access to professional-grade image editing tools. By removing the financial and technical barriers to high-quality design, we empower our users to tell better visual stories and grow their businesses.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Who Is This For?</h2>
        <p className="text-brand-muted mb-6">
          Whether you are an e-commerce store owner needing clean product photos, a designer mocking up a presentation, a marketer creating social media graphics, or just someone looking to make a fun meme, our tool is designed to save you time.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">The Technology</h2>
        <p className="text-brand-muted mb-6">
          We utilize state-of-the-art artificial intelligence models that have been trained on millions of images to instantly recognize the difference between foreground subjects and background scenery. This allows us to deliver pixel-perfect cutouts in seconds, handling complex edges like hair and semi-transparent objects with ease.
        </p>
        
        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Commitment to Privacy</h2>
        <p className="text-brand-muted">
          Unlike many other online image tools, we do not claim ownership of your photos, nor do we store them permanently. Your files are processed securely and deleted shortly after your session, ensuring your data remains yours.
        </p>
      </div>
    </div>
  );
};

export default About;
