import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const agents = [
  { name: 'Research Agent', icon: 'bi-search', desc: 'Autonomously researches legal questions, finds relevant cases across all Indian courts, and prepares comprehensive research memos with proper citations.', capabilities: ['Multi-jurisdiction search', 'Case law analysis', 'Statute interpretation', 'Research memo generation', 'Citation verification'] },
  { name: 'Drafting Agent', icon: 'bi-pencil', desc: 'Generates first drafts of legal documents based on your instructions, firm templates, and Indian legal best practices.', capabilities: ['Contract generation', 'Petition drafting', 'Opinion writing', 'Template customization', 'Multi-format output'] },
  { name: 'Review Agent', icon: 'bi-eye', desc: 'Analyzes contracts and documents against Indian regulations, identifies risks, and suggests improvements with alternative clauses.', capabilities: ['Risk identification', 'Compliance checking', 'Clause comparison', 'Redline generation', 'Risk scoring'] },
  { name: 'Compliance Agent', icon: 'bi-shield', desc: 'Monitors regulatory changes from SEBI, RBI, MCA, and other bodies. Alerts you to new compliance obligations relevant to your matters.', capabilities: ['Regulatory monitoring', 'Change alerts', 'Impact analysis', 'Deadline tracking', 'Compliance reporting'] },
  { name: 'Case Monitor Agent', icon: 'bi-bell', desc: 'Tracks your cases across courts, monitors cause lists, identifies date changes, and alerts you to developments.', capabilities: ['Court date tracking', 'Cause list monitoring', 'Order downloads', 'Status updates', 'Deadline alerts'] },
  { name: 'Knowledge Agent', icon: 'bi-lightbulb', desc: 'Automatically organizes your firm\'s institutional knowledge, tags documents, and makes information retrieval instant.', capabilities: ['Auto-categorization', 'Smart tagging', 'Knowledge graphs', 'Precedent linking', 'Insight generation'] },
];

export default function AIAgents() {
  return (
    <>
      <SEOHead title="AI Agents" description="Autonomous AI agents that research, draft, review, and monitor — working 24/7 for your legal practice." canonical="/ai-agents" />
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-robot" aria-hidden="true" /> AI Agents</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>AI Agents That Work While You Sleep</h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Autonomous AI agents that handle research, drafting, review, compliance monitoring, and more — 24/7, without supervision.
            </p>
            <Link to="/schedule-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 500 }}>
              See Agents in Action <i className="bi bi-arrow-right" />
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="section">
        <div className="container-custom">
          <div style={{ display: 'grid', gap: '2rem' }}>
            {agents.map((agent, index) => (
              <AnimateOnScroll key={agent.name} delay={index * 0.05}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem', border: '1px solid #e5e7eb', borderRadius: '1rem', background: '#fff' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className={`bi ${agent.icon}`} style={{ fontSize: '1.25rem', color: '#1a56db' }} aria-hidden="true" />
                      </div>
                      <h3 style={{ fontSize: '1.25rem' }}>{agent.name}</h3>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: '#6b7280', lineHeight: 1.7 }}>{agent.desc}</p>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#374151', marginBottom: '0.75rem' }}>Capabilities</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {agent.capabilities.map((cap) => (
                        <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                          <i className="bi bi-check-circle-fill" style={{ color: '#059669', fontSize: '0.75rem' }} aria-hidden="true" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
