import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/seo/SEOHead';
import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';

const categories = ['All', 'AI & Legal Tech', 'Indian Law', 'Product Updates', 'Guides', 'Industry Insights'];

const tags = ['Legal AI', 'Supreme Court', 'Contract Review', 'DPDP Act', 'NCLT', 'Compliance', 'Research', 'Drafting', 'Case Management', 'SEBI', 'Automation'];

const blogPosts = [
  {
    slug: 'ai-transforming-indian-legal-research',
    title: 'How AI is Transforming Legal Research for Indian Advocates',
    excerpt: 'Indian lawyers spend an average of 8 hours per week on legal research. AI-powered tools are cutting that time by 70% while improving accuracy and coverage across Supreme Court and High Court databases.',
    category: 'AI & Legal Tech',
    date: '25 June 2026',
    readTime: '8 min read',
    featured: true,
    author: 'Arjun Mehta',
  },
  {
    slug: 'dpdp-act-compliance-law-firms',
    title: 'Digital Personal Data Protection Act 2023: What Law Firms Must Know',
    excerpt: 'The DPDP Act introduces significant obligations for law firms handling client data. Here is a comprehensive guide to compliance, consent management, and data principal rights under the new regime.',
    category: 'Indian Law',
    date: '18 June 2026',
    readTime: '12 min read',
    featured: false,
    author: 'Sneha Iyer',
  },
  {
    slug: 'contract-review-ai-benchmarks-2026',
    title: 'Contract Review AI: 2026 Benchmarks for Indian Commercial Agreements',
    excerpt: 'We tested our AI contract review engine against 1,000 Indian commercial agreements. The results show 96% accuracy in identifying non-standard clauses, risk flags, and compliance gaps.',
    category: 'Product Updates',
    date: '10 June 2026',
    readTime: '6 min read',
    featured: false,
    author: 'Priya Sharma',
  },
  {
    slug: 'supreme-court-ai-citation-analysis',
    title: 'Analysing 50 Years of Supreme Court Citations with AI',
    excerpt: 'Using our citation graph engine, we mapped how landmark Supreme Court judgments influence subsequent decisions. The analysis reveals surprising patterns in how legal principles evolve in Indian jurisprudence.',
    category: 'Industry Insights',
    date: '2 June 2026',
    readTime: '10 min read',
    featured: false,
    author: 'Sneha Iyer',
  },
  {
    slug: 'setting-up-ai-powered-law-firm',
    title: 'A Step-by-Step Guide to Setting Up an AI-Powered Law Firm in India',
    excerpt: 'From choosing the right tools to training your team, this guide walks you through everything needed to integrate AI into your Indian law practice without disrupting existing workflows.',
    category: 'Guides',
    date: '25 May 2026',
    readTime: '15 min read',
    featured: false,
    author: 'Rajesh Krishnamurthy',
  },
  {
    slug: 'nclt-insolvency-trends-ai-analysis',
    title: 'NCLT Insolvency Trends 2024-2026: An AI-Powered Analysis',
    excerpt: 'Our AI analysed 12,000 NCLT orders to identify trends in resolution timelines, haircuts, and successful resolution applicants. Key insights for insolvency practitioners and corporate lawyers.',
    category: 'Industry Insights',
    date: '15 May 2026',
    readTime: '9 min read',
    featured: false,
    author: 'Arjun Mehta',
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(p => p.featured);

  return (
    <>
      <SEOHead
        title="Blog"
        description="Insights on AI-powered legal technology, Indian law updates, product news, and guides for modern law firms. Stay ahead with LexPilot AI."
        canonical="/blog"
      />

      {/* Hero */}
      <section style={{ paddingTop: 'calc(72px + 4rem)', paddingBottom: '2rem', textAlign: 'center' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-badge"><i className="bi bi-journal-richtext" aria-hidden="true" /> Blog</span>
            <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '1rem' }}>
              Insights for Modern Indian Law Firms
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Expert perspectives on legal technology, AI in law, and the future of Indian legal practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section style={{ paddingBottom: '2rem' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{ padding: '0.5rem 1rem', borderRadius: '2rem', border: 'none', background: activeCategory === cat ? '#4f46e5' : '#f3f4f6', color: activeCategory === cat ? 'white' : '#4b5563', fontWeight: 500, cursor: 'pointer', fontSize: '0.875rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div style={{ position: 'relative' }}>
              <i className="bi bi-search" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ padding: '0.625rem 1rem 0.625rem 2.25rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.875rem', width: '220px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && activeCategory === 'All' && !searchQuery && (
        <section style={{ paddingBottom: '3rem' }}>
          <div className="container-custom">
            <AnimateOnScroll>
              <Link to={`/blog/${featuredPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', borderRadius: '1.5rem', padding: '3rem', color: 'white', position: 'relative', overflow: 'hidden' }}>
                  <span style={{ background: 'rgba(255,255,255,0.15)', padding: '0.375rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Featured</span>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, marginTop: '1rem', marginBottom: '1rem' }}>{featuredPost.title}</h2>
                  <p style={{ fontSize: '1.1rem', opacity: 0.85, lineHeight: 1.7, maxWidth: '700px' }}>{featuredPost.excerpt}</p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', fontSize: '0.875rem', opacity: 0.7 }}>
                    <span>{featuredPost.author}</span>
                    <span>{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="section">
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {filteredPosts.map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={index * 0.08}>
                <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <article style={{ background: 'white', borderRadius: '1rem', padding: '2rem', border: '1px solid #e5e7eb', height: '100%', display: 'flex', flexDirection: 'column', transition: 'box-shadow 0.2s' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4f46e5', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{post.category}</span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.95rem', color: '#6b7280', lineHeight: 1.7, flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f3f4f6', fontSize: '0.8rem', color: '#9ca3af' }}>
                      <span>{post.author}</span>
                      <span>{post.date} · {post.readTime}</span>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
              <i className="bi bi-search" style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }} />
              <p>No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Tags */}
      <section style={{ paddingBottom: '3rem' }}>
        <div className="container-custom">
          <AnimateOnScroll>
            <div style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: '#374151' }}>Popular Topics</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {tags.map(tag => (
                  <span key={tag} style={{ padding: '0.375rem 0.875rem', borderRadius: '999px', border: '1px solid #e5e7eb', fontSize: '0.8125rem', color: '#4b5563', cursor: 'pointer', transition: 'all 0.2s' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{ padding: '4rem 0', background: '#f9fafb', borderTop: '1px solid #e5e7eb' }}>
        <div className="container-custom" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <AnimateOnScroll>
            <i className="bi bi-envelope-paper" style={{ fontSize: '2.5rem', color: '#4f46e5', marginBottom: '1rem', display: 'block' }} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>Get Legal AI Insights Weekly</h2>
            <p style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.7 }}>
              Join 3,000+ Indian lawyers receiving weekly insights on AI in legal practice, Indian law updates, and platform tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <input type="email" placeholder="your@email.com" required style={{ padding: '0.75rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', fontSize: '0.9375rem', minWidth: '250px' }} />
              <button type="submit" style={{ padding: '0.75rem 1.5rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}>
                Subscribe
              </button>
            </form>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.75rem' }}>No spam. Unsubscribe anytime.</p>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
