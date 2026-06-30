import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';

const sampleArticle = {
  slug: 'ai-transforming-indian-legal-research',
  title: 'How AI is Transforming Legal Research for Indian Advocates',
  author: 'Arjun Mehta',
  authorRole: 'Co-Founder & CEO, LexPilot AI',
  date: '25 June 2026',
  readTime: '8 min read',
  category: 'AI & Legal Tech',
  content: [
    { type: 'paragraph', text: 'Legal research in India has traditionally been a labour-intensive process. Advocates spend hours poring over volumes of case law, searching through scattered databases, and manually cross-referencing citations across the Supreme Court, 25 High Courts, and dozens of tribunals. According to a 2025 survey by the Indian Legal Tech Association, the average Indian lawyer spends 8.2 hours per week on research alone.' },
    { type: 'heading', text: 'The Challenge of Indian Legal Research' },
    { type: 'paragraph', text: 'India\'s legal system presents unique challenges for research. With over 30 million pending cases, judgments delivered in multiple languages, and a complex hierarchy of courts and tribunals, finding relevant precedents is significantly harder than in common law jurisdictions with unified databases.' },
    { type: 'paragraph', text: 'Traditional legal databases in India — while comprehensive — often lack semantic search capabilities. Lawyers must rely on exact keyword matches, manual citation chains, and personal knowledge to find relevant authorities. This creates an uneven playing field where firms with larger research teams have a structural advantage.' },
    { type: 'heading', text: 'How AI Changes the Equation' },
    { type: 'paragraph', text: 'AI-powered legal research tools like LexPilot AI use natural language processing models trained specifically on Indian legal texts. This means lawyers can ask questions in plain English or Hindi and receive relevant authorities with proper citations — much like consulting a senior colleague who has read every judgment ever delivered in India.' },
    { type: 'paragraph', text: 'The key differentiator is contextual understanding. Our AI does not just match keywords; it understands legal concepts, distinguishes between obiter dicta and ratio decidendi, identifies the current good law by checking for overruling and distinguishing, and maps the evolution of legal principles across decades of jurisprudence.' },
    { type: 'heading', text: 'Real-World Impact: Case Studies' },
    { type: 'paragraph', text: 'A mid-size litigation firm in Mumbai reported reducing research time by 72% after adopting AI tools. Their associates now spend more time on strategy and drafting rather than searching through databases. A corporate law firm in Delhi found that AI-assisted due diligence cut their M&A transaction timelines by 40%.' },
    { type: 'paragraph', text: 'Solo practitioners benefit even more proportionally. An advocate practising in the Bombay High Court shared that AI research tools have allowed her to handle cases she would previously have had to decline due to research bandwidth constraints.' },
    { type: 'heading', text: 'Accuracy and Trust' },
    { type: 'paragraph', text: 'The most critical concern for any legal AI tool is accuracy. Hallucinated citations or incorrect summaries of judgments can have serious professional consequences. This is why LexPilot AI verifies every citation against original source databases and provides confidence scores for each result.' },
    { type: 'paragraph', text: 'Our current accuracy rate stands at 94.3% as measured against expert-annotated test sets created by practising advocates. Every citation links to the original judgment, and the platform clearly indicates when it is uncertain about a result.' },
    { type: 'heading', text: 'Looking Ahead' },
    { type: 'paragraph', text: 'The future of AI in Indian legal research goes beyond simple question-answering. We are building towards autonomous research agents that can conduct multi-step investigations, identify relevant authorities across jurisdictions, analyse opposing arguments, and prepare comprehensive research memos — all while maintaining the rigorous accuracy standards that legal practice demands.' },
    { type: 'paragraph', text: 'The transformation is already underway. Law firms that embrace AI research tools today are building a competitive advantage that will compound over time. Those that wait risk falling behind as clients increasingly expect faster turnarounds and lower costs.' },
  ],
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const article = sampleArticle;

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.content[0].text.slice(0, 160)}
        canonical={`/blog/${slug}`}
        ogType="article"
      />

      <article style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '4rem' }}>
        <div className="container-custom" style={{ maxWidth: '780px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Breadcrumb */}
            <div style={{ marginBottom: '2rem', fontSize: '0.875rem' }}>
              <Link to="/blog" style={{ color: '#4f46e5', textDecoration: 'none' }}>
                <i className="bi bi-arrow-left" style={{ marginRight: '0.5rem' }} />Blog
              </Link>
            </div>

            {/* Header */}
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4f46e5', textTransform: 'uppercase' }}>{article.category}</span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', margin: '0.75rem 0 1.5rem', lineHeight: 1.2 }}>
              {article.title}
            </h1>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-person" style={{ color: 'white', fontSize: '1.25rem' }} />
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{article.author}</div>
                <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{article.date} · {article.readTime}</div>
              </div>
            </div>

            {/* Content */}
            <div style={{ fontSize: '1.1rem', lineHeight: 1.9, color: '#374151' }}>
              {article.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return <h2 key={idx} style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem', color: '#111827' }}>{block.text}</h2>;
                }
                return <p key={idx} style={{ marginBottom: '1.5rem' }}>{block.text}</p>;
              })}
            </div>

            {/* Footer CTA */}
            <div style={{ marginTop: '3rem', padding: '2rem', background: '#f5f3ff', borderRadius: '1rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Experience AI-Powered Legal Research</h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Try LexPilot AI free for 14 days. No credit card required.</p>
              <Link to="/free-trial" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem', background: '#4f46e5', color: 'white', borderRadius: '0.5rem', fontWeight: 600, textDecoration: 'none' }}>
                Start Free Trial <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
}
