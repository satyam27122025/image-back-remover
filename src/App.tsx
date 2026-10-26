import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import Disclaimer from './pages/Disclaimer';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import AnalyticsTracker from './components/AnalyticsTracker';
import CookieConsentBanner from './components/CookieConsentBanner';
import Blog from './pages/Blog';
import Article1 from './pages/blog/Article1';
import Article2 from './pages/blog/Article2';
import Article3 from './pages/blog/Article3';
import Article4 from './pages/blog/Article4';
import Article5 from './pages/blog/Article5';
import Article6 from './pages/blog/Article6';
import Article7 from './pages/blog/Article7';
import Article8 from './pages/blog/Article8';
import EcommerceTool from './pages/EcommerceTool';
import SignatureTool from './pages/SignatureTool';
import PortraitTool from './pages/PortraitTool';

export function AppRoutes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          
          {/* Tools & Use Case Pages */}
          <Route path="/ecommerce-product-photos" element={<EcommerceTool />} />
          <Route path="/transparent-signature-maker" element={<SignatureTool />} />
          <Route path="/portrait-headshot-remover" element={<PortraitTool />} />

          {/* Blog & Articles */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ecommerce-backgrounds" element={<Article1 />} />
          <Route path="/blog/ai-image-editing" element={<Article2 />} />
          <Route path="/blog/top-5-uses" element={<Article3 />} />
          <Route path="/blog/transparent-signature-guide" element={<Article4 />} />
          <Route path="/blog/product-photography-lighting" element={<Article5 />} />
          <Route path="/blog/png-vs-webp-vs-jpg" element={<Article6 />} />
          <Route path="/blog/professional-headshots-guide" element={<Article7 />} />
          <Route path="/blog/print-on-demand-merch-guide" element={<Article8 />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsentBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <AppRoutes />
    </Router>
  );
}

export default App;
