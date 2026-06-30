import { Link } from 'react-router-dom';
import styles from '../Home.module.scss';

export default function AnnouncementBar() {
  return (
    <div className={styles.announcement}>
      <div className={styles.announcementInner}>
        <span className={styles.announcementBadge}>New</span>
        <span className={styles.announcementText}>
          LexPilot AI v3.0 is here — Introducing Autonomous Legal AI Agents
        </span>
        <Link to="/release-notes" className={styles.announcementLink}>
          Learn more <i className="bi bi-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
