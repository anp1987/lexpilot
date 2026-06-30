import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

export default function CTA() {
  return (
    <section className={styles.cta} aria-label="Call to action">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className={styles.ctaInner}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your Legal Practice?
            </h2>
            <p className={styles.ctaSubtitle}>
              Join 500+ law firms already using LexPilot AI to work smarter, faster, and more efficiently.
            </p>
            <div className={styles.ctaActions}>
              <Link to="/schedule-demo" className={styles.ctaPrimary}>
                Schedule Demo <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
              <Link to="/free-trial" className={styles.ctaSecondary}>
                Start Free Trial
              </Link>
            </div>
            <p className={styles.ctaMeta}>No credit card required · 14-day free trial · Setup in 5 minutes</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
