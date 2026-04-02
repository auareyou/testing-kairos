import type { FlowConfig } from './types';

export const normalDayFlow: FlowConfig = {
  key: 'normal-day',
  title: 'Normal Day — Daily Session',
  subtitle:
    'Day 1–14 · Alarm → Check-in → Light session → Dashboard · Est. 45–60 min total',
  steps: [
    // ── ND-1 ──────────────────────────────────────────────────────────
    {
      id: 'ND-1',
      phase: 'Wake Up',
      type: 'system',
      typeLabel: 'System',
      title: 'Alarm Goes Off',
      description:
        'The iPad alarm fires at the patient\'s personalized wake time. The alarm screen shows a soft sunrise gradient with two clear options: "Snooze" and "Check In."',
      viewStatus: 'placeholder',
      testingPlanIds: ['M5-15'],
      designNotes:
        'Maps to wakeup-alarm notification (startMin + buffer). Large 48pt buttons. Calm, not jarring. Gentle rising tone.',
      dataFields: [
        {
          text: 'Alarm fires at personalized wake time (set during onboarding or previous day)',
        },
        {
          text: 'Screen shows: soft sunrise gradient, current time, two buttons',
        },
        {
          text: 'Sound: gentle, rising tone — not jarring. Designed for a patient who may be groggy or in pain.',
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The alarm screen is the first thing the patient sees. It must feel calm, not demanding. Large buttons (minimum 48pt targets), high contrast. The \'Check In\' button should be visually heavier than \'Snooze\' to gently bias toward the desired action — but snooze must never feel punishing.',
        },
        {
          type: 'hooked',
          label: 'Hooked · External Trigger',
          text: 'The alarm is the daily external trigger that re-enters the patient into the Hook cycle. It arrives at a predictable time, in a consistent context (waking up), paired with a clear action (tap Check In). The trigger does the heavy lifting — the patient\'s only job is to respond.',
        },
      ],
    },

    // ── ND-2 ──────────────────────────────────────────────────────────
    {
      id: 'ND-2',
      phase: 'Wake Up',
      type: 'action',
      typeLabel: 'User Action',
      title: 'Snooze or Check In',
      description:
        'Patient chooses: tap "Snooze" (delays alarm by 15 minutes, allowed once) or tap "Check In" to enter the app and begin their morning routine.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      designNotes:
        'No direct testing scenario — needs one. Snooze limit, push notification after ignore. Single-snooze design.',
      dataFields: [
        { text: 'Tap "Snooze" → alarm silences, reschedules +15 min' },
        { text: 'Tap "Check In" → opens app to To-Do view' },
        {
          text: 'Second snooze not allowed — after first snooze, only "Check In" appears',
          conditional: true,
        },
        {
          text: 'If alarm is ignored entirely → push notification after 30 min',
          conditional: true,
        },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'warn',
          label: 'Edge Case',
          text: 'Only one snooze is allowed. The second alarm shows only \'Check In.\' This prevents snooze spirals while still respecting that some patients need a few extra minutes. The 15-minute window is calibrated to keep the session within the therapeutic light window.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Reducing Friction',
          text: 'The single-snooze design acknowledges human weakness without enabling it. One snooze says \'we understand you\'re tired.\' No snooze at all says \'we don\'t care.\' Infinite snooze says \'this doesn\'t matter.\' One is the respectful middle ground.',
        },
      ],
    },

    // ── ND-3 ──────────────────────────────────────────────────────────
    {
      id: 'ND-3',
      phase: 'Morning To-Do',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Today\'s Tasks',
      description:
        'The app opens to a simple To-Do list showing two items for today. Tasks are independent — the patient can complete them in any order, but the questionnaire is presented first since it takes only 2 minutes.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S2-01'],
      designNotes:
        'Maps to treatment_daily_survey resolve. Two items max. Check-in can be skipped (session is critical). Clear "Start" buttons.',
      dataFields: [
        {
          text: '1. Daily Check-In — "2 min · 8 quick questions about last night" → status: Not started',
        },
        {
          text: '2. Light Session — "Due by [time] · [duration] min" → status: Not started',
        },
      ],
      dataGridColumns: 1,
      edgeCases: [
        {
          question: 'What if the patient skips the check-in?',
          answer:
            'Allow it. The light session is the clinically critical action. The check-in is important for data but should never block the session. Show a gentle reminder later.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Two items maximum. No long list, no scrolling. Each task shows: title, time estimate, due time (for the session), and a clear \'Start\' button. The due time on the light session promotes consistency — it anchors the habit to a specific window.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Internal Trigger',
          text: 'By day 3–4, the patient should start associating waking up with \'I have two things to do.\' The To-Do view is the bridge between the external trigger (alarm) and the internal trigger (morning routine habit). Keep it identical every day so the pattern becomes automatic.',
        },
      ],
    },

    // ── ND-4 ──────────────────────────────────────────────────────────
    {
      id: 'ND-4',
      phase: 'Daily Check-In',
      type: 'input',
      typeLabel: 'User Input',
      title: 'Check-In — Sleep & Wake',
      description:
        'First half of the daily questionnaire. Four questions about how the patient slept and how they feel this morning. One question per screen, large inputs, no typing required.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S2-02', 'S2-03'],
      designNotes:
        'One question per screen. Large tap targets. Icons alongside text. Progress "1 of 8". Scroll wheel pickers, preset slider marks.',
      dataFields: [
        { text: 'Q1: How are you feeling? → 3 options: Tired / In Between / Rested' },
        { text: 'Q2: What time did you go to bed last night? → Time picker (scroll wheel)' },
        { text: 'Q3: Did you wake up during the night? → Yes / No toggle' },
        {
          text: 'Q4: How long were you awake? → Minutes slider (only if Q3 = Yes)',
          conditional: true,
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'One question per screen. Large tap targets for the three-option selector (Tired / In Between / Rested). Use icons alongside text — a tired face, a neutral face, a rested face. No emoji, just simple line illustrations. Progress indicator: \'1 of 8\' shown subtly at top.',
        },
        {
          type: 'warn',
          label: 'Senior-First Principle',
          text: 'Time pickers must use scroll wheels, not manual text entry. The \'minutes awake\' slider should have preset marks at 5, 10, 15, 30, 45, 60 to reduce precision anxiety. A patient should never feel like they need to remember exact minutes.',
        },
      ],
    },

    // ── ND-5 ──────────────────────────────────────────────────────────
    {
      id: 'ND-5',
      phase: 'Daily Check-In',
      type: 'input',
      typeLabel: 'User Input',
      title: 'Check-In — Naps & Morning',
      description:
        'Second half of the daily questionnaire. Four questions about wake time and yesterday\'s nap habits. Conditional questions appear only when relevant.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S2-02', 'S2-04'],
      designNotes:
        'Same patterns as Sleep & Wake. Conditional fields animate smoothly. Toggle back collapses gracefully. Completion = calm checkmark.',
      dataFields: [
        { text: 'Q5: What time did you wake up this morning? → Time picker (scroll wheel)' },
        { text: 'Q6: Did you take a nap yesterday? → Yes / No toggle' },
        {
          text: 'Q7: How long was the nap? → Minutes slider (only if Q6 = Yes)',
          conditional: true,
        },
        {
          text: 'Q8: What time did you nap? → Time picker (only if Q6 = Yes)',
          conditional: true,
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Same interaction patterns as the first half. The conditional questions (Q7, Q8) should animate in smoothly when the patient selects \'Yes\' on Q6 — no page reload, no jarring jump. If they toggle back to \'No,\' the fields collapse gracefully.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Investment',
          text: 'Each daily check-in is a micro-investment. The patient is depositing data that makes their treatment more personalized over time. Frame the completion moment as: \'Check-in complete\' with a single checkmark — not a celebration, just a calm acknowledgment.',
        },
      ],
    },

    // ── ND-6 ──────────────────────────────────────────────────────────
    {
      id: 'ND-6',
      phase: 'Content Selection',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Choose Your Content',
      description:
        'Patient selects what to watch or listen to during their light session. Pre-loaded apps appear as large tiles. The goal: remove every possible barrier between \'sitting down\' and \'starting the session.\'',
      viewStatus: 'placeholder',
      testingPlanIds: ['S2-11'],
      designNotes:
        'Maps to contentUrl in BEGIN_SESSION. Fallback if no apps connected. Reduces daily decision fatigue. Reward bundling.',
      dataFields: [
        { text: 'Netflix' },
        { text: 'YouTube' },
        { text: 'Instagram' },
        { text: 'Facebook' },
        { text: 'Spotify' },
        { text: 'Other' },
      ],
      dataGridColumns: 3,
      edgeCases: [
        {
          question: 'What if no apps are connected?',
          answer:
            'Show the connection flow from onboarding. After connecting, return here. Never block the session — offer a \'Continue without content\' fallback.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Large tiles, app icons, one tap to launch. The selected content opens in a split view or embedded player — the patient should not leave the Circadian app context. A \'Last watched\' shortcut at the top reduces daily decision fatigue.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Reward Bundling',
          text: 'This is the core behavioral insight of Circadian: pair a thing the patient must do (light therapy) with a thing they want to do (watch a show). The entertainment is the variable reward. Every session becomes \'Netflix time\' rather than \'treatment time.\'',
        },
      ],
    },

    // ── ND-7 ──────────────────────────────────────────────────────────
    {
      id: 'ND-7',
      phase: 'Light Session',
      type: 'action',
      typeLabel: 'User Action',
      title: 'Start Session',
      description:
        'Patient taps play. The light device activates, content begins, and the session timer starts counting up. This is the moment the therapeutic value begins.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S2-11', 'S2-12'],
      designNotes:
        'BEGIN_SESSION event. Timer counts UP for accomplishment. Target visible but secondary. "12 of 45 min".',
      dataFields: [
        { text: 'Patient taps "Start Session" → light device activates' },
        { text: 'Content begins playing in the main area' },
        { text: 'Timer appears subtly at the top: counting up toward session goal' },
        { text: 'Device brightness adjusts based on therapeutic protocol' },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The \'Start Session\' button should be the largest, most obvious element on screen. After tapping, it transitions smoothly into the session view — content fills most of the screen, timer is small and unobtrusive at the top. The patient\'s focus should be on their show, not on the therapy.',
        },
        {
          type: 'warn',
          label: 'Critical Design Decision',
          text: 'The timer counts UP, not down. Counting down creates anxiety (\'I still have 23 minutes left\'). Counting up creates accomplishment (\'I\'ve already done 12 minutes\'). The total target should be visible but secondary — e.g., small text: \'12 of 45 min\'.',
        },
      ],
    },

    // ── ND-8 ──────────────────────────────────────────────────────────
    {
      id: 'ND-8',
      phase: 'Light Session',
      type: 'system',
      typeLabel: 'System',
      title: 'Look-Away Detection',
      description:
        'If the system detects the patient has looked away from the device, it initiates a graduated response: visual warning, then a countdown popup. Designed to be helpful, not punitive.',
      viewStatus: 'placeholder',
      testingPlanIds: ['D3-01', 'D3-02', 'D3-03', 'D3-04', 'D3-05', 'D3-06', 'D3-07'],
      designNotes:
        'Maps to FACE_STATE_CHANGED events. no_face, too_far, gaze_away, eyes_closed pause reasons. Gentle nudge, not error state.',
      dataFields: [
        {
          text: 'Stage 1: Frame goes red + haptic buzz → patient looks back → session resumes immediately',
        },
        {
          text: 'Stage 2: Patient stays away → popup appears with short countdown (e.g., 30 seconds)',
        },
        {
          text: 'Popup message: "Looks like you stepped away. Return to continue your session."',
        },
        {
          text: 'If countdown expires → session pauses, must tap "Resume" to restart timer',
          conditional: true,
        },
        {
          text: 'If patient is away too long (e.g., >5 min) → session expires, must restart from the beginning',
          conditional: true,
        },
      ],
      dataGridColumns: 1,
      edgeCases: [
        {
          question: 'What about bathroom breaks?',
          answer:
            'A "Pause" button should be available in the session controls. Pausing is intentional and respects the patient\'s autonomy. Look-away detection handles unintentional departures only.',
        },
        {
          question: 'What about false positives?',
          answer:
            'Glancing at a phone, sneezing, or adjusting position should not trigger detection. Only sustained absence (5+ seconds of no face detected) triggers Stage 1.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The red frame border must be noticeable but not alarming. Think \'gentle nudge,\' not \'error state.\' The haptic should be a soft double-tap, not a harsh buzz. The popup countdown should use large numbers and a clear \'I\'m here\' button.',
        },
        {
          type: 'warn',
          label: 'Graceful Recovery',
          text: 'The patient stepped away — maybe they had to answer the door, maybe they felt nauseous. The app\'s job is to welcome them back, not penalize them. Tone: \'Welcome back — ready to continue?\' not \'Session interrupted.\'',
        },
        {
          type: 'hooked',
          label: 'Hooked · Maintaining the Action',
          text: 'Look-away detection protects the therapeutic value of the session without breaking the reward experience. The patient needs to stay in front of the light for the therapy to work, but the enforcement should feel like guardrails on a road, not a cage.',
        },
      ],
    },

    // ── ND-9 ──────────────────────────────────────────────────────────
    {
      id: 'ND-9',
      phase: 'Light Session',
      type: 'system',
      typeLabel: 'System',
      title: 'Milestone Markers (Every 15 min)',
      description:
        'At every 15-minute interval, the patient receives a subtle acknowledgment: a soft sound, a gentle haptic, and a brief message.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      designNotes:
        'No direct testing scenario — needs one. Toast notification 3 sec. Adapts to prescribed duration. "Halfway there" not "Amazing job!"',
      summaryRows: [
        { label: '15 min', value: 'Soft chime + haptic. "15 minutes — off to a good start."' },
        { label: '30 min', value: 'Soft chime + haptic. "Halfway there."' },
        { label: '45 min', value: 'Soft chime + haptic. "45 minutes — almost done."' },
        { label: '60 min', value: 'Completion sound (distinct). "Session complete."' },
      ],
      edgeCases: [
        {
          question: 'What if the session target is less than 60 min?',
          answer:
            'Milestones adapt to the prescribed duration. For a 30-min session, markers at 10, 20, and 30 min. The final milestone always triggers the completion flow.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The milestone bubble should appear as a small overlay that does not pause or obscure the content. Think: a toast notification that fades in for 3 seconds, then fades out. The sound should be distinct from the alarm and notifications — something unique to Circadian.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Progress Awareness',
          text: 'Milestones break a long session into manageable chunks. 45 minutes feels long. Four chunks of 15 minutes each feels achievable. The patient never has to endure more than 15 minutes before getting acknowledgment. This is the \'small wins\' principle.',
        },
        {
          type: 'warn',
          label: 'Invisible Motivation',
          text: 'Keep the language factual, not celebratory. \'Halfway there\' is a fact. \'Amazing job, keep going!\' is performative. The milestone should confirm progress without performing enthusiasm.',
        },
      ],
    },

    // ── ND-10 ─────────────────────────────────────────────────────────
    {
      id: 'ND-10',
      phase: 'Session Complete',
      type: 'complete',
      typeLabel: 'Complete',
      title: 'Session Complete',
      description:
        'The content fades, the light device dims, and a calm completion screen appears. No confetti, no badges — just a clear confirmation.',
      viewStatus: 'placeholder',
      testingPlanIds: ['D3-21', 'D3-22', 'D3-25'],
      designNotes:
        'Maps to session_end event + finalization. Think Hevy summary but calmer. No confetti. Duration is largest element. Confirms, doesn\'t congratulate.',
      dataFields: [
        {
          text: 'Completion sound plays (warm, distinct tone). Light device dims gradually over 5 seconds.',
        },
      ],
      dataGridColumns: 1,
      summaryRows: [
        { label: 'Session duration', value: '47 min 12 sec' },
        { label: 'Session target', value: '45 min' },
        { label: 'Content watched', value: 'The Bear — S2 E4' },
        { label: 'Milestones reached', value: '4 of 4' },
        { label: 'Daily check-in', value: 'Completed' },
        { label: 'Look-away events', value: '1 (resumed immediately)' },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Think Hevy workout summary but calmer and less gamified. No PR banners, no share buttons, no leaderboards. The summary is for the patient\'s own reference — \'here\'s what you did today.\' The most important number is session duration — make it the largest element.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Completion Ritual',
          text: 'The completion screen is a micro-ritual. It marks the end of the therapeutic action and gives the patient a moment to feel the accomplishment before moving on. The summary is not about metrics — it\'s about evidence.',
        },
        {
          type: 'warn',
          label: 'Respect Over Reward',
          text: 'Do not say \'Great job!\' or \'Amazing session!\' The patient knows if it was great. The summary speaks for itself. A 47-minute session when the target was 45 is its own reward. The app confirms; it does not congratulate.',
        },
      ],
    },

    // ── ND-11 ─────────────────────────────────────────────────────────
    {
      id: 'ND-11',
      phase: 'Session Complete',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Session Insights (Optional)',
      description:
        'Below the summary, the patient can optionally view simple insights about their session and treatment progress.',
      viewStatus: 'placeholder',
      testingPlanIds: ['M5-11', 'M5-12', 'M5-13', 'M5-14'],
      designNotes:
        'Maps to circadian scoring. completionScore (binary/log), wakeTimeScore, bedTimeScore. "X of Y" framing. Never show declining trends.',
      dataFields: [
        { text: 'Sessions completed: 6 of 14' },
        { text: 'Current streak: 6 days' },
        { text: 'Avg. session length: 44 min' },
        { text: 'Check-ins completed: 6 of 6' },
      ],
      dataGridColumns: 2,
      edgeCases: [
        {
          question: 'Should we show trends?',
          answer:
            'Only if the trend is positive or neutral. Never show a declining trend prominently. If sleep quality is worsening, surface that in the clinician dashboard, not here.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'This screen is opt-in — the patient scrolls down or taps \'See details\' to see it. The primary action is \'Continue to Dashboard\' which should be prominent. Insights use the \'X of Y\' framing, not percentages.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Variable Reward',
          text: 'The session stats are a variable reward — each day\'s numbers are slightly different. The patient wonders: \'How long was my session today?\' The variability is gentle, not dramatic, but it creates a small moment of curiosity that reinforces returning tomorrow.',
        },
      ],
    },

    // ── ND-12 ─────────────────────────────────────────────────────────
    {
      id: 'ND-12',
      phase: 'Dashboard Return',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Dashboard — Day Complete',
      description:
        'The patient lands on the dashboard. A subtle animation fills in today\'s checkmark on the timeline. The two To-Do items now show as completed.',
      viewStatus: 'placeholder',
      testingPlanIds: ['M5-03'],
      designNotes:
        'Maps to dashboard with todaySessionDone = true. Checkmark animation is the key daily moment. Streak grows visually.',
      dataFields: [
        {
          text: 'Timeline: today\'s circle fills with a checkmark (0.5s ease animation)',
        },
        {
          text: 'To-Do list: both items show green checkmarks — "Daily Check-In \u2713" and "Light Session \u2713"',
        },
        {
          text: 'Session log: today\'s entry appears at the top with time and duration',
        },
        {
          text: 'Progress area: weekly stats update to reflect completed session',
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The checkmark animation is the single most important visual moment in the daily loop. It should feel satisfying without being theatrical — a smooth fill, not a bouncing celebration. The patient sees their streak grow by one. That visual evidence is the invisible motivation principle in action.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Stored Value',
          text: 'Every completed day adds a checkmark to the timeline. This stored value accumulates — the more checkmarks, the more the patient has invested, and the harder it becomes to break the streak. The streak is never announced; it\'s just visible.',
        },
      ],
    },

    // ── ND-13 ─────────────────────────────────────────────────────────
    {
      id: 'ND-13',
      phase: 'Dashboard Return',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'End-of-Session Guidance',
      description:
        'A brief, calm card appears below the dashboard content with guidance for the rest of the day.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      designNotes:
        'No direct testing scenario. Late completion adjusts messaging. "Try to" not "you must." Bridges today to tomorrow.',
      dataFields: [
        { text: '"Your next session is tomorrow at [time]."' },
        {
          text: '"For best results: try to skip naps today and head to bed around [bedtime]."',
        },
        { text: '"See you tomorrow morning."' },
      ],
      dataGridColumns: 1,
      edgeCases: [
        {
          question: 'What if the patient completed the session late?',
          answer:
            'Adjust the messaging. If completed more than 2 hours past the recommended window: "You completed today\'s session. Tomorrow, try to start closer to [time] for the best results."',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'This card should feel like a gentle send-off, not a lecture. The nap and bedtime guidance are clinically important but should never sound prescriptive. Use \'try to\' not \'you must.\' The tomorrow time anchors the next session, creating anticipation without pressure.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Quest Continuation',
          text: 'The \'see you tomorrow\' message bridges today\'s completed quest to tomorrow\'s. The patient finishes today knowing exactly what comes next and when. This predictability is comforting, not boring — especially for a patient managing treatment fatigue.',
        },
      ],
    },

    // ── ND-14 ─────────────────────────────────────────────────────────
    {
      id: 'ND-14',
      phase: 'Edge Cases & Day End',
      type: 'system',
      typeLabel: 'System',
      title: 'Handling Missed Sessions',
      description:
        'What happens when the patient does not complete their session. The system\'s response must be encouraging, never punitive.',
      viewStatus: 'placeholder',
      testingPlanIds: ['M5-08', 'M5-09', 'M5-10'],
      designNotes:
        'Maps to treatment_session_missed + cancel flows. Never shame. Empty circle visible but not punitive. Alarm fires tomorrow regardless.',
      edgeCases: [
        {
          question: 'Patient snoozed and never checked in',
          answer:
            'Push notification 30 min after alarm: "Your light session is ready whenever you are." Second notification 2 hours later: "There\'s still time for today\'s session." No further notifications. Tomorrow\'s alarm fires normally.',
        },
        {
          question: 'Patient started session but quit early',
          answer:
            'Save partial progress. Dashboard shows: "Day 7 — 12 of 45 min completed." Partial credit visible in the timeline (half-filled circle). Do not count as a missed day.',
        },
        {
          question: 'Patient completed check-in but not the session',
          answer:
            'Check-in data is saved regardless. Dashboard shows check-in as complete, session as pending. Gentle reminder in the afternoon.',
        },
        {
          question: 'Patient misses the day entirely',
          answer:
            'Timeline shows an empty circle for that day. No "missed day" language, no red marks. The next morning\'s alarm fires normally. The app does not reference the missed day — it simply moves forward.',
        },
      ],
      notes: [
        {
          type: 'warn',
          label: 'Critical Design Principle',
          text: 'Never shame. Never highlight failure. The timeline speaks for itself — an empty circle is visible without being punitive. The patient knows they missed a day. The app\'s job is to make coming back easy, not to remind them of what they missed.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Resilience Design',
          text: 'Missed days are expected in any behavioral program. The system must be designed for imperfect adherence, not against it. A patient who misses one day and sees an encouraging app will return. A patient who sees judgment will disengage.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Protecting the Trigger Loop',
          text: 'A missed day must never break the trigger mechanism. The alarm fires tomorrow regardless. The To-Do list resets regardless. The patient re-enters the same loop, in the same way, as if nothing happened. Consistency in the system compensates for inconsistency in the patient.',
        },
      ],
    },

    // ── ND-15 ─────────────────────────────────────────────────────────
    {
      id: 'ND-15',
      phase: 'Edge Cases & Day End',
      type: 'complete',
      typeLabel: 'Complete',
      title: 'Normal Day — Full Cycle',
      description:
        'Summary of the complete Normal Day flow. Every day follows this same loop from alarm to dashboard.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      summaryRows: [
        { label: 'Trigger', value: 'iPad alarm at personalized wake time' },
        { label: 'Morning routine', value: 'Check-in (2 min) + Light session (30–60 min)' },
        { label: 'Session experience', value: 'Content + light therapy, milestone markers' },
        { label: 'Safety systems', value: 'Look-away detection, snooze limit, pause controls' },
        {
          label: 'Completion',
          value: 'Summary screen, dashboard checkmark, tomorrow\'s preview',
        },
        { label: 'Day guidance', value: 'No naps, consistent bedtime' },
        { label: 'If missed', value: 'Encouraging nudges, no shaming, alarm resets tomorrow' },
      ],
      edgeCases: [
        {
          question: 'How does this change over the trial?',
          answer:
            'It doesn\'t. The Normal Day flow is identical from Day 1 to Day 14. Consistency is the design. The only variable is the content the patient watches.',
        },
        {
          question: 'What about weekends?',
          answer:
            'Same flow. The alarm time may differ if the patient\'s free-day schedule differs from workdays (captured in baseline questionnaire), but the structure is identical.',
        },
        {
          question: 'What about clinician check-ins?',
          answer:
            'Handled separately from the daily flow. The clinician dashboard receives the patient\'s data automatically. Any clinician-initiated contact happens outside the app experience.',
        },
      ],
      notes: [
        {
          type: 'hooked',
          label: 'Hooked · Full Cycle Summary',
          text: 'Wake trigger (alarm) → Action (check-in + session) → Variable reward (content + milestone progress) → Investment (completed session data, growing streak). This cycle repeats identically every day. By day 5–7, the external trigger (alarm) should begin transitioning to an internal trigger.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Ally Design',
          text: 'The app is the patient\'s ally, not their taskmaster. Every design decision in this flow asks: \'Would an ally do this?\' An ally reminds you gently. An ally celebrates quietly. An ally does not track your failures. An ally is there tomorrow even when you were not there today.',
        },
      ],
    },
  ],
};
