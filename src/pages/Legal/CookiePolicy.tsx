import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';

export default function CookiePolicy() {
  return (
    <>
      <SEOHead
        title="Cookie Policy"
        description="LexPilot AI Cookie Policy. Understand how we use cookies, tracking technologies, and your choices regarding cookie preferences."
        canonical="/legal/cookies"
      />

      <article style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
        <div className="container-custom" style={{ maxWidth: '780px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>Cookie Policy</h1>
            <p style={{ color: '#6b7280', marginBottom: '2.5rem' }}>Last updated: 1 June 2026</p>

            <div style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#374151' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>1. What Are Cookies</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, maintaining your session, and understanding how you use our platform.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>2. Types of Cookies We Use</h2>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Essential Cookies</h3>
              <p style={{ marginBottom: '1rem' }}>
                Required for the platform to function. These include authentication tokens, session identifiers, and security cookies. You cannot opt out of essential cookies.
              </p>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                    <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Cookie</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Purpose</th>
                    <th style={{ textAlign: 'left', padding: '0.75rem', fontWeight: 600 }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.75rem' }}>lp_session</td>
                    <td style={{ padding: '0.75rem' }}>Maintains your login session</td>
                    <td style={{ padding: '0.75rem' }}>Session</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.75rem' }}>lp_csrf</td>
                    <td style={{ padding: '0.75rem' }}>Security token to prevent cross-site attacks</td>
                    <td style={{ padding: '0.75rem' }}>Session</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #f3f4f6' }}>
                    <td style={{ padding: '0.75rem' }}>lp_consent</td>
                    <td style={{ padding: '0.75rem' }}>Stores your cookie preferences</td>
                    <td style={{ padding: '0.75rem' }}>1 year</td>
                  </tr>
                </tbody>
              </table>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Functional Cookies</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Remember your preferences such as language, theme, and display settings. These enhance your experience but are not strictly necessary.
              </p>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginTop: '1.5rem', marginBottom: '0.75rem' }}>Analytics Cookies</h3>
              <p style={{ marginBottom: '1.5rem' }}>
                Help us understand how users interact with our platform. We use privacy-focused analytics (Plausible Analytics) that do not track individual users across websites. No personal data is collected through analytics cookies.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>3. Third-Party Cookies</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We do not use third-party advertising cookies. The only third-party cookies on our platform are from our payment processor (Razorpay) during checkout and our customer support widget (Freshdesk) when you initiate a support conversation.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>4. Managing Cookies</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                You can manage cookie preferences through our cookie consent banner or your browser settings. Note that disabling essential cookies may prevent you from using the platform. Most browsers allow you to block or delete cookies through their settings menu.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>5. Updates to This Policy</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of the platform after changes constitutes acceptance.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>6. Contact</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                For questions about our cookie practices, contact our Data Protection Officer at dpo@lexpilot.ai.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
