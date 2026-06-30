import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const screens = [
  { id: 'dashboard', label: 'Dashboard', icon: 'bi-grid' },
  { id: 'ai-chat', label: 'AI Chat', icon: 'bi-chat-dots' },
  { id: 'cases', label: 'Cases', icon: 'bi-briefcase' },
  { id: 'research', label: 'Research', icon: 'bi-search' },
  { id: 'analytics', label: 'Analytics', icon: 'bi-bar-chart' },
];

export default function ProductTour() {
  const [activeScreen, setActiveScreen] = useState('dashboard');

  return (
    <section className={`section ${styles.productTour}`} aria-label="Product Tour">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-play-circle" aria-hidden="true" /> Product Tour
            </span>
            <h2 className="section-title">See LexPilot AI in Action</h2>
            <p className="section-subtitle">
              Explore the platform through our interactive product tour.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className={styles.tourTabs} role="tablist">
            {screens.map((screen) => (
              <button
                key={screen.id}
                role="tab"
                aria-selected={activeScreen === screen.id}
                className={`${styles.tourTab} ${activeScreen === screen.id ? styles.active : ''}`}
                onClick={() => setActiveScreen(screen.id)}
              >
                <i className={`bi ${screen.icon}`} aria-hidden="true" />
                {screen.label}
              </button>
            ))}
          </div>

          <div className={styles.tourScreen}>
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={styles.tourContent}
              role="tabpanel"
            >
              {activeScreen === 'dashboard' && <DashboardMockup />}
              {activeScreen === 'ai-chat' && <AIChatMockup />}
              {activeScreen === 'cases' && <CasesMockup />}
              {activeScreen === 'research' && <ResearchMockup />}
              {activeScreen === 'analytics' && <AnalyticsMockup />}
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className={styles.mockupScreen}>
      <div className={styles.mockupGrid3}>
        <div className={styles.miniCard}>
          <div className={styles.miniCardHeader}>
            <i className="bi bi-briefcase" aria-hidden="true" />
            <span>Active Cases</span>
          </div>
          <div className={styles.miniCardValue}>156</div>
          <div className={styles.miniCardTrend}>
            <i className="bi bi-arrow-up" aria-hidden="true" /> 12% from last month
          </div>
        </div>
        <div className={styles.miniCard}>
          <div className={styles.miniCardHeader}>
            <i className="bi bi-calendar-check" aria-hidden="true" />
            <span>Upcoming Hearings</span>
          </div>
          <div className={styles.miniCardValue}>8</div>
          <div className={styles.miniCardTrend}>Next: Tomorrow 10:30 AM</div>
        </div>
        <div className={styles.miniCard}>
          <div className={styles.miniCardHeader}>
            <i className="bi bi-file-earmark" aria-hidden="true" />
            <span>Documents</span>
          </div>
          <div className={styles.miniCardValue}>2,847</div>
          <div className={styles.miniCardTrend}>
            <i className="bi bi-arrow-up" aria-hidden="true" /> 34 new this week
          </div>
        </div>
      </div>
      <div className={styles.mockupTimeline}>
        <h4>Recent Activity</h4>
        <div className={styles.timelineItem}>
          <span className={styles.timeDot} style={{ background: '#1a56db' }} />
          <div>
            <strong>Research Complete:</strong> Arbitration clause validity in employment contracts
          </div>
        </div>
        <div className={styles.timelineItem}>
          <span className={styles.timeDot} style={{ background: '#7c3aed' }} />
          <div>
            <strong>Draft Ready:</strong> Partnership deed for M/s. Gupta & Associates
          </div>
        </div>
        <div className={styles.timelineItem}>
          <span className={styles.timeDot} style={{ background: '#059669' }} />
          <div>
            <strong>Contract Reviewed:</strong> Service agreement with ABC Technologies
          </div>
        </div>
      </div>
    </div>
  );
}

function AIChatMockup() {
  return (
    <div className={styles.mockupScreen}>
      <div className={styles.chatInterface}>
        <div className={styles.chatMessages}>
          <div className={styles.chatUser}>
            <div className={styles.chatBubbleUser}>
              What are the recent Supreme Court judgments on Section 138 of the Negotiable Instruments Act regarding the limitation period for filing complaints?
            </div>
          </div>
          <div className={styles.chatAI}>
            <div className={styles.chatBubbleAI}>
              <p><strong>Key Judgments on Section 138 NI Act - Limitation Period:</strong></p>
              <p>1. <strong>Dashrath Rupsingh Rathod v. State of Maharashtra (2014)</strong> - The Supreme Court held that complaints must be filed within the jurisdiction where the cheque was dishonored.</p>
              <p>2. <strong>Yogesh Upadhyay v. Atlanta Ltd. (2023)</strong> - The Court clarified that the limitation period of 30 days under Section 142(b) begins from the date of cause of action arising under Section 138.</p>
              <p>3. <strong>Laxmi Dyechem v. State of Gujarat (2012)</strong> - Established that the complaint must be filed within one month from the date of receipt of notice period expiry.</p>
              <div className={styles.chatCitations}>
                <span>3 citations found</span>
                <span>•</span>
                <span>Confidence: 94%</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chatInput}>
          <input type="text" placeholder="Ask a legal question..." disabled />
          <button disabled><i className="bi bi-send" aria-hidden="true" /></button>
        </div>
      </div>
    </div>
  );
}

