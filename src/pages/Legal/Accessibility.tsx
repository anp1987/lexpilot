import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';

export default function Accessibility() {
  return (
    <>
      <SEOHead
        title="Accessibility Statement"
        description="LexPilot AI accessibility commitment. Our platform is designed to be accessible to all users, conforming to WCAG 2.1 Level AA standards."
        canonical="/legal/accessibility"
      />

      <article style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
        <div className="container-custom" style={{ maxWidth: '780px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>Accessibility Statement</h1>
            <p style={{ color: '#6b7280', marginBottom: '2.5rem' }}>Last updated: 1 June 2026</p>

            <div style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#374151' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Our Commitment</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                LexPilot AI is committed to ensuring digital accessibility for all users, including those with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards to ensure our platform is usable by the widest possible audience.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Standards Compliance</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Accessibility Features</h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Keyboard Navigation:</strong> All interactive elements are accessible via keyboard. Focus indicators are clearly visible.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Screen Reader Support:</strong> Semantic HTML, ARIA labels, and proper heading hierarchy support assistive technologies.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Colour Contrast:</strong> Text and interactive elements meet WCAG AA contrast ratio requirements (4.5:1 for normal text, 3:1 for large text).</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Resizable Text:</strong> All text can be resized up to 200% without loss of functionality.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Alternative Text:</strong> All meaningful images and icons have descriptive alternative text.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Form Labels:</strong> All form inputs have associated labels and clear error messages.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Motion Sensitivity:</strong> Users can reduce animations through their operating system preferences (prefers-reduced-motion).</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Focus Management:</strong> Modal dialogs and dynamic content properly manage focus for assistive technology users.</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Supported Assistive Technologies</h2>
              <p style={{ marginBottom: '1rem' }}>Our platform is tested with:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>NVDA (Windows)</li>
                <li style={{ marginBottom: '0.5rem' }}>JAWS (Windows)</li>
                <li style={{ marginBottom: '0.5rem' }}>VoiceOver (macOS and iOS)</li>
                <li style={{ marginBottom: '0.5rem' }}>TalkBack (Android)</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Known Limitations</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                While we strive for full compliance, some older PDF documents in our legal database may not be fully accessible. We are actively working on improving OCR-processed documents with proper tagging and reading order. Complex data visualisations (citation graphs) provide alternative tabular representations.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Indian Accessibility Compliance</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We comply with the Rights of Persons with Disabilities Act, 2016, and the Guidelines for Indian Government Websites (GIGW) where applicable. Our platform supports the accessibility requirements of the Information and Communication Technology (ICT) accessibility standards.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>Feedback & Contact</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We welcome feedback on the accessibility of LexPilot AI. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                Email: accessibility@lexpilot.ai<br />
                Phone: +91 80 4567 8900<br />
                We aim to respond to accessibility feedback within 2 business days.
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
