import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from '../Home.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.heroBackground}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />
      </div>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeIcon}><i className="bi bi-stars" aria-hidden="true" /></span>
            Trusted by 500+ Indian Law Firms
          </div>
          <h1 className={styles.heroTitle}>
            Reduce Legal Research by 80%.{' '}
            <span className="gradient-text">Win More Cases.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            India's most comprehensive AI legal platform — research 80+ years of case law in seconds, 
            generate court-ready drafts in minutes, and manage your entire practice from one dashboard.
          </p>
          <div className={styles.heroActions}>
            <Link to="/schedule-demo" className={styles.heroPrimary}>
              Book a Demo
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Link>
            <Link to="/free-trial" className={styles.heroSecondary}>
              Start Free Trial
            </Link>
            <a href="#product-tour" className={styles.heroTertiary}>
              <i className="bi bi-play-circle" aria-hidden="true" />
              Watch Product Tour
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span><i className="bi bi-check-circle-fill" aria-hidden="true" /> No credit card required</span>
            <span><i className="bi bi-check-circle-fill" aria-hidden="true" /> 14-day free trial</span>
            <span><i className="bi bi-check-circle-fill" aria-hidden="true" /> Setup in 5 minutes</span>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>10x</span>
              <span className={styles.heroStatLabel}>Faster Research</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>60%</span>
              <span className={styles.heroStatLabel}>Cost Reduction</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>94%+</span>
              <span className={styles.heroStatLabel}>AI Accuracy</span>
            </div>
            <div className={styles.heroStatDivider} />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>99.9%</span>
              <span className={styles.heroStatLabel}>Uptime SLA</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.heroVisual}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className={styles.heroMockup}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span /><span /><span />
              </div>
              <span className={styles.mockupTitle}>LexPilot AI — Dashboard</span>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupSidebar}>
                <div className={styles.mockupNav}>
                  <div className={styles.mockupNavItem + ' ' + styles.active}>
                    <i className="bi bi-grid" aria-hidden="true" /> Dashboard
                  </div>
                  <div className={styles.mockupNavItem}>
                    <i className="bi bi-chat-dots" aria-hidden="true" /> AI Chat
                  </div>
                  <div className={styles.mockupNavItem}>
                    <i className="bi bi-briefcase" aria-hidden="true" /> Cases
                  </div>
                  <div className={styles.mockupNavItem}>
                    <i className="bi bi-file-earmark-text" aria-hidden="true" /> Documents
                  </div>
                  <div className={styles.mockupNavItem}>
                    <i className="bi bi-search" aria-hidden="true" /> Research
                  </div>
                  <div className={styles.mockupNavItem}>
                    <i className="bi bi-bar-chart" aria-hidden="true" /> Analytics
                  </div>
                </div>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupWelcome}>
                  <h3>Good morning, Advocate Sharma</h3>
                  <p>You have 3 upcoming hearings and 2 pending reviews</p>
                </div>
                <div className={styles.mockupCards}>
                  <div className={styles.mockupStatCard}>
                    <span className={styles.statLabel}>Active Cases</span>
                    <span className={styles.statValue}>24</span>
                  </div>
                  <div className={styles.mockupStatCard}>
                    <span className={styles.statLabel}>Pending Reviews</span>
                    <span className={styles.statValue}>7</span>
                  </div>
                  <div className={styles.mockupStatCard}>
                    <span className={styles.statLabel}>AI Queries Today</span>
                    <span className={styles.statValue}>18</span>
                  </div>
                </div>
                <div className={styles.mockupActivity}>
                  <div className={styles.activityItem}>
                    <span className={styles.activityDot} />
                    <span>AI completed research on Section 138 NI Act</span>
                  </div>
                  <div className={styles.activityItem}>
                    <span className={styles.activityDot} />
                    <span>Contract draft ready for Tata Steel NDA</span>
                  </div>
                  <div className={styles.activityItem}>
                    <span className={styles.activityDot} />
                    <span>Hearing reminder: Delhi HC, Matter #2847</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
