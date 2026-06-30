import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        canonical="/404"
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
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ marginBottom: '2rem' }}
            >
              <span style={{ fontSize: 'clamp(6rem, 15vw, 10rem)', fontWeight: 900, background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'block', lineHeight: 1 }}>
                404
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Page Not Found</h1>
              <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
                The page you are looking for might have been moved, deleted, or perhaps never existed. Much like a misfiled case document — let us help you find what you need.
              </p>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                  <i className="bi bi-house" /> Go Home
                </Link>
                <Link to="/support" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'white', color: '#1f2937', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                  <i className="bi bi-life-preserver" /> Get Help
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{ marginTop: '3rem' }}
            >
              <p style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '1rem' }}>Or try these popular pages:</p>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/features" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Features</Link>
                <Link to="/pricing" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Pricing</Link>
                <Link to="/blog" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Blog</Link>
                <Link to="/faq" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>FAQ</Link>
                <Link to="/contact-sales" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Contact</Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
