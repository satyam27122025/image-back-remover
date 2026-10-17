import React from 'react';

const Disclaimer = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Disclaimer</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: October 2026</p>

      <h2>General Information</h2>
      <p>The information and tools provided on the Image Back Remover website (the "Service"), located at <strong>image-back-remover.pages.dev</strong>, are for general information and utility purposes only. While we strive to provide accurate, reliable, and useful tools, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Service or the information, products, services, or related graphics contained on the Service for any purpose.</p>

      <h2>No Professional Advice</h2>
      <p>The content on this website does not constitute professional graphic design, photography, or technical advice. The background removal results produced by our AI should be reviewed by the user before use in any professional, commercial, or critical application. We recommend that users always verify the quality and suitability of the processed images for their specific use cases before publishing, printing, or distributing them.</p>

      <h2>AI-Powered Results Disclaimer</h2>
      <p>Our background removal tool is powered by artificial intelligence (AI) and machine learning algorithms. While our AI has been trained on millions of images and produces high-quality results in most cases, we do not guarantee that:</p>
      <ul>
        <li>The automated background removal will be 100% accurate or pixel-perfect in all circumstances.</li>
        <li>The quality of the output will be suitable for your specific use case without additional manual editing.</li>
        <li>The AI will correctly identify all foreground subjects, especially in images with low contrast, complex edges, or unusual compositions.</li>
        <li>The results will meet the specific requirements of third-party platforms (e.g., Amazon, eBay, Google Shopping) without additional adjustments.</li>
      </ul>
      <p>The quality of the output depends heavily on the quality, resolution, contrast, lighting, and complexity of the original uploaded image. Users are encouraged to upload high-resolution images with clear subjects for the best results.</p>

      <h2>Third-Party Links and Services</h2>
      <p>Our website may contain links to third-party websites, services, or resources that are not owned or controlled by Image Back Remover. We have no control over, and assume no responsibility for, the content, privacy policies, practices, or availability of any third-party websites or services. The inclusion of any link does not necessarily imply a recommendation or endorsement of the views expressed within them.</p>

      <h2>Advertising Disclaimer</h2>
      <p>Our website displays advertisements served by Google AdSense and other third-party advertising partners. These advertisements are provided by third parties and are not endorsements of the products, services, or companies featured. We have no control over the content of these advertisements and are not responsible for any claims, damages, or losses resulting from interactions with advertised products or services.</p>

      <h2>Limitation of Liability</h2>
      <p>In no event shall Image Back Remover, its operators, or contributors be liable for any special, direct, indirect, consequential, incidental, or punitive damages whatsoever, whether in an action of contract, negligence, or other tort, arising out of or in connection with:</p>
      <ul>
        <li>The use or inability to use our Service.</li>
        <li>Any errors, inaccuracies, or omissions in the processed images or content on the Service.</li>
        <li>Any loss of data, revenue, profits, or business opportunities resulting from the use of the Service.</li>
        <li>Any unauthorized access to or alteration of your uploads or data.</li>
        <li>Any third-party content, products, or services linked or advertised on the Service.</li>
      </ul>

      <h2>Availability and Modifications</h2>
      <p>Image Back Remover reserves the right to make additions, deletions, or modifications to the contents, features, and functionality of the Service at any time without prior notice. We do not guarantee that the Service will be available at all times or that it will be free from errors or interruptions. Scheduled or unscheduled maintenance, updates, or technical issues may result in temporary unavailability.</p>

      <h2>Accuracy of Information</h2>
      <p>While we make every effort to ensure that the information on our website is accurate and up-to-date, we do not warrant that the information is free from errors or omissions. Blog posts, articles, and guides published on our website are for informational purposes only and reflect our opinions at the time of writing. Technology and best practices evolve, and content may become outdated over time.</p>

      <h2>External Use of Processed Images</h2>
      <p>You are solely responsible for how you use the images processed through our Service. We are not responsible for any consequences arising from the use of processed images, including but not limited to copyright infringement, violation of platform policies, or any legal disputes related to the use of processed images.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions or concerns about this Disclaimer, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@imagebackremover.com</li>
        <li><strong>Contact Page:</strong> <a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Disclaimer;
