import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const features = [
  {
    icon: 'bi-robot',
    title: 'AI Legal Research',
    description: 'Natural language search across Supreme Court, High Courts, Tribunals, Acts, and Rules. Get precise citations in seconds.',
    href: '/features/ai-legal-research',
  },
  {
    icon: 'bi-pencil-square',
    title: 'AI Drafting',
    description: 'Generate contracts, petitions, applications, opinions, and briefs with AI trained on Indian legal formats.',
    href: '/features/ai-drafting',
  },
  {
    icon: 'bi-file-earmark-check',
    title: 'Contract Review',
    description: 'Identify risks, flag non-standard terms, and ensure compliance with Indian Companies Act, SEBI regulations.',
    href: '/features/contract-review',
  },
  {
    icon: 'bi-briefcase',
    title: 'Case Management',
    description: 'End-to-end case lifecycle management with court date tracking, hearing reminders, and deadline management.',
    href: '/features/case-management',
  },
  {
    icon: 'bi-folder2-open',
    title: 'Document Management',
    description: 'Centralized document repository with version control, OCR, smart tagging, and full-text search.',
    href: '/features/document-management',
  },
  {
    icon: 'bi-book',
    title: 'Knowledge Base',
    description: 'Build your firm\'s institutional knowledge with AI-powered categorization and retrieval.',
    href: '/features/knowledge-base',
  },
  {
    icon: 'bi-person-badge',
    title: 'Client Portal',
    description: 'Self-service portal for clients to track case status, view documents, and communicate securely.',
    href: '/features/client-portal',
  },
  {
    icon: 'bi-shield-check',
    title: 'Compliance Monitoring',
    description: 'Automated regulatory tracking for SEBI, RBI, MCA, RERA, and industry-specific regulations.',
    href: '/features/compliance',
  },
];

export default function Features() {
  return (
    <section className={`section section--gray ${styles.features}`} aria-label="Features">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-lightning" aria-hidden="true" /> Features
            </span>
            <h2 className="section-title">Everything You Need to Practice Law Smarter</h2>
            <p className="section-subtitle">
              Built specifically for Indian law firms, every feature is designed to save time, reduce errors, and deliver better outcomes.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <AnimateOnScroll key={feature.title} delay={index * 0.05}>
              <Link to={feature.href} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className={`bi ${feature.icon}`} aria-hidden="true" />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
                <span className={styles.featureLink}>
                  Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
