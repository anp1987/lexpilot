import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

export default function ROICalculator() {
  const [lawyers, setLawyers] = useState(5);
  const [researchHours, setResearchHours] = useState(15);
  const [draftingHours, setDraftingHours] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(2000);

  const researchSaved = Math.round(researchHours * 0.8 * lawyers);
  const draftingSaved = Math.round(draftingHours * 0.7 * lawyers);
  const totalHoursSaved = researchSaved + draftingSaved;
  const weeklySavings = totalHoursSaved * hourlyCost;
  const monthlySavings = weeklySavings * 4;
  const annualSavings = monthlySavings * 12;

  return (
    <section className={styles.roiCalculator} aria-label="ROI Calculator">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>ROI Calculator</span>
            <h2 className={styles.sectionTitle}>Calculate Your Savings with LexPilot AI</h2>
            <p className={styles.sectionSubtitle}>
              See how much time and money your firm can save by automating legal research and drafting.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.roiLayout}>
          <AnimateOnScroll delay={0.1}>
            <div className={styles.roiSliders}>
              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Number of Lawyers</span>
                  <span className={styles.sliderValue}>{lawyers}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={lawyers}
                  onChange={(e) => setLawyers(Number(e.target.value))}
                  className={styles.slider}
                  aria-label="Number of lawyers"
                />
                <div className={styles.sliderRange}><span>1</span><span>100</span></div>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Research Hours / Lawyer / Week</span>
                  <span className={styles.sliderValue}>{researchHours}h</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={researchHours}
                  onChange={(e) => setResearchHours(Number(e.target.value))}
                  className={styles.slider}
                  aria-label="Research hours per lawyer per week"
                />
                <div className={styles.sliderRange}><span>2h</span><span>40h</span></div>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Drafting Hours / Lawyer / Week</span>
                  <span className={styles.sliderValue}>{draftingHours}h</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={draftingHours}
                  onChange={(e) => setDraftingHours(Number(e.target.value))}
                  className={styles.slider}
                  aria-label="Drafting hours per lawyer per week"
                />
                <div className={styles.sliderRange}><span>2h</span><span>30h</span></div>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderLabel}>
                  <span>Avg. Hourly Cost (₹)</span>
                  <span className={styles.sliderValue}>₹{hourlyCost.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className={styles.slider}
                  aria-label="Average hourly cost in rupees"
                />
                <div className={styles.sliderRange}><span>₹500</span><span>₹10,000</span></div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <div className={styles.roiResults}>
              <h3>Your Estimated Savings</h3>
              <div className={styles.roiResultsGrid}>
                <motion.div className={styles.roiResultCard} key={`research-${researchSaved}`} initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
                  <span className={styles.roiResultValue}>{researchSaved}h</span>
                  <span className={styles.roiResultLabel}>Research Hours Saved / Week</span>
                </motion.div>
                <motion.div className={styles.roiResultCard} key={`drafting-${draftingSaved}`} initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
                  <span className={styles.roiResultValue}>{draftingSaved}h</span>
                  <span className={styles.roiResultLabel}>Drafting Hours Saved / Week</span>
                </motion.div>
                <motion.div className={styles.roiResultCard} key={`total-${totalHoursSaved}`} initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
                  <span className={styles.roiResultValue}>{totalHoursSaved}h</span>
                  <span className={styles.roiResultLabel}>Total Hours Saved / Week</span>
                </motion.div>
                <motion.div className={`${styles.roiResultCard} ${styles.roiHighlight}`} key={`annual-${annualSavings}`} initial={{ scale: 0.95 }} animate={{ scale: 1 }}>
                  <span className={styles.roiResultValue}>₹{annualSavings.toLocaleString('en-IN')}</span>
                  <span className={styles.roiResultLabel}>Annual Savings</span>
                </motion.div>
              </div>
              <div className={styles.roiMonthly}>
                <span>Monthly Savings: <strong>₹{monthlySavings.toLocaleString('en-IN')}</strong></span>
              </div>
              <div className={styles.roiCta}>
                <Link to="/schedule-demo" className={styles.roiCtaBtn}>
                  See It In Action <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
                <Link to="/free-trial" className={styles.roiCtaSecondary}>
                  Start Free Trial
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
