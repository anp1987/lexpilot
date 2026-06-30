import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const agents = [
  {
    name: 'Research Agent',
    icon: 'bi-search',
    purpose: 'Autonomously researches legal questions across all Indian courts, tribunals, and statutes.',
    desc: 'Finds relevant cases, analyses them in context, and prepares comprehensive research memos with proper citations — in minutes, not hours.',
    capabilities: ['Multi-jurisdiction search', 'Case law analysis', 'Statute interpretation', 'Research memo generation', 'Citation verification'],
    workflow: ['You ask a legal question or assign a research brief', 'Agent searches 10M+ documents across 80+ years of case law', 'Identifies relevant precedents, statutes, and commentaries', 'Generates a structured research memo with citations'],
    input: 'Legal question, research brief, or case context',
    output: 'Structured research memo with citations, confidence scores, and key findings',
    timeSaved: '8-12 hours per research task',
    useCases: ['Finding precedents for appeals', 'Analysing conflicting judgments', 'Preparing case law summaries', 'Statutory interpretation research'],
    color: '#1a56db',
  },
  {
    name: 'Drafting Agent',
    icon: 'bi-pencil',
    purpose: 'Generates first drafts of legal documents tailored to Indian legal formats and your firm style.',
    desc: 'Creates contracts, petitions, applications, and opinions based on your instructions, firm templates, and best practices.',
    capabilities: ['Contract generation', 'Petition drafting', 'Opinion writing', 'Template customization', 'Multi-format output'],
    workflow: ['Provide instructions, key terms, or a brief', 'Agent selects appropriate templates and precedents', 'Generates a complete first draft with Indian legal formatting', 'Applies your firm-specific style and clause library'],
    input: 'Instructions, key terms, parties, or a brief description',
    output: 'Court-ready draft in Indian legal format (DOCX/PDF)',
    timeSaved: '4-6 hours per document',
    useCases: ['Drafting NDAs and service agreements', 'Preparing writ petitions', 'Creating legal opinions', 'Generating board resolutions'],
    color: '#7c3aed',
  },
  {
    name: 'Review Agent',
    icon: 'bi-eye',
    purpose: 'Analyses contracts against Indian regulations, identifies risks, and suggests improvements.',
    desc: 'Reviews documents against Companies Act, SEBI regulations, and your preferred standards — finding issues humans miss.',
    capabilities: ['Risk identification', 'Compliance checking', 'Clause comparison', 'Redline generation', 'Risk scoring'],
    workflow: ['Upload a contract or legal document', 'Agent compares against regulatory standards and your playbook', 'Identifies risks, non-standard terms, and missing clauses', 'Generates a redline with suggested alternatives'],
    input: 'Contract document (PDF, DOCX, or scanned)',
    output: 'Risk report, redline version, and improvement suggestions',
    timeSaved: '3-5 hours per contract',
    useCases: ['Vendor contract review', 'M&A due diligence', 'Regulatory compliance checking', 'Lease agreement analysis'],
    color: '#059669',
  },
  {
    name: 'Compliance Agent',
    icon: 'bi-shield',
    purpose: 'Monitors regulatory changes from SEBI, RBI, MCA, RERA and alerts you to new obligations.',
    desc: 'Tracks 50+ regulatory bodies, analyses impact on your matters, and ensures you never miss a compliance deadline.',
    capabilities: ['Regulatory monitoring', 'Change alerts', 'Impact analysis', 'Deadline tracking', 'Compliance reporting'],
    workflow: ['Configure regulatory bodies and practice areas to monitor', 'Agent continuously scans for new circulars, notifications, and amendments', 'Analyses relevance and impact on your active matters', 'Sends alerts with action items and deadlines'],
    input: 'Practice areas, industry sectors, and regulatory preferences',
    output: 'Real-time alerts, impact analysis, and deadline calendar',
    timeSaved: '5-8 hours per week',
    useCases: ['SEBI disclosure compliance', 'RBI monetary policy tracking', 'MCA filing deadlines', 'RERA compliance for real estate'],
    color: '#d97706',
  },
  {
    name: 'Case Monitor Agent',
    icon: 'bi-bell',
    purpose: 'Tracks your cases across Indian courts, monitors cause lists, and alerts you to developments.',
    desc: 'Never miss a hearing date or court order again. Monitors Supreme Court, High Courts, and District Courts automatically.',
    capabilities: ['Court date tracking', 'Cause list monitoring', 'Order downloads', 'Status updates', 'Deadline alerts'],
    workflow: ['Register your active cases with case numbers', 'Agent monitors daily cause lists across all courts', 'Downloads new orders and identifies date changes', 'Sends immediate alerts for any developments'],
    input: 'Case numbers, court details, and parties',
    output: 'Real-time hearing alerts, order downloads, and status dashboard',
    timeSaved: '2-3 hours per day',
    useCases: ['Tracking Supreme Court matters', 'High Court hearing monitoring', 'NCLT case tracking', 'Tribunal order monitoring'],
    color: '#dc2626',
  },
  {
    name: 'Knowledge Agent',
    icon: 'bi-lightbulb',
    purpose: 'Organizes your firm\'s institutional knowledge and makes information retrieval instant.',
    desc: 'Automatically tags, categorizes, and connects your firm\'s documents, memos, and precedents — building a searchable knowledge base.',
    capabilities: ['Auto-categorization', 'Smart tagging', 'Knowledge graphs', 'Precedent linking', 'Insight generation'],
    workflow: ['Upload or connect your document repositories', 'Agent analyses, tags, and categorizes all documents', 'Builds knowledge connections between related matters', 'Makes institutional knowledge instantly searchable'],
    input: 'Your firm\'s existing documents, memos, and templates',
    output: 'Searchable knowledge base with AI-powered retrieval',
    timeSaved: '3-5 hours per week',
    useCases: ['Finding past opinions on similar issues', 'Locating firm precedent templates', 'Onboarding new associates', 'Cross-matter knowledge sharing'],
    color: '#0891b2',
  },
];

