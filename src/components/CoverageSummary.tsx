import type { FlowStep } from '../data/types';
import styles from './CoverageSummary.module.css';

const statusColors: Record<string, string> = {
  'has-view': '#1B7A3D',
  'placeholder': '#9A6700',
  'missing-view': '#C0294A',
  'coming-soon': '#2563EB',
  'system-no-ui': '#777',
};

const statusLabels: Record<string, string> = {
  'has-view': 'Has View',
  'placeholder': 'Placeholder',
  'missing-view': 'Missing View',
  'coming-soon': 'Coming Soon',
  'system-no-ui': 'System / No UI',
};

export function CoverageSummary({ steps }: { steps: FlowStep[] }) {
  const counts: Record<string, number> = {};
  for (const step of steps) {
    counts[step.viewStatus] = (counts[step.viewStatus] || 0) + 1;
  }

  return (
    <div className={styles.bar}>
      {Object.entries(counts).map(([status, count]) => (
        <div key={status} className={styles.stat}>
          <div className={styles.statDot} style={{ background: statusColors[status] }} />
          <span className={styles.statCount}>{count}</span>
          {statusLabels[status]}
        </div>
      ))}
    </div>
  );
}
