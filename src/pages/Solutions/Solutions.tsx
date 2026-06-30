import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const solutions = [
  { id: 'solo', icon: 'bi-person', title: 'Solo Advocates', desc: 'AI-powered research and drafting at a fraction of the cost of hiring associates. Level the playing field against larger firms.', features: ['AI Research Assistant', 'Document Drafting', 'Case Tracking', 'Affordable Pricing'] },
  { id: 'small', icon: 'bi-people', title: 'Small Firms (2-10)', desc: 'Streamline operations, manage cases efficiently, and deliver enterprise-quality work without enterprise overhead.', features: ['Team Collaboration', 'Client Portal', 'Billing & Invoicing', 'Document Management'] },
  { id: 'midsize', icon: 'bi-building', title: 'Mid-size Firms (11-50)', desc: 'Scale your practice with AI workflows, knowledge management, and analytics while maintaining quality standards.', features: ['Knowledge Base', 'AI Agents', 'Analytics Dashboard', 'Custom Workflows'] },
  { id: 'enterprise', icon: 'bi-buildings', title: 'Enterprise Firms (50+)', desc: 'Enterprise-grade security, custom AI training, dedicated infrastructure, and white-glove support for the largest firms.', features: ['Custom AI Training', 'SSO/SAML', 'Dedicated Infrastructure', 'SLA Guarantee'] },
  { id: 'corporate', icon: 'bi-bank', title: 'Corporate Legal Teams', desc: 'In-house counsel benefit from compliance automation, contract lifecycle management, and outside counsel coordination.', features: ['Compliance Monitoring', 'Contract Lifecycle', 'Outside Counsel Management', 'Board Reporting'] },
  { id: 'government', icon: 'bi-flag', title: 'Government Legal Departments', desc: 'Purpose-built solutions for government legal departments with data sovereignty, audit trails, and security compliance.', features: ['Data Sovereignty', 'Audit Trails', 'Multi-level Access', 'Government Cloud'] },
];

export default function Solutions() {
  return (
    <>
      <SEOHead title="Solutions" description="LexPilot AI solutions for every type of legal practice — solo advocates, small firms, enterprise, corporate legal teams, and government." canonical="/solutions" />
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-bullseye" aria-hidden="true" /> Solutions</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>Built for Every Legal Practice</h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Whether you are a solo advocate or an enterprise firm with 500+ lawyers, LexPilot AI adapts to your unique workflow and needs.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {solutions.map((sol, index) => (
              <AnimateOnScroll key={sol.id} delay={index * 0.05}>
                <div id={sol.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2.5rem', border: '1px solid #e5e7eb', borderRadius: '1.5rem', background: '#fff', alignItems: 'center' }}>
                  <div>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <i className={`bi ${sol.icon}`} style={{ fontSize: '1.25rem', color: '#1a56db' }} aria-hidden="true" />
                    </div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{sol.title}</h2>
                    <p style={{ fontSize: '1rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '1.5rem' }}>{sol.desc}</p>
                    <Link to="/schedule-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#1a56db', fontWeight: 500, fontSize: '0.875rem', textDecoration: 'none' }}>
                      Learn more <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {sol.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem', background: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        <i className="bi bi-check-circle-fill" style={{ color: '#059669', fontSize: '0.75rem' }} aria-hidden="true" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
