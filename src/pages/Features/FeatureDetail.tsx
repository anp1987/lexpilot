import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import Accordion from '@/components/common/Accordion/Accordion';
import styles from './FeatureDetail.module.scss';

const featureData: Record<string, {
  title: string; icon: string; tagline: string; description: string;
  problem: string; solution: string;
  comparison: { aspect: string; traditional: string; lexpilot: string }[];
  benefits: { title: string; desc: string }[];
  workflow: { step: string; desc: string }[];
  faqs: { id: string; question: string; answer: string }[];
}> = {
  'ai-legal-research': {
    title: 'AI Legal Research',
    icon: 'bi-search',
    tagline: 'Research across 80+ years of Indian case law in seconds',
    description: 'LexPilot AI\'s legal research engine uses advanced natural language processing to search across the entire corpus of Indian law — Supreme Court judgments, High Court decisions, tribunal orders, statutes, rules, and legal commentary.',
    problem: 'Legal research in India is time-consuming and fragmented. Lawyers spend 4-6 hours daily searching across multiple databases, often missing relevant precedents buried in thousands of pages. Manual research leads to incomplete analysis and missed deadlines.',
    solution: 'LexPilot AI lets you ask legal questions in plain English or Hindi. Our AI searches across 10 million+ documents, identifies the most relevant cases, and presents results with confidence scores, key excerpts, and proper citations — all in under 10 seconds.',
    comparison: [
      { aspect: 'Search Method', traditional: 'Keyword-based, exact match only', lexpilot: 'Natural language + semantic understanding' },
      { aspect: 'Time per Query', traditional: '2-4 hours manual research', lexpilot: 'Under 10 seconds' },
      { aspect: 'Coverage', traditional: 'One database at a time', lexpilot: '10M+ documents across all jurisdictions' },
      { aspect: 'Citation Verification', traditional: 'Manual cross-referencing', lexpilot: 'Auto-verified with confidence scores' },
      { aspect: 'Output', traditional: 'Raw results, self-organized', lexpilot: 'Ranked results + auto-generated memo' },
    ],
    benefits: [
      { title: '10x Faster Research', desc: 'What took hours now takes seconds. Ask in natural language and get comprehensive results.' },
      { title: 'Never Miss a Precedent', desc: 'AI searches across all jurisdictions simultaneously, finding cases you might have overlooked.' },
      { title: 'Accurate Citations', desc: 'Every result includes proper citations (AIR, SCC, SCR) verified against original sources.' },
      { title: 'Multi-jurisdiction', desc: 'Search across Supreme Court, all High Courts, NCLT, NCLAT, ITAT, SAT, and more.' },
      { title: 'Confidence Scoring', desc: 'AI indicates how relevant each result is to your specific query.' },
      { title: 'Research Memos', desc: 'Auto-generate comprehensive research memos with all citations and analysis.' },
    ],
    workflow: [
      { step: 'Ask Your Question', desc: 'Type your legal question in plain English, Hindi, or legal terminology.' },
      { step: 'AI Searches & Analyzes', desc: 'Our AI searches 10M+ documents, analyzing relevance and precedent value.' },
      { step: 'Review Results', desc: 'Get ranked results with confidence scores, key excerpts, and citations.' },
      { step: 'Generate Memo', desc: 'Auto-generate a research memo with all findings organized by relevance.' },
    ],
    faqs: [
      { id: '1', question: 'What databases does the AI search?', answer: 'LexPilot AI searches across Supreme Court of India (1950-present), all 25 High Courts, NCLT, NCLAT, ITAT, SAT, NCDRC, all Central Acts, State Acts, Rules, Regulations, and leading legal commentaries.' },
      { id: '2', question: 'How accurate are the results?', answer: 'Our AI achieves 94%+ accuracy on legal research queries, verified by practising advocates. Every citation is linked to the original source for verification.' },
      { id: '3', question: 'Can I search in Hindi?', answer: 'Yes, you can ask questions in Hindi, English, or mixed language. The AI understands legal terminology in both languages.' },
      { id: '4', question: 'How is this different from SCC Online or Manupatra?', answer: 'Unlike keyword-based search, LexPilot AI understands legal concepts and context. You can ask complex questions and get relevant results even when the exact keywords do not appear in the judgment.' },
    ],
  },
  'ai-drafting': {
    title: 'AI Drafting',
    icon: 'bi-pencil-square',
    tagline: 'Generate legal documents trained on Indian formats and templates',
    description: 'LexPilot AI\'s drafting engine generates first drafts of contracts, petitions, applications, legal opinions, and briefs using AI trained specifically on Indian legal formats and precedents.',
    problem: 'Drafting legal documents from scratch is repetitive and time-consuming. Junior associates spend hours on formatting and boilerplate language instead of substantive legal analysis. Inconsistencies across documents create risk.',
    solution: 'LexPilot AI generates comprehensive first drafts based on your instructions, firm templates, and best practices from Indian law. The AI understands Indian legal formatting, citation styles, and jurisdictional requirements.',
    comparison: [
      { aspect: 'First Draft Time', traditional: '3-6 hours manual writing', lexpilot: '2-5 minutes with AI' },
      { aspect: 'Formatting', traditional: 'Manual, inconsistent across team', lexpilot: 'Auto-formatted to Indian standards' },
      { aspect: 'Template Usage', traditional: 'Copy-paste from old documents', lexpilot: '500+ templates + firm customization' },
      { aspect: 'Quality Consistency', traditional: 'Varies by associate experience', lexpilot: 'Consistent, trained on best practices' },
      { aspect: 'Language Support', traditional: 'English only for most tools', lexpilot: 'English + Hindi with legal terminology' },
    ],
    benefits: [
      { title: 'Save 3-4 Hours Per Document', desc: 'Get a comprehensive first draft in minutes instead of hours.' },
      { title: 'Indian Legal Formats', desc: 'AI trained on Indian petition formats, contract styles, and legal opinion structures.' },
      { title: 'Template Library', desc: '500+ templates for contracts, petitions, applications, and more.' },
      { title: 'Firm Customization', desc: 'Train the AI on your firm\'s templates, style guide, and preferences.' },
      { title: 'Multi-language', desc: 'Draft in English or Hindi with proper legal terminology.' },
      { title: 'Version Control', desc: 'Track changes, compare versions, and maintain document history.' },
    ],
    workflow: [
      { step: 'Select Document Type', desc: 'Choose from contracts, petitions, applications, opinions, or custom documents.' },
      { step: 'Provide Instructions', desc: 'Describe what you need — parties, terms, jurisdiction, specific clauses.' },
      { step: 'AI Generates Draft', desc: 'Get a comprehensive first draft with proper formatting and citations.' },
      { step: 'Review & Refine', desc: 'Edit, refine, and finalize with AI-assisted suggestions.' },
    ],
    faqs: [
      { id: '1', question: 'What types of documents can it draft?', answer: 'Contracts (NDA, SPA, SHA, employment), petitions (writ, civil suit, arbitration), applications, legal opinions, briefs, notices, agreements, MOUs, and more.' },
      { id: '2', question: 'Can it use my firm\'s templates?', answer: 'Yes, Business and Enterprise plans allow you to upload your firm\'s templates. The AI will follow your formatting, clause library, and style preferences.' },
      { id: '3', question: 'Is the output ready to file?', answer: 'The AI generates high-quality first drafts that require attorney review. It handles formatting, structure, and boilerplate, freeing you to focus on substantive legal arguments.' },
    ],
  },
  'contract-review': {
    title: 'Contract Review',
    icon: 'bi-file-earmark-check',
    tagline: 'AI-powered analysis to identify risks and compliance issues',
    description: 'LexPilot AI\'s contract review engine analyzes contracts against Indian regulatory standards, identifies risks, flags non-standard terms, and suggests improvements — in minutes instead of hours.',
    problem: 'Manual contract review is slow, inconsistent, and error-prone. Lawyers review hundreds of contracts but may miss critical clauses or compliance issues under time pressure. Inconsistent review quality creates liability.',
    solution: 'Upload any contract and get instant AI analysis. LexPilot AI checks against Indian Companies Act, SEBI regulations, RBI guidelines, stamp duty requirements, and your firm\'s playbook — flagging risks and suggesting improvements.',
    comparison: [
      { aspect: 'Review Time', traditional: '2-4 hours per contract', lexpilot: '30-60 seconds' },
      { aspect: 'Risk Coverage', traditional: 'Depends on reviewer experience', lexpilot: '200+ risk factors checked systematically' },
      { aspect: 'Compliance Check', traditional: 'Manual regulatory lookup', lexpilot: 'Auto-check against 15+ regulations' },
      { aspect: 'Consistency', traditional: 'Varies across reviewers', lexpilot: 'Standardized playbook-based review' },
      { aspect: 'Output', traditional: 'Email comments or tracked changes', lexpilot: 'Categorized report + redlines + alternatives' },
    ],
    benefits: [
      { title: 'Catch Every Risk', desc: 'AI systematically checks 200+ risk factors across every contract.' },
      { title: 'Compliance Verification', desc: 'Auto-check against Companies Act, SEBI, RBI, FEMA, and industry regulations.' },
      { title: 'Playbook Integration', desc: 'Compare against your firm\'s approved positions and fallback clauses.' },
      { title: 'Redline Generation', desc: 'Auto-generate redlined versions with suggested improvements.' },
      { title: 'Clause Library', desc: 'Access pre-approved alternative clauses for common issues.' },
      { title: 'Risk Scoring', desc: 'Get an overall risk score and category-wise breakdown for quick assessment.' },
    ],
    workflow: [
      { step: 'Upload Contract', desc: 'Upload PDF, Word, or paste text. AI handles OCR for scanned documents.' },
      { step: 'AI Analyzes', desc: 'AI checks 200+ risk factors, compliance requirements, and your playbook.' },
      { step: 'Review Findings', desc: 'Get categorized findings: high risk, medium risk, missing clauses, compliance.' },
      { step: 'Generate Report', desc: 'Export a detailed review report with suggestions and alternative clauses.' },
    ],
    faqs: [
      { id: '1', question: 'What types of contracts can it review?', answer: 'Any commercial contract — NDAs, SPAs, SHAs, employment agreements, service agreements, lease deeds, loan agreements, JV agreements, licensing agreements, and more.' },
      { id: '2', question: 'Which regulations does it check against?', answer: 'Indian Companies Act 2013, SEBI regulations, RBI guidelines, FEMA, Indian Contract Act, Stamp Act, Registration Act, and industry-specific regulations.' },
      { id: '3', question: 'How long does review take?', answer: 'Typically 30-60 seconds for a standard contract. Complex agreements with 100+ pages may take 2-3 minutes.' },
    ],
  },
  'case-management': {
    title: 'Case Management',
    icon: 'bi-briefcase',
    tagline: 'End-to-end case lifecycle management for Indian courts',
    description: 'LexPilot AI provides comprehensive case management designed specifically for Indian courts — track cases, hearings, deadlines, and filings across Supreme Court, High Courts, District Courts, and Tribunals from one unified dashboard.',
    problem: 'Indian law firms manage cases across multiple courts with different procedures, timelines, and filing requirements. Tracking hearing dates, limitation periods, and compliance deadlines manually leads to missed dates and malpractice risk.',
    solution: 'One dashboard to track all your cases across every Indian court. Automatic hearing date updates, limitation period alerts, filing deadline reminders, and integration with court cause lists — so you never miss a date.',
    comparison: [
      { aspect: 'Date Tracking', traditional: 'Manual diary entries, Excel sheets', lexpilot: 'Auto-updated from court cause lists' },
      { aspect: 'Multi-Court', traditional: 'Separate logins per court website', lexpilot: 'All courts in one unified dashboard' },
      { aspect: 'Deadline Alerts', traditional: 'Calendar reminders, easy to miss', lexpilot: 'Smart alerts with escalation' },
      { aspect: 'Client Reporting', traditional: 'Manual status emails', lexpilot: 'Auto-generated professional reports' },
      { aspect: 'Team Coordination', traditional: 'WhatsApp groups, verbal handoffs', lexpilot: 'Structured task assignment & tracking' },
    ],
    benefits: [
      { title: 'All Courts, One Dashboard', desc: 'Track Supreme Court, High Courts, District Courts, NCLT, and Tribunal matters.' },
      { title: 'Auto Court Date Updates', desc: 'Integration with court websites for automatic hearing date tracking.' },
      { title: 'Deadline Alerts', desc: 'Never miss a limitation period, filing deadline, or compliance date.' },
      { title: 'Matter Organization', desc: 'Organize by client, matter type, court, advocate, or custom fields.' },
      { title: 'Team Collaboration', desc: 'Assign tasks, share updates, and collaborate with your team in real-time.' },
      { title: 'Client Reporting', desc: 'Auto-generate status reports for clients with case progress summaries.' },
    ],
    workflow: [
      { step: 'Add Case', desc: 'Enter case details — parties, court, case number, filing date.' },
      { step: 'Track Progress', desc: 'AI auto-updates hearing dates from court cause lists.' },
      { step: 'Manage Tasks', desc: 'Assign tasks, set deadlines, and track completion.' },
      { step: 'Report to Clients', desc: 'Generate professional case status reports for clients.' },
    ],
    faqs: [
      { id: '1', question: 'Which courts are supported?', answer: 'Supreme Court of India, all 25 High Courts, District Courts (major cities), NCLT, NCLAT, ITAT, SAT, NCDRC, Consumer Forums, and RERA tribunals.' },
      { id: '2', question: 'Does it integrate with court websites?', answer: 'Yes, we integrate with e-Courts, Supreme Court website, and High Court cause lists for automatic date tracking where available.' },
      { id: '3', question: 'Can I track limitation periods?', answer: 'Yes, the system automatically calculates and alerts you about approaching limitation periods based on the relevant statute.' },
    ],
  },
};

