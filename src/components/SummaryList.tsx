import type { SummaryRow } from '../data/types';
import styles from './SummaryList.module.css';

export function SummaryList({ rows }: { rows: SummaryRow[] }) {
  return (
    <div className={styles.list}>
      {rows.map((row, i) => (
        <div key={i} className={styles.row}>
          <span className={styles.label}>{row.label}</span>
          <span className={styles.value}>{row.value}</span>
        </div>
      ))}
    </div>
  );
}
