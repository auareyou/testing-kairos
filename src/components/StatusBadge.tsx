import type { ViewStatus } from '../data/types';
import styles from './StatusBadge.module.css';

const statusLabels: Record<ViewStatus, string> = {
  'has-view': 'Has View',
  'placeholder': 'Placeholder',
  'missing-view': 'MISSING VIEW',
  'coming-soon': 'Coming Soon',
  'system-no-ui': 'System / No UI',
};

const statusClasses: Record<ViewStatus, string> = {
  'has-view': styles.hasView,
  'placeholder': styles.placeholder,
  'missing-view': styles.missingView,
  'coming-soon': styles.comingSoon,
  'system-no-ui': styles.systemNoUi,
};

export function StatusBadge({ status }: { status: ViewStatus }) {
  return (
    <span className={`${styles.badge} ${statusClasses[status]}`}>
      {statusLabels[status]}
    </span>
  );
}
