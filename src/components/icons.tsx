import type { ReactNode } from 'react';

// Type/note icons extracted from the source HTML
export const typeIcons: Record<string, ReactNode> = {
  physical: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 5.5l5.5-3 5.5 3-5.5 3z"/><path d="M2.5 5.5v5l5.5 3V8.5"/><path d="M13.5 5.5v5l-5.5 3V8.5"/></svg>,
  screen: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="12" height="9" rx="1.5"/><path d="M5.5 14h5"/><path d="M8 11v3"/></svg>,
  input: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2.5l4 4L6 14H2v-4z"/><path d="M8 4l4 4"/></svg>,
  action: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 1.5v9.5l2.5-2 1.5 4.5 2-0.8-1.5-4.2H14.5z"/></svg>,
  system: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="2"/><path d="M13.5 8a5.5 5.5 0 0 0-.4-1.5l1.2-1.2-1.1-1.1-1.2 1.2A5.5 5.5 0 0 0 10.5 4.5V3h-1.5v-.5h-2V3H5.5v1.5a5.5 5.5 0 0 0-1.5.9L2.8 4.2 1.7 5.3l1.2 1.2A5.5 5.5 0 0 0 2.5 8"/><path d="M2.5 8c0 .5.1 1 .4 1.5l-1.2 1.2 1.1 1.1 1.2-1.2c.4.4.9.7 1.5.9V13h1.5v.5h2V13h1.5v-1.5c.5-.2 1-.5 1.5-.9l1.2 1.2 1.1-1.1-1.2-1.2c.3-.5.4-1 .4-1.5"/></svg>,
  optional: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="5.5"/><path d="M5.5 8h5"/></svg>,
  complete: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="8" r="5.5"/><path d="M5.5 8.5l2 2 3.5-4"/></svg>,
};

export const noteIcons: Record<string, ReactNode> = {
  design: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 14l2-6L11.5 1.5l2.5 2.5L7.5 11.5z"/><path d="M10 4l2 2"/></svg>,
  warn: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2L1.5 13.5h13z"/><path d="M8 7v3"/><circle cx="8" cy="12" r="0.5" fill="currentColor" stroke="none"/></svg>,
  hooked: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 2a3 3 0 0 1 6 0v6a3 3 0 0 1-6 0"/><path d="M8 11v3.5"/><path d="M6 14.5h4"/></svg>,
  superbetter: <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 1.5l2 4 4.5.7-3.3 3.2.8 4.6L8 11.8 3.9 14l.8-4.6L1.5 6.2 6 5.5z"/></svg>,
};

// Arrow icons for navigation
export const ArrowLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
);

export const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
);

export const ChevronRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 3l5 5-5 5"/></svg>
);

export const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
);
