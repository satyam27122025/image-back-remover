import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Disclaimer</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: September 2026</p>

      <p>The information contained on the Image Back Remover website (the "Service") is for general information purposes only.</p>

      <p>We assume no responsibility for errors or omissions in the contents on the Service. We do not guarantee that the automated background removal will be 100% accurate or suitable for your specific use case. The quality of the output depends heavily on the quality, contrast, and complexity of the original uploaded image.</p>

      <p>In no event shall Image Back Remover be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service.</p>

      <p>Image Back Remover reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice.</p>
    </div>
  );
};

export default Disclaimer;
