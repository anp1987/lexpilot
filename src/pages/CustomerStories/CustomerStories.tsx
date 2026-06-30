import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const stories = [
  {
    firm: 'Sharma & Associates',
    location: 'Mumbai',
    size: '35 Lawyers',
    speciality: 'Corporate & M&A',
    quote: 'LexPilot AI reduced our due diligence time by 60%. What used to take a team of 5 associates a full week now takes 2 associates two days — with better coverage and fewer missed issues.',
    person: 'Advocate Neha Sharma',
    role: 'Managing Partner',
    metrics: [
      { label: 'Due Diligence Time', before: '5 days', after: '2 days' },
      { label: 'Contract Review Speed', before: '4 hours/contract', after: '45 minutes' },
      { label: 'Research Accuracy', before: '82%', after: '96%' },
    ],
  },
  {
    firm: 'Patel Legal LLP',
    location: 'Ahmedabad',
    size: '12 Lawyers',
    speciality: 'Litigation',
    quote: 'As a mid-size litigation firm, we were losing matters to larger firms simply because they had bigger research teams. LexPilot AI levelled the playing field. Our juniors now produce research memos that match top-tier firm quality.',
    person: 'Advocate Karan Patel',
    role: 'Senior Partner',
    metrics: [
      { label: 'Research Time', before: '6 hours/matter', after: '1.5 hours' },
      { label: 'Cases Handled', before: '80/month', after: '120/month' },
      { label: 'Client Satisfaction', before: '4.1/5', after: '4.8/5' },
    ],
  },
  {
    firm: 'Iyer & Krishnamurthy',
    location: 'Chennai',
    size: '8 Lawyers',
    speciality: 'Intellectual Property',
    quote: 'The patent prior art search feature alone justified our subscription. We are finding relevant prior art in international databases that we would have missed manually. Our opposition success rate has improved significantly.',
    person: 'Advocate Lakshmi Iyer',
    role: 'Founding Partner',
    metrics: [
      { label: 'Prior Art Search', before: '2 days', after: '3 hours' },
      { label: 'Opposition Success Rate', before: '62%', after: '81%' },
      { label: 'New Client Acquisition', before: '2/month', after: '5/month' },
    ],
  },
  {
    firm: 'Bhatt & Mehrotra Associates',
    location: 'Delhi',
    size: '85 Lawyers',
    speciality: 'Tax & Regulatory',
    quote: 'We handle complex indirect tax litigation across multiple tribunals. LexPilot AI understands the nuances of CESTAT, ITAT, and AAR orders in a way no other tool does. The compliance monitoring feature has been a game-changer for our advisory practice.',
    person: 'Advocate Sanjay Bhatt',
    role: 'Head of Tax Practice',
    metrics: [
      { label: 'Tribunal Research', before: '8 hours', after: '2 hours' },
      { label: 'Compliance Alerts', before: 'Manual tracking', after: 'Automated daily' },
      { label: 'Revenue Growth', before: '12% YoY', after: '34% YoY' },
    ],
  },
];

export default function CustomerStories() {
  return (
    <>
      <SEOHead
        title="Customer Stories"
        description="See how Indian law firms use LexPilot AI to transform their practice. Real results from firms in Mumbai, Delhi, Chennai, and Ahmedabad."
        canonical="/customer-stories"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-star" aria-hidden="true" /> Customer Stories</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Real Results from Real Law Firms
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Discover how Indian law firms of all sizes are using LexPilot AI to work faster, deliver better outcomes, and grow their practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          {stories.map((story, index) => (
            <AnimateOnScroll key={story.firm} delay={index * 0.1}>
              <div style={{ background: 'white', borderRadius: '1.5rem', padding: '2.5rem', border: '1px solid #e5e7eb', marginBottom: '2.5rem' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.25rem' }}>{story.firm}</h2>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: '#6b7280' }}>
                      <span><i className="bi bi-geo-alt" style={{ marginRight: '0.25rem' }} />{story.location}</span>
                      <span><i className="bi bi-people" style={{ marginRight: '0.25rem' }} />{story.size}</span>
                      <span><i className="bi bi-briefcase" style={{ marginRight: '0.25rem' }} />{story.speciality}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote style={{ fontSize: '1.1rem', color: '#374151', lineHeight: 1.8, borderLeft: '4px solid #4f46e5', paddingLeft: '1.5rem', margin: '1.5rem 0', fontStyle: 'italic' }}>
                  "{story.quote}"
                </blockquote>
                <div style={{ fontSize: '0.9rem', marginBottom: '2rem' }}>
                  <strong>{story.person}</strong> — {story.role}
                </div>

                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  {story.metrics.map(metric => (
                    <div key={metric.label} style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.5rem', textTransform: 'uppercase', fontWeight: 600 }}>{metric.label}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '0.85rem', color: '#9ca3af', textDecoration: 'line-through' }}>{metric.before}</span>
                        <i className="bi bi-arrow-right" style={{ color: '#059669', fontSize: '0.75rem' }} />
                        <span style={{ fontSize: '1rem', fontWeight: 700, color: '#059669' }}>{metric.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section section--gray">
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Ready to Write Your Success Story?</h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Join 1,200+ Indian law firms already using LexPilot AI to transform their practice.
            </p>
            <Link to="/free-trial" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
              Start Free Trial <i className="bi bi-arrow-right" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
