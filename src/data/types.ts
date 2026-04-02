export type FlowTab = 'first-day' | 'normal-day' | 'last-day' | 'missing-views';

export type StepType = 'physical' | 'screen' | 'input' | 'action' | 'system' | 'optional' | 'complete';

export type Variant = 'mvp' | 'future';

export type ViewStatus =
  | 'has-view'
  | 'placeholder'
  | 'missing-view'
  | 'coming-soon'
  | 'system-no-ui';

export type NoteType = 'design' | 'warn' | 'hooked' | 'superbetter';

export type Priority = 'P0' | 'P1' | 'P2';

export type Coverage = 'e2e+unit' | 'e2e' | 'unit' | 'partial' | 'none';

export interface Note {
  type: NoteType;
  label: string;
  text: string;
}

export interface DataField {
  text: string;
  conditional?: boolean;
}

export interface SummaryRow {
  label: string;
  value: string;
}

export interface EdgeCase {
  question: string;
  answer: string;
}

export interface FlowStep {
  id: string;
  phase: string;
  type: StepType;
  typeLabel: string;
  variant?: Variant;
  title: string;
  description: string;
  viewStatus: ViewStatus;
  testingPlanIds: string[];
  designNotes?: string;
  dataFields?: DataField[];
  dataGridColumns?: 1 | 2 | 3;
  summaryRows?: SummaryRow[];
  edgeCases?: EdgeCase[];
  notes?: Note[];
  screenshotUrl?: string;
}

export interface FlowConfig {
  key: FlowTab;
  title: string;
  subtitle: string;
  steps: FlowStep[];
}

export interface TestScenario {
  id: string;
  scenario: string;
  expectedResult: string;
  priority: Priority;
  coverage: Coverage;
  testReference: string;
  phase: string;
}
