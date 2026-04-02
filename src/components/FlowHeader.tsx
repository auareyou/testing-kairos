import type { FlowConfig, FlowStep } from '../data/types';
import { CoverageSummary } from './CoverageSummary';
import styles from './FlowHeader.module.css';

const typeColors = [
  { color: '#1B7A3D', label: 'Physical' },
  { color: '#2563EB', label: 'Screen' },
  { color: '#B8700A', label: 'User Input' },
  { color: '#7C3AED', label: 'Action' },
  { color: '#C0294A', label: 'System' },
  { color: '#0E7490', label: 'Optional' },
];

export function FlowHeader({ flow, allSteps }: { flow: FlowConfig; allSteps?: FlowStep[] }) {
  return (
    <div className={styles.header}>
      <h1>{flow.title}</h1>
      <p>{flow.subtitle}</p>
      <div className={styles.legend}>
        {typeColors.map(t => (
          <div key={t.label} className={styles.legendItem}>
            <div className={styles.legendDot} style={{ background: t.color }} />
            {t.label}
          </div>
        ))}
        <div className={styles.legendSeparator}>
          <div className={styles.legendDot} style={{ background: '#2563EB', borderRadius: '50%' }} />
          MVP
        </div>
        <div className={styles.legendItem}>
          <div className={styles.legendDot} style={{ background: '#7C3AED', borderRadius: '50%' }} />
          Future
        </div>
      </div>
      {allSteps && <CoverageSummary steps={allSteps} />}
    </div>
  );
}
