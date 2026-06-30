import { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 2999, yearly: 29990 },
    description: 'Perfect for solo advocates',
    features: ['AI Legal Research', '50 AI queries/month', 'Basic drafting', '5 GB storage', 'Email support'],
  },
  {
    name: 'Professional',
    price: { monthly: 7999, yearly: 79990 },
    description: 'For growing law firms',
    popular: true,
    features: ['Everything in Starter', 'Unlimited AI queries', 'Advanced drafting', 'Contract review', 'Case management', '50 GB storage', 'Priority support'],
  },
  {
    name: 'Business',
    price: { monthly: 14999, yearly: 149990 },
    description: 'For mid-size firms',
    features: ['Everything in Professional', 'AI Agents', 'Knowledge base', 'Client portal', 'Analytics', '200 GB storage', 'Dedicated CSM'],
  },
  {
    name: 'Enterprise',
    price: { monthly: 0, yearly: 0 },
    description: 'For large firms & corporates',
    features: ['Everything in Business', 'Custom AI training', 'API access', 'SSO / SAML', 'Unlimited storage', 'Custom integrations', 'SLA guarantee', '24/7 support'],
  },
];

export default function PricingPreview() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className={`section ${styles.pricingPreview}`} aria-label="Pricing">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-tag" aria-hidden="true" /> Pricing
            </span>
            <h2 className="section-title">Simple, Transparent Pricing</h2>
            <p className="section-subtitle">
              Start free, scale as you grow. No hidden fees.
            </p>
          </div>

          <div className={styles.pricingToggle}>
            <span className={!yearly ? styles.toggleActive : ''}>Monthly</span>
            <button
              onClick={() => setYearly(!yearly)}
              className={styles.toggleSwitch}
              aria-label={`Switch to ${yearly ? 'monthly' : 'yearly'} billing`}
            >
              <span className={`${styles.toggleDot} ${yearly ? styles.toggleRight : ''}`} />
            </button>
            <span className={yearly ? styles.toggleActive : ''}>
              Yearly <span className={styles.saveBadge}>Save 17%</span>
            </span>
          </div>
        </AnimateOnScroll>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <AnimateOnScroll key={plan.name} delay={index * 0.1}>
              <div className={`${styles.pricingCard} ${plan.popular ? styles.popular : ''}`}>
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
                      <span className={styles.pricePeriod}>/month</span>
                    </>
                  )}
                </div>
                <ul className={styles.planFeatures}>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="bi bi-check-lg" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={plan.price.monthly === 0 ? '/contact-sales' : '/free-trial'}
                  className={`${styles.planCta} ${plan.popular ? styles.planCtaPrimary : ''}`}
                >
                  {plan.price.monthly === 0 ? 'Contact Sales' : 'Start Free Trial'}
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className={styles.pricingFooter}>
            <Link to="/pricing">View full pricing comparison <i className="bi bi-arrow-right" aria-hidden="true" /></Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
