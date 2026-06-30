import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

export default function ProductOverview() {
  return (
    <section className={`section ${styles.productOverview}`} aria-label="Product Overview">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-stars" aria-hidden="true" /> Platform
            </span>
            <h2 className="section-title">
              One Platform for All Your Legal Needs
            </h2>
            <p className="section-subtitle">
              LexPilot AI combines cutting-edge artificial intelligence with deep understanding of Indian law 
              to deliver a comprehensive legal technology platform.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.productGrid}>
          <AnimateOnScroll delay={0.1}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-search" aria-hidden="true" />
              </div>
              <h3>AI Legal Research</h3>
              <p>Search across 80+ years of Indian case law, statutes, and legal commentary using natural language queries.</p>
              <Link to="/features/ai-legal-research">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-pencil-square" aria-hidden="true" />
              </div>
              <h3>AI Drafting</h3>
              <p>Generate first drafts of contracts, petitions, applications, and legal opinions with AI trained on Indian templates.</p>
              <Link to="/features/ai-drafting">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-file-earmark-check" aria-hidden="true" />
              </div>
              <h3>Contract Review</h3>
              <p>Automatically identify risks, missing clauses, and compliance issues in contracts against Indian regulatory standards.</p>
              <Link to="/features/contract-review">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-briefcase" aria-hidden="true" />
              </div>
              <h3>Case Management</h3>
              <p>Track cases, hearings, deadlines, and court filings across all Indian courts from one unified dashboard.</p>
              <Link to="/features/case-management">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-clipboard-check" aria-hidden="true" />
              </div>
              <h3>Compliance</h3>
              <p>Stay compliant with SEBI, RBI, MCA, and other regulatory requirements with automated monitoring and alerts.</p>
              <Link to="/features/compliance">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.3}>
            <div className={styles.productCard}>
              <div className={styles.productCardIcon}>
                <i className="bi bi-bar-chart-line" aria-hidden="true" />
              </div>
              <h3>Analytics</h3>
              <p>Gain insights into case outcomes, judge patterns, billing efficiency, and team performance with AI analytics.</p>
              <Link to="/features/analytics">
                Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