function CasesMockup() {
  return (
    <div className={styles.mockupScreen}>
      <div className={styles.caseList}>
        <div className={styles.caseHeader}>
          <h4>Active Cases</h4>
          <div className={styles.caseFilters}>
            <span className={styles.filterActive}>All</span>
            <span>Civil</span>
            <span>Criminal</span>
            <span>Corporate</span>
          </div>
        </div>
        <div className={styles.caseTable}>
          <div className={styles.caseRow}>
            <div className={styles.caseBadge} style={{ background: '#dbeafe', color: '#1e40af' }}>Civil</div>
            <div className={styles.caseInfo}>
              <strong>Sharma v. ABC Developers Pvt. Ltd.</strong>
              <span>Delhi High Court • CS(OS) 2847/2024</span>
            </div>
            <div className={styles.caseDate}>Next: 15 Jul 2026</div>
            <div className={styles.caseStatus}>Active</div>
          </div>
          <div className={styles.caseRow}>
            <div className={styles.caseBadge} style={{ background: '#fef3c7', color: '#92400e' }}>Corporate</div>
            <div className={styles.caseInfo}>
              <strong>In Re: Merger of XYZ Ltd. with PQR Ltd.</strong>
              <span>NCLT Mumbai • CP No. 1256/2024</span>
            </div>
            <div className={styles.caseDate}>Next: 22 Jul 2026</div>
            <div className={styles.caseStatus}>Active</div>
          </div>
          <div className={styles.caseRow}>
            <div className={styles.caseBadge} style={{ background: '#d1fae5', color: '#065f46' }}>Criminal</div>
            <div className={styles.caseInfo}>
              <strong>State v. Rajesh Kumar</strong>
              <span>Sessions Court, Saket • SC No. 456/2023</span>
            </div>
            <div className={styles.caseDate}>Next: 5 Aug 2026</div>
            <div className={styles.caseStatus}>Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchMockup() {
  return (
    <div className={styles.mockupScreen}>
      <div className={styles.researchInterface}>
        <div className={styles.researchSearch}>
          <i className="bi bi-search" aria-hidden="true" />
          <span>Force majeure applicability in commercial lease agreements during pandemic</span>
        </div>
        <div className={styles.researchResults}>
          <div className={styles.researchResult}>
            <div className={styles.researchResultMeta}>
              <span className={styles.courtBadge}>Supreme Court</span>
              <span>2021</span>
            </div>
            <h5>M/s Halliburton Offshore Services v. Vedanta Ltd.</h5>
            <p>The Court examined force majeure clauses in commercial contracts and held that pandemic qualifies as force majeure event only when specifically enumerated...</p>
            <div className={styles.relevanceBar}>
              <div style={{ width: '96%' }} />
            </div>
            <span className={styles.relevanceScore}>96% relevant</span>
          </div>
          <div className={styles.researchResult}>
            <div className={styles.researchResultMeta}>
              <span className={styles.courtBadge}>Delhi HC</span>
              <span>2020</span>
            </div>
            <h5>Ramanand & Ors v. Dr. Girish Soni & Anr</h5>
            <p>The Court held that lockdown constitutes force majeure and tenants cannot be evicted during the suspension period. The lease obligations stand suspended...</p>
            <div className={styles.relevanceBar}>
              <div style={{ width: '91%' }} />
            </div>
            <span className={styles.relevanceScore}>91% relevant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  return (
    <div className={styles.mockupScreen}>
      <div className={styles.analyticsGrid}>
        <div className={styles.chartCard}>
          <h5>Case Outcomes</h5>
          <div className={styles.barChart}>
            <div className={styles.bar} style={{ height: '80%', background: '#1a56db' }} title="Won"><span>Won</span></div>
            <div className={styles.bar} style={{ height: '40%', background: '#dc2626' }} title="Lost"><span>Lost</span></div>
            <div className={styles.bar} style={{ height: '60%', background: '#d97706' }} title="Settled"><span>Settled</span></div>
            <div className={styles.bar} style={{ height: '30%', background: '#6b7280' }} title="Pending"><span>Pending</span></div>
          </div>
        </div>
        <div className={styles.chartCard}>
          <h5>Monthly Revenue</h5>
          <div className={styles.lineChart}>
            <svg viewBox="0 0 300 100" preserveAspectRatio="none">
              <path
                d="M0,80 L50,65 L100,70 L150,45 L200,30 L250,35 L300,15"
                fill="none"
                stroke="#1a56db"
                strokeWidth="2"
              />
              <path
                d="M0,80 L50,65 L100,70 L150,45 L200,30 L250,35 L300,15 L300,100 L0,100"
                fill="url(#chartGradient)"
              />
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a56db" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#1a56db" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.chartLabel}>₹24.5L this month (+18%)</div>
        </div>
        <div className={styles.chartCard}>
          <h5>AI Usage</h5>
          <div className={styles.donutChart}>
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="12" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#1a56db" strokeWidth="12" strokeDasharray="150 251" strokeLinecap="round" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#7c3aed" strokeWidth="12" strokeDasharray="60 251" strokeDashoffset="-150" strokeLinecap="round" transform="rotate(-90 50 50)" />
            </svg>
            <div className={styles.donutCenter}>847<br /><small>queries</small></div>
          </div>
        </div>
      </div>
    </div>
  );
}
