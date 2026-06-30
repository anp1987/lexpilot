import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const reasons = [
  { icon: 'bi-pin-map', title: 'Built for Indian Law', description: 'Unlike global tools, LexPilot AI understands Indian courts, statutes, case law formats, and legal workflows.' },
  { icon: 'bi-translate', title: 'Multilingual', description: 'Works in English, Hindi, and regional languages. Understands legal terminology across Indian jurisdictions.' },
  { icon: 'bi-database', title: 'Comprehensive Database', description: '80+ years of Supreme Court, High Court, Tribunal decisions, plus all Central and State Acts.' },
  { icon: 'bi-lock', title: 'Data Sovereignty', description: 'Your data stays in India. SOC 2, ISO 27001 certified. Compliant with Indian data protection regulations.' },
  { icon: 'bi-headset', title: 'Dedicated Support', description: 'India-based support team available in business hours. Dedicated success managers for enterprise plans.' },
  { icon: 'bi-gear', title: 'Customizable', description: 'Templates, workflows, and AI behavior can be customized to match your firm\'s specific practices.' },
];

export default function WhyChoose() {
  return (
    <section className={`section section--gray ${styles.whyChoose}`} aria-label="Why Choose LexPilot AI">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-star" aria-hidden="true" /> Why LexPilot AI
            </span>
            <h2 className="section-title">Why Indian Law Firms Choose LexPilot AI</h2>
            <p className="section-subtitle">
              Purpose-built for the Indian legal system, not a generic AI tool adapted for law.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.whyGrid}>
          {reasons.map((reason, index) => (
            <AnimateOnScroll key={reason.title} delay={index * 0.05}>
              <div className={styles.whyCard}>
                <i className={`bi ${reason.icon}`} aria-hidden="true" />
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
