import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './StickyCTA.module.scss';

const hiddenPaths = ['/schedule-demo', '/free-trial', '/contact-sales'];

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  const shouldHide = hiddenPaths.some(path => location.pathname.startsWith(path));

  useEffect(() => {
    if (shouldHide || dismissed) return;

    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldHide, dismissed]);

  if (shouldHide || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.stickyCta}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.content}>
            <span className={styles.text}>
              <strong>Ready to transform your legal practice?</strong> Start your 14-day free trial today.
            </span>
            <div className={styles.actions}>
              <Link to="/schedule-demo" className={styles.primaryBtn}>Book Demo</Link>
              <Link to="/free-trial" className={styles.secondaryBtn}>Free Trial</Link>
            </div>
            <button
              className={styles.dismiss}
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
            >
              <i className="bi bi-x-lg" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
