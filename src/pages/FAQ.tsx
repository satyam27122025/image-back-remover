import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      q: 'Is Image Back Remover free?',
      a: 'Yes, our core background removal service is completely free to use for standard processing.'
    },
    {
      q: 'What image formats are supported?',
      a: 'We currently support JPG, PNG, and WEBP image formats.'
    },
    {
      q: 'How many images can I process at once?',
      a: 'You can upload and process up to 5 images per batch on the free plan.'
    },
    {
      q: 'What is the maximum file size?',
      a: 'The maximum file size per image is 10 MB.'
    },
    {
      q: 'Does the output have a transparent background?',
      a: 'Yes, all processed images are provided as high-quality PNG files with genuine transparent backgrounds.'
    },
    {
      q: 'Are my images stored?',
      a: 'No. Your images are securely processed by our AI and are not permanently stored or shared publicly. We respect your privacy.'
    },
    {
      q: 'How long does processing take?',
      a: 'Typically, it takes 2 to 5 seconds per image depending on the complexity of the subject and your internet connection.'
    },
    {
      q: 'Can I use the images commercially?',
      a: 'Yes, you retain all rights to your processed images and can use them for e-commerce, marketing, or any commercial purpose.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-12 text-brand-dark">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-brand-dark">{faq.q}</h3>
            <p className="text-brand-muted">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
