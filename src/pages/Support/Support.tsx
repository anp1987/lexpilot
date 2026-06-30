import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const supportChannels = [
  { icon: 'bi-book', title: 'Knowledge Base', description: 'Comprehensive guides, tutorials, and documentation covering every feature of LexPilot AI.', link: '/faq', linkText: 'Browse Articles' },
  { icon: 'bi-chat-dots', title: 'Live Chat', description: 'Chat with our support team in real-time during business hours. Average response: 3 minutes.', link: '/contact-sales', linkText: 'Start Chat' },
  { icon: 'bi-envelope', title: 'Email Support', description: 'Send detailed queries to support@lexpilot.ai. We respond within 2 business hours.', link: '/contact-sales', linkText: 'Send Email' },
  { icon: 'bi-telephone', title: 'Phone Support', description: 'Direct phone support for Business and Enterprise plan customers. Available Mon–Sat.', link: '/contact-sales', linkText: 'Call Us' },
  { icon: 'bi-people', title: 'Community Forum', description: 'Connect with other LexPilot AI users, share tips, and learn from peers across Indian law firms.', link: '/contact-sales', linkText: 'Join Community' },
  { icon: 'bi-person-badge', title: 'Dedicated CSM', description: 'Enterprise customers get a dedicated Customer Success Manager for personalised onboarding and support.', link: '/contact-sales', linkText: 'Learn More' },
];

const popularTopics = [
  { title: 'Getting Started with AI Research', icon: 'bi-rocket-takeoff' },
  { title: 'Setting Up Your Team & Permissions', icon: 'bi-people-fill' },
  { title: 'Contract Review Best Practices', icon: 'bi-file-earmark-check' },
  { title: 'Integrating with Microsoft 365', icon: 'bi-microsoft' },
  { title: 'Billing & Subscription Management', icon: 'bi-credit-card' },
  { title: 'Data Export & Migration', icon: 'bi-download' },
];

export default function Support() {
  return (
    <>
      <SEOHead
        title="Support"
        description="Get help with LexPilot AI. Access our knowledge base, live chat, email support, phone support, and community forum. We are here for you."
        canonical="/support"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-life-preserver" aria-hidden="true" /> Support</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              How Can We Help?
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Our support team is ready to help you get the most out of LexPilot AI. Choose the channel that works best for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {supportChannels.map((channel, index) => (
              <AnimateOnScroll key={channel.title} delay={index * 0.08}>
                <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className={channel.icon} style={{ fontSize: '1.25rem', color: '#4f46e5' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{channel.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, flex: 1 }}>{channel.description}</p>
                  <Link to={channel.link} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', color: '#4f46e5', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', marginTop: '1rem' }}>
                    {channel.linkText} <i className="bi bi-arrow-right" style={{ fontSize: '0.8rem' }} />
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 className="section-title">Popular Help Topics</h2>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
            {popularTopics.map((topic, index) => (
              <AnimateOnScroll key={topic.title} delay={index * 0.05}>
                <Link to="/faq" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'box-shadow 0.2s' }}>
                    <i className={topic.icon} style={{ fontSize: '1.25rem', color: '#4f46e5' }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{topic.title}</span>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="section">
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <AnimateOnScroll>
            <div style={{ background: '#f0fdf4', borderRadius: '1rem', padding: '2rem', border: '1px solid #bbf7d0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#166534' }}>All Systems Operational</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#4b5563', marginBottom: '1rem' }}>
                Current uptime: 99.98% over the last 90 days
              </p>
              <Link to="/status" style={{ color: '#4f46e5', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
                View Full Status Page <i className="bi bi-arrow-right" style={{ fontSize: '0.8rem' }} />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
