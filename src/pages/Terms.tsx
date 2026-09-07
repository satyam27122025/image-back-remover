import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Terms of Service</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using Image Back Remover ("imagebackremover.com"), you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h2>2. Service Description</h2>
      <p>Image Back Remover provides a free online tool to automatically remove backgrounds from digital images using artificial intelligence.</p>

      <h2>3. Acceptable Use</h2>
      <p>You agree to use this service only for lawful purposes. You are prohibited from uploading:</p>
      <ul>
        <li>Content that violates any intellectual property rights.</li>
        <li>Illegal, explicit, or highly offensive material.</li>
        <li>Malicious files or software.</li>
      </ul>

      <h2>4. Service Availability & Limitations</h2>
      <p>We strive to ensure high availability, but we do not guarantee that the service will be uninterrupted or error-free. We reserve the right to limit the number of images processed per user, file sizes, or API request frequencies to prevent abuse and ensure fair usage.</p>

      <h2>5. Intellectual Property</h2>
      <p>You retain all rights to the images you upload and the processed results you download. We claim no ownership over your content.</p>

      <h2>6. Limitation of Liability</h2>
      <p>In no event shall Image Back Remover be liable for any indirect, incidental, special, or consequential damages arising out of the use or inability to use our service.</p>
    </div>
  );
};

export default Terms;
