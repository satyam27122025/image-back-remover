import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl prose prose-brand">
      <h1 className="text-4xl font-bold text-center mb-8 text-brand-dark">About Image Back Remover</h1>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-brand-muted">
        <p className="mb-4">
          Image Back Remover was created with a simple goal: to make professional image editing accessible to everyone. We believe that you shouldn't need expensive software or advanced design skills to create high-quality, transparent images. Our platform empowers individuals and businesses alike to create stunning visuals without any learning curve.
        </p>
        <p className="mb-8">
          Powered by state-of-the-art artificial intelligence, our tool automatically detects subjects and removes backgrounds with incredible precision. Whether you're a small business owner preparing product photos, a content creator making thumbnails, a student working on a project, or just having fun with images, we're here to save you time and deliver professional results.
        </p>
        
        <div className="text-center mt-8 pt-8 border-t border-gray-100">
          <Link to="/" className="inline-block px-6 py-2 bg-brand-purple/10 text-brand-purple font-semibold rounded-lg hover:bg-brand-purple hover:text-white transition-colors">
            Try the Background Remover
          </Link>
        </div>
      </div>

      <div className="bg-white p-8 mt-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Our Mission</h2>
        <p className="text-brand-muted mb-6">
          Our mission is to democratize digital design. We believe that everyone—from established e-commerce giants to independent creators, from professional photographers to hobbyists—deserves access to professional-grade image editing tools. By removing the financial and technical barriers to high-quality design, we empower our users to tell better visual stories, create compelling product listings, and grow their businesses. We are committed to keeping our core background removal tool free for all users while maintaining the highest standards of quality and privacy.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Who Is This For?</h2>
        <p className="text-brand-muted mb-4">
          Our tool is designed for a wide range of users across diverse industries and use cases:
        </p>
        <ul className="text-brand-muted mb-6 list-disc pl-5 space-y-2">
          <li><strong>E-commerce Sellers:</strong> Create clean, white-background product photos for Amazon, eBay, Shopify, Etsy, and other marketplaces that require standardized product imagery.</li>
          <li><strong>Content Creators:</strong> Design eye-catching YouTube thumbnails, Instagram posts, TikTok graphics, and social media content with transparent cutouts.</li>
          <li><strong>Graphic Designers:</strong> Quickly isolate subjects for compositing, mockups, presentations, and design projects without spending time on manual masking.</li>
          <li><strong>Real Estate Professionals:</strong> Enhance property photos, create marketing flyers, and produce professional listing images.</li>
          <li><strong>Job Seekers:</strong> Create professional headshots with clean backgrounds for LinkedIn profiles, resumes, and portfolio websites.</li>
          <li><strong>Students and Educators:</strong> Prepare images for presentations, reports, and educational materials.</li>
          <li><strong>Hobbyists:</strong> Make custom stickers, memes, invitations, greeting cards, and other creative projects.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 text-brand-purple">The Technology</h2>
        <p className="text-brand-muted mb-4">
          We utilize state-of-the-art artificial intelligence models based on deep neural networks that have been trained on millions of images to instantly recognize the difference between foreground subjects and background scenery. Our AI performs pixel-level semantic segmentation — classifying every single pixel in the image as either "subject" or "background" — to deliver precise, clean cutouts.
        </p>
        <p className="text-brand-muted mb-6">
          The technology excels at handling complex visual scenarios that would challenge traditional editing methods, including:
        </p>
        <ul className="text-brand-muted mb-6 list-disc pl-5 space-y-2">
          <li>Fine details like individual hair strands, fur, and feathers</li>
          <li>Semi-transparent objects such as glass, veils, and smoke</li>
          <li>Subjects with colors similar to the background</li>
          <li>Multiple subjects in a single image</li>
          <li>Low-contrast and complex lighting scenarios</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4 text-brand-purple">Commitment to Privacy</h2>
        <p className="text-brand-muted mb-4">
          Unlike many other online image tools, we take your privacy extremely seriously:
        </p>
        <ul className="text-brand-muted mb-6 list-disc pl-5 space-y-2">
          <li>We <strong>do not claim ownership</strong> of your photos or processed results. Your images remain yours.</li>
          <li>We <strong>do not store images permanently.</strong> All uploaded images and processed results are automatically deleted from our servers shortly after your session ends.</li>
          <li>We <strong>do not use your images to train AI models.</strong> Your uploads are processed and discarded.</li>
          <li>All image transfers use <strong>HTTPS encryption</strong> to ensure your data is secure in transit.</li>
          <li>We <strong>do not require registration</strong> or personal information to use our Service.</li>
        </ul>
        <p className="text-brand-muted">
          For full details on how we handle your data, please review our <Link to="/privacy-policy" className="text-brand-purple hover:underline">Privacy Policy</Link>.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-brand-purple">How We're Funded</h2>
        <p className="text-brand-muted">
          Image Back Remover is a free tool. To keep the service free and accessible to everyone, we display non-intrusive advertisements through Google AdSense. These ads help cover our server costs, AI processing fees, and ongoing development expenses. We are committed to maintaining a clean, professional user experience and will never compromise usability with excessive or disruptive advertising.
        </p>
      </div>
    </div>
  );
};

export default About;
