import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const integrationCategories = [
  {
    name: 'Productivity & Office',
    icon: 'bi-grid',
    integrations: [
      { name: 'Microsoft 365', description: 'Word, Outlook, Teams, and SharePoint integration for seamless document workflows.', icon: 'bi-microsoft' },
      { name: 'Google Workspace', description: 'Gmail, Google Docs, Drive, and Calendar integration for cloud-first firms.', icon: 'bi-google' },
      { name: 'Notion', description: 'Connect your knowledge base and project management workflows.', icon: 'bi-journal-text' },
    ],
  },
  {
    name: 'Document Management',
    icon: 'bi-folder2-open',
    integrations: [
      { name: 'iManage', description: 'Deep integration with iManage Work for document storage, search, and version control.', icon: 'bi-archive' },
      { name: 'NetDocuments', description: 'Seamless document access and AI-powered search within NetDocuments.', icon: 'bi-file-earmark-text' },
      { name: 'Dropbox Business', description: 'Sync case files and collaborate securely through Dropbox.', icon: 'bi-dropbox' },
      { name: 'Box', description: 'Enterprise-grade document management with Box content cloud.', icon: 'bi-box' },
    ],
  },
  {
    name: 'Billing & Practice Management',
    icon: 'bi-receipt',
    integrations: [
      { name: 'Clio', description: 'Automatic time capture, billing integration, and matter syncing with Clio Manage.', icon: 'bi-clock-history' },
      { name: 'PracticePanther', description: 'Case management, time tracking, and invoicing synchronization.', icon: 'bi-briefcase' },
      { name: 'CasePacer', description: 'Litigation management integration for case tracking and deadlines.', icon: 'bi-calendar-check' },
      { name: 'Zoho Practice', description: 'Complete practice management sync including client data and billing.', icon: 'bi-receipt-cutoff' },
    ],
  },
  {
    name: 'Communication',
    icon: 'bi-chat-square-dots',
    integrations: [
      { name: 'Microsoft Teams', description: 'Research and draft directly within Teams. Get AI notifications and collaborate in channels.', icon: 'bi-microsoft-teams' },
      { name: 'Slack', description: 'AI research bot, case update notifications, and team collaboration tools.', icon: 'bi-slack' },
      { name: 'WhatsApp Business', description: 'Client communication logging and AI-assisted message drafting.', icon: 'bi-whatsapp' },
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    icon: 'bi-cloud',
    integrations: [
      { name: 'AWS', description: 'Deploy LexPilot AI within your own AWS infrastructure for maximum control.', icon: 'bi-cloud-fill' },
      { name: 'Azure', description: 'Microsoft Azure deployment for firms with existing Azure investments.', icon: 'bi-cloud-haze2' },
      { name: 'Single Sign-On (SSO)', description: 'SAML 2.0 and OpenID Connect for enterprise identity management.', icon: 'bi-shield-lock' },
      { name: 'REST API', description: 'Full API access for custom integrations and workflow automation.', icon: 'bi-code-slash' },
    ],
  },
];

export default function Integrations() {
  return (
    <>
      <SEOHead
        title="Integrations"
        description="LexPilot AI integrates with 15+ tools including Microsoft 365, Google Workspace, iManage, Clio, Teams, Slack, and more. Connect your legal workflow."
        canonical="/integrations"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '3rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-puzzle" aria-hidden="true" /> Integrations</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Connect Your Entire Legal Workflow
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              LexPilot AI integrates with the tools you already use. No disruption to your workflow — just smarter, faster legal work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Integration Categories */}
      {integrationCategories.map((category, catIdx) => (
        <section key={category.name} className={catIdx % 2 === 1 ? 'section section--gray' : 'section'}>
          <div className="container-custom">
            <AnimateOnScroll>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '0.5rem', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={category.icon} style={{ fontSize: '1.1rem', color: '#4f46e5' }} />
                </div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{category.name}</h2>
              </div>
            </AnimateOnScroll>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {category.integrations.map((integration, idx) => (
                <AnimateOnScroll key={integration.name} delay={idx * 0.08}>
                  <div style={{ background: 'white', borderRadius: '1rem', padding: '1.75rem', border: '1px solid #e5e7eb', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                      <div style={{ width: '36px', height: '36px', borderRadius: '0.5rem', background: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e5e7eb' }}>
                        <i className={integration.icon} style={{ fontSize: '1rem', color: '#374151' }} />
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{integration.name}</h3>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.7 }}>{integration.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Custom Integration CTA */}
      <section className="section">
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <AnimateOnScroll>
            <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', borderRadius: '1.5rem', padding: '3rem', color: 'white' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Need a Custom Integration?</h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.85, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                Our REST API and webhook system allows you to build custom integrations with any system. Enterprise plans include dedicated integration support.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/contact-sales" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'white', color: '#1e1b4b', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none' }}>
                  Talk to Engineering <i className="bi bi-arrow-right" />
                </a>
                <a href="/docs/api" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', background: 'rgba(255,255,255,0.15)', color: 'white', borderRadius: '0.75rem', fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }}>
                  View API Docs <i className="bi bi-code-slash" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
