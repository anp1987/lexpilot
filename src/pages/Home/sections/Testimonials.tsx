import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const testimonials = [
  {
    quote: 'LexPilot AI has transformed how we conduct legal research. What used to take our associates 4-5 hours now takes 15 minutes with the same depth and accuracy.',
    author: 'Adv. Priya Mehta',
    role: 'Senior Partner',
    firm: 'Mehta & Associates, Mumbai',
  },
  {
    quote: 'The contract review feature caught a critical compliance issue in a ₹200 crore deal that our team had missed. LexPilot AI paid for itself in one engagement.',
    author: 'Rajesh Kumar',
    role: 'General Counsel',
    firm: 'TechCorp India Ltd.',
  },
  {
    quote: 'As a solo advocate, LexPilot AI is like having a team of associates. I can now take on more cases and deliver better results for my clients.',
    author: 'Adv. Sunita Sharma',
    role: 'Advocate',
    firm: 'Delhi High Court',
  },
  {
    quote: 'The AI agents work overnight preparing research memos, so my team starts each day with comprehensive case analysis already done. It is a game-changer.',
    author: 'Vikram Singh',
    role: 'Managing Partner',
    firm: 'Singh & Partners, Bengaluru',
  },
];

export default function Testimonials() {
  return (
    <section className={`section section--gray ${styles.testimonials}`} aria-label="Testimonials">
      <div className="container-custom">
        <AnimateOnScroll>
          <div className="section-header">
            <span className="section-badge">
              <i className="bi bi-chat-quote" aria-hidden="true" /> Testimonials
            </span>
            <h2 className="section-title">Trusted by Legal Professionals</h2>
            <p className="section-subtitle">
              Hear from lawyers and firms who have transformed their practice with LexPilot AI.
            </p>
          </div>
        </AnimateOnScroll>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={testimonial.author} delay={index * 0.1}>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className={styles.testimonialQuote}>
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}, {testimonial.firm}</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
