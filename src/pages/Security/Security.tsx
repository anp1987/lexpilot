import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const certifications = [
  { name: 'SOC 2 Type II', description: 'Annual audit by Deloitte India confirming our security controls meet AICPA trust service criteria.', icon: 'bi-patch-check-fill' },
  { name: 'ISO 27001:2022', description: 'Certified information security management system covering all operations and data handling.', icon: 'bi-shield-fill-check' },
  { name: 'ISO 27701', description: 'Privacy information management system certification ensuring GDPR and DPDP Act compliance.', icon: 'bi-file-earmark-lock2' },
  { name: 'CERT-IN Empanelled', description: 'Audited by CERT-IN empanelled auditors for compliance with Indian cybersecurity standards.', icon: 'bi-award' },
];

const securityFeatures = [
  { title: 'Encryption at Rest', description: 'All data encrypted with AES-256 encryption. Encryption keys managed through AWS KMS with automatic key rotation every 90 days.', icon: 'bi-lock-fill' },
  { title: 'Encryption in Transit', description: 'TLS 1.3 for all data in transit. HSTS enabled. Certificate pinning for mobile applications. Perfect forward secrecy enforced.', icon: 'bi-shield-lock-fill' },
  { title: 'Access Control', description: 'Role-based access control (RBAC) with principle of least privilege. Multi-factor authentication mandatory for all accounts. SSO via SAML 2.0 and OIDC.', icon: 'bi-key-fill' },
  { title: 'Audit Logging', description: 'Comprehensive audit trails for all user actions. Logs retained for 7 years. Tamper-proof storage with cryptographic integrity verification.', icon: 'bi-journal-check' },
  { title: 'Vulnerability Management', description: 'Weekly automated vulnerability scans. Annual penetration testing by independent third parties. Bug bounty program with HackerOne.', icon: 'bi-bug-fill' },
  { title: 'Incident Response', description: '24/7 security operations center. Mean time to detection under 15 minutes. Incident response plan tested quarterly with tabletop exercises.', icon: 'bi-exclamation-triangle-fill' },
];

const complianceItems = [
  { name: 'Digital Personal Data Protection Act, 2023', description: 'Full compliance with India\'s DPDP Act including consent management, data principal rights, and data fiduciary obligations.' },
  { name: 'Information Technology Act, 2000', description: 'Compliance with IT Act provisions including reasonable security practices (Section 43A) and intermediary guidelines.' },
  { name: 'Bar Council of India Rules', description: 'Platform designed to support BCI rules on client confidentiality, ethical walls, and professional conduct.' },
  { name: 'RBI Data Localization', description: 'Financial data processed by law firms remains within India, complying with RBI circular on storage of payment data.' },
  { name: 'GDPR', description: 'For firms with EU clients, we provide GDPR-compliant data processing with appropriate safeguards and DPA.' },
];

export default function Security() {
  return (
    <>
      <SEOHead
        title="Security"
        description="LexPilot AI security: SOC 2 Type II, ISO 27001, AES-256 encryption, Indian data residency, DPDP Act compliance. Your client data is protected."
        canonical="/security"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-shield-fill-check" aria-hidden="true" /> Security</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Enterprise-Grade Security for Legal Data
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Your client data deserves the highest protection. We maintain rigorous security standards with Indian data residency and zero-training guarantees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Certifications & Audits</h2>
              <p className="section-subtitle">Independently verified by leading audit firms.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {certifications.map((cert, index) => (
              <AnimateOnScroll key={cert.name} delay={index * 0.1}>
                <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', textAlign: 'center', height: '100%' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <i className={cert.icon} style={{ fontSize: '1.5rem', color: '#059669' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{cert.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{cert.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Data Residency */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Indian Data Residency</h2>
                <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem' }}>
                  All your data is stored exclusively in Indian data centers. We operate primary infrastructure in Mumbai (AWS ap-south-1) with disaster recovery in Hyderabad.
                </p>
                <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
                  Your client data never leaves India. Our AI processing happens within Indian borders. We do not use any overseas sub-processors for data storage or processing.
                </p>
              </div>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <i className="bi bi-geo-alt-fill" style={{ color: '#4f46e5', fontSize: '1.25rem' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Primary: Mumbai</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>AWS ap-south-1</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <i className="bi bi-geo-alt-fill" style={{ color: '#4f46e5', fontSize: '1.25rem' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>DR: Hyderabad</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>AWS ap-south-2</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <i className="bi bi-arrow-repeat" style={{ color: '#059669', fontSize: '1.25rem' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>RPO: 1 hour</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Recovery Point Objective</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <i className="bi bi-clock" style={{ color: '#059669', fontSize: '1.25rem' }} />
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>RTO: 4 hours</div>
                      <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Recovery Time Objective</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Security Features */}
      <section className="section">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Security Controls</h2>
              <p className="section-subtitle">Multi-layered defence protecting your most sensitive data.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {securityFeatures.map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={index * 0.08}>
                <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid #e5e7eb', height: '100%' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className={feature.icon} style={{ fontSize: '1.1rem', color: '#d97706' }} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{feature.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{feature.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2 className="section-title">Regulatory Compliance</h2>
              <p className="section-subtitle">Meeting the highest standards of Indian and international data protection law.</p>
            </div>
          </AnimateOnScroll>
          {complianceItems.map((item, index) => (
            <AnimateOnScroll key={item.name} delay={index * 0.08}>
              <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <i className="bi bi-check-circle-fill" style={{ color: '#059669', fontSize: '1.25rem', marginTop: '0.1rem', flexShrink: 0 }} />
                <div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{item.name}</h3>
                  <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Zero Training Guarantee */}
      <section className="section">
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <AnimateOnScroll>
            <div style={{ background: '#f0fdf4', borderRadius: '1.5rem', padding: '3rem', border: '2px solid #bbf7d0' }}>
              <i className="bi bi-shield-fill-check" style={{ fontSize: '3rem', color: '#059669', marginBottom: '1rem', display: 'block' }} />
              <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>Zero-Training Guarantee</h2>
              <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.8 }}>
                Your firm's documents, queries, and work product are never used to train our AI models. Your data remains exclusively yours. This is contractually guaranteed in our Data Processing Agreement.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
