import type { StepType } from '../data/types';
import { typeIcons } from './icons';
import styles from './TypeBadge.module.css';

export function TypeBadge({ type, label }: { type: StepType; label: string }) {
  return (
    <span className={`${styles.badge} ${styles[type]}`}>
      {typeIcons[type]}
      {label}
    </span>
  );
}
