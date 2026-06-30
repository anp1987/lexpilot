import SEOHead from '@/components/seo/SEOHead';
import Hero from './sections/Hero';
import AnnouncementBar from './sections/AnnouncementBar';
import TrustedBy from './sections/TrustedBy';
import Statistics from './sections/Statistics';
import ProductOverview from './sections/ProductOverview';
import Features from './sections/Features';
import AIAgentsPreview from './sections/AIAgentsPreview';
import Solutions from './sections/Solutions';
import ProductTour from './sections/ProductTour';
import Benefits from './sections/Benefits';
import WhyChoose from './sections/WhyChoose';
import SecuritySection from './sections/SecuritySection';
import Testimonials from './sections/Testimonials';
import PricingPreview from './sections/PricingPreview';
import FAQ from './sections/FAQ';
import CTA from './sections/CTA';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LexPilot AI',
  description: 'The AI Assistant Built for Indian Law Firms',
  url: 'https://lexpilot.ai',
  logo: 'https://lexpilot.ai/favicon.svg',
  sameAs: [
    'https://twitter.com/lexpilotai',
    'https://linkedin.com/company/lexpilotai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-800-123-4567',
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
};

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="LexPilot AI - The AI Assistant Built for Indian Law Firms. AI-powered legal research, drafting, contract review, compliance, case management, and knowledge management."
        canonical="/"
        jsonLd={jsonLd}
      />
      <AnnouncementBar />
      <Hero />
      <TrustedBy />
      <Statistics />
      <ProductOverview />
      <Features />
      <AIAgentsPreview />
      <Solutions />
      <ProductTour />
      <Benefits />
      <WhyChoose />
      <SecuritySection />
      <Testimonials />
      <PricingPreview />
      <FAQ />
      <CTA />
    </>
  );
}
