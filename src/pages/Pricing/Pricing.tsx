import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from './Pricing.module.scss';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 2999, yearly: 29990 },
    description: 'Perfect for solo advocates and individual practitioners',
    features: [
      { name: 'AI Legal Research', included: true },
      { name: '50 AI queries/month', included: true },
      { name: 'Basic document drafting', included: true },
      { name: '5 GB storage', included: true },
      { name: 'Email support', included: true },
      { name: '1 user', included: true },
      { name: 'Case management (basic)', included: true },
      { name: 'Contract review', included: false },
      { name: 'AI Agents', included: false },
      { name: 'Knowledge base', included: false },
      { name: 'Client portal', included: false },
      { name: 'API access', included: false },
    ],
  },
  {
    name: 'Professional',
    price: { monthly: 7999, yearly: 79990 },
    description: 'For growing law firms that need advanced AI capabilities',
    popular: true,
    features: [
      { name: 'AI Legal Research', included: true },
      { name: 'Unlimited AI queries', included: true },
      { name: 'Advanced drafting with templates', included: true },
      { name: '50 GB storage', included: true },
      { name: 'Priority support', included: true },
      { name: 'Up to 10 users', included: true },
      { name: 'Full case management', included: true },
      { name: 'Contract review', included: true },
      { name: 'AI Agents (basic)', included: true },
      { name: 'Knowledge base', included: false },
      { name: 'Client portal', included: false },
      { name: 'API access', included: false },
    ],
  },
  {
    name: 'Business',
    price: { monthly: 14999, yearly: 149990 },
    description: 'For mid-size firms needing full platform access',
    features: [
      { name: 'AI Legal Research', included: true },
      { name: 'Unlimited AI queries', included: true },
      { name: 'Advanced drafting with custom templates', included: true },
      { name: '200 GB storage', included: true },
      { name: 'Dedicated CSM', included: true },
      { name: 'Up to 50 users', included: true },
      { name: 'Full case management', included: true },
      { name: 'Contract review', included: true },
      { name: 'AI Agents (full)', included: true },
      { name: 'Knowledge base', included: true },
      { name: 'Client portal', included: true },
      { name: 'API access (limited)', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: { monthly: 0, yearly: 0 },
    description: 'For large firms and corporate legal departments',
    features: [
      { name: 'AI Legal Research', included: true },
      { name: 'Unlimited everything', included: true },
      { name: 'Custom AI model training', included: true },
      { name: 'Unlimited storage', included: true },
      { name: '24/7 support + SLA', included: true },
      { name: 'Unlimited users', included: true },
      { name: 'Full case management', included: true },
      { name: 'Contract review', included: true },
      { name: 'AI Agents (full + custom)', included: true },
      { name: 'Knowledge base', included: true },
      { name: 'Client portal', included: true },
      { name: 'Full API access + webhooks', included: true },
    ],
  },
];

const comparisonFeatures = [
  { category: 'AI Features', features: ['AI Legal Research', 'AI Queries', 'AI Drafting', 'Contract Review', 'AI Agents', 'Custom AI Training'] },
  { category: 'Management', features: ['Case Management', 'Document Management', 'Knowledge Base', 'Client Portal', 'Billing & Invoicing'] },
  { category: 'Platform', features: ['Users', 'Storage', 'API Access', 'Integrations', 'SSO/SAML', 'Custom Branding'] },
  { category: 'Support', features: ['Email Support', 'Priority Support', 'Dedicated CSM', 'Phone Support', 'SLA Guarantee', 'On-site Training'] },
];

const comparisonData: Record<string, string[]> = {
  'AI Legal Research': ['Basic', 'Advanced', 'Advanced', 'Custom'],
  'AI Queries': ['50/month', 'Unlimited', 'Unlimited', 'Unlimited'],
  'AI Drafting': ['Basic', 'Advanced', 'Custom Templates', 'Custom AI'],
  'Contract Review': ['—', '✓', '✓', '✓'],
  'AI Agents': ['—', 'Basic', 'Full', 'Full + Custom'],
  'Custom AI Training': ['—', '—', '—', '✓'],
  'Case Management': ['Basic', 'Full', 'Full', 'Full'],
  'Document Management': ['5 GB', '50 GB', '200 GB', 'Unlimited'],
  'Knowledge Base': ['—', '—', '✓', '✓'],
  'Client Portal': ['—', '—', '✓', '✓'],
  'Billing & Invoicing': ['—', 'Basic', '✓', '✓'],
  'Users': ['1', '10', '50', 'Unlimited'],
  'Storage': ['5 GB', '50 GB', '200 GB', 'Unlimited'],
  'API Access': ['—', '—', 'Limited', 'Full'],
  'Integrations': ['Basic', 'Standard', 'Advanced', 'Custom'],
  'SSO/SAML': ['—', '—', '—', '✓'],
  'Custom Branding': ['—', '—', '—', '✓'],
  'Email Support': ['✓', '✓', '✓', '✓'],
  'Priority Support': ['—', '✓', '✓', '✓'],
  'Dedicated CSM': ['—', '—', '✓', '✓'],
  'Phone Support': ['—', '—', '✓', '✓'],
  'SLA Guarantee': ['—', '—', '—', '99.9%'],
  'On-site Training': ['—', '—', '—', '✓'],
};

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <>
      <SEOHead
        title="Pricing"
        description="Simple, transparent pricing for LexPilot AI. Start free, scale as you grow. Plans for solo advocates to enterprise firms."
        canonical="/pricing"
      />

      <section className={styles.hero}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className={styles.heroTitle}>Simple, Transparent Pricing</h1>
            <p className={styles.heroSubtitle}>Start free. Scale as you grow. No hidden fees. Cancel anytime.</p>
          </motion.div>

          <div className={styles.toggle}>
            <span className={!yearly ? styles.toggleActive : ''}>Monthly</span>
            <button onClick={() => setYearly(!yearly)} className={styles.toggleSwitch} aria-label="Toggle billing period">
              <span className={`${styles.toggleDot} ${yearly ? styles.toggleRight : ''}`} />
            </button>
            <span className={yearly ? styles.toggleActive : ''}>
              Yearly <span className={styles.saveBadge}>Save 17%</span>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.plans}>
        <div className="container-custom">
          <div className={styles.plansGrid}>
            {plans.map((plan, index) => (
              <AnimateOnScroll key={plan.name} delay={index * 0.1}>
                <div className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}>
                  {plan.popular && <span className={styles.popularBadge}>Most Popular</span>}
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.description}</p>
                  <div className={styles.planPrice}>
                    {plan.price.monthly === 0 ? (
                      <span className={styles.priceCustom}>Custom</span>
                    ) : (
                      <>
                        <span className={styles.priceCurrency}>₹</span>
                        <span className={styles.priceAmount}>
                          {(yearly ? plan.price.yearly / 12 : plan.price.monthly).toLocaleString('en-IN', { maximumFractionDigits: 0 })}
                        </span>
                        <span className={styles.pricePeriod}>/user/month</span>
                      </>
                    )}
                  </div>
                  {plan.price.monthly !== 0 && yearly && (
                    <p className={styles.priceBilled}>Billed ₹{plan.price.yearly.toLocaleString('en-IN')}/year</p>
                  )}
                  <Link
                    to={plan.price.monthly === 0 ? '/contact-sales' : '/free-trial'}
                    className={`${styles.planCta} ${plan.popular ? styles.planCtaPrimary : ''}`}
                  >
                    {plan.price.monthly === 0 ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                  <ul className={styles.planFeatures}>
                    {plan.features.map((feature) => (
                      <li key={feature.name} className={feature.included ? '' : styles.excluded}>
                        <i className={`bi ${feature.included ? 'bi-check-lg' : 'bi-x-lg'}`} aria-hidden="true" />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className={`section section--gray ${styles.comparison}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Compare Plans</h2>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className={styles.comparisonTable}>
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Starter</th>
                    <th>Professional</th>
                    <th>Business</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((group) => (
                    <>
                      <tr key={group.category} className={styles.categoryRow}>
                        <td colSpan={5}>{group.category}</td>
                      </tr>
                      {group.features.map((feature) => (
                        <tr key={feature}>
                          <td>{feature}</td>
                          {comparisonData[feature]?.map((value, i) => (
                            <td key={i} className={value === '✓' ? styles.checkCell : value === '—' ? styles.dashCell : ''}>
                              {value === '✓' ? <i className="bi bi-check-lg" aria-hidden="true" /> : value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className={`section ${styles.faqSection}`}>
        <div className="container-custom">
          <AnimateOnScroll>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Pricing FAQ</h2>
          </AnimateOnScroll>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h4>Can I try before I buy?</h4>
              <p>Yes, all paid plans come with a 14-day free trial. No credit card required.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Can I change plans later?</h4>
              <p>Yes, you can upgrade or downgrade at any time. Changes take effect immediately with prorated billing.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What payment methods do you accept?</h4>
              <p>We accept all major credit/debit cards, UPI, net banking, and wire transfers for enterprise plans.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Is there a discount for NGOs or academic institutions?</h4>
              <p>Yes, we offer special pricing for NGOs, legal aid organizations, and academic institutions. Contact us for details.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>What happens when my trial ends?</h4>
              <p>Your data is preserved for 30 days. You can subscribe to continue or export your data.</p>
            </div>
            <div className={styles.faqItem}>
              <h4>Do you offer annual contracts?</h4>
              <p>Yes, annual billing saves you 17%. Enterprise plans can have custom contract terms.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.enterprise}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div className={styles.enterpriseCta}>
              <h2>Need a Custom Solution?</h2>
              <p>Our enterprise plan includes custom AI training, unlimited users, dedicated infrastructure, and white-glove onboarding.</p>
              <div className={styles.enterpriseActions}>
                <Link to="/contact-sales" className={styles.enterprisePrimary}>Contact Sales</Link>
                <Link to="/schedule-demo" className={styles.enterpriseSecondary}>Schedule Demo</Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
