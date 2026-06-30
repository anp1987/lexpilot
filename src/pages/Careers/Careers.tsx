import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const perks = [
  { icon: 'bi-heart-pulse', title: 'Health & Wellness', description: 'Comprehensive health insurance for you and family. Mental health support, gym membership, and annual health check-ups.' },
  { icon: 'bi-house', title: 'Flexible Work', description: 'Hybrid work model with 3 days in office. Work from anywhere for 4 weeks per year. Flexible hours.' },
  { icon: 'bi-book', title: 'Learning Budget', description: '₹2 lakh annual learning budget for courses, conferences, and certifications. Paid study leave for professional exams.' },
  { icon: 'bi-graph-up', title: 'Equity & Growth', description: 'Employee stock options for all full-time roles. Clear promotion framework with bi-annual reviews.' },
  { icon: 'bi-airplane', title: 'Generous Leave', description: '30 days paid leave, 10 public holidays, unlimited sick leave. Sabbatical option after 3 years.' },
  { icon: 'bi-cup-hot', title: 'Office Perks', description: 'Catered lunches, snacks, and beverages. Standing desks, quiet rooms, and a well-stocked library.' },
];

const openPositions = [
  { title: 'Senior NLP Engineer', team: 'AI & ML', location: 'Bengaluru (Hybrid)', type: 'Full-time', description: 'Build and fine-tune large language models for Indian legal text. 5+ years in NLP, experience with transformers and Indic languages.' },
  { title: 'Full Stack Developer', team: 'Platform Engineering', location: 'Bengaluru (Hybrid)', type: 'Full-time', description: 'Build user-facing features for our web platform. React, TypeScript, Node.js. Experience with real-time collaborative systems.' },
  { title: 'Legal Domain Expert', team: 'Legal AI', location: 'Delhi / Remote', type: 'Full-time', description: 'Shape our AI training data and validate outputs. Practising advocate with 3+ years in litigation or corporate law.' },
  { title: 'Enterprise Account Executive', team: 'Sales', location: 'Mumbai', type: 'Full-time', description: 'Sell to India\'s top 200 law firms. 5+ years in enterprise SaaS sales. Existing relationships in legal industry preferred.' },
  { title: 'Product Designer', team: 'Design', location: 'Bengaluru (Hybrid)', type: 'Full-time', description: 'Design intuitive interfaces for complex legal workflows. 4+ years in B2B SaaS design. Figma expertise required.' },
];

export default function Careers() {
  return (
    <>
      <SEOHead
        title="Careers"
        description="Join LexPilot AI and help transform Indian legal practice. Open positions in AI/ML, engineering, legal domain, sales, and design. Bengaluru, Delhi, Mumbai."
        canonical="/careers"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-briefcase" aria-hidden="true" /> Careers</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Build the Future of Indian Legal Tech
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              We are a team of engineers, lawyers, designers, and entrepreneurs on a mission to make AI work for India's legal system. Join us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Our Culture</h2>
                <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem' }}>
                  We are 85 people across Bengaluru, Delhi, and Mumbai — a mix of AI researchers, software engineers, practising lawyers, and business professionals who believe technology can dramatically improve access to justice in India.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
                  We value intellectual curiosity, ownership, and moving fast without breaking trust. Legal technology demands precision — our culture reflects that balance of speed and care.
                </p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)', borderRadius: '1.5rem', padding: '2.5rem', color: 'white' }}>
                <div style={{ marginBottom: '1.5rem' }}><div style={{ fontSize: '2.5rem', fontWeight: 800 }}>85+</div><div style={{ opacity: 0.8 }}>Team Members</div></div>
                <div style={{ marginBottom: '1.5rem' }}><div style={{ fontSize: '2.5rem', fontWeight: 800 }}>3</div><div style={{ opacity: 0.8 }}>Office Locations</div></div>
                <div><div style={{ fontSize: '2.5rem', fontWeight: 800 }}>40%</div><div style={{ opacity: 0.8 }}>Women in Leadership</div></div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="section section--gray">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Benefits & Perks</h2>
              <p className="section-subtitle">We take care of our team so they can focus on building great products.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {perks.map((perk, index) => (
              <AnimateOnScroll key={perk.title} delay={index * 0.08}>
                <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', height: '100%' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '0.75rem', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className={perk.icon} style={{ fontSize: '1.2rem', color: '#4f46e5' }} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{perk.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{perk.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Open Positions</h2>
              <p className="section-subtitle">Find your role in shaping the future of legal technology.</p>
            </div>
          </AnimateOnScroll>
          {openPositions.map((position, index) => (
            <AnimateOnScroll key={position.title} delay={index * 0.08}>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1.75rem', marginBottom: '1rem', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>{position.title}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '0.75rem' }}>{position.description}</p>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: '#eef2ff', color: '#4338ca', borderRadius: '1rem', fontWeight: 500 }}>{position.team}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: '#f3f4f6', color: '#4b5563', borderRadius: '1rem' }}>{position.location}</span>
                      <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: '#f3f4f6', color: '#4b5563', borderRadius: '1rem' }}>{position.type}</span>
                    </div>
                  </div>
                  <Link to="/contact-sales" style={{ padding: '0.5rem 1.25rem', background: '#4f46e5', color: 'white', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Apply Now
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
