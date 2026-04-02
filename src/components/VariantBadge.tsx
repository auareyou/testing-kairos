import type { Variant } from '../data/types';
import styles from './VariantBadge.module.css';

export function VariantBadge({ variant }: { variant: Variant }) {
  if (variant === 'mvp') {
    return (
      <span className={`${styles.badge} ${styles.mvp}`}>
        <svg viewBox="0 0 16 16" fill="currentColor"><rect x="2" y="2" width="12" height="12" rx="2"/></svg>
        MVP
      </span>
    );
  }
  return (
    <span className={`${styles.badge} ${styles.future}`}>
      <svg viewBox="0 0 16 16" fill="currentColor"><polygon points="8,1 10,6 16,6 11,9.5 13,15 8,11.5 3,15 5,9.5 0,6 6,6"/></svg>
      Future
    </span>
  );
}
