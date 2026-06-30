import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const benefits = [
  { icon: 'bi-clock-history', title: 'Save 10+ Hours Per Week', description: 'Automate repetitive legal research, drafting, and document review tasks.' },
  { icon: 'bi-currency-rupee', title: 'Reduce Costs by 60%', description: 'AI handles tasks that would require additional associates or junior lawyers.' },
  { icon: 'bi-graph-up-arrow', title: 'Win More Cases', description: 'AI-powered research uncovers relevant precedents that humans might miss.' },
  { icon: 'bi-lightning', title: '10x Faster Research', description: 'What took hours of manual research now takes seconds with AI.' },
  { icon: 'bi-shield-check', title: 'Reduce Risk', description: 'AI-powered contract review catches issues before they become problems.' },
  { icon: 'bi-people', title: 'Delight Clients', description: 'Faster turnaround, better outcomes, and transparent case tracking.' },
];

export default function Benefits() {
  return (
    <section className={`section ${styles.benefits}`} aria-label="Benefits">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-trophy" aria-hidden="true" /> Benefits
            </span>
            <h2 className="section-title">Transform Your Legal Practice</h2>
            <p className="section-subtitle">
              See measurable improvements across every aspect of your legal practice.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit.title} delay={index * 0.05}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  <i className={`bi ${benefit.icon}`} aria-hidden="true" />
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
