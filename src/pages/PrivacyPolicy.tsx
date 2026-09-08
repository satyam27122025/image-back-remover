import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Privacy Policy</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 2026</p>

      <h2>1. Introduction</h2>
      <p>Welcome to Image Back Remover. We respect your privacy and are committed to protecting your personal data.</p>

      <h2>2. Image Processing & Retention</h2>
      <p>When you upload images to our service for background removal, the images are securely transmitted to our third-party AI provider. <strong>We do not permanently store your uploaded images or the processed results.</strong> All images are automatically deleted from temporary processing servers shortly after your session ends.</p>

      <h2>3. Data Collection</h2>
      <p>We may collect standard internet log information and details of visitor behavior patterns (such as IP addresses, browser types) to analyze site traffic and improve our services.</p>

      <h2>4. Third-Party Services and Cookies</h2>
      <p>We use third-party services that may use cookies or similar technologies to collect data:</p>
      <ul>
        <li><strong>AI Processing:</strong> To provide background removal capabilities.</li>
        <li><strong>Analytics (Google Analytics 4):</strong> We use Google Analytics 4 (GA4) to understand how visitors interact with our website. GA4 uses cookies to collect anonymous usage data. We do not send personally identifiable information (PII) or image contents to Google Analytics.</li>
        <li><strong>Advertising (Google AdSense):</strong> To display advertisements. Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/">Ads Settings</a>.</li>
      </ul>

      <h2>5. User Rights</h2>
      <p>Depending on your location, you may have rights regarding your personal data, including the right to access, correct, or delete information we hold about you. Since we do not retain images, no image deletion requests are necessary.</p>

      <h2>6. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at: support@imagebackremover.com</p>
    </div>
  );
};

export default PrivacyPolicy;
