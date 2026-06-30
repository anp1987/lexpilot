import { useState } from 'react';
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
      { label: 'Release Notes', href: '/release-notes' },
      { label: 'Status', href: '/status' },
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
      { label: 'Support', href: '/support' },
      { label: 'Partners', href: '/partners' },
      { label: 'Trust Center', href: '/security' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Sales', href: '/contact-sales' },
      { label: 'Schedule Demo', href: '/schedule-demo' },
      { label: 'Free Trial', href: '/free-trial' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        {/* Newsletter */}
        <div className={styles.newsletter}>
          <div className={styles.newsletterContent}>
            <h3 className={styles.newsletterTitle}>Stay updated on Indian Legal AI</h3>
            <p className={styles.newsletterDesc}>Get weekly insights on legal tech, AI in law, and product updates. No spam.</p>
          </div>
          <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
            {subscribed ? (
              <div className={styles.newsletterSuccess}>
                <i className="bi bi-check-circle-fill" aria-hidden="true" /> Thanks! You're subscribed.
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={styles.newsletterInput}
                  aria-label="Email for newsletter"
                />
                <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
              </>
            )}
          </form>
        </div>

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
              The AI Assistant Built for Indian Law Firms. Reduce legal research by 80% and generate court-ready drafts in minutes.
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
                    <li key={link.href + link.label}>
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
            <span>&copy; {new Date().getFullYear()} LexPilot AI Technologies Pvt. Ltd. All rights reserved.</span>
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
              DPDP
            </span>
            <span className={styles.badge}>
              <i className="bi bi-geo-alt" aria-hidden="true" />
              India Data Residency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
