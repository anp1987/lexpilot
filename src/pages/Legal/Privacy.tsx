import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="LexPilot AI Privacy Policy. Learn how we collect, use, protect, and store your personal data in compliance with the DPDP Act, 2023."
        canonical="/legal/privacy"
      />

      <article style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
        <div className="container-custom" style={{ maxWidth: '780px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '0.5rem' }}>Privacy Policy</h1>
            <p style={{ color: '#6b7280', marginBottom: '2.5rem' }}>Last updated: 1 June 2026</p>

            <div style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#374151' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>1. Introduction</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                LexPilot AI Technologies Private Limited ("LexPilot AI", "we", "us", or "our") is committed to protecting the privacy of our users. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform, mobile applications, and services (collectively, the "Services").
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                We are a Data Fiduciary under the Digital Personal Data Protection Act, 2023 ("DPDP Act") and comply with all applicable Indian data protection laws.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>2. Information We Collect</h2>
              <p style={{ marginBottom: '1rem' }}>We collect the following categories of personal data:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}><strong>Account Information:</strong> Name, email address, phone number, firm name, designation, and billing address.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Usage Data:</strong> Search queries, features used, session duration, and interaction patterns to improve our services.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Documents:</strong> Legal documents you upload for review, drafting, or research purposes. These are processed solely to provide the service.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for security and performance optimization.</li>
                <li style={{ marginBottom: '0.75rem' }}><strong>Payment Information:</strong> Processed by our PCI-DSS compliant payment partner. We do not store full card numbers.</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>3. How We Use Your Data</h2>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>To provide, maintain, and improve our AI-powered legal services.</li>
                <li style={{ marginBottom: '0.75rem' }}>To personalize your experience and provide relevant research results.</li>
                <li style={{ marginBottom: '0.75rem' }}>To communicate about your account, updates, and support requests.</li>
                <li style={{ marginBottom: '0.75rem' }}>To ensure platform security and detect unauthorized access.</li>
                <li style={{ marginBottom: '0.75rem' }}>To comply with legal obligations and respond to lawful requests.</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>4. Data Storage & Residency</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                All personal data is stored exclusively in India (AWS Mumbai region with disaster recovery in Hyderabad). Your data never leaves Indian territory. We do not use international sub-processors for data storage or processing.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>5. AI Training Commitment</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We do not use your documents, queries, or work product to train our general AI models. Your data is processed solely to provide the service to you and is not shared with or accessible to other customers.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>6. Data Sharing</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We do not sell your personal data. We share data only with: (a) service providers who assist in operating our platform under strict contractual obligations; (b) law enforcement when required by valid legal process; (c) with your explicit consent.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>7. Your Rights Under DPDP Act</h2>
              <p style={{ marginBottom: '1rem' }}>As a Data Principal, you have the right to:</p>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                <li style={{ marginBottom: '0.75rem' }}>Access a summary of your personal data and processing activities.</li>
                <li style={{ marginBottom: '0.75rem' }}>Correct inaccurate or incomplete personal data.</li>
                <li style={{ marginBottom: '0.75rem' }}>Erase your personal data (subject to legal retention requirements).</li>
                <li style={{ marginBottom: '0.75rem' }}>Withdraw consent for processing at any time.</li>
                <li style={{ marginBottom: '0.75rem' }}>Nominate a representative to exercise your rights.</li>
                <li style={{ marginBottom: '0.75rem' }}>Lodge a grievance with our Data Protection Officer or the Data Protection Board of India.</li>
              </ul>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>8. Data Retention</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We retain your personal data for as long as your account is active or as needed to provide services. Upon account deletion, all personal data is permanently erased within 30 days, except where retention is required by law (e.g., financial records under the Companies Act, 2013).
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>9. Security Measures</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                We implement AES-256 encryption at rest, TLS 1.3 in transit, multi-factor authentication, role-based access control, regular penetration testing, and 24/7 security monitoring. We are SOC 2 Type II and ISO 27001:2022 certified.
              </p>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>10. Contact Us</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                <strong>Data Protection Officer:</strong><br />
                LexPilot AI Technologies Pvt. Ltd.<br />
                12th Floor, Prestige Shantiniketan<br />
                Whitefield, Bengaluru 560048<br />
                Email: dpo@lexpilot.ai<br />
                Phone: +91 80 4567 8900
              </p>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
