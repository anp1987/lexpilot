import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout/Layout';
import LoadingState from '@/components/common/LoadingState/LoadingState';
import ScrollToTop from '@/components/common/ScrollToTop/ScrollToTop';

const Home = lazy(() => import('@/pages/Home/Home'));
const Product = lazy(() => import('@/pages/Product/Product'));
const Features = lazy(() => import('@/pages/Features/Features'));
const FeatureDetail = lazy(() => import('@/pages/Features/FeatureDetail'));
const Solutions = lazy(() => import('@/pages/Solutions/Solutions'));
const AIAgents = lazy(() => import('@/pages/AIAgents/AIAgents'));
const Pricing = lazy(() => import('@/pages/Pricing/Pricing'));
const Integrations = lazy(() => import('@/pages/Integrations/Integrations'));
const Security = lazy(() => import('@/pages/Security/Security'));
const Blog = lazy(() => import('@/pages/Blog/Blog'));
const BlogPost = lazy(() => import('@/pages/Blog/BlogPost'));
const FAQ = lazy(() => import('@/pages/FAQ/FAQ'));
const About = lazy(() => import('@/pages/About/About'));
const Careers = lazy(() => import('@/pages/Careers/Careers'));
const Partners = lazy(() => import('@/pages/Partners/Partners'));
const Demo = lazy(() => import('@/pages/Demo/Demo'));
const FreeTrial = lazy(() => import('@/pages/FreeTrial/FreeTrial'));
const ContactSales = lazy(() => import('@/pages/ContactSales/ContactSales'));
const Support = lazy(() => import('@/pages/Support/Support'));
const CustomerStories = lazy(() => import('@/pages/CustomerStories/CustomerStories'));
const Roadmap = lazy(() => import('@/pages/Roadmap/Roadmap'));
const ReleaseNotes = lazy(() => import('@/pages/ReleaseNotes/ReleaseNotes'));
const Privacy = lazy(() => import('@/pages/Legal/Privacy'));
const Terms = lazy(() => import('@/pages/Legal/Terms'));
const CookiePolicy = lazy(() => import('@/pages/Legal/CookiePolicy'));
const Accessibility = lazy(() => import('@/pages/Legal/Accessibility'));
const Status = lazy(() => import('@/pages/Status/Status'));
const SEOLanding = lazy(() => import('@/pages/SEOLanding/SEOLanding'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));
const ServerError = lazy(() => import('@/pages/ServerError/ServerError'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<LoadingState fullScreen />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/:slug" element={<FeatureDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/ai-agents" element={<AIAgents />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/security" element={<Security />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/schedule-demo" element={<Demo />} />
            <Route path="/free-trial" element={<FreeTrial />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/support" element={<Support />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/release-notes" element={<ReleaseNotes />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/solutions/:slug" element={<SEOLanding />} />
            <Route path="/status" element={<Status />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
