import type { FlowConfig } from './types';

export const firstDayFlow: FlowConfig = {
  key: 'first-day',
  title: 'First Day — Device Arrives',
  subtitle:
    'Day 0 · No light session · Capitalize on newness energy · Est. 10–15 min setup',
  steps: [
    // ── FD-1 ──────────────────────────────────────────────────────────
    {
      id: 'FD-1',
      phase: 'Receive & Unbox',
      type: 'physical',
      typeLabel: 'Physical',
      variant: 'future',
      title: 'Patient Receives Box',
      description:
        'Package arrives at the patient\'s home with the light therapy device, iPad (pre-loaded with app), and printed quick-start instructions.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      edgeCases: [
        {
          question: 'MVP: Hospital Pickup',
          answer:
            'In the MVP, the patient picks up the device at the hospital. A clinician walks them through the basics in person. The unboxing experience at home is a future iteration.',
        },
      ],
      notes: [
        {
          type: 'warn',
          label: 'Design Note',
          text: 'Include a printed quick-start card in the box. This addresses the fear-of-technology barrier for older or less tech-savvy patients. The card should mirror the onboarding flow exactly — same language, same steps — so nothing feels unfamiliar when they switch to the iPad.',
        },
        {
          type: 'hooked',
          label: 'Hooked · External Trigger',
          text: 'The physical box is the first trigger. Make unboxing feel like opening something special, not medical equipment. The printed card is a fallback trigger if the screen feels intimidating.',
        },
      ],
    },

    // ── FD-2 ──────────────────────────────────────────────────────────
    {
      id: 'FD-2',
      phase: 'Receive & Unbox',
      type: 'physical',
      typeLabel: 'Physical',
      variant: 'future',
      title: 'Open Box & Find Materials',
      description:
        'Patient opens the box, finds the device, iPad, cable, and printed quick-start card. The card says: "Start here."',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The printed card should have 3–4 steps max. Large type. Illustrations, not photos. One arrow pointing to "Turn on iPad" as the single next action. Think IKEA instructions — no words needed.',
        },
      ],
    },

    // ── FD-3 ──────────────────────────────────────────────────────────
    {
      id: 'FD-3',
      phase: 'Onboarding',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Welcome Screen',
      description:
        'Warm, calm welcome. One sentence about what this is. Single button: "Let\'s get started."',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-01', 'S1-02'],
      designNotes:
        'Maps to journeyMachine resolving to onboarding_survey → welcome sub-screen. COMPLETE_WELCOME event. Full-screen minimal layout needed.',
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Full-screen, minimal. One illustration, one line of text, one button. No login, no account creation, no terms to accept. The iPad is pre-configured — this is a medical trial device.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Investment Phase',
          text: 'Every tap the patient makes during setup is a micro-investment. The more they put in now, the more committed they become to completing the trial. Keep each step tiny so the investment accumulates without friction.',
        },
      ],
    },

    // ── FD-4 ──────────────────────────────────────────────────────────
    {
      id: 'FD-4',
      phase: 'Onboarding',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'What to Expect',
      description:
        '3–4 glanceable cards that set expectations for the full trial experience. Swipe or auto-advance.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-03'],
      designNotes:
        'Maps to how-it-works sub-screen. COMPLETE_HOW_IT_WORKS event. Progress dots. ~15 sec/card. Mirror printed card content.',
      dataFields: [
        { text: '① This is a daily morning routine — same time, every day' },
        {
          text: '② Each session is ~30 min of light while you watch something you enjoy',
        },
        {
          text: '③ Good sleep makes treatment work better — no naps, stick to your window',
        },
        { text: '④ We\'ll guide you every step of the way' },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Each card = one illustration + one sentence. Progress dots at bottom. ~15 seconds per card max. Should mirror the printed card content exactly — no new information, just a different format.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Epic Meaning',
          text: 'Frame this as a quest the patient is choosing to undertake. They aren\'t "assigned treatment" — they\'re starting something that could meaningfully improve how they feel. Give the daily routine a sense of purpose, not obligation.',
        },
        {
          type: 'warn',
          label: 'Key Principle',
          text: 'Onboarding mirrors the printed instructions — same content, less reading. Designed to be understood at a glance. No walls of text.',
        },
      ],
    },

    // ── FD-5 ──────────────────────────────────────────────────────────
    {
      id: 'FD-5',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'A. Work Schedule',
      description:
        'Section 1 of 7 — Quick question about work frequency to calibrate the sleep schedule algorithm.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07'],
      designNotes:
        'Part of baseline survey (MCTQ). Large number selector/stepper. Progress: "1 of 7 sections." Build momentum.',
      dataFields: [{ text: 'How many days per week do you work?' }],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Large number selector or simple stepper. One question per screen to keep cognitive load near zero. Show progress: "1 of 7 sections." This is the easiest section — builds momentum.',
        },
      ],
    },

    // ── FD-6 ──────────────────────────────────────────────────────────
    {
      id: 'FD-6',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'B. Workday Sleep',
      description:
        'Section 2 of 7 — Typical sleep patterns on days the patient works.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07'],
      designNotes:
        'Clock-face/scroll-wheel time pickers. Slider for minutes. Conditional alarm question animates in. Edge case: irregular schedules.',
      dataFields: [
        { text: 'Bedtime (get into bed)' },
        { text: 'Try-to-sleep time' },
        { text: 'Minutes to fall asleep' },
        { text: 'Wake-up time' },
        { text: 'Minutes to get out of bed' },
        { text: 'Use alarm clock? (Y/N)' },
        { text: 'Wake before alarm? (if alarm = yes)', conditional: true },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Time pickers should use clock-face or scroll-wheel style inputs — not keyboard entry. For minutes, use a simple slider. Conditional question should animate in smoothly when alarm = yes.',
        },
        {
          type: 'warn',
          label: 'Edge Case',
          text: 'Some patients may have irregular schedules. Prompt "Think about a typical workday" to anchor their answers.',
        },
      ],
    },

    // ── FD-7 ──────────────────────────────────────────────────────────
    {
      id: 'FD-7',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'C. Free Day Sleep',
      description:
        'Section 3 of 7 — Typical sleep patterns on days off. This is the key chronotype signal.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07', 'S1-08', 'S1-09'],
      designNotes:
        'CRITICAL: This data drives chronotype exclusion. midSleep < 720 → CHRONOTYPE_TOO_EARLY (S1-08). midSleep > 1080 → CHRONOTYPE_TOO_LATE (S1-09). Re-use Workday Sleep layout.',
      dataFields: [
        { text: 'Bedtime (get into bed)' },
        { text: 'Try-to-sleep time' },
        { text: 'Minutes to fall asleep' },
        { text: 'Wake-up time' },
        { text: 'Minutes to get out of bed' },
        { text: 'Use alarm clock? (Y/N)' },
        { text: 'Free to choose sleep/wake times?' },
        { text: 'What prevents free choice? (if no)', conditional: true },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Re-use the same layout from Workday Sleep. Familiarity reduces friction. The patient already knows how to answer these — they just did it.',
        },
      ],
    },

    // ── FD-8 ──────────────────────────────────────────────────────────
    {
      id: 'FD-8',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'D. Sleep Habits',
      description:
        'Section 4 of 7 — Quick snapshot of nighttime wakefulness and napping.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07', 'S1-11'],
      designNotes:
        'Quick sliders. "Almost halfway through." Sleep meds question may drive SLEEP_MEDS exclusion (S1-11).',
      dataFields: [
        { text: 'Minutes awake during the night (typical)' },
        { text: 'Typical nap duration (min, 0 if none)' },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Only 2 questions — this section should feel like a breather. Quick slider for each. Reinforce progress: "Almost halfway through."',
        },
      ],
    },

    // ── FD-9 ──────────────────────────────────────────────────────────
    {
      id: 'FD-9',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'E. Work Details',
      description:
        'Section 5 of 7 — Schedule, flexibility, and commute patterns.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07', 'S1-10'],
      designNotes:
        'CRITICAL: Shift work = yes triggers SHIFT_WORK exclusion (S1-10). Flexibility 0-4 labeled scale. Commute type matters for light exposure.',
      dataFields: [
        { text: 'Shift worker? (Y/N)' },
        { text: 'Work start time' },
        { text: 'Work end time' },
        { text: 'Schedule flexibility (0–4 scale)' },
        { text: 'Commute type (Enclosed / Outside / None)' },
        { text: 'Commute to work (min)' },
        { text: 'Commute from work (min)' },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'For flexibility scale, use labeled options: 0 = "Completely fixed" to 4 = "Completely flexible." Commute type matters because outside commute = natural light exposure.',
        },
      ],
    },

    // ── FD-10 ─────────────────────────────────────────────────────────
    {
      id: 'FD-10',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'F. Outdoor Time',
      description:
        'Section 6 of 7 — Natural light exposure on work and free days.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07'],
      designNotes:
        'Visual slider with sun icons. "Almost done — 2 more questions."',
      dataFields: [
        { text: 'Hours outdoors on workdays' },
        { text: 'Hours outdoors on free days' },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Another short section. Use a visual slider with sun icons. Reinforce: "Almost done — 2 more questions."',
        },
      ],
    },

    // ── FD-11 ─────────────────────────────────────────────────────────
    {
      id: 'FD-11',
      phase: 'Baseline Questionnaire',
      type: 'input',
      typeLabel: 'User Input',
      title: 'G. Stimulants & Substances',
      description:
        'Section 7 of 7 — Daily intake that affects circadian rhythm and sleep quality.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04', 'S1-07', 'S1-11'],
      designNotes:
        'Simple +/- steppers, default 0. Sleep medication doses/week → if > 0 triggers SLEEP_MEDS exclusion (S1-11).',
      dataFields: [
        { text: 'Coffee (cups/day)' },
        { text: 'Tea (cups/day)' },
        { text: 'Soft drinks (cans/day)' },
        { text: 'Beer (glasses/day)' },
        { text: 'Wine (glasses/day)' },
        { text: 'Liquor (drinks/day)' },
        { text: 'Cigarettes (per day)' },
        { text: 'Sleep medication (doses/week)' },
      ],
      dataGridColumns: 2,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Use simple +/- steppers for each. Default all to 0. Patient just taps + for what applies. No typing required.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Variable Reward',
          text: 'After this last section, the patient gets something back — their personalized schedule. Framing the questionnaire as "tell us about you so we can build your plan" turns data entry into an investment toward a reward.',
        },
      ],
    },

    // ── FD-12 ─────────────────────────────────────────────────────────
    {
      id: 'FD-12',
      phase: 'Calculate & Personalize',
      type: 'system',
      typeLabel: 'System',
      variant: 'future',
      title: 'Building Your Schedule',
      description:
        'System processes all baseline data to calculate the optimal light therapy window and recommended wake time. This step is not dynamic yet — schedule is currently set by the clinician.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-07'],
      designNotes:
        'Maps to COMPLETE_SURVEY event. System calculates optimal window. MVP: clinician-set schedule. Future: algorithm-driven. Anticipation moment.',
      edgeCases: [
        {
          question: 'MVP: Clinician-Set Schedule',
          answer:
            'In the MVP, the clinician sets the light therapy window based on the questionnaire data. The dynamic, algorithm-driven schedule is a future iteration.',
        },
      ],
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Show a brief loading moment — "Building your schedule..." with a subtle animation. Don\'t make it instant; a 2–3 second pause signals the system is doing real work with their answers. This is a moment of anticipation.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Reward Moment',
          text: 'The pause before the reveal is part of the reward. The patient invested effort in 30+ questions. Now they see the payoff: a plan built just for them.',
        },
      ],
    },

    // ── FD-13 ─────────────────────────────────────────────────────────
    {
      id: 'FD-13',
      phase: 'Set Tomorrow\'s Alarm',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Your Recommended Window',
      description:
        'Show the patient their personalized light therapy window for tomorrow. Large, clear time display. Brief explanation of why this window matters.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-07'],
      designNotes:
        'Post-survey result screen. Session window defaults: startMin 8AM, startMax 7PM, endTime 23:00, 60-min totalExposure.',
      notes: [
        {
          type: 'superbetter',
          label: 'SuperBetter · Power-up',
          text: 'The recommended window is the patient\'s first "power-up." It\'s personal, it\'s based on their data, and it gives them a concrete action for tomorrow. This is the moment the trial stops being abstract and becomes real.',
        },
      ],
    },

    // ── FD-14 ─────────────────────────────────────────────────────────
    {
      id: 'FD-14',
      phase: 'Set Tomorrow\'s Alarm',
      type: 'action',
      typeLabel: 'User Action',
      title: 'Set Alarm for Tomorrow',
      description:
        'Patient confirms or adjusts the suggested wake-up time. Single tap to set. This is the commitment moment — the bridge between today\'s setup and tomorrow\'s first session.',
      viewStatus: 'placeholder',
      testingPlanIds: ['S1-04'],
      designNotes:
        'Maps to set-alarm sub-screen. COMPLETE_SURVEY_QUESTIONS event. Bridges today → tomorrow. Biggest investment moment of Day 0.',
      notes: [
        {
          type: 'warn',
          label: 'Critical Moment',
          text: 'This is THE key action of Day 0. Everything before builds to this. Everything after is bonus. The alarm is what bridges today\'s setup to tomorrow\'s first session.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Investment',
          text: 'Setting the alarm is the patient\'s biggest investment of Day 0. They\'re making a commitment to future action. This stored value increases the likelihood they follow through tomorrow.',
        },
      ],
    },

    // ── FD-15 ─────────────────────────────────────────────────────────
    {
      id: 'FD-15',
      phase: 'Connect Entertainment',
      type: 'optional',
      typeLabel: 'Optional',
      title: 'Connect Entertainment Apps',
      description:
        'Invite the patient to log into streaming and social apps so content is ready for tomorrow\'s session. Clearly marked as optional.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      dataFields: [
        { text: 'Netflix' },
        { text: 'YouTube' },
        { text: 'Instagram' },
        { text: 'Facebook' },
        { text: 'Spotify' },
        { text: 'Other' },
      ],
      dataGridColumns: 3,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'Show app icons in a grid. Tapping one opens the login flow for that app. "You can always do this later" should be visible. Skip button is prominent.',
        },
        {
          type: 'hooked',
          label: 'Hooked · Reducing Action Friction',
          text: 'If entertainment is pre-loaded, tomorrow\'s session has one less barrier. The patient wakes up, sits down, and content is already there. The easier the action, the more likely the habit forms.',
        },
      ],
    },

    // ── FD-16 ─────────────────────────────────────────────────────────
    {
      id: 'FD-16',
      phase: 'Connect Entertainment',
      type: 'system',
      typeLabel: 'System',
      title: 'Schedule Reminder (If Skipped)',
      description:
        'If the patient skips entertainment setup, schedule a push notification for later that evening.',
      viewStatus: 'placeholder',
      testingPlanIds: ['M5-15'],
      designNotes:
        'System notification. Related to notification triggers. Send based on baseline bedtime data.',
      dataFields: [
        {
          text: 'Push notification: "Quick tip — log into your favorite app before bed so it\'s ready for tomorrow morning."',
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'Timing',
          text: 'Send the reminder ~2 hours before the patient\'s reported bedtime (from questionnaire data). Not too early (forgotten), not too late (annoying).',
        },
      ],
    },

    // ── FD-17 ─────────────────────────────────────────────────────────
    {
      id: 'FD-17',
      phase: 'Dashboard Empty State',
      type: 'screen',
      typeLabel: 'Screen',
      title: 'Dashboard — Empty State',
      description:
        'Patient lands on the main dashboard for the first time. Empty but not bare — it previews what\'s coming tomorrow and throughout the trial.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      designNotes:
        'New screen not in testing plan. Needs test scenario. Should feel calm, not empty. "Your streak starts tomorrow."',
      dataFields: [
        {
          text: 'Score area → "Your score will appear after your first session"',
        },
        {
          text: 'Session tracker → Day 1 highlighted, rest empty: "Your streak starts tomorrow"',
        },
        {
          text: 'Tomorrow\'s session → Time + "Your first session is set for [time]"',
        },
        {
          text: 'Progress area → gentle preview of what gets filled over time',
        },
      ],
      dataGridColumns: 1,
      notes: [
        {
          type: 'design',
          label: 'UX Guidance',
          text: 'The dashboard should feel like a calm room they\'ve just walked into, with labeled spots for things that will arrive. Think hotel room with your name on the door, not an empty spreadsheet.',
        },
        {
          type: 'superbetter',
          label: 'SuperBetter · Quest Preview',
          text: 'This is the quest map before the journey begins. The patient can see the path laid out. Seeing the empty tracker with Day 1 highlighted creates anticipation — a desire to "start filling it in."',
        },
        {
          type: 'warn',
          label: 'Key Principle',
          text: 'The patient should think "I know exactly what happens next" — not "there\'s so much to fill in." Orientation without overwhelm.',
        },
      ],
    },

    // ── FD-18 ─────────────────────────────────────────────────────────
    {
      id: 'FD-18',
      phase: 'Day 0 Complete',
      type: 'complete',
      typeLabel: 'Complete',
      title: 'First Day Done',
      description:
        'Patient has completed setup. Alarm is set. They know what tomorrow looks like. The app goes quiet until morning.',
      viewStatus: 'placeholder',
      testingPlanIds: [],
      summaryRows: [
        { label: 'Light therapy', value: 'None (starts Day 1)' },
        { label: 'Setup time', value: '~10–15 minutes' },
        { label: 'Data collected', value: 'Baseline survey (7 sections)' },
        { label: 'Key commitment', value: 'Alarm set for first session' },
        { label: 'Optional', value: 'Entertainment apps connected' },
        { label: 'Day 1 trigger', value: 'Alarm at recommended time' },
      ],
      edgeCases: [
        {
          question: 'What if the patient is too tired to finish?',
          answer:
            'Save progress. Let them resume. Auto-save after each section.',
        },
        {
          question: 'What if device arrives in the evening?',
          answer:
            'Fine — alarm still set for tomorrow. Remind to charge iPad overnight.',
        },
        {
          question: 'What if they skip the questionnaire?',
          answer:
            'Don\'t allow it — data is required. But break it into small enough pieces that it never feels heavy.',
        },
        {
          question: 'What if they struggle with technology?',
          answer:
            'The printed card is the safety net. Good enough to get from "box open" to "alarm set."',
        },
      ],
      notes: [
        {
          type: 'hooked',
          label: 'Hooked · Full Cycle Primed',
          text: 'The alarm is the trigger for tomorrow. Entertainment removes friction from the action. The personalized schedule is the variable reward. The questionnaire and alarm are the investment. The full Hook cycle is loaded and ready for Day 1.',
        },
      ],
    },
  ],
};