export default function FeatureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const feature = featureData[slug || ''];

  if (!feature) {
    return (
      <div style={{ padding: '200px 0', textAlign: 'center' }}>
        <h2>Feature not found</h2>
        <Link to="/features">View all features</Link>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={feature.title}
        description={feature.tagline}
        canonical={`/features/${slug}`}
      />

      <section className={styles.hero}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className={styles.heroIcon}>
              <i className={`bi ${feature.icon}`} aria-hidden="true" />
            </div>
            <h1 className={styles.heroTitle}>{feature.title}</h1>
            <p className={styles.heroSubtitle}>{feature.tagline}</p>
            <div className={styles.heroActions}>
              <Link to="/schedule-demo" className={styles.heroPrimary}>Schedule Demo</Link>
              <Link to="/free-trial" className={styles.heroSecondary}>Start Free Trial</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.description}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <p className={styles.descText}>{feature.description}</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={`section section--gray ${styles.problem}`}>
        <div className="container-custom">
          <div className={styles.problemGrid}>
            <AnimateOnScroll direction="left">
              <div className={styles.problemCard}>
                <span className={styles.problemBadge}><i className="bi bi-x-circle" aria-hidden="true" /> The Problem</span>
                <p>{feature.problem}</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll direction="right">
              <div className={styles.solutionCard}>
                <span className={styles.solutionBadge}><i className="bi bi-check-circle" aria-hidden="true" /> The Solution</span>
                <p>{feature.solution}</p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Traditional vs LexPilot Comparison */}
      <section className={`section ${styles.comparisonSection}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Traditional Approach vs LexPilot AI</h2>
          </AnimateOnScroll>
          <AnimateOnScroll variant="scale">
            <div className={styles.comparisonTable}>
              <div className={styles.comparisonHeader}>
                <div className={styles.comparisonAspect}>Aspect</div>
                <div className={styles.comparisonTraditional}>Traditional</div>
                <div className={styles.comparisonLexpilot}>LexPilot AI</div>
              </div>
              {feature.comparison.map((row) => (
                <div key={row.aspect} className={styles.comparisonRow}>
                  <div className={styles.comparisonAspect}>{row.aspect}</div>
                  <div className={styles.comparisonTraditional}>
                    <i className="bi bi-x-circle" style={{ color: '#ef4444', marginRight: '0.5rem' }} aria-hidden="true" />
                    {row.traditional}
                  </div>
                  <div className={styles.comparisonLexpilot}>
                    <i className="bi bi-check-circle-fill" style={{ color: '#10b981', marginRight: '0.5rem' }} aria-hidden="true" />
                    {row.lexpilot}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={`section ${styles.benefitsSection}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Key Benefits</h2>
          </AnimateOnScroll>
          <div className={styles.benefitsGrid}>
            {feature.benefits.map((benefit, index) => (
              <AnimateOnScroll key={benefit.title} delay={index * 0.05}>
                <div className={styles.benefitCard}>
                  <h4>{benefit.title}</h4>
                  <p>{benefit.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--gray ${styles.workflowSection}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
          </AnimateOnScroll>
          <div className={styles.workflowSteps}>
            {feature.workflow.map((step, index) => (
              <AnimateOnScroll key={step.step} delay={index * 0.1}>
                <div className={styles.workflowStep}>
                  <div className={styles.stepNumber}>{index + 1}</div>
                  <h4>{step.step}</h4>
                  <p>{step.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          </AnimateOnScroll>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <Accordion items={feature.faqs.map(f => ({ ...f, answer: <p>{f.answer}</p> }))} />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className={styles.ctaInner}>
              <h2>Ready to Try {feature.title}?</h2>
              <p>See it in action with a personalized demo or start your free trial today.</p>
              <div className={styles.ctaActions}>
                <Link to="/schedule-demo" className={styles.ctaPrimary}>Schedule Demo</Link>
                <Link to="/free-trial" className={styles.ctaSecondary}>Start Free Trial</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
