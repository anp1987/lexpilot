import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import Counter from '@/components/common/Counter/Counter';
import styles from '../Home.module.scss';

const stats = [
  { value: 500, suffix: '+', label: 'Law Firms', icon: 'bi-building' },
  { value: 5000, suffix: '+', label: 'Legal Professionals', icon: 'bi-people' },
  { value: 2, suffix: 'M+', label: 'Documents Processed', icon: 'bi-file-earmark-text' },
  { value: 99, suffix: '.9%', label: 'Uptime SLA', icon: 'bi-shield-check' },
];

export default function Statistics() {
  return (
    <section className={`section ${styles.statistics}`} aria-label="Statistics">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <i className={`bi ${stat.icon}`} aria-hidden="true" />
                <div className={styles.statNumber}>
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
