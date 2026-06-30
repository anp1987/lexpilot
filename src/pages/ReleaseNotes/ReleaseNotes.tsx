import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const releases = [
  {
    version: '3.4.0',
    date: '20 June 2026',
    title: 'AI Research Agent & Hindi Support Improvements',
    highlights: [
      'Introduced AI Research Agent (Beta) — autonomous multi-step legal research that finds authorities, analyses them, and prepares structured memos.',
      'Enhanced Hindi language support with improved OCR accuracy for District Court judgments (92% → 97% accuracy).',
      'New citation graph visualisation showing how judgments reference and build upon each other.',
      'Added support for NCLAT orders with structured data extraction for insolvency matters.',
    ],
    improvements: [
      'Research speed improved by 35% through query optimization and caching.',
      'Contract review now identifies 12 additional clause types in Indian commercial agreements.',
      'Mobile app now supports offline access to recently viewed research results.',
      'Improved conflict checking speed for firms with 10,000+ matters.',
    ],
    fixes: [
      'Fixed an issue where SCC citations were occasionally linking to incorrect volumes.',
      'Resolved PDF export formatting issues with tables in drafted documents.',
      'Fixed SSO login timeout for Azure AD configurations with custom claim mappings.',
      'Addressed a rare issue where concurrent searches could return mixed results.',
    ],
  },
  {
    version: '3.3.0',
    date: '25 May 2026',
    title: 'Enterprise Ethical Walls & Compliance Monitoring',
    highlights: [
      'Enterprise Ethical Walls — create information barriers between teams with granular access control and automatic conflict detection.',
      'Compliance Monitoring Dashboard — real-time alerts for regulatory changes affecting your practice areas across central and state legislation.',
      'New bulk document upload with automatic classification and metadata extraction.',
      'API v3 launch with webhook support, batch operations, and improved rate limits.',
    ],
    improvements: [
      'Document drafting templates expanded to cover 40+ common Indian legal document types.',
      'Search relevance improvements for tax tribunal orders (ITAT, CESTAT).',
      'Faster matter-level permissions loading for Enterprise plan users.',
      'Improved email notification system with daily digest option.',
    ],
    fixes: [
      'Fixed duplicated search results when filtering by specific High Courts.',
      'Resolved an issue with Microsoft Teams bot not responding to DMs in certain tenant configurations.',
      'Fixed date range filter not working correctly for judgments from 1950-1960.',
      'Addressed memory usage issue when processing very large contracts (500+ pages).',
    ],
  },
  {
    version: '3.2.0',
    date: '30 April 2026',
    title: 'Smart Drafting & Client Matter Management',
    highlights: [
      'Smart Drafting v2 — AI-powered document drafting with clause library, precedent suggestions, and automatic formatting for Indian courts.',
      'Client Matter Management — organize research, documents, and billing by matter with team collaboration features.',
      'Integration with Clio and PracticePanther for automatic time capture from research and drafting activities.',
      'New comparative analysis tool that places multiple judgments side-by-side and identifies key differences.',
    ],
    improvements: [
      'Reduced initial page load time by 40% through code splitting and lazy loading.',
      'Better handling of scanned PDFs with improved OCR preprocessing.',
      'Extended Supreme Court database coverage to include miscellaneous orders from 2020 onwards.',
      'Knowledge base search now indexes annotations and notes added by firm members.',
    ],
    fixes: [
      'Fixed an issue where exported Word documents had inconsistent font sizing.',
      'Resolved calendar sync issues with Google Calendar for hearing date reminders.',
      'Fixed the Arbitration clause detection false positives in certain service agreements.',
      'Addressed a slow query issue affecting users with 1000+ saved searches.',
    ],
  },
];

export default function ReleaseNotes() {
  return (
    <>
      <SEOHead
        title="Release Notes"
        description="Stay up to date with LexPilot AI product updates. New features, improvements, and bug fixes for India's leading legal AI platform."
        canonical="/release-notes"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-megaphone" aria-hidden="true" /> Release Notes</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              What's New in LexPilot AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              We ship improvements every two weeks. Here are our latest releases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '850px' }}>
          {releases.map((release, rIdx) => (
            <AnimateOnScroll key={release.version} delay={rIdx * 0.1}>
              <div style={{ marginBottom: '4rem', paddingBottom: '3rem', borderBottom: rIdx < releases.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ padding: '0.25rem 0.75rem', background: '#eef2ff', color: '#4338ca', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: 700 }}>v{release.version}</span>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>{release.date}</span>
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>{release.title}</h2>

                {/* Highlights */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#059669', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="bi bi-stars" /> Highlights
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {release.highlights.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.75rem', fontSize: '0.95rem', color: '#374151', lineHeight: 1.7 }}>
                        <i className="bi bi-star-fill" style={{ color: '#f59e0b', marginTop: '0.25rem', flexShrink: 0, fontSize: '0.7rem' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#2563eb', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="bi bi-arrow-up-circle" /> Improvements
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {release.improvements.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.7 }}>
                        <i className="bi bi-plus-circle" style={{ color: '#2563eb', marginTop: '0.2rem', flexShrink: 0, fontSize: '0.7rem' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bug Fixes */}
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#6b7280', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="bi bi-bug" /> Bug Fixes
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {release.fixes.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>
                        <i className="bi bi-check2" style={{ color: '#6b7280', marginTop: '0.2rem', flexShrink: 0, fontSize: '0.7rem' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
