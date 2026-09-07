import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-brand-dark">Contact Us</h1>
        <p className="text-brand-muted">
          Have a question, feedback, or need support? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        {status === 'success' ? (
          <div className="text-center py-12">
            <CheckCircle className="text-green-500 w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h3>
            <p className="text-brand-muted">We will get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="mt-6 text-brand-purple font-medium hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Name</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple outline-none transition-all" placeholder="John Doe" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Email</label>
              <input required type="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Subject</label>
              <input required type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple outline-none transition-all" placeholder="How can we help?" />
            </div>

            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">Message</label>
              <textarea required rows={5} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-purple outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="w-full btn-primary flex justify-center items-center"
            >
              {status === 'submitting' ? 'Sending...' : (
                <>Send Message <Send size={18} className="ml-2" /></>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="mt-8 text-center text-brand-muted flex items-center justify-center">
        <Mail size={16} className="mr-2" />
        support@imagebackremover.com
      </div>
    </div>
  );
};

export default Contact;