export default function AIAgents() {
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);

  return (
    <>
      <SEOHead title="AI Agents" description="Autonomous AI agents that research, draft, review, and monitor — working 24/7 for your legal practice." canonical="/ai-agents" />

      <section className="section" style={{ paddingTop: 'calc(72px + 4rem)', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', fontWeight: 600, color: '#1a56db', background: '#eff6ff', border: '1px solid #dbeafe', padding: '0.25rem 0.75rem', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
              <i className="bi bi-robot" aria-hidden="true" /> Autonomous AI Agents
            </span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem', color: '#111827' }}>
              6 AI Agents That Work <span style={{ background: 'linear-gradient(135deg, #1a56db, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>While You Sleep</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '680px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Assign tasks before you leave the office. Wake up to completed research memos, 
              drafted contracts, and compliance reports — reviewed, cited, and ready for your approval.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/schedule-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: 'linear-gradient(135deg, #1a56db 0%, #7c3aed 100%)', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem' }}>
                See Agents in Action <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/free-trial" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: '#fff', color: '#374151', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, fontSize: '0.9375rem', border: '1px solid #e5e7eb' }}>
                Start Free Trial
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a56db' }}>24/7</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Always Working</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a56db' }}>30+</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Hours Saved/Week</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a56db' }}>94%+</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Accuracy Rate</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1a56db' }}>6</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>Specialized Agents</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {agents.map((agent, index) => (
              <AnimateOnScroll key={agent.name} delay={index * 0.05}>
                <div
                  style={{ border: '1px solid #e5e7eb', borderRadius: '1rem', background: '#fff', overflow: 'hidden', transition: 'box-shadow 0.2s', boxShadow: expandedAgent === agent.name ? '0 4px 24px rgba(0,0,0,0.08)' : 'none' }}
                >
                  <div
                    style={{ padding: '1.5rem 2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}
                    onClick={() => setExpandedAgent(expandedAgent === agent.name ? null : agent.name)}
                    role="button"
                    aria-expanded={expandedAgent === agent.name}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setExpandedAgent(expandedAgent === agent.name ? null : agent.name); }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${agent.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <i className={`bi ${agent.icon}`} style={{ fontSize: '1.25rem', color: agent.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#111827', margin: 0 }}>{agent.name}</h3>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: '0.25rem 0 0', lineHeight: 1.5 }}>{agent.purpose}</p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: agent.color, background: `${agent.color}10`, padding: '0.25rem 0.75rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                        Saves {agent.timeSaved}
                      </span>
                      <i className={`bi ${expandedAgent === agent.name ? 'bi-chevron-up' : 'bi-chevron-down'}`} style={{ color: '#9ca3af', fontSize: '1.25rem' }} aria-hidden="true" />
                    </div>
                  </div>

                  {expandedAgent === agent.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ borderTop: '1px solid #f3f4f6' }}
                    >
                      <div style={{ padding: '1.5rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {/* Workflow */}
                        <div>
                          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#374151', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="bi bi-diagram-3" style={{ color: agent.color }} aria-hidden="true" /> How It Works
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            {agent.workflow.map((step, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.8125rem', color: '#4b5563', lineHeight: 1.6 }}>
                                <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: `${agent.color}15`, color: agent.color, fontSize: '0.6875rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>{i + 1}</span>
                                {step}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Input / Output */}
                        <div>
                          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#374151', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="bi bi-arrow-left-right" style={{ color: agent.color }} aria-hidden="true" /> Input & Output
                          </h4>
                          <div style={{ background: '#f9fafb', borderRadius: '0.75rem', padding: '1rem', marginBottom: '1rem' }}>
                            <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Input</div>
                            <div style={{ fontSize: '0.8125rem', color: '#374151' }}>{agent.input}</div>
                          </div>
                          <div style={{ background: `${agent.color}08`, borderRadius: '0.75rem', padding: '1rem', border: `1px solid ${agent.color}20` }}>
                            <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Output</div>
                            <div style={{ fontSize: '0.8125rem', color: '#374151' }}>{agent.output}</div>
                          </div>
                        </div>

                        {/* Capabilities & Use Cases */}
                        <div>
                          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#374151', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="bi bi-check2-square" style={{ color: agent.color }} aria-hidden="true" /> Capabilities
                          </h4>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.25rem' }}>
                            {agent.capabilities.map((cap) => (
                              <span key={cap} style={{ fontSize: '0.75rem', fontWeight: 500, color: '#4b5563', background: '#f3f4f6', padding: '0.25rem 0.5rem', borderRadius: '0.375rem' }}>{cap}</span>
                            ))}
                          </div>
                          <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#374151', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <i className="bi bi-briefcase" style={{ color: agent.color }} aria-hidden="true" /> Real Use Cases
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                            {agent.useCases.map((uc) => (
                              <div key={uc} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: '#4b5563' }}>
                                <i className="bi bi-check-circle-fill" style={{ color: '#059669', fontSize: '0.6875rem' }} aria-hidden="true" />{uc}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)', padding: '5rem 0' }}>
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Ready to Put AI Agents to Work?</h2>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Start your 14-day free trial. No credit card required. All agents included in Business and Enterprise plans.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/schedule-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: '#fff', color: '#111827', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600 }}>
                Book a Demo <i className="bi bi-arrow-right" />
              </Link>
              <Link to="/free-trial" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 1.75rem', background: 'transparent', color: '#fff', borderRadius: '0.75rem', textDecoration: 'none', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>
                Start Free Trial
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
