import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const roadmapQuarters = [
  {
    quarter: 'Q3 2026',
    status: 'In Progress',
    statusColor: '#f59e0b',
    items: [
      { title: 'AI Legal Research Agent v2', description: 'Autonomous multi-step research that conducts investigations, finds opposing authorities, and prepares comprehensive memos.', tag: 'AI Agents' },
      { title: 'Hindi Judgment OCR', description: 'Full OCR support for Hindi-language judgments from District Courts and State tribunals with automatic translation.', tag: 'Research' },
      { title: 'Real-time Collaboration', description: 'Google Docs-style collaborative editing for legal documents with AI suggestions visible to all team members.', tag: 'Platform' },
      { title: 'Mobile App Redesign', description: 'Completely redesigned iOS and Android apps with offline research caching and push notifications for case updates.', tag: 'Mobile' },
      { title: 'NCLT/NCLAT Deep Integration', description: 'Structured data extraction from NCLT/NCLAT orders with timeline tracking and resolution plan analytics.', tag: 'Research' },
    ],
  },
  {
    quarter: 'Q4 2026',
    status: 'Planned',
    statusColor: '#6366f1',
    items: [
      { title: 'AI Contract Negotiation Assistant', description: 'AI that suggests redlines, alternative clauses, and negotiation strategies based on your firm\'s historical positions.', tag: 'AI Agents' },
      { title: 'Court Filing Automation', description: 'Automated e-filing for select High Courts and tribunals with format validation and deadline tracking.', tag: 'Automation' },
      { title: 'Client Portal', description: 'White-labelled client portal for matter updates, document sharing, and billing transparency.', tag: 'Platform' },
      { title: 'Advanced Analytics Dashboard', description: 'Firm-wide analytics on research patterns, time savings, productivity metrics, and AI usage insights.', tag: 'Analytics' },
      { title: 'Voice Commands', description: 'Voice-activated research and dictation for legal documents in English and Hindi.', tag: 'Mobile' },
    ],
  },
  {
    quarter: 'Q1 2027',
    status: 'Exploring',
    statusColor: '#8b5cf6',
    items: [
      { title: 'Predictive Case Outcome Engine', description: 'AI model that predicts likely outcomes based on facts, jurisdiction, bench composition, and historical patterns.', tag: 'AI Agents' },
      { title: 'On-Premise Deployment', description: 'Full on-premise installation option for firms with strict data sovereignty requirements beyond cloud deployment.', tag: 'Enterprise' },
      { title: 'Arbitration Intelligence', description: 'AI tools specifically designed for international and domestic arbitration — tribunal selection, precedent analysis, and award drafting.', tag: 'Research' },
      { title: 'Legal Knowledge Graph', description: 'Visual exploration of legal concepts, their relationships, and evolution across Indian jurisprudence.', tag: 'Research' },
      { title: 'Multi-jurisdiction Expansion', description: 'Expansion to cover Singapore, Dubai, and UK law for Indian firms with cross-border practices.', tag: 'Platform' },
    ],
  },
];

const tagColors: Record<string, string> = {
  'AI Agents': '#dcfce7',
  'Research': '#dbeafe',
  'Platform': '#fef3c7',
  'Mobile': '#fce7f3',
  'Automation': '#e0e7ff',
  'Analytics': '#f3e8ff',
  'Enterprise': '#fed7aa',
};

const tagTextColors: Record<string, string> = {
  'AI Agents': '#166534',
  'Research': '#1e40af',
  'Platform': '#92400e',
  'Mobile': '#9d174d',
  'Automation': '#3730a3',
  'Analytics': '#6b21a8',
  'Enterprise': '#9a3412',
};

export default function Roadmap() {
  return (
    <>
      <SEOHead
        title="Product Roadmap"
        description="See what's next for LexPilot AI. Our public roadmap shows upcoming features including AI agents, court filing automation, and predictive analytics."
        canonical="/roadmap"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-map" aria-hidden="true" /> Roadmap</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Product Roadmap
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Transparency in what we are building next. Our roadmap is shaped by feedback from 1,200+ law firms across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          {roadmapQuarters.map((quarter, qIdx) => (
            <AnimateOnScroll key={quarter.quarter} delay={qIdx * 0.1}>
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>{quarter.quarter}</h2>
                  <span style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600, background: `${quarter.statusColor}20`, color: quarter.statusColor }}>
                    {quarter.status}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {quarter.items.map((item, idx) => (
                    <AnimateOnScroll key={item.title} delay={idx * 0.05}>
                      <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid #e5e7eb', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: quarter.statusColor, marginTop: '0.5rem', flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 700 }}>{item.title}</h3>
                            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', background: tagColors[item.tag] || '#f3f4f6', color: tagTextColors[item.tag] || '#374151', fontWeight: 500 }}>{item.tag}</span>
                          </div>
                          <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{item.description}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Feature Request CTA */}
      <section className="section section--gray">
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <AnimateOnScroll>
            <i className="bi bi-lightbulb" style={{ fontSize: '2.5rem', color: '#f59e0b', marginBottom: '1rem', display: 'block' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Have a Feature Request?</h2>
            <p style={{ fontSize: '1.05rem', color: '#6b7280', lineHeight: 1.7, marginBottom: '2rem' }}>
              Our roadmap is driven by customer feedback. Submit your ideas and vote on features that matter to your practice.
            </p>
            <a href="/contact-sales" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
              Submit Feature Request <i className="bi bi-arrow-right" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
