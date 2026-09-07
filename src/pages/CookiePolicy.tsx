import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Cookie Policy</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 2026</p>

      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li><strong>Essential Cookies:</strong> These are required for the operation of our website, such as managing your upload session.</li>
        <li><strong>Analytics Cookies:</strong> These allow us to recognize and count the number of visitors and see how visitors move around our website. This helps us improve the way our website works.</li>
        <li><strong>Advertising Cookies:</strong> We use third-party advertising companies like Google AdSense to serve ads. These companies may use cookies to serve ads based on your prior visits to our website or other websites on the internet.</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit internetcookies.org.</p>
    </div>
  );
};

export default CookiePolicy;
