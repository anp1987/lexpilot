import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

export default function ServerError() {
  return (
    <>
      <SEOHead
        title="Server Error"
        description="Something went wrong on our end. Our team has been notified and is working to fix the issue."
        canonical="/500"
        noindex
      />

      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem', textAlign: 'center', minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginBottom: '2rem' }}
            >
              <span style={{ fontSize: 'clamp(6rem, 15vw, 10rem)', fontWeight: 900, background: 'linear-gradient(135deg, #dc2626, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block', lineHeight: 1 }}>
                500
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Something Went Wrong</h1>
              <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
                Our servers encountered an unexpected error. Our engineering team has been automatically notified and is investigating the issue.
              </p>

              <div style={{ background: '#fef3c7', borderRadius: '0.75rem', padding: '1rem 1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <i className="bi bi-info-circle" style={{ color: '#d97706' }} />
                <span style={{ fontSize: '0.9rem', color: '#92400e' }}>If this persists, contact support at support@lexpilot.ai</span>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={() => window.location.reload()}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', fontWeight: 600, border: 'none', cursor: 'pointer', fontSize: '1rem' }}
                >
                  <i className="bi bi-arrow-clockwise" /> Try Again
                </button>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'white', color: '#1f2937', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                  <i className="bi bi-house" /> Go Home
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '3rem' }}
            >
              <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1.5rem', display: 'inline-block', textAlign: 'left', maxWidth: '400px' }}>
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: '#6b7280', marginBottom: '0.5rem' }}>While we fix this, you can:</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}><i className="bi bi-check" style={{ color: '#4f46e5', marginRight: '0.5rem' }} />Check our <Link to="/status" style={{ color: '#4f46e5', textDecoration: 'none' }}>system status page</Link></li>
                  <li style={{ marginBottom: '0.5rem' }}><i className="bi bi-check" style={{ color: '#4f46e5', marginRight: '0.5rem' }} />Clear your browser cache and retry</li>
                  <li><i className="bi bi-check" style={{ color: '#4f46e5', marginRight: '0.5rem' }} />Contact us at +91 80 4567 8902</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
