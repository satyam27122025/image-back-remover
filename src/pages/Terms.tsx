import React from 'react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Terms of Service</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: October 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using Image Back Remover ("the Service"), available at <strong>image-back-remover.pages.dev</strong> ("the Site"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must not use the Service. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any such changes constitutes your acceptance of the updated Terms. It is your responsibility to review these Terms periodically.</p>

      <h2>2. Service Description</h2>
      <p>Image Back Remover provides a free online tool that uses artificial intelligence (AI) to automatically remove backgrounds from digital images. The Service accepts image uploads in JPG, JPEG, PNG, and WebP formats, processes them using a third-party AI provider, and returns a transparent PNG output. The Service allows processing of up to 5 images per session, with a maximum file size of 10MB per image.</p>

      <h2>3. Eligibility</h2>
      <p>You must be at least 13 years old to use this Service. If you are under the age of 18, you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf. By using the Service, you represent and warrant that you meet all eligibility requirements.</p>

      <h2>4. Acceptable Use</h2>
      <p>You agree to use this Service only for lawful purposes and in accordance with these Terms. You are strictly prohibited from:</p>
      <ul>
        <li>Uploading content that infringes upon the intellectual property rights, copyrights, trademarks, or other proprietary rights of any third party.</li>
        <li>Uploading illegal, explicit, obscene, defamatory, or highly offensive material.</li>
        <li>Uploading malicious files, viruses, malware, or other harmful software.</li>
        <li>Attempting to reverse-engineer, decompile, or extract the source code of the Service or its underlying AI models.</li>
        <li>Using automated tools, bots, scrapers, or scripts to access or interact with the Service in a manner not expressly authorized by us.</li>
        <li>Circumventing or attempting to bypass any usage limits, rate limits, or security measures implemented on the Service.</li>
        <li>Using the Service in any manner that could damage, disable, overburden, or impair our servers or networks.</li>
        <li>Using the Service to generate content that violates any applicable law or regulation.</li>
      </ul>

      <h2>5. Intellectual Property</h2>
      <p>You retain all ownership rights to the images you upload and the processed results you download. We claim no ownership over your content. However, the Service itself—including its design, code, branding, logos, user interface, and underlying technology—is the intellectual property of Image Back Remover and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works based on the Service without our prior written consent.</p>

      <h2>6. Service Availability &amp; Limitations</h2>
      <p>We strive to ensure high availability and performance, but we do not guarantee that the Service will be uninterrupted, error-free, or available at all times. We reserve the right to:</p>
      <ul>
        <li>Temporarily or permanently suspend or discontinue the Service (or any part of it) at any time, with or without notice.</li>
        <li>Limit the number of images processed per user, file sizes, or API request frequencies to prevent abuse and ensure fair usage for all users.</li>
        <li>Modify, update, or change the features and functionality of the Service at any time.</li>
      </ul>
      <p>We shall not be held liable for any losses, damages, or inconvenience resulting from any interruption, suspension, or discontinuation of the Service.</p>

      <h2>7. Third-Party Services and Advertising</h2>
      <p>Our Service uses third-party services, including but not limited to AI processing providers, Google Analytics for website analytics, and Google AdSense for advertising. These third-party services have their own terms of service and privacy policies, which we encourage you to review. We are not responsible for the practices, content, or policies of any third-party service. The inclusion of advertisements on our Site does not constitute an endorsement of the products or services advertised.</p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR ACCURACY. We do not warrant that:</p>
      <ul>
        <li>The AI background removal will be 100% accurate or suitable for your specific use case.</li>
        <li>The quality of the output will meet your specific requirements. Output quality depends on the quality, contrast, resolution, and complexity of the original uploaded image.</li>
        <li>The Service will be free from errors, bugs, or security vulnerabilities.</li>
      </ul>

      <h2>9. Limitation of Liability</h2>
      <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL IMAGE BACK REMOVER, ITS OPERATORS, AFFILIATES, OR CONTRIBUTORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SERVICE, INCLUDING BUT NOT LIMITED TO:</p>
      <ul>
        <li>Loss of data, revenue, profits, or business opportunities.</li>
        <li>Damages resulting from errors, inaccuracies, or omissions in the processed images.</li>
        <li>Damages resulting from unauthorized access to or alteration of your data.</li>
        <li>Any other matter relating to the Service.</li>
      </ul>
      <p>Our total aggregate liability for all claims arising out of or relating to the Service shall not exceed the amount you paid us (if any) in the 12 months preceding the claim.</p>

      <h2>10. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless Image Back Remover and its operators from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of a third party.</p>

      <h2>11. Governing Law</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law principles. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.</p>

      <h2>12. Severability</h2>
      <p>If any provision of these Terms is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be modified to the minimum extent necessary to make it valid and enforceable.</p>

      <h2>13. Contact Us</h2>
      <p>If you have any questions about these Terms of Service, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@imagebackremover.com</li>
        <li><strong>Contact Page:</strong> <a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default Terms;
