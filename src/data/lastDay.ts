import type { FlowConfig } from './types';

export const lastDayFlow: FlowConfig = {
  key: 'last-day',
  title: 'Last Day — Treatment Complete',
  subtitle: 'Day 7 · Final session · Treatment completion · Device return',
  steps: [
    // ── LD-1 ──────────────────────────────────────────────────────────
    {
      id: 'LD-1',
      phase: 'Final Session',
      type: 'system',
      typeLabel: 'System',
      title: 'Last Day Alarm',
      description:
        'Same alarm flow as Normal Day but for Day 7 (final treatment day). The patient wakes up knowing this is the last session.',
      viewStatus: 'coming-soon',
      testingPlanIds: ['L6-01'],
      designNotes:
        'Entire Last Day flow is "Coming soon" on user flows site. Needs full design. Day 7 survey + full session.',
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Consider a subtle visual cue that this is the final day — perhaps a small badge or different color accent on the alarm screen. Don\'t make it dramatic; just acknowledge the milestone.',
        },
        {
          type: 'warn',
          label: 'Critical Path',
          text: 'L6-01 has NO automated test coverage. This is a P0 gap — the full 7-day lifecycle is not tested end-to-end.',
        },
      ],
    },

    // ── LD-2 ──────────────────────────────────────────────────────────
    {
      id: 'LD-2',
      phase: 'Final Session',
      type: 'input',
      typeLabel: 'User Input',
      title: 'Final Check-In',
      description:
        'Daily check-in for Day 7. Same 8 questions as every other day. May include additional end-of-treatment questions.',
      viewStatus: 'coming-soon',
      testingPlanIds: ['L6-01'],
      designNotes:
        'May include additional questions about the treatment experience.',
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Keep the same check-in flow. If adding end-of-treatment questions, make them clearly optional and separate from the standard 8.',
        },
      ],
    },

    // ── LD-3 ──────────────────────────────────────────────────────────
    {
      id: 'LD-3',
      phase: 'Final Session',
      type: 'action',
      typeLabel: 'User Action',
      title: 'Final Light Session',
      description:
        'Last treatment session. Same mechanics as every day. Session completion triggers the treatment completion check.',
      viewStatus: 'coming-soon',
      testingPlanIds: ['L6-01', 'L6-02', 'L6-03'],
      designNotes:
        'After finalization: completedDays = 7, Treatment.isComplete = true. L6-03: date past but session not finalized = NOT complete. Triggers complete phase.',
      notes: [
        {
          type: 'warn',
          label: 'Completion Logic',
          text: 'Treatment completion is determined by TWO conditions: (1) date >= treatmentEndDate AND (2) last session finalized. If the patient finishes the session but finalization fails, the treatment is NOT marked complete (L6-03).',
        },
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The session itself should feel identical to any other day. The \'last day\' significance comes AFTER completion, not during. Let the patient focus on their show.',
        },
      ],
    },

    // ── LD-4 ──────────────────────────────────────────────────────────
    {
      id: 'LD-4',
      phase: 'Treatment Wrap-Up',
      type: 'complete',
      typeLabel: 'Complete',
      title: 'Treatment Complete Summary',
      description:
        'Results summary for the entire 7-day treatment. Shows aggregate scores, session history, streaks, and key metrics. This is the patient\'s takeaway.',
      viewStatus: 'missing-view',
      testingPlanIds: ['L6-02', 'L6-04'],
      designNotes:
        'No design exists. Needs: treatment summary, final scores, aggregate insights. Warm, intentional ending.',
      summaryRows: [
        { label: 'Treatment days', value: '7 of 7 completed' },
        {
          label: 'Total light exposure',
          value: '~5.5 hours across 7 sessions',
        },
        { label: 'Average session length', value: '47 minutes' },
        { label: 'Check-ins completed', value: '7 of 7' },
        { label: 'Longest streak', value: '7 days' },
        {
          label: 'Overall score',
          value: 'Computed from circadian scoring',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'This screen should feel like a warm, respectful summary — not a report card. Show what was accomplished without ranking or grading. The patient completed something meaningful; honor that with a calm, well-designed summary.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Quest Complete',
          text: 'This is the \'quest complete\' moment. The patient can see the full arc of their journey: Day 1 through Day 7, every session logged, every check-in recorded. The stored value of their investment is now visible as a complete picture.',
        },
      ],
    },

    // ── LD-5 ──────────────────────────────────────────────────────────
    {
      id: 'LD-5',
      phase: 'Treatment Wrap-Up',
      type: 'physical',
      typeLabel: 'Physical',
      title: 'Device Return Instructions',
      description:
        'Clear, step-by-step instructions for returning the light therapy device, iPad, and cables. Physical logistics that need to be simple and anxiety-free.',
      viewStatus: 'missing-view',
      testingPlanIds: [],
      designNotes:
        'No design exists. Needs: step-by-step return process, shipping label info, packing instructions.',
      dataFields: [
        {
          text: 'Step 1: Pack the light device, iPad, and cable in the original box',
        },
        {
          text: 'Step 2: Attach the pre-paid shipping label (included in box)',
        },
        { text: 'Step 3: Drop off at any [carrier] location' },
        {
          text: 'Step 4: Confirmation notification sent when package is received',
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Make this as simple as the unboxing was. Clear numbered steps, large type. Include a photo of what should go back in the box. The shipping label should be pre-printed and included — zero friction.',
        },
        {
          type: 'warn',
          label: 'Anxiety Reduction',
          text: 'Patients may worry about damaging equipment or losing components. Reassure: \'Don\'t worry if something is missing or damaged — just pack what you have.\' Remove any sense of obligation beyond basic return.',
        },
      ],
    },

    // ── LD-6 ──────────────────────────────────────────────────────────
    {
      id: 'LD-6',
      phase: 'Treatment Wrap-Up',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Thank You / Farewell',
      description:
        'Warm ending message. What happens next with their data. Contact information if needed. The app goes quiet after this.',
      viewStatus: 'missing-view',
      testingPlanIds: ['L6-04', 'L6-05'],
      designNotes:
        'No design exists. Treatment phase = complete. App goes quiet. Respectful closure.',
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'This is the last screen the patient will see. Make it personal and warm. Thank them for their time and commitment. Explain briefly what happens with their data (it helps research). Provide a contact number if they have questions later.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Graceful Exit',
          text: 'The Hook cycle ends intentionally. The alarm stops. The To-Do list empties. The app communicates: \'You\'ve completed the program.\' No lingering engagement mechanics — the treatment is over, and the patient\'s time is their own again.',
        },
        {
          type: 'warn',
          label: 'Edge Case',
          text: 'L6-05: A patient who completed only 5 of 7 days but the treatment end date has passed still sees this screen. The summary adjusts to show 5/7. Do not frame incomplete adherence as failure.',
        },
      ],
    },
  ],
};
