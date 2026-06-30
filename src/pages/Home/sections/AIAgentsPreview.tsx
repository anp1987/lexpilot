import { Link } from 'react-router-dom';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const agents = [
  {
    name: 'Research Agent',
    description: 'Autonomously researches legal questions, finds relevant cases, and prepares research memos.',
    icon: 'bi-search',
    color: '#1a56db',
  },
  {
    name: 'Drafting Agent',
    description: 'Generates first drafts of legal documents based on your instructions and precedents.',
    icon: 'bi-pencil',
    color: '#7c3aed',
  },
  {
    name: 'Review Agent',
    description: 'Analyzes contracts and documents, identifies risks, and suggests improvements.',
    icon: 'bi-eye',
    color: '#059669',
  },
  {
    name: 'Compliance Agent',
    description: 'Monitors regulatory changes and alerts you to compliance obligations.',
    icon: 'bi-shield',
    color: '#d97706',
  },
];

export default function AIAgentsPreview() {
  return (
    <section className={`section ${styles.aiAgents}`} aria-label="AI Agents">
      <div className="container-custom">
        <div className={styles.aiAgentsLayout}>
          <AnimateOnScroll direction="left">
            <div className={styles.aiAgentsContent}>
              <span className="section-badge">
                <i className="bi bi-robot" aria-hidden="true" /> AI Agents
              </span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                Autonomous AI Agents That Work While You Sleep
              </h2>
              <p className={styles.aiAgentsDesc}>
                Our AI agents work autonomously in the background — researching cases, drafting documents, 
                monitoring compliance, and preparing briefs — so you can focus on high-value legal work.
              </p>
              <Link to="/ai-agents" className={styles.aiAgentsLink}>
                Explore AI Agents <i className="bi bi-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right">
            <div className={styles.aiAgentsCards}>
              {agents.map((agent) => (
                <div key={agent.name} className={styles.agentCard}>
                  <div className={styles.agentIcon} style={{ background: `${agent.color}15`, color: agent.color }}>
                    <i className={`bi ${agent.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className={styles.agentName}>{agent.name}</h4>
                    <p className={styles.agentDesc}>{agent.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
