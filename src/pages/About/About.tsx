import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import { Link } from 'react-router-dom';

const teamMembers = [
  { name: 'Arjun Mehta', role: 'Co-Founder & CEO', bio: 'Former partner at AZB & Partners with 15 years in corporate law. IIT Delhi and Harvard Law School alumnus.', icon: 'bi-person-circle' },
  { name: 'Priya Sharma', role: 'Co-Founder & CTO', bio: 'Ex-Google AI researcher with expertise in NLP. Built language models for Indic languages at IIT Bombay.', icon: 'bi-person-circle' },
  { name: 'Vikram Reddy', role: 'VP of Engineering', bio: 'Previously led engineering at Zoho. 12 years building enterprise SaaS platforms at scale.', icon: 'bi-person-circle' },
  { name: 'Sneha Iyer', role: 'Head of Legal AI', bio: 'PhD in Computational Linguistics from JNU. Specializes in legal text analysis and Indian court judgment parsing.', icon: 'bi-person-circle' },
  { name: 'Rajesh Krishnamurthy', role: 'VP of Sales', bio: 'Former country head at Thomson Reuters India. Deep relationships across India\u2019s top 100 law firms.', icon: 'bi-person-circle' },
  { name: 'Ananya Desai', role: 'Head of Product', bio: 'Ex-Product Lead at Kira Systems. Designed AI-powered legal workflows used by 500+ firms globally.', icon: 'bi-person-circle' },
];

const values = [
  { icon: 'bi-shield-check', title: 'Trust & Accuracy', description: 'Every citation verified. Every output reliable. We never compromise on accuracy because legal professionals stake their reputation on our platform.' },
  { icon: 'bi-people', title: 'Client-Centric Design', description: 'Built by lawyers, for lawyers. Every feature is designed around real workflows in Indian law firms, from solo practitioners to large enterprises.' },
  { icon: 'bi-lock', title: 'Privacy First', description: 'Your client data is sacred. We maintain the highest standards of data protection with Indian data residency and zero-training guarantees.' },
  { icon: 'bi-lightning', title: 'Continuous Innovation', description: 'We ship improvements weekly. Our AI models are continuously refined with feedback from practising advocates across India.' },
  { icon: 'bi-globe-asia-australia', title: 'Made for India', description: 'Purpose-built for the Indian legal system — understanding court hierarchies, legal formats, multilingual judgments, and local compliance requirements.' },
  { icon: 'bi-heart', title: 'Access to Justice', description: 'We believe technology should democratize legal access. Our platform helps smaller firms deliver the same quality as large firms at a fraction of the cost.' },
];

const timeline = [
  { year: '2022', title: 'Founded in Bengaluru', description: 'Arjun and Priya founded LexPilot AI after experiencing firsthand the inefficiencies in Indian legal research.' },
  { year: '2023', title: 'Seed Funding & First Customers', description: 'Raised ₹15 crore seed round led by Accel India. Onboarded 50 law firms in the first six months.' },
  { year: '2024', title: 'Series A & Platform Launch', description: 'Raised ₹75 crore Series A led by Sequoia India. Launched full platform with AI research, drafting, and contract review.' },
  { year: '2025', title: 'Enterprise Expansion', description: 'Crossed 500+ law firms. Launched enterprise features including ethical walls, custom AI training, and on-premise deployment.' },
  { year: '2026', title: 'AI Agents & Market Leadership', description: 'Introduced autonomous AI agents for legal workflows. Serving 1,200+ firms including 40 of India\'s top 50 law firms.' },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about LexPilot AI — our mission to transform Indian legal practice through AI, our team of legal and technology experts, and our journey."
        canonical="/about"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-building" aria-hidden="true" /> About Us</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Transforming Indian Legal Practice with AI
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              We are building the most intelligent legal technology platform purpose-built for Indian law firms — combining deep AI expertise with genuine understanding of legal practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '900px' }}>
          <AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Our Mission</h2>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1rem' }}>
                  India has over 1.7 million advocates, yet the legal industry remains one of the least digitized sectors. Lawyers spend 60% of their time on repetitive tasks that AI can handle better and faster.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#4b5563', lineHeight: 1.8 }}>
                  Our mission is to give every Indian lawyer — from a solo practitioner in a district court to a partner at a top-tier firm — access to AI tools that amplify their expertise, save time, and improve outcomes for their clients.
                </p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)', borderRadius: '1.5rem', padding: '3rem', color: 'white', textAlign: 'center' }}>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>1,200+</div>
                <div style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>Law Firms Trust Us</div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>15,000+</div>
                <div style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>Legal Professionals</div>
                <div style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>5M+</div>
                <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>Research Queries Processed</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Team */}
      <section className="section section--gray">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge"><i className="bi bi-people" aria-hidden="true" /> Our Team</span>
              <h2 className="section-title">Built by Legal and AI Experts</h2>
              <p className="section-subtitle">Our leadership team combines decades of legal practice with cutting-edge AI research.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
            {teamMembers.map((member, index) => (
              <AnimateOnScroll key={member.name} delay={index * 0.1}>
                <div style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className={member.icon} style={{ fontSize: '1.5rem', color: 'white' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{member.name}</h3>
                      <p style={{ fontSize: '0.875rem', color: '#6366f1', fontWeight: 600 }}>{member.role}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7 }}>{member.bio}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge"><i className="bi bi-heart" aria-hidden="true" /> Our Values</span>
              <h2 className="section-title">What Drives Us</h2>
              <p className="section-subtitle">The principles that guide every decision we make.</p>
            </div>
          </AnimateOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {values.map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 0.08}>
                <div style={{ padding: '2rem', borderRadius: '1rem', border: '1px solid #e5e7eb', height: '100%' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '0.75rem', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <i className={value.icon} style={{ fontSize: '1.25rem', color: '#4f46e5' }} />
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{value.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7 }}>{value.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="section-badge"><i className="bi bi-clock-history" aria-hidden="true" /> Our Journey</span>
              <h2 className="section-title">From Idea to Market Leader</h2>
            </div>
          </AnimateOnScroll>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid #e5e7eb' }}>
            {timeline.map((item, index) => (
              <AnimateOnScroll key={item.year} delay={index * 0.1}>
                <div style={{ marginBottom: '2.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-2.65rem', top: '0.25rem', width: '16px', height: '16px', borderRadius: '50%', background: '#4f46e5', border: '3px solid white', boxShadow: '0 0 0 3px #e5e7eb' }} />
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase' }}>{item.year}</span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: '0.25rem 0 0.5rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7 }}>{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Join Us in Transforming Indian Legal Practice</h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              Whether you are a law firm looking to modernize or a talented professional seeking to make an impact, we would love to hear from you.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/free-trial" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: '#4f46e5', color: 'white', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                Start Free Trial <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'white', color: '#1f2937', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid #e5e7eb' }}>
                View Careers <i className="bi bi-briefcase" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
