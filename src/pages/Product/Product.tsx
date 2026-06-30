import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <>
      <SEOHead title="Product" description="LexPilot AI - A comprehensive legal AI platform for Indian law firms. AI research, drafting, contract review, case management, and more." canonical="/product" />
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="section-badge"><i className="bi bi-box" aria-hidden="true" /> Platform</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>The Complete Legal AI Platform</h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              One platform that brings together AI research, intelligent drafting, contract review, case management, compliance monitoring, and knowledge management — purpose-built for Indian law.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center' }}>
              <Link to="/schedule-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 500 }}>Schedule Demo <i className="bi bi-arrow-right" /></Link>
              <Link to="/features" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: '#fff', color: '#1f2937', border: '1px solid #d1d5db', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 500 }}>View All Features</Link>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: 'bi-search', title: 'AI-Powered Research', desc: 'Natural language search across Supreme Court, High Courts, Tribunals, Acts, and Rules.' },
                { icon: 'bi-pencil-square', title: 'Intelligent Drafting', desc: 'Generate contracts, petitions, applications, and opinions trained on Indian legal formats.' },
                { icon: 'bi-file-earmark-check', title: 'Contract Analysis', desc: 'Identify risks, flag non-standard terms, and verify compliance with Indian regulations.' },
                { icon: 'bi-briefcase', title: 'Case Management', desc: 'Track cases across all courts with automatic hearing date updates and deadline alerts.' },
                { icon: 'bi-robot', title: 'AI Agents', desc: 'Autonomous agents that research, draft, and monitor — working 24/7 in the background.' },
                { icon: 'bi-bar-chart', title: 'Legal Analytics', desc: 'Insights into case outcomes, judge patterns, billing efficiency, and team performance.' },
              ].map((item) => (
                <div key={item.title} style={{ padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '1rem', background: '#fff' }}>
                  <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem', color: '#1a56db', marginBottom: '1rem', display: 'block' }} aria-hidden="true" />
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      <section className="section section--gray">
        <div className="container-custom">
          <AnimateOnScroll>
            <div className="section-header">
              <h2 className="section-title">Built for the Indian Legal System</h2>
              <p className="section-subtitle">Unlike global tools adapted for India, LexPilot AI is built ground-up for Indian courts, statutes, and legal workflows.</p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
              {['Supreme Court & High Courts', 'All Central & State Acts', 'NCLT, NCLAT, ITAT, SAT', 'District & Sessions Courts', 'Consumer Forums & RERA', 'Bilingual (English + Hindi)'].map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem', background: '#fff', borderRadius: '0.75rem', border: '1px solid #e5e7eb' }}>
                  <i className="bi bi-check-circle-fill" style={{ color: '#059669' }} aria-hidden="true" />
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
