import type { EdgeCase } from '../data/types';
import styles from './EdgeCaseList.module.css';

export function EdgeCaseList({ cases }: { cases: EdgeCase[] }) {
  return (
    <div>
      {cases.map((c, i) => (
        <div key={i} className={styles.caseItem}>
          <strong>{c.question}</strong>
          <p>{c.answer}</p>
        </div>
      ))}
    </div>
  );
}
