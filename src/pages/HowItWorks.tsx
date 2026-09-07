import React from 'react';
import { UploadCloud, Zap, Image as ImageIcon, Check, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UploadCloud className="text-brand-purple" size={32} />,
      title: '1. Upload your image',
      desc: 'Drag & drop or select an image from your device. We support JPG, PNG, and WEBP formats up to 10MB.'
    },
    {
      icon: <Zap className="text-brand-yellow" size={32} />,
      title: '2. AI Detection',
      desc: 'Our advanced AI instantly scans your image and identifies the main subject with high precision.'
    },
    {
      icon: <ImageIcon className="text-brand-magenta" size={32} />,
      title: '3. Background Removal',
      desc: 'The background is automatically stripped away, leaving clean, smooth edges around your subject.'
    },
    {
      icon: <Check className="text-green-500" size={32} />,
      title: '4. Preview Result',
      desc: 'Review the transparent output instantly on a checkerboard background to ensure perfect quality.'
    },
    {
      icon: <Download className="text-brand-purple" size={32} />,
      title: '5. Download PNG',
      desc: 'Download your processed image as a high-quality transparent PNG, ready for use anywhere.'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-4 text-brand-dark">How It Works</h1>
      <p className="text-center text-brand-muted mb-12 max-w-2xl mx-auto">
        Removing a background used to take hours of manual editing. Now, our AI handles the heavy lifting in seconds. Here is the exact process.
      </p>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-purple before:to-brand-magenta before:opacity-20">
        {steps.map((step, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              {step.icon}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
              <h3 className="font-bold text-xl mb-2 text-brand-dark">{step.title}</h3>
              <p className="text-brand-muted">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
