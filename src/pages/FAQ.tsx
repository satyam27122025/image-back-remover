import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      q: 'How do I remove a background from an image?',
      a: 'Simply upload your image using the upload zone on our homepage. Our AI will automatically detect the subject and remove the background in just a few seconds. You can then download the resulting transparent PNG.'
    },
    {
      q: 'Is the background remover free?',
      a: 'Yes, our background remover is completely free to use online. You do not need to pay anything to process your images.'
    },
    {
      q: 'What image formats are supported?',
      a: 'We support standard image formats including JPG, JPEG, PNG, and WebP. For best results, ensure your image has a clear subject.'
    },
    {
      q: 'Can I remove backgrounds from multiple images?',
      a: 'Yes! Our tool acts as a batch photo background remover. You can drag and drop up to 5 images at the same time.'
    },
    {
      q: 'Can I download transparent PNG images?',
      a: 'Absolutely. All processed images are converted into high-quality PNG formats with a fully transparent background maker feature.'
    },
    {
      q: 'How many images can I upload?',
      a: 'You can upload up to 5 images per session. The maximum file size per image is 10MB.'
    },
    {
      q: 'Is an account required?',
      a: 'No account or registration is required. We do not ask for your email. You can instantly start removing backgrounds.'
    },
    {
      q: 'How does AI background removal work?',
      a: 'Our tool uses an advanced neural network trained on millions of images. The AI algorithm automatically distinguishes the main foreground subject from the background pixels and isolates it flawlessly.'
    },
    {
      q: 'Why might some images produce imperfect results?',
      a: 'AI background removal works best when there is high contrast between the subject and the background. Images that are blurry, have extremely busy backgrounds, or where the subject blends into the background color may have slightly imperfect edges.'
    },
    {
      q: 'What should I do if background removal fails?',
      a: 'If a specific image fails or you get an error, click the "Retry" button. If the subject is still not detected properly, try uploading a higher resolution version or a photo with clearer lighting.'
    }
  ];

  // Generate FAQ JSON-LD Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-brand-dark">Frequently Asked Questions</h1>
      <p className="text-center text-brand-muted mb-12">
        Find answers to the most common questions about our free background remover online tool. If you need further assistance, feel free to contact us.
      </p>
      
      {/* Inject JSON-LD Schema safely */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-brand-dark">{faq.q}</h3>
            <p className="text-brand-muted">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="inline-block px-8 py-3 bg-brand-purple text-white font-semibold rounded-lg hover:bg-brand-magenta transition-colors shadow-md">
          Go back to Homepage
        </a>
      </div>
    </div>
  );
};

export default FAQ;
