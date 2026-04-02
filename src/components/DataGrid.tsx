import type { DataField } from '../data/types';
import styles from './DataGrid.module.css';

export function DataGrid({ fields, columns = 2 }: { fields: DataField[]; columns?: 1 | 2 | 3 }) {
  const gridClass = columns === 1 ? styles.single : columns === 3 ? styles.triple : '';
  return (
    <div className={`${styles.grid} ${gridClass}`}>
      {fields.map((field, i) => (
        <div key={i} className={`${styles.item} ${field.conditional ? styles.conditional : ''}`}>
          {field.text}
        </div>
      ))}
    </div>
  );
}
