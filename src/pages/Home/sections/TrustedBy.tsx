import AnimateOnScroll from '@/components/common/AnimateOnScroll/AnimateOnScroll';
import styles from '../Home.module.scss';

const logos = [
  'Tata Legal', 'Cyril Amarchand', 'AZB & Partners', 'Khaitan & Co',
  'Shardul Amarchand', 'Trilegal', 'JSA Law', 'Luthra & Luthra',
  'S&R Associates', 'Nishith Desai',
];

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy} aria-label="Trusted by leading firms">
      <AnimateOnScroll>
        <p className={styles.trustedByLabel}>Trusted by 500+ law firms across India</p>
        <div className={styles.trustedByLogos}>
          {logos.map((name) => (
            <div key={name} className={styles.trustedByLogo} aria-label={name}>
              <span>{name}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}
