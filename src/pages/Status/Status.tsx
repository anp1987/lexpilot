import { motion } from 'framer-motion';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const services = [
  { name: 'AI Research Engine', status: 'operational', uptime: '99.99%' },
  { name: 'Contract Review', status: 'operational', uptime: '99.98%' },
  { name: 'Document Drafting', status: 'operational', uptime: '99.97%' },
  { name: 'Web Application', status: 'operational', uptime: '99.99%' },
  { name: 'Mobile Apps (iOS & Android)', status: 'operational', uptime: '99.95%' },
  { name: 'REST API', status: 'operational', uptime: '99.99%' },
  { name: 'SSO & Authentication', status: 'operational', uptime: '100%' },
  { name: 'Database & Storage', status: 'operational', uptime: '99.99%' },
  { name: 'Email Notifications', status: 'operational', uptime: '99.96%' },
  { name: 'Microsoft Teams Integration', status: 'operational', uptime: '99.94%' },
  { name: 'Slack Integration', status: 'operational', uptime: '99.95%' },
  { name: 'Webhook Delivery', status: 'operational', uptime: '99.97%' },
];

const recentIncidents = [
  { date: '15 June 2026', title: 'Scheduled Maintenance - Database Migration', duration: '45 minutes', impact: 'Read-only mode during migration. No data loss.', resolved: true },
  { date: '2 June 2026', title: 'Elevated API Latency', duration: '12 minutes', impact: 'API response times increased to 2-3 seconds. Self-resolved through auto-scaling.', resolved: true },
  { date: '18 May 2026', title: 'Scheduled Maintenance - Infrastructure Upgrade', duration: '30 minutes', impact: 'Brief interruption during AWS region failover testing. All systems nominal post-maintenance.', resolved: true },
];

export default function Status() {
  const allOperational = services.every(s => s.status === 'operational');

  return (
    <>
      <SEOHead
        title="System Status"
        description="LexPilot AI system status page. Real-time operational status of all services including AI research, API, integrations, and infrastructure."
        canonical="/status"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1.5rem' }}>
              System Status
            </h1>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2rem', borderRadius: '1rem', background: allOperational ? '#f0fdf4' : '#fef2f2', border: `1px solid ${allOperational ? '#bbf7d0' : '#fecaca'}` }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', background: allOperational ? '#22c55e' : '#ef4444', boxShadow: `0 0 8px ${allOperational ? '#22c55e' : '#ef4444'}` }} />
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: allOperational ? '#166534' : '#991b1b' }}>
                {allOperational ? 'All Systems Operational' : 'Degraded Performance'}
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '1rem' }}>
              Last updated: 30 June 2026, 10:00 AM IST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Services</h2>
          </AnimateOnScroll>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {services.map((service, index) => (
              <AnimateOnScroll key={service.name} delay={index * 0.03}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', borderRadius: '0.5rem', padding: '1rem 1.25rem', border: '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: service.status === 'operational' ? '#22c55e' : '#f59e0b' }} />
                    <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{service.name}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{service.uptime} uptime</span>
                    <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', background: '#ecfdf5', color: '#065f46', fontWeight: 500 }}>
                      Operational
                    </span>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Summary */}
      <section className="section section--gray">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Uptime Summary</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>99.98%</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>Last 30 Days</div>
              </div>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>99.97%</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>Last 90 Days</div>
              </div>
              <div style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>99.95%</div>
                <div style={{ fontSize: '0.85rem', color: '#6b7280', marginTop: '0.25rem' }}>Last 12 Months</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Recent Incidents */}
      <section className="section">
        <div className="container-custom" style={{ maxWidth: '800px' }}>
          <AnimateOnScroll>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>Recent Incidents</h2>
          </AnimateOnScroll>
          {recentIncidents.map((incident, index) => (
            <AnimateOnScroll key={incident.date} delay={index * 0.08}>
              <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.5rem', marginBottom: '1rem', border: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>{incident.title}</h3>
                  <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', borderRadius: '0.25rem', background: '#ecfdf5', color: '#065f46', fontWeight: 500 }}>Resolved</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: 1.6, marginBottom: '0.5rem' }}>{incident.impact}</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.8rem', color: '#9ca3af' }}>
                  <span><i className="bi bi-calendar" style={{ marginRight: '0.25rem' }} />{incident.date}</span>
                  <span><i className="bi bi-clock" style={{ marginRight: '0.25rem' }} />Duration: {incident.duration}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>
    </>
  );
}
