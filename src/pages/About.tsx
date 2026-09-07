import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-brand">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-dark">About Image Back Remover</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Our Mission</h2>
        <p className="text-brand-muted mb-6">
          At Image Back Remover, we believe that high-quality image editing shouldn't require expensive software or hours of manual labor. Our mission is to democratize professional image editing by providing a fast, accessible, and AI-powered background removal tool for everyone.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Who Is This For?</h2>
        <p className="text-brand-muted mb-6">
          Whether you are an e-commerce store owner needing clean product photos, a designer mocking up a presentation, a marketer creating social media graphics, or just someone looking to make a fun meme, our tool is designed to save you time.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">The Technology</h2>
        <p className="text-brand-muted">
          We utilize state-of-the-art artificial intelligence models that have been trained on millions of images to instantly recognize the difference between foreground subjects and background scenery. This allows us to deliver pixel-perfect cutouts in seconds.
        </p>
      </div>
    </div>
  );
};

export default About;
