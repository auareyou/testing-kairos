import type { FlowConfig } from './types';

export const missingViewsFlow: FlowConfig = {
  key: 'missing-views',
  title: 'Missing Views — Design Gaps',
  subtitle:
    '39 scenarios needing design · Identified from testing plan cross-reference',
  steps: [
    // ── MV-1 ──────────────────────────────────────────────────────────
    {
      id: 'MV-1',
      phase: 'Ineligible & Error States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Ineligible Screen',
      description:
        'Patient excluded due to chronotype, shift work, or sleep meds. Shows reason and next steps.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S1-08', 'S1-09', 'S1-10', 'S1-11', 'S1-14'],
      designNotes:
        'e2e test exists (onboarding-ineligible.spec) but NO user flow screen designed. Needs: exclusion reason display, what happens next, contact coordinator.',
    },

    // ── MV-2 ──────────────────────────────────────────────────────────
    {
      id: 'MV-2',
      phase: 'Ineligible & Error States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Survey Submit Error',
      description:
        'Network/API error during survey submission. Return to idle with error message.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S1-13', 'S2-05'],
      designNotes:
        'Unit tested but no UI design. Needs: error message, retry button, offline indicator.',
    },

    // ── MV-3 ──────────────────────────────────────────────────────────
    {
      id: 'MV-3',
      phase: 'Ineligible & Error States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Session Init Error',
      description:
        'Light session fails to initialize (missing daily survey, baseline survey, or past startMax).',
      viewStatus: 'missing-view',
      testingPlanIds: ['S2-13', 'S2-14', 'S2-15'],
      designNotes:
        'Three error paths in light session machine. Needs: error states for each, contact coordinator message, retry guidance.',
    },

    // ── MV-4 ──────────────────────────────────────────────────────────
    {
      id: 'MV-4',
      phase: 'Calibration / Demo',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Demo Session with Glare Test',
      description:
        'Calibration session: patient tries light device + completes glare test. isCalibrationCompleted = true.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S1-15', 'S1-16', 'S1-17'],
      designNotes:
        'e2e test exists (onboarding.spec) but no user flow design. Needs: demo session UI, glare test interface, completion confirmation.',
    },

    // ── MV-5 ──────────────────────────────────────────────────────────
    {
      id: 'MV-5',
      phase: 'Calibration / Demo',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Demo Session Error',
      description: 'Demo session submit fails (network error).',
      viewStatus: 'missing-view',
      testingPlanIds: ['S1-18'],
      designNotes:
        'Not tested or designed. Error path for demo session submission.',
    },

    // ── MV-6 ──────────────────────────────────────────────────────────
    {
      id: 'MV-6',
      phase: 'Session Window States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Before Window State',
      description:
        'Patient opens app before startMin. Survey available anytime, but session not yet.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S2-06'],
      designNotes:
        'e2e tested (session-window-routing.spec). Needs: "Session available at [time]" message, countdown or gentle wait state.',
    },

    // ── MV-7 ──────────────────────────────────────────────────────────
    {
      id: 'MV-7',
      phase: 'Session Window States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Session Intro / Ready',
      description:
        'Within window, survey done. Ready to begin session. Shows content selection entry point.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S2-07', 'S2-11'],
      designNotes:
        'treatment_session_intro state. BEGIN_SESSION event. Needs: session readiness screen, content picker entry.',
    },

    // ── MV-8 ──────────────────────────────────────────────────────────
    {
      id: 'MV-8',
      phase: 'Session Window States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Missed Session Screen',
      description:
        'Past startMax, survey done but no session. "Missed" with DONE button to dashboard.',
      viewStatus: 'missing-view',
      testingPlanIds: ['S2-08', 'M5-08'],
      designNotes:
        'e2e tested (missed-session.spec). Needs: gentle missed message, no shaming, DONE action, tomorrow preview.',
    },

    // ── MV-9 ──────────────────────────────────────────────────────────
    {
      id: 'MV-9',
      phase: 'In-Session Edge Cases',
      type: 'system',
      typeLabel: 'System',
      title: 'Keyboard Pause State',
      description:
        'On-screen keyboard opened during session. Pauses session with keyboard reason.',
      viewStatus: 'missing-view',
      testingPlanIds: ['D3-08', 'D3-09', 'D3-10'],
      designNotes:
        'Tested in unit tests. Needs: visual indicator keyboard is blocking, auto-resume on close.',
    },

    // ── MV-10 ─────────────────────────────────────────────────────────
    {
      id: 'MV-10',
      phase: 'In-Session Edge Cases',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Break/Exposure Tracking UI',
      description:
        'Visual feedback for break budget: fidgets (<1min), breaks (1-5min), long breaks (>=5min). Budget = 5 min total.',
      viewStatus: 'missing-view',
      testingPlanIds: [
        'D3-13',
        'D3-14',
        'D3-15',
        'D3-16',
        'D3-17',
        'D3-18',
        'D3-19',
        'D3-20',
      ],
      designNotes:
        'Complex window/break system with restarts. Needs: break timer, budget indicator, window restart notification.',
    },

    // ── MV-10b ────────────────────────────────────────────────────────
    {
      id: 'MV-10b',
      phase: 'In-Session Edge Cases',
      type: 'system',
      typeLabel: 'System',
      title: 'Web Navigation Tracking',
      description:
        'Patient navigates to new URL within webview during session. Navigation event logged.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['D3-11', 'D3-12'],
      designNotes:
        'URL_CHANGED event, dedup logic. No separate UI needed — tracked silently in event log.',
    },

    // ── MV-11 ─────────────────────────────────────────────────────────
    {
      id: 'MV-11',
      phase: 'In-Session Edge Cases',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Session Cancel Confirmation',
      description:
        'Patient presses cancel during active session. Confirm dialog before session_canceled event.',
      viewStatus: 'missing-view',
      testingPlanIds: ['D3-23', 'D3-24'],
      designNotes:
        'CANCEL and FORCE_COMPLETE events. Needs: confirmation dialog, "are you sure?", consequence explanation.',
    },

    // ── MV-12 ─────────────────────────────────────────────────────────
    {
      id: 'MV-12',
      phase: 'In-Session Edge Cases',
      type: 'system',
      typeLabel: 'System',
      title: 'Session Finalization Feedback',
      description:
        'Visual state during event sync and cleanup after session ends/cancels. Heartbeat writes snapshot every 1s.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['D3-25', 'D3-26', 'D3-27', 'D3-28', 'D3-29'],
      designNotes:
        'Finalization runs automatically (syncAll, clear, snapshot cleared). Heartbeat actor during running. May need loading indicator. Error path (D3-27) needs fallback.',
    },

    // ── MV-13 ─────────────────────────────────────────────────────────
    {
      id: 'MV-13',
      phase: 'Crash Recovery',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'App Crash Recovery — Resume',
      description:
        'App relaunches same day within window. Resumes session from snapshot. Gap events constructed.',
      viewStatus: 'missing-view',
      testingPlanIds: ['R4-01', 'R4-05', 'R4-06', 'R4-07'],
      designNotes:
        'All crash recovery UX is missing from user flows. Needs: "Resuming your session..." transition, gap time display, seamless re-entry. R4-07: crash after session ended = empty gaps.',
    },

    // ── MV-14 ─────────────────────────────────────────────────────────
    {
      id: 'MV-14',
      phase: 'Crash Recovery',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'App Crash Recovery — Stale',
      description:
        'App relaunches next day or past end. Old session auto-closed. New day starts fresh.',
      viewStatus: 'missing-view',
      testingPlanIds: ['R4-02', 'R4-03', 'R4-08', 'R4-09', 'R4-10', 'R4-11'],
      designNotes:
        'Stale session closure is silent. R4-10: already-ended = no action. R4-11: sync failure = best-effort. Needs: brief explanation if previous session was incomplete.',
    },

    // ── MV-15 ─────────────────────────────────────────────────────────
    {
      id: 'MV-15',
      phase: 'Crash Recovery',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Crash During Loading',
      description:
        'App loading screen after crash. Resilience check: loads to correct state.',
      viewStatus: 'missing-view',
      testingPlanIds: ['R4-04', 'R4-12', 'R4-13'],
      designNotes:
        'e2e tested (startup-resilience.spec). Loading screen exists but crash-specific messaging may be needed.',
    },

    // ── MV-15b ────────────────────────────────────────────────────────
    {
      id: 'MV-15b',
      phase: 'Mid-Treatment States',
      type: 'system',
      typeLabel: 'System',
      title: 'Daily Cycle — Next Morning',
      description:
        'Patient opens app next morning after previous day finalized. Resolves to daily survey.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['M5-01', 'M5-04'],
      designNotes:
        'Automatic routing. M5-01: resolves to treatment_daily_survey. M5-04: dashboard stays if session done. No separate view needed.',
    },

    // ── MV-15c ────────────────────────────────────────────────────────
    {
      id: 'MV-15c',
      phase: 'Mid-Treatment States',
      type: 'system',
      typeLabel: 'System',
      title: 'Treatment Day Tracking',
      description:
        'treatmentDay calculation, completedDays count, day progression through 7-day treatment.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['M5-05', 'M5-06', 'M5-07'],
      designNotes:
        'Backend calculations. Reflected in dashboard timeline (day numbers, completion circles). No separate view needed.',
    },

    // ── MV-15d ────────────────────────────────────────────────────────
    {
      id: 'MV-15d',
      phase: 'Mid-Treatment States',
      type: 'system',
      typeLabel: 'System',
      title: 'Session Window — Survey After Window',
      description:
        'Patient opens app after startMax without having done survey. Still routes to daily survey.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['S2-09', 'S2-10'],
      designNotes:
        'Guard routing logic. S2-09: survey presented regardless of window. S2-10: REFRESH re-resolves. No separate view needed.',
    },

    // ── MV-15e ────────────────────────────────────────────────────────
    {
      id: 'MV-15e',
      phase: 'Mid-Treatment States',
      type: 'system',
      typeLabel: 'System',
      title: 'Onboarding Edge Cases',
      description:
        'App restart mid-onboarding preserves screen. Initial onboarding screen from input. FREE_DAY_ALARM flag.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['S1-05', 'S1-06', 'S1-12'],
      designNotes:
        'S1-05: screen state preserved across REFRESH. S1-06: machine starts at provided screen. S1-12: review flag, no exclusion. No separate view.',
    },

    // ── MV-16 ─────────────────────────────────────────────────────────
    {
      id: 'MV-16',
      phase: 'Mid-Treatment States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Previous Day Missed + New Day',
      description:
        'Patient opens app day after missing a session. Timeline shows empty circle. No reference to missed day.',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-02'],
      designNotes:
        'Guard logic handles this but no specific UI. App moves forward without mentioning the miss. Timeline speaks for itself.',
    },

    // ── MV-17 ─────────────────────────────────────────────────────────
    {
      id: 'MV-17',
      phase: 'Mid-Treatment States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Cancel → Retry (Within Window)',
      description:
        'Patient cancels session but window is still open. Returns to session intro to retry.',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-10'],
      designNotes:
        'Tested in lifecycle.test. Needs: return to intro, encouragement to retry, session readiness reset.',
    },

    // ── MV-18 ─────────────────────────────────────────────────────────
    {
      id: 'MV-18',
      phase: 'Mid-Treatment States',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Cancel → Missed (Window Closed)',
      description:
        'Patient cancels session and window has closed. Routes to missed screen.',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-09'],
      designNotes:
        'Tested in lifecycle.test. Same as missed session screen but triggered by cancel.',
    },

    // ── MV-19 ─────────────────────────────────────────────────────────
    {
      id: 'MV-19',
      phase: 'Notification Screens',
      type: 'system',
      typeLabel: 'System',
      title: 'Time Running Out Alert',
      description:
        'Push notification when remaining window time is tight. "Your session window closes soon."',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-16'],
      designNotes:
        'Fires at endTime - totalExposure - breakTotal - 5. Needs: notification design, in-app alert variant.',
    },

    // ── MV-20 ─────────────────────────────────────────────────────────
    {
      id: 'MV-20',
      phase: 'Notification Screens',
      type: 'system',
      typeLabel: 'System',
      title: 'Lights Down Reminder',
      description:
        '2 hours before expected bedtime. "Time to start winding down."',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-17'],
      designNotes:
        'Based on baselineBedInTime - 120 min. Evening notification design.',
    },

    // ── MV-21 ─────────────────────────────────────────────────────────
    {
      id: 'MV-21',
      phase: 'Notification Screens',
      type: 'system',
      typeLabel: 'System',
      title: 'Custom Study Notifications',
      description:
        'Researcher-configured notifications at specified day offsets.',
      viewStatus: 'missing-view',
      testingPlanIds: ['M5-18', 'P0-06'],
      designNotes:
        'Custom notification system. Configurable title/message/time. Needs: notification template design.',
    },

    // ── MV-22 ─────────────────────────────────────────────────────────
    {
      id: 'MV-22',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Web Login / Auth Gate',
      description:
        'Researcher login, forgot password, SSO. Protected route redirect.',
      viewStatus: 'missing-view',
      testingPlanIds: ['E8-05', 'E8-06'],
      designNotes:
        'Web e2e tested (auth-gate.spec). Web portal is separate from iOS patient flows. Needs its own flow document.',
    },

    // ── MV-23 ─────────────────────────────────────────────────────────
    {
      id: 'MV-23',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Study Management',
      description:
        'Create study, configure encryption, edit session config, archive study.',
      viewStatus: 'missing-view',
      testingPlanIds: ['P0-01', 'P0-02', 'P0-03', 'P0-04', 'P0-05', 'P0-06', 'P0-07'],
      designNotes:
        'Admin web views. Study creation wizard, config editor, archive flow.',
    },

    // ── MV-24 ─────────────────────────────────────────────────────────
    {
      id: 'MV-24',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Member Management',
      description:
        'Add/remove researchers, change roles, invitation flow.',
      viewStatus: 'missing-view',
      testingPlanIds: ['P0-08', 'P0-09', 'P0-10', 'P0-11', 'P0-12'],
      designNotes:
        'Admin web views. Member list, role selector, invite by email.',
    },

    // ── MV-25 ─────────────────────────────────────────────────────────
    {
      id: 'MV-25',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Patient Enrollment',
      description:
        'Enroll patient with ID and treatment start date. Duplicate detection.',
      viewStatus: 'missing-view',
      testingPlanIds: ['P0-13', 'P0-14', 'P0-15', 'P0-16'],
      designNotes:
        'Admin web views. Enrollment form, date picker, conflict errors.',
    },

    // ── MV-26 ─────────────────────────────────────────────────────────
    {
      id: 'MV-26',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Device Provisioning',
      description:
        'Create device tokens, assign to patients, revoke tokens.',
      viewStatus: 'missing-view',
      testingPlanIds: ['P0-17', 'P0-18', 'P0-19', 'P0-20', 'P0-21'],
      designNotes:
        'Admin web views + iOS admin login. e2e tested (admin-provisioning.spec). Token management UI.',
    },

    // ── MV-27 ─────────────────────────────────────────────────────────
    {
      id: 'MV-27',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Researcher Dashboard — Study View',
      description:
        'View patient data with client-side decryption. Aggregated scores, medians.',
      viewStatus: 'missing-view',
      testingPlanIds: ['W7-01', 'W7-02', 'W7-03', 'W7-04', 'W7-05', 'W7-06'],
      designNotes:
        'Web dashboard. Encryption password entry, patient list, score visualization, binary vs log toggle.',
    },

    // ── MV-28 ─────────────────────────────────────────────────────────
    {
      id: 'MV-28',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Data Export',
      description:
        'Export study data as XLSX. Password-protected decryption. Include/exclude open sessions.',
      viewStatus: 'missing-view',
      testingPlanIds: ['W7-07', 'W7-08', 'W7-09', 'W7-10'],
      designNotes:
        'Export wizard. Sheet preview, password prompt, download.',
    },

    // ── MV-29 ─────────────────────────────────────────────────────────
    {
      id: 'MV-29',
      phase: 'Admin & Researcher Portal',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Admin Device & Feedback Views',
      description:
        'View device feedback with screenshots, manage registered devices, user management.',
      viewStatus: 'missing-view',
      testingPlanIds: ['W7-11', 'W7-12', 'W7-13', 'W7-14', 'W7-15'],
      designNotes:
        'Admin web views. Feedback list, device table, user CRUD.',
    },

    // ── MV-30 ─────────────────────────────────────────────────────────
    {
      id: 'MV-30',
      phase: 'System & Cross-Cutting',
      type: 'system',
      typeLabel: 'System',
      title: 'Encryption (Server-Side)',
      description:
        'AES-256-GCM encryption of daily results and events. Server never decrypts.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['E8-01', 'E8-02', 'E8-03', 'E8-04'],
      designNotes:
        'No UI needed. Backend behavior. Client-side Web Crypto API handles encryption.',
    },

    // ── MV-31 ─────────────────────────────────────────────────────────
    {
      id: 'MV-31',
      phase: 'System & Cross-Cutting',
      type: 'system',
      typeLabel: 'System',
      title: 'Auth Boundaries',
      description:
        'Token validation, study access checks, device auth.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['E8-05', 'E8-06', 'E8-07', 'E8-08'],
      designNotes:
        'Error responses shown in login/auth gate screens. No separate view needed.',
    },

    // ── MV-32 ─────────────────────────────────────────────────────────
    {
      id: 'MV-32',
      phase: 'System & Cross-Cutting',
      type: 'system',
      typeLabel: 'System',
      title: 'Data Validation / Format',
      description:
        'Zod schema validation, snake_case to camelCase conversion, Firestore timestamp coercion.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['E8-09', 'E8-10', 'E8-11'],
      designNotes:
        'Backend only. Error shown as form validation feedback.',
    },

    // ── MV-33 ─────────────────────────────────────────────────────────
    {
      id: 'MV-33',
      phase: 'System & Cross-Cutting',
      type: 'system',
      typeLabel: 'System',
      title: 'Concurrency / Race Conditions',
      description:
        'Stale API data on session complete, DONE re-resolve behavior.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['E8-12', 'E8-13', 'E8-14'],
      designNotes:
        'Loading states may be needed. Re-resolve is transparent to patient.',
    },

    // ── MV-34 ─────────────────────────────────────────────────────────
    {
      id: 'MV-34',
      phase: 'System & Cross-Cutting',
      type: 'system',
      typeLabel: 'System',
      title: 'Study Locking',
      description:
        'Study becomes immutable after first patient event.',
      viewStatus: 'system-no-ui',
      testingPlanIds: ['E8-15', 'E8-16'],
      designNotes:
        'Admin web error state when trying to edit locked study. No separate view.',
    },
  ],
};
