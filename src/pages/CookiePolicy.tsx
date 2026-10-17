import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-brand">
      <h1 className="text-4xl font-bold mb-8 text-brand-dark">Cookie Policy</h1>
      <p className="text-sm text-brand-muted mb-8">Last updated: October 2026</p>

      <h2>What Are Cookies?</h2>
      <p>Cookies are small text files that are stored on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently, provide a better browsing experience, and supply information to the website owners. Cookies can be "persistent" (remaining on your device until they expire or are deleted) or "session" cookies (deleted when you close your browser).</p>

      <h2>How We Use Cookies</h2>
      <p>Image Back Remover ("we", "our", or "us") uses cookies and similar tracking technologies on our website <strong>image-back-remover.pages.dev</strong> for the following purposes:</p>

      <h3>Essential Cookies</h3>
      <p>These cookies are strictly necessary for the operation of our website. They enable core functionality such as managing your image upload session, maintaining security, and ensuring the website loads correctly. Without these cookies, the website cannot function properly. Essential cookies do not require your consent.</p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Session ID</td>
            <td>Maintains your upload session state</td>
            <td>Session</td>
          </tr>
        </tbody>
      </table>

      <h3>Analytics Cookies</h3>
      <p>We use Google Analytics 4 (GA4) to understand how visitors interact with our website. These cookies collect anonymized information about page views, session duration, traffic sources, device types, geographic regions, and navigation patterns. This data helps us improve the design and content of our website. We do not send personally identifiable information (PII) or image contents to Google Analytics.</p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>_ga</td>
            <td>Google Analytics: Distinguishes unique users</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>_ga_*</td>
            <td>Google Analytics 4: Maintains session state</td>
            <td>2 years</td>
          </tr>
        </tbody>
      </table>

      <h3>Advertising Cookies</h3>
      <p>We use Google AdSense to display advertisements on our website. Google and its advertising partners use cookies to serve ads based on your prior visits to our website or other websites on the Internet. These cookies enable Google to deliver targeted advertisements that may be more relevant to your interests. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to websites.</p>
      <table className="w-full">
        <thead>
          <tr>
            <th>Cookie Name</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>NID, IDE, DSID</td>
            <td>Google advertising: Serves personalized ads</td>
            <td>6 months – 2 years</td>
          </tr>
          <tr>
            <td>__gads, __gpi</td>
            <td>Google AdSense: Measures ad interactions</td>
            <td>13 months</td>
          </tr>
        </tbody>
      </table>

      <h2>Third-Party Cookies</h2>
      <p>In addition to our own cookies, third-party services integrated into our website may set their own cookies. These include:</p>
      <ul>
        <li><strong>Google Analytics:</strong> For website traffic analysis and performance measurement.</li>
        <li><strong>Google AdSense:</strong> For serving and measuring advertisements.</li>
        <li><strong>Google DoubleClick:</strong> For ad targeting and frequency capping.</li>
      </ul>
      <p>These third parties have their own privacy and cookie policies. For more information about how Google uses data when you visit our website, please visit: <a href="https://www.google.com/policies/privacy/partners/" target="_blank" rel="noopener noreferrer">How Google uses data when you use our partners' sites or apps</a>.</p>

      <h2>Your Cookie Choices</h2>
      <p>You have several options for managing cookies:</p>
      <ul>
        <li><strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings. You can typically find these in the "Options", "Settings", or "Preferences" menu of your browser. You can set your browser to block all cookies, accept all cookies, or notify you when a cookie is set.</li>
        <li><strong>Google Ad Personalization:</strong> You can opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</li>
        <li><strong>Network Advertising Initiative:</strong> You can opt out of interest-based advertising from participating companies at <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">NAI Opt-Out</a>.</li>
        <li><strong>Digital Advertising Alliance:</strong> You can manage your ad preferences at <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">DAA Opt-Out</a>.</li>
        <li><strong>European Interactive Digital Advertising Alliance:</strong> EU residents can manage preferences at <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">Your Online Choices</a>.</li>
      </ul>
      <p>Please note that disabling or blocking certain cookies may affect the functionality of our website and may prevent you from accessing certain features of the Service.</p>

      <h2>Web Beacons and Pixel Tags</h2>
      <p>In addition to cookies, we and our third-party partners may use web beacons (also known as "pixel tags" or "clear GIFs"). Web beacons are tiny graphic images embedded in web pages or emails that allow us to track page views, email opens, and the effectiveness of marketing campaigns. Web beacons work in conjunction with cookies and cannot be disabled independently.</p>

      <h2>Do Not Track Signals</h2>
      <p>Some browsers offer a "Do Not Track" (DNT) setting that sends a signal to websites you visit indicating that you do not wish to be tracked. At this time, there is no universally accepted standard for how websites should respond to DNT signals. As a result, our website does not currently respond to DNT signals.</p>

      <h2>Updates to This Cookie Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. When we make changes, we will update the "Last updated" date at the top of this page. We encourage you to review this Cookie Policy periodically.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies, please contact us at:</p>
      <ul>
        <li><strong>Email:</strong> support@imagebackremover.com</li>
        <li><strong>Contact Page:</strong> <a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  );
};

export default CookiePolicy;
