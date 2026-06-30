import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const solutions = [
  { icon: 'bi-person', title: 'Solo Advocates', description: 'AI-powered research and drafting at a fraction of the cost of hiring associates.' },
  { icon: 'bi-people', title: 'Small Firms', description: 'Streamline operations, manage cases efficiently, and compete with larger firms.' },
  { icon: 'bi-building', title: 'Mid-size Firms', description: 'Scale your practice with AI workflows, team collaboration, and client management.' },
  { icon: 'bi-buildings', title: 'Enterprise Firms', description: 'Enterprise-grade security, custom integrations, dedicated support, and SLA guarantees.' },
  { icon: 'bi-bank', title: 'Corporate Legal Teams', description: 'In-house legal departments benefit from compliance automation and contract lifecycle management.' },
  { icon: 'bi-flag', title: 'Government Legal', description: 'Purpose-built solutions for government legal departments with data sovereignty compliance.' },
];

export default function Solutions() {
  return (
    <section className={`section section--gray ${styles.solutions}`} aria-label="Solutions">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-bullseye" aria-hidden="true" /> Solutions
            </span>
            <h2 className="section-title">Built for Every Type of Legal Practice</h2>
            <p className="section-subtitle">
              Whether you are a solo advocate or an enterprise firm, LexPilot AI adapts to your workflow.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution, index) => (
            <AnimateOnScroll key={solution.title} delay={index * 0.05}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionIcon}>
                  <i className={`bi ${solution.icon}`} aria-hidden="true" />
                </div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
