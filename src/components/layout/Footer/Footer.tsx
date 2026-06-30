import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'AI Agents', href: '/ai-agents' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Security', href: '/security' },
      { label: 'Roadmap', href: '/roadmap' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Solo Advocates', href: '/solutions#solo' },
      { label: 'Small Firms', href: '/solutions#small' },
      { label: 'Mid-size Firms', href: '/solutions#midsize' },
      { label: 'Enterprise', href: '/solutions#enterprise' },
      { label: 'Corporate Legal', href: '/solutions#corporate' },
      { label: 'Government', href: '/solutions#government' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Customer Stories', href: '/customer-stories' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Release Notes', href: '/release-notes' },
      { label: 'Support', href: '/support' },
      { label: 'Status', href: '/status' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact Sales', href: '/contact-sales' },
      { label: 'Schedule Demo', href: '/schedule-demo' },
      { label: 'Free Trial', href: '/free-trial' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} aria-label="LexPilot AI Home">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="url(#footer-gradient)" />
                <path d="M8 22V10h2.5v10h5v2H8z" fill="white" />
                <path d="M17 10h2.5v5.5h.1L23 10h2.8l-4 6.2L26 22h-2.9l-3.5-5.2h-.1V22H17V10z" fill="white" opacity="0.9" />
                <defs>
                  <linearGradient id="footer-gradient" x1="0" y1="0" x2="32" y2="32">
                    <stop stopColor="#1a56db" />
                    <stop offset="1" stopColor="#7c3aed" />
                  </linearGradient>
                </defs>
              </svg>
              <span>LexPilot AI</span>
            </Link>
            <p className={styles.tagline}>
              The AI Assistant Built for Indian Law Firms. Empowering lawyers with AI-powered legal research, drafting, and case management.
            </p>
            <div className={styles.social}>
              <a href="https://twitter.com/lexpilotai" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter-x" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/company/lexpilotai" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin" aria-hidden="true" />
              </a>
              <a href="https://github.com/lexpilotai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="bi bi-github" aria-hidden="true" />
              </a>
              <a href="https://youtube.com/@lexpilotai" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="bi bi-youtube" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            {footerLinks.map((section) => (
              <div key={section.title} className={styles.linkSection}>
                <h3 className={styles.linkTitle}>{section.title}</h3>
                <ul className={styles.linkList}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <span>&copy; {new Date().getFullYear()} LexPilot AI. All rights reserved.</span>
            <div className={styles.legalLinks}>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
              <Link to="/accessibility">Accessibility</Link>
            </div>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>
              <i className="bi bi-shield-check" aria-hidden="true" />
              SOC 2
            </span>
            <span className={styles.badge}>
              <i className="bi bi-lock" aria-hidden="true" />
              ISO 27001
            </span>
            <span className={styles.badge}>
              <i className="bi bi-patch-check" aria-hidden="true" />
              GDPR
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
