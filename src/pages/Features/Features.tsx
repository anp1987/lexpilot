import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from './Features.module.scss';

const features = [
  { slug: 'ai-legal-research', icon: 'bi-search', title: 'AI Legal Research', desc: 'Search across 80+ years of Indian case law using natural language. Get precise citations in seconds.' },
  { slug: 'ai-drafting', icon: 'bi-pencil-square', title: 'AI Drafting', desc: 'Generate first drafts of contracts, petitions, and legal documents trained on Indian formats.' },
  { slug: 'contract-review', icon: 'bi-file-earmark-check', title: 'Contract Review', desc: 'AI-powered analysis to identify risks, missing clauses, and compliance issues.' },
  { slug: 'case-management', icon: 'bi-briefcase', title: 'Case Management', desc: 'Track cases, hearings, deadlines, and filings across all Indian courts.' },
  { slug: 'document-management', icon: 'bi-folder2-open', title: 'Document Management', desc: 'Centralized repository with version control, OCR, and smart tagging.' },
  { slug: 'knowledge-base', icon: 'bi-book', title: 'Knowledge Base', desc: 'Build institutional knowledge with AI-powered categorization and retrieval.' },
  { slug: 'client-portal', icon: 'bi-person-badge', title: 'Client Portal', desc: 'Self-service portal for clients to track status and communicate securely.' },
  { slug: 'compliance', icon: 'bi-clipboard-check', title: 'Compliance', desc: 'Automated monitoring for SEBI, RBI, MCA, and industry-specific regulations.' },
  { slug: 'analytics', icon: 'bi-bar-chart-line', title: 'Analytics', desc: 'Insights into case outcomes, billing efficiency, and team performance.' },
  { slug: 'billing', icon: 'bi-receipt', title: 'Billing & Invoicing', desc: 'Time tracking, expense management, and automated invoicing for law firms.' },
  { slug: 'api', icon: 'bi-code-slash', title: 'API & Integrations', desc: 'RESTful API access, webhooks, and 50+ pre-built integrations.' },
  { slug: 'ai-agents', icon: 'bi-robot', title: 'AI Agents', desc: 'Autonomous agents that research, draft, and monitor while you focus on strategy.' },
];

export default function Features() {
  return (
    <>
      <SEOHead
        title="Features"
        description="Explore all features of LexPilot AI — AI legal research, drafting, contract review, case management, and more built for Indian law firms."
        canonical="/features"
      />

      <section className={styles.hero}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><i className="bi bi-lightning" aria-hidden="true" /> Features</span>
            <h1 className={styles.heroTitle}>Every Tool You Need to Practice Law Smarter</h1>
            <p className={styles.heroSubtitle}>
              Built specifically for Indian law firms. Every feature saves time, reduces errors, and delivers better outcomes for your clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.featuresSection}`}>
        <div className="container-custom">
          <div className={styles.grid}>
            {features.map((feature, index) => (
              <AnimateOnScroll key={feature.slug} delay={index * 0.05}>
                <Link to={`/features/${feature.slug}`} className={styles.card}>
                  <div className={styles.cardIcon}>
                    <i className={`bi ${feature.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <span className={styles.cardLink}>
                    Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
