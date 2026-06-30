import styles from './LoadingState.module.scss';

interface LoadingStateProps {
  fullScreen?: boolean;
  message?: string;
}

export default function LoadingState({ fullScreen = false, message }: LoadingStateProps) {
  return (
    <div className={`${styles.loading} ${fullScreen ? styles.fullScreen : ''}`} role="status" aria-label="Loading">
      <div className={styles.spinner}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>
      {message && <p className={styles.message}>{message}</p>}
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
