import type { FlowTab, FlowConfig } from './types';
import { firstDayFlow } from './firstDay';
import { normalDayFlow } from './normalDay';
import { lastDayFlow } from './lastDay';
import { missingViewsFlow } from './missingViews';

export const FLOWS: Record<FlowTab, FlowConfig> = {
  'first-day': firstDayFlow,
  'normal-day': normalDayFlow,
  'last-day': lastDayFlow,
  'missing-views': missingViewsFlow,
};

export const FLOW_TABS: { key: FlowTab; label: string }[] = [
  { key: 'first-day', label: 'First Day' },
  { key: 'normal-day', label: 'Normal Day' },
  { key: 'last-day', label: 'Last Day' },
  { key: 'missing-views', label: 'Missing Views' },
];

export type { FlowTab, FlowConfig } from './types';
export type { FlowStep, StepType, ViewStatus, NoteType, Note, Variant, Priority, Coverage, TestScenario } from './types';
