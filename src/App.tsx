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
import Blog from './pages/Blog';
import Article1 from './pages/blog/Article1';
import Article2 from './pages/blog/Article2';
import Article3 from './pages/blog/Article3';

function App() {
  return (
    <Router>
      <AnalyticsTracker />
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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/ecommerce-backgrounds" element={<Article1 />} />
            <Route path="/blog/ai-image-editing" element={<Article2 />} />
            <Route path="/blog/top-5-uses" element={<Article3 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
