import type { FlowStep } from '../data/types';
import { TypeBadge } from './TypeBadge';
import { StatusBadge } from './StatusBadge';
import { VariantBadge } from './VariantBadge';
import { DataGrid } from './DataGrid';
import { NoteCard } from './NoteCard';
import { SummaryList } from './SummaryList';
import { EdgeCaseList } from './EdgeCaseList';
import { TestScenarioList } from './TestScenarioList';
import styles from './FlowCard.module.css';

export function FlowCardArea({ steps, current }: { steps: FlowStep[]; current: number }) {
  return (
    <div className={styles.cardArea}>
      <div className={styles.cardContainer} style={{ transform: `translateX(-${current * 100}%)` }}>
        {steps.map((step, i) => (
          <div
            key={step.id}
            className={styles.card}
            role="group"
            aria-roledescription="slide"
            aria-label={`Step ${i + 1} of ${steps.length}: ${step.title}`}
            aria-hidden={i !== current}
          >
            <div className={styles.cardMain}>
              <div className={styles.cardHeader}>
                <TypeBadge type={step.type} label={step.typeLabel} />
                <StatusBadge status={step.viewStatus} />
                {step.variant && <VariantBadge variant={step.variant} />}
              </div>
              <h2>{step.title}</h2>
              <p>{step.description}</p>

              {step.dataFields && step.dataFields.length > 0 && (
                <DataGrid fields={step.dataFields} columns={step.dataGridColumns} />
              )}

              {step.summaryRows && step.summaryRows.length > 0 && (
                <SummaryList rows={step.summaryRows} />
              )}

              {step.edgeCases && step.edgeCases.length > 0 && (
                <EdgeCaseList cases={step.edgeCases} />
              )}

              {step.designNotes && (
                <div className={styles.designNotesBar}>
                  <strong>Spec Notes</strong>
                  {step.designNotes}
                </div>
              )}

              {step.testingPlanIds.length > 0 && (
                <TestScenarioList testingPlanIds={step.testingPlanIds} />
              )}

              <div className={styles.screenshot}>
                {step.screenshotUrl ? (
                  <img src={step.screenshotUrl} alt={`Screenshot of ${step.title}`} />
                ) : (
                  'Screenshot goes here'
                )}
              </div>
            </div>

            {step.notes && step.notes.length > 0 && (
              <div className={styles.cardNotes}>
                {step.notes.map((note, ni) => (
                  <NoteCard key={ni} note={note} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
