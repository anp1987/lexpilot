import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

export default function SecuritySection() {
  return (
    <section className={`section ${styles.security}`} aria-label="Security">
      <div className="container-custom">
        <div className={styles.securityLayout}>
          <AnimateOnScroll direction="left">
            <div className={styles.securityContent}>
              <span className="section-badge">
                <i className="bi bi-shield-lock" aria-hidden="true" /> Security
              </span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Enterprise-Grade Security You Can Trust
              </h2>
              <p className={styles.securityDesc}>
                Your client data is sacred. LexPilot AI provides bank-level security with end-to-end encryption, 
                SOC 2 Type II certification, and full compliance with Indian data protection regulations.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>AES-256 Encryption at Rest</span>
                </div>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>TLS 1.3 in Transit</span>
                </div>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>Data Residency in India</span>
                </div>
                <div className={styles.securityFeature}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>DPDP Act Compliant</span>
                </div>
              </div>
              <Link to="/security" className={styles.securityLink}>
                Learn about our security <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className={styles.securityVisual}>
              <div className={styles.securityShield}>
                <i className="bi bi-shield-lock-fill" aria-hidden="true" />
              </div>
              <div className={styles.securityBadges}>
                <div className={styles.certBadge}>SOC 2</div>
                <div className={styles.certBadge}>ISO 27001</div>
                <div className={styles.certBadge}>GDPR</div>
                <div className={styles.certBadge}>DPDP</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
