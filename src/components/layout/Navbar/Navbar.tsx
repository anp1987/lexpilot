import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Navbar.module.scss';

const navLinks = [
  {
    label: 'Product',
    href: '/product',
    megaMenu: [
      {
        title: 'Platform',
        items: [
          { label: 'Product Overview', href: '/product', icon: 'bi-box', desc: 'Complete legal AI platform' },
          { label: 'AI Agents', href: '/ai-agents', icon: 'bi-robot', desc: 'Autonomous legal AI agents' },
          { label: 'Integrations', href: '/integrations', icon: 'bi-plug', desc: '50+ integrations' },
          { label: 'Security', href: '/security', icon: 'bi-shield-check', desc: 'Enterprise-grade security' },
        ],
      },
      {
        title: 'Features',
        items: [
          { label: 'AI Legal Research', href: '/features/ai-legal-research', icon: 'bi-search', desc: 'Research across Indian law' },
          { label: 'AI Drafting', href: '/features/ai-drafting', icon: 'bi-pencil', desc: 'Draft legal documents' },
          { label: 'Contract Review', href: '/features/contract-review', icon: 'bi-file-earmark-check', desc: 'AI-powered review' },
          { label: 'Case Management', href: '/features/case-management', icon: 'bi-briefcase', desc: 'End-to-end management' },
        ],
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    megaMenu: [
      {
        title: 'By Firm Size',
        items: [
          { label: 'Solo Advocates', href: '/solutions#solo', icon: 'bi-person', desc: 'For individual practitioners' },
          { label: 'Small Firms', href: '/solutions#small', icon: 'bi-people', desc: '2-10 lawyers' },
          { label: 'Mid-size Firms', href: '/solutions#midsize', icon: 'bi-building', desc: '11-50 lawyers' },
          { label: 'Enterprise', href: '/solutions#enterprise', icon: 'bi-buildings', desc: '50+ lawyers' },
        ],
      },
      {
        title: 'By Use Case',
        items: [
          { label: 'Corporate Legal Teams', href: '/solutions#corporate', icon: 'bi-bank', desc: 'In-house counsel' },
          { label: 'Litigation', href: '/solutions#litigation', icon: 'bi-hammer', desc: 'Court proceedings' },
          { label: 'Compliance', href: '/solutions#compliance', icon: 'bi-clipboard-check', desc: 'Regulatory compliance' },
          { label: 'Government Legal', href: '/solutions#government', icon: 'bi-flag', desc: 'Government departments' },
        ],
      },
    ],
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Resources',
    href: '/blog',
    megaMenu: [
      {
        title: 'Learn',
        items: [
          { label: 'Blog', href: '/blog', icon: 'bi-journal-text', desc: 'Insights & articles' },
          { label: 'Customer Stories', href: '/customer-stories', icon: 'bi-chat-quote', desc: 'Success stories' },
          { label: 'FAQ', href: '/faq', icon: 'bi-question-circle', desc: 'Common questions' },
          { label: 'Roadmap', href: '/roadmap', icon: 'bi-map', desc: 'What we\'re building' },
        ],
      },
      {
        title: 'Company',
        items: [
          { label: 'About', href: '/about', icon: 'bi-info-circle', desc: 'Our mission & team' },
          { label: 'Careers', href: '/careers', icon: 'bi-briefcase', desc: 'Join our team' },
          { label: 'Partners', href: '/partners', icon: 'bi-handshake', desc: 'Partner program' },
          { label: 'Release Notes', href: '/release-notes', icon: 'bi-megaphone', desc: 'Latest updates' },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label="LexPilot AI Home">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="url(#nav-gradient)" />
            <path d="M8 22V10h2.5v10h5v2H8z" fill="white" />
            <path d="M17 10h2.5v5.5h.1L23 10h2.8l-4 6.2L26 22h-2.9l-3.5-5.2h-.1V22H17V10z" fill="white" opacity="0.9" />
            <defs>
              <linearGradient id="nav-gradient" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#1a56db" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
            </defs>
          </svg>
          <span className={styles.logoText}>LexPilot AI</span>
        </Link>

        <div className={styles.links} role="menubar">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={styles.linkWrapper}
              onMouseEnter={() => link.megaMenu && setActiveMenu(link.label)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                to={link.href}
                className={`${styles.link} ${location.pathname.startsWith(link.href) ? styles.active : ''}`}
                role="menuitem"
                aria-haspopup={link.megaMenu ? 'true' : undefined}
                aria-expanded={activeMenu === link.label ? 'true' : undefined}
              >
                {link.label}
                {link.megaMenu && <i className="bi bi-chevron-down" aria-hidden="true" />}
              </Link>

              <AnimatePresence>
                {link.megaMenu && activeMenu === link.label && (
                  <motion.div
                    className={styles.megaMenu}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    role="menu"
                  >
                    <div className={styles.megaMenuInner}>
                      {link.megaMenu.map((section) => (
                        <div key={section.title} className={styles.megaSection}>
                          <span className={styles.megaSectionTitle}>{section.title}</span>
                          <div className={styles.megaItems}>
                            {section.items.map((item) => (
                              <Link key={item.href} to={item.href} className={styles.megaItem} role="menuitem">
                                <i className={`bi ${item.icon}`} aria-hidden="true" />
                                <div>
                                  <span className={styles.megaItemLabel}>{item.label}</span>
                                  <span className={styles.megaItemDesc}>{item.desc}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <Link to="/contact-sales" className={styles.loginLink}>
            Contact Sales
          </Link>
          <Link to="/schedule-demo" className={styles.ctaBtn}>
            Schedule Demo
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.open : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileMenuInner}>
              {navLinks.map((link) => (
                <div key={link.label} className={styles.mobileGroup}>
                  <Link to={link.href} className={styles.mobileLink}>
                    {link.label}
                  </Link>
                  {link.megaMenu && (
                    <div className={styles.mobileSubLinks}>
                      {link.megaMenu.map((section) =>
                        section.items.map((item) => (
                          <Link key={item.href} to={item.href} className={styles.mobileSubLink}>
                            <i className={`bi ${item.icon}`} aria-hidden="true" />
                            {item.label}
                          </Link>
                        )),
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className={styles.mobileActions}>
                <Link to="/contact-sales" className={styles.mobileSecondary}>
                  Contact Sales
                </Link>
                <Link to="/schedule-demo" className={styles.mobilePrimary}>
                  Schedule Demo
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
