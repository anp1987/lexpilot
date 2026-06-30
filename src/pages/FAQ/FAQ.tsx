import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import Accordion from '@/components/common/Accordion/Accordion';

const faqCategories = [
  {
    title: 'General',
    items: [
      { id: 'g1', question: 'What is LexPilot AI?', answer: <p>LexPilot AI is an AI-powered legal technology platform built specifically for Indian law firms. It combines artificial intelligence with deep understanding of Indian law to provide legal research, drafting, contract review, case management, compliance monitoring, and knowledge management.</p> },
      { id: 'g2', question: 'Who is LexPilot AI designed for?', answer: <p>LexPilot AI is designed for Indian legal professionals — solo advocates, small law firms, mid-size firms, enterprise firms, corporate legal teams, and government legal departments.</p> },
      { id: 'g3', question: 'How is LexPilot AI different from ChatGPT?', answer: <p>Unlike generic AI tools, LexPilot AI is trained specifically on Indian law. It provides verified citations, understands court hierarchies, knows Indian legal formats, and connects to authoritative legal databases. ChatGPT may hallucinate citations; LexPilot AI verifies every reference.</p> },
      { id: 'g4', question: 'Is LexPilot AI available in Hindi?', answer: <p>Yes, LexPilot AI supports both English and Hindi. You can ask questions, generate documents, and interact with the platform in either language.</p> },
      { id: 'g5', question: 'Can LexPilot AI replace a lawyer?', answer: <p>No. LexPilot AI is a tool that augments lawyers, not replaces them. It handles time-consuming tasks like research and drafting, allowing lawyers to focus on strategy, client relationships, and high-value legal work that requires human judgment.</p> },
    ],
  },
  {
    title: 'AI & Research',
    items: [
      { id: 'r1', question: 'What databases does LexPilot AI search?', answer: <p>LexPilot AI searches across Supreme Court judgments (1950-present), all 25 High Courts, District Courts, NCLT, NCLAT, ITAT, SAT, NCDRC, all Central Acts, State Acts, Rules, Regulations, and leading legal commentaries.</p> },
      { id: 'r2', question: 'How accurate is the AI research?', answer: <p>Our AI achieves 94%+ accuracy on legal research queries, verified by practising advocates. Every citation is linked to the original source. We display confidence scores so you know how reliable each result is.</p> },
      { id: 'r3', question: 'Does it provide proper legal citations?', answer: <p>Yes, every result includes proper citations in standard Indian formats — AIR, SCC, SCR, and court-specific formats. Citations are verified against original source databases.</p> },
      { id: 'r4', question: 'Can it research across multiple jurisdictions?', answer: <p>Yes, you can search across all Indian jurisdictions simultaneously or narrow your research to specific courts, states, or time periods.</p> },
      { id: 'r5', question: 'How current is the database?', answer: <p>Our database is updated daily with new judgments, orders, and regulatory notifications. Supreme Court and major High Court decisions are typically available within 24-48 hours of pronouncement.</p> },
    ],
  },
  {
    title: 'Security & Privacy',
    items: [
      { id: 's1', question: 'Is my client data secure?', answer: <p>Absolutely. We are SOC 2 Type II and ISO 27001 certified. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We implement role-based access control, audit logs, and regular security assessments.</p> },
      { id: 's2', question: 'Where is my data stored?', answer: <p>All data is stored in Indian data centers (Mumbai and Hyderabad). Your data never leaves India. We comply with the Digital Personal Data Protection Act, 2023.</p> },
      { id: 's3', question: 'Does LexPilot AI train on my data?', answer: <p>No. Your firm&apos;s data is never used to train our general AI models. Your documents and queries remain private and are only accessible to your authorized team members.</p> },
      { id: 's4', question: 'What happens if I delete my account?', answer: <p>Upon account deletion, all your data is permanently erased from our systems within 30 days. We provide data export tools so you can download everything before deletion.</p> },
      { id: 's5', question: 'Do you comply with the Bar Council rules?', answer: <p>Yes, LexPilot AI is designed to comply with Bar Council of India rules regarding client confidentiality and professional ethics. Our platform supports ethical walls and conflict checking.</p> },
    ],
  },
  {
    title: 'Pricing & Billing',
    items: [
      { id: 'p1', question: 'Is there a free trial?', answer: <p>Yes, all paid plans include a 14-day free trial with full access to Professional plan features. No credit card required to start.</p> },
      { id: 'p2', question: 'Can I change plans later?', answer: <p>Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the next billing cycle. Prorated credits are applied automatically.</p> },
      { id: 'p3', question: 'What payment methods are accepted?', answer: <p>We accept all major credit/debit cards, UPI, net banking, and wire transfers. Enterprise plans can be paid via purchase order and invoice.</p> },
      { id: 'p4', question: 'Is there a discount for NGOs?', answer: <p>Yes, we offer 50% discount for registered NGOs, legal aid organizations, and academic institutions. Contact our sales team with your registration documents.</p> },
      { id: 'p5', question: 'Are there any setup fees?', answer: <p>No, there are no setup fees for Starter, Professional, or Business plans. Enterprise plans may include one-time setup fees for custom integrations and training.</p> },
    ],
  },
  {
    title: 'Technical',
    items: [
      { id: 't1', question: 'What integrations are available?', answer: <p>LexPilot AI integrates with Microsoft 365, Google Workspace, popular DMS systems (iManage, NetDocuments), billing software (Clio, PracticePanther), and court filing systems. We also provide REST APIs for custom integrations.</p> },
      { id: 't2', question: 'Does it work on mobile?', answer: <p>Yes, LexPilot AI is fully responsive and works on all devices. We also offer native iOS and Android apps for on-the-go access to research, case updates, and notifications.</p> },
      { id: 't3', question: 'Can I use it offline?', answer: <p>Basic features like document viewing and case information are available offline through our mobile apps. AI features require an internet connection.</p> },
      { id: 't4', question: 'What file formats are supported?', answer: <p>We support PDF, Word (.doc, .docx), Excel, PowerPoint, plain text, RTF, and scanned documents (via OCR). Our OCR supports both English and Hindi text.</p> },
      { id: 't5', question: 'Is there an API?', answer: <p>Yes, Business and Enterprise plans include REST API access. Our API lets you integrate LexPilot AI research, drafting, and review capabilities into your existing systems.</p> },
    ],
  },
  {
    title: 'Support',
    items: [
      { id: 'su1', question: 'What support channels are available?', answer: <p>Starter plans get email support. Professional plans get priority email and chat support. Business gets phone support and a dedicated customer success manager. Enterprise gets 24/7 support with SLA guarantees.</p> },
      { id: 'su2', question: 'Do you provide training?', answer: <p>Yes, all plans include access to our online knowledge base and video tutorials. Professional and above get live webinar training. Enterprise plans include on-site training at your office.</p> },
      { id: 'su3', question: 'What is the onboarding process?', answer: <p>After signup, you get a guided onboarding tour, access to training materials, and optional live onboarding session. Business and Enterprise plans include dedicated onboarding with data migration support.</p> },
      { id: 'su4', question: 'Can I request new features?', answer: <p>Yes! We have a public roadmap and feature request portal. You can submit ideas, vote on existing requests, and track feature development progress.</p> },
      { id: 'su5', question: 'What is your uptime guarantee?', answer: <p>We maintain 99.9% uptime for all paid plans, verified independently. Enterprise plans include custom SLA agreements with financial credits for any downtime beyond the guarantee.</p> },
    ],
  },
];

export default function FAQ() {
  return (
    <>
      <SEOHead title="FAQ" description="Frequently asked questions about LexPilot AI — features, pricing, security, integrations, and support." canonical="/faq" jsonLd={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqCategories.flatMap(c => c.items).map(i => ({ '@type': 'Question', name: i.question, acceptedAnswer: { '@type': 'Answer', text: (i.answer as JSX.Element).props.children } })) }} />
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-question-circle" aria-hidden="true" /> FAQ</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know about LexPilot AI.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          {faqCategories.map((category, index) => (
            <AnimateOnScroll key={category.title} delay={index * 0.05}>
              <div style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '2px solid #e5e7eb' }}>{category.title}</h2>
                <Accordion items={category.items} />
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
