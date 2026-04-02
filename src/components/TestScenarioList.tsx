import { useState } from 'react';
import { scenariosByIds } from '../data/testingPlan';
import { ChevronRight } from './icons';
import styles from './TestScenarioList.module.css';

const coverageLabels: Record<string, string> = {
  'e2e+unit': 'E2E + Unit',
  'e2e': 'E2E',
  'unit': 'Unit',
  'partial': 'Partial',
  'none': 'No coverage',
};

const coverageClasses: Record<string, string> = {
  'e2e+unit': styles.coverageFull,
  'e2e': styles.coverageE2e,
  'unit': styles.coverageUnit,
  'partial': styles.coveragePartial,
  'none': styles.coverageNone,
};

const priorityClasses: Record<string, string> = {
  'P0': styles.p0,
  'P1': styles.p1,
  'P2': styles.p2,
};

export function TestScenarioList({ testingPlanIds }: { testingPlanIds: string[] }) {
  const [open, setOpen] = useState(false);
  const scenarios = scenariosByIds(testingPlanIds);

  if (scenarios.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <button
        className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
        onClick={() => setOpen(!open)}
      >
        <ChevronRight />
        {scenarios.length} test scenario{scenarios.length !== 1 ? 's' : ''}
      </button>
      {open && (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Scenario</th>
              <th>Pri</th>
              <th>Coverage</th>
            </tr>
          </thead>
          <tbody>
            {scenarios.map(s => (
              <tr key={s.id}>
                <td className={styles.scenarioId}>{s.id}</td>
                <td>{s.scenario}</td>
                <td><span className={`${styles.priorityBadge} ${priorityClasses[s.priority]}`}>{s.priority}</span></td>
                <td><span className={`${styles.coverageBadge} ${coverageClasses[s.coverage]}`}>{coverageLabels[s.coverage]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
