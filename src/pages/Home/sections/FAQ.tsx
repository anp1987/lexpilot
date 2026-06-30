import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import Accordion from '@/components/common/Accordion/Accordion';
import styles from '../Home.module.scss';

const faqItems = [
  { id: '1', question: 'What is LexPilot AI?', answer: 'LexPilot AI is an AI-powered legal technology platform built specifically for Indian law firms. It provides AI legal research, intelligent drafting, contract review, case management, compliance monitoring, and knowledge management — all trained on Indian law.' },
  { id: '2', question: 'Is my data secure with LexPilot AI?', answer: 'Absolutely. We are SOC 2 Type II and ISO 27001 certified. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your data is stored in Indian data centers and never leaves India. We comply with the Digital Personal Data Protection Act.' },
  { id: '3', question: 'Which courts and jurisdictions does LexPilot AI cover?', answer: 'LexPilot AI covers all Indian courts including the Supreme Court of India, all High Courts, District Courts, NCLT, NCLAT, SAT, ITAT, and various tribunals. We also cover all Central Acts, State Acts, Rules, and Regulations.' },
  { id: '4', question: 'How accurate is the AI legal research?', answer: 'Our AI achieves 94%+ accuracy on legal research queries, verified by practising advocates. Every citation is linked to the original source for verification. We clearly indicate confidence levels for each result.' },
  { id: '5', question: 'Can I try LexPilot AI before buying?', answer: 'Yes! We offer a 14-day free trial with full access to all Professional plan features. No credit card required. You can also schedule a personalized demo with our team.' },
  { id: '6', question: 'Does LexPilot AI integrate with my existing tools?', answer: 'Yes, LexPilot AI integrates with Microsoft 365, Google Workspace, popular DMS systems, billing software, and court filing systems. We also provide REST APIs for custom integrations.' },
];

export default function FAQ() {
  return (
    <section className={`section section--gray ${styles.faq}`} aria-label="FAQ">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-question-circle" aria-hidden="true" /> FAQ
            </span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Get answers to common questions about LexPilot AI.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className={styles.faqContent}>
            <Accordion items={faqItems.map(item => ({ ...item, answer: <p>{item.answer}</p> }))} />
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
