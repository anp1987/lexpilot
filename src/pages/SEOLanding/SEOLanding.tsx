import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

interface LandingPageData {
  title: string;
  h1: string;
  description: string;
  heroText: string;
  keywords: string[];
  painPoints: { icon: string; title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
  faq: { q: string; a: string }[];
}

const pages: Record<string, LandingPageData> = {
  'ai-legal-research-india': {
    title: 'AI Legal Research India | LexPilot AI',
    h1: 'AI-Powered Legal Research for Indian Lawyers',
    description: 'Search across 80+ years of Indian case law in seconds. LexPilot AI helps advocates find Supreme Court, High Court & Tribunal judgments with natural language queries.',
    heroText: 'Stop spending hours searching SCC Online and Manupatra manually. LexPilot AI understands legal concepts and finds the most relevant Indian judgments in seconds — across Supreme Court, High Courts, NCLT, and 50+ tribunals.',
    keywords: ['AI legal research India', 'legal research tool India', 'Indian case law search', 'AI for lawyers India'],
    painPoints: [
      { icon: 'bi-clock-history', title: 'Hours Wasted on Research', desc: 'Indian lawyers spend 8+ hours weekly on manual research across fragmented databases.' },
      { icon: 'bi-search', title: 'Keyword Limitations', desc: 'Traditional databases require exact keyword matches, missing relevant judgments with different phrasing.' },
      { icon: 'bi-diagram-3', title: 'Multi-Court Complexity', desc: '25 High Courts, Supreme Court, 50+ tribunals — each with separate databases and citation formats.' },
      { icon: 'bi-currency-rupee', title: 'High Subscription Costs', desc: 'Multiple database subscriptions cost ₹50,000-2,00,000+ per year with limited AI capabilities.' },
    ],
    solutions: [
      { title: 'Natural Language Search', desc: 'Ask questions in English or Hindi. No more complex Boolean queries.' },
      { title: '10 Million+ Documents', desc: 'All Indian courts, tribunals, statutes, and commentaries in one platform.' },
      { title: 'Verified Citations', desc: 'Every result with proper AIR/SCC citations, linked to original source.' },
      { title: 'Research Memos', desc: 'Auto-generate comprehensive memos with analysis and citations.' },
    ],
    stats: [
      { value: '10M+', label: 'Documents Indexed' },
      { value: '<10s', label: 'Average Query Time' },
      { value: '94%+', label: 'Accuracy Rate' },
      { value: '80%', label: 'Time Saved' },
    ],
    testimonial: {
      quote: 'LexPilot AI has replaced three separate database subscriptions for our firm. The natural language search is genuinely transformative for finding relevant High Court precedents.',
      name: 'Adv. Priya Sharma',
      role: 'Senior Partner, Sharma & Associates, Mumbai',
    },
    faq: [
      { q: 'Does it cover all Indian courts?', a: 'Yes — Supreme Court (1950-present), all 25 High Courts, District Courts, NCLT, NCLAT, ITAT, SAT, NCDRC, and 50+ tribunals.' },
      { q: 'Can I search in Hindi?', a: 'Absolutely. Ask questions in Hindi, English, or mixed language with legal terminology.' },
      { q: 'How is this different from SCC Online?', a: 'LexPilot AI uses semantic understanding, not just keywords. Ask complex legal questions and get relevant results even when exact words don\'t appear in the judgment.' },
      { q: 'What about data security?', a: 'Your queries and data are encrypted, stored in Indian data centers (AWS Mumbai), and never used to train our models. DPDP Act compliant.' },
    ],
  },
  'law-firm-management-software-india': {
    title: 'Law Firm Management Software India | LexPilot AI',
    h1: 'Complete Law Firm Management Software for India',
    description: 'End-to-end practice management for Indian law firms. Case tracking, billing, client management, court date alerts, and AI-powered automation — all in one platform.',
    heroText: 'Indian law firms deserve software built for Indian courts. LexPilot AI provides case management across all Indian jurisdictions, automatic cause list updates, limitation tracking, GST-compliant billing, and team collaboration — replacing 5+ tools with one platform.',
    keywords: ['law firm management software India', 'legal practice management India', 'case management software India', 'law firm billing software'],
    painPoints: [
      { icon: 'bi-tools', title: 'Too Many Disconnected Tools', desc: 'Firms juggle Excel, email, WhatsApp, and 3-4 different software products that don\'t talk to each other.' },
      { icon: 'bi-calendar-x', title: 'Missed Court Dates', desc: 'Manual diary management leads to missed hearings and limitation periods — creating malpractice risk.' },
      { icon: 'bi-receipt', title: 'Billing Inefficiency', desc: 'Time tracking and invoicing in Excel means lost billable hours and GST compliance headaches.' },
      { icon: 'bi-people', title: 'Poor Team Coordination', desc: 'WhatsApp groups and verbal handoffs create chaos when associates handle multiple matters.' },
    ],
    solutions: [
      { title: 'Unified Dashboard', desc: 'All cases, clients, deadlines, and tasks in one place across all Indian courts.' },
      { title: 'Auto Court Date Updates', desc: 'Integration with e-Courts and cause lists for automatic hearing date tracking.' },
      { title: 'GST-Compliant Billing', desc: 'Time tracking, invoicing, and payment collection with GST compliance built in.' },
      { title: 'Team Collaboration', desc: 'Task assignment, document sharing, and real-time status updates for your team.' },
    ],
    stats: [
      { value: '60%', label: 'Less Admin Time' },
      { value: '0', label: 'Missed Deadlines' },
      { value: '35%', label: 'More Billable Hours' },
      { value: '500+', label: 'Firms Trust Us' },
    ],
    testimonial: {
      quote: 'We replaced Clio, Google Calendar, and our Excel billing system with LexPilot AI. The automatic court date updates alone have paid for the subscription ten times over.',
      name: 'Rajesh Gupta',
      role: 'Managing Partner, Gupta Law Chambers, Delhi',
    },
    faq: [
      { q: 'Does it work with Indian courts?', a: 'Built specifically for Indian courts — Supreme Court, all High Courts, District Courts, NCLT, ITAT, and 50+ tribunals.' },
      { q: 'Can it replace our current billing system?', a: 'Yes. Time tracking, matter-wise billing, GST invoicing, payment tracking, and client statements all built in.' },
      { q: 'How many users can we have?', a: 'Plans range from solo practitioners to 200+ user enterprise deployments. Volume discounts available.' },
      { q: 'Is data stored in India?', a: 'Yes. All data is stored in AWS Mumbai region. DPDP Act compliant with SOC 2 Type II certification.' },
    ],
  },
  'contract-review-ai-india': {
    title: 'AI Contract Review India | LexPilot AI',
    h1: 'AI-Powered Contract Review for Indian Regulations',
    description: 'Review contracts against Companies Act, SEBI, RBI, FEMA regulations in 60 seconds. AI-powered risk scoring, compliance checking, and redline generation for Indian law firms.',
    heroText: 'Upload any contract and get instant AI analysis against Indian regulatory requirements. LexPilot AI checks Companies Act 2013, SEBI regulations, RBI guidelines, FEMA compliance, stamp duty requirements, and your firm\'s playbook — delivering categorized findings in under 60 seconds.',
    keywords: ['contract review AI India', 'AI contract analysis', 'legal document review India', 'compliance checking software India'],
    painPoints: [
      { icon: 'bi-file-earmark-x', title: 'Slow Manual Review', desc: 'Associates spend 2-4 hours reviewing each contract, creating a bottleneck for deal closures.' },
      { icon: 'bi-exclamation-triangle', title: 'Missed Compliance Issues', desc: 'Complex Indian regulations (Companies Act, SEBI, RBI, FEMA) make it easy to miss critical compliance gaps.' },
      { icon: 'bi-bar-chart', title: 'Inconsistent Quality', desc: 'Review quality varies dramatically between junior and senior associates.' },
      { icon: 'bi-cash-stack', title: 'High Review Costs', desc: 'Clients push back on ₹5,000-15,000/hour rates for what they perceive as routine review work.' },
    ],
    solutions: [
      { title: '60-Second Analysis', desc: 'Upload and get comprehensive risk assessment in under a minute.' },
      { title: 'Indian Regulatory Focus', desc: 'Pre-built checks for Companies Act, SEBI, RBI, FEMA, Stamp Act, and more.' },
      { title: 'Risk Scoring', desc: 'Categorized findings: critical, high, medium, low — with suggested fixes.' },
      { title: 'Playbook Integration', desc: 'Compare against your firm\'s approved positions and fallback clauses.' },
    ],
    stats: [
      { value: '200+', label: 'Risk Factors Checked' },
      { value: '60s', label: 'Average Review Time' },
      { value: '15+', label: 'Regulations Covered' },
      { value: '99.2%', label: 'Issue Detection Rate' },
    ],
    testimonial: {
      quote: 'Our M&A team now uses LexPilot AI as the first pass on every contract. It catches SEBI compliance issues our junior associates were missing, and due diligence timelines have improved by 40%.',
      name: 'Sneha Krishnan',
      role: 'Head of Corporate, Krishnan & Co, Chennai',
    },
    faq: [
      { q: 'What regulations does it check?', a: 'Companies Act 2013, SEBI (LODR, ICDR, Takeover Code), RBI Master Directions, FEMA, Indian Contract Act, Stamp Act, Registration Act, and industry-specific regulations.' },
      { q: 'Can it handle non-English contracts?', a: 'Currently optimized for English-language contracts. Hindi contract support is on our roadmap for Q3 2026.' },
      { q: 'Does it integrate with our DMS?', a: 'Yes — integrations with SharePoint, Google Drive, iManage, and NetDocuments. API access for custom integrations.' },
      { q: 'How accurate is the risk detection?', a: '99.2% issue detection rate on our test set of 10,000+ annotated Indian commercial contracts.' },
    ],
  },
};

export default function SEOLanding() {
  const { slug } = useParams<{ slug: string }>();
  const page = pages[slug || ''];

  if (!page) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Page not found</h2>
        <Link to="/">Go to Homepage</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead title={page.title} description={page.description} canonical={`/solutions/${slug}`} />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)' }}>
        <div className="container-custom" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: '1.5rem' }}>
              {page.h1}
            </h1>
            <p style={{ fontSize: '1.125rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '2rem' }}>
              {page.heroText}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/schedule-demo" style={{ padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                Book a Demo
              </Link>
              <Link to="/free-trial" style={{ padding: '0.875rem 2rem', border: '1px solid #4f46e5', color: '#4f46e5', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '3rem 0', borderTop: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            {page.stats.map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#4f46e5' }}>{stat.value}</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.25rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
              The Problems We Solve
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {page.painPoints.map((point, i) => (
              <AnimateOnScroll key={point.title} delay={i * 0.08}>
                <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #fee2e2', background: '#fef2f2' }}>
                  <i className={`bi ${point.icon}`} style={{ fontSize: '1.5rem', color: '#dc2626', marginBottom: '0.75rem', display: 'block' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{point.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>{point.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
              How LexPilot AI Solves This
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {page.solutions.map((sol, i) => (
              <AnimateOnScroll key={sol.title} delay={i * 0.08}>
                <div style={{ padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #e0e7ff', background: 'white' }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#10b981', fontSize: '1.25rem', marginBottom: '0.75rem', display: 'block' }} />
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{sol.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.6 }}>{sol.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-custom" style={{ maxWidth: '700px' }}>
          <AnimateOnScroll variant="scale">
            <blockquote style={{ textAlign: 'center', margin: 0 }}>
              <i className="bi bi-quote" style={{ fontSize: '3rem', color: '#e0e7ff', display: 'block', marginBottom: '1rem' }} />
              <p style={{ fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.8, color: '#374151', marginBottom: '1.5rem' }}>
                "{page.testimonial.quote}"
              </p>
              <footer>
                <strong style={{ display: 'block', fontSize: '0.95rem' }}>{page.testimonial.name}</strong>
                <span style={{ fontSize: '0.8125rem', color: '#6b7280' }}>{page.testimonial.role}</span>
              </footer>
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div className="container-custom" style={{ maxWidth: '720px' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, textAlign: 'center', marginBottom: '3rem' }}>
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {page.faq.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 0.05}>
                <div style={{ padding: '1.25rem 1.5rem', background: 'white', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>{item.q}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7 }}>{item.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-custom" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
              Ready to Get Started?
            </h2>
            <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: 1.7 }}>
              Join 500+ Indian law firms using LexPilot AI. Start your 14-day free trial — no credit card required.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/free-trial" style={{ padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                Start Free Trial
              </Link>
              <Link to="/schedule-demo" style={{ padding: '0.875rem 2rem', border: '1px solid #d1d5db', color: '#374151', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                Talk to Sales
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SEO Keywords (hidden) */}
      <div aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        {page.keywords.map(kw => <span key={kw}>{kw}</span>)}
      </div>
    </>
  );
}
