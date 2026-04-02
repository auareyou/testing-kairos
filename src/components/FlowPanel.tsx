import { useCallback, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FLOWS } from '../data';
import type { FlowTab } from '../data/types';
import { FlowHeader } from './FlowHeader';
import { FlowCardArea } from './FlowCard';
import { BottomNav } from './BottomNav';
import styles from './FlowPanel.module.css';

// Collect all steps across all flows for the global coverage summary
const allSteps = Object.values(FLOWS).flatMap(f => f.steps);

export function FlowPanel() {
  const { flowKey = 'first-day', step = '1' } = useParams<{ flowKey: string; step: string }>();
  const navigate = useNavigate();

  const flow = FLOWS[flowKey as FlowTab];
  const currentIndex = Math.max(0, Math.min(parseInt(step, 10) - 1, flow ? flow.steps.length - 1 : 0));

  const goTo = useCallback((index: number) => {
    navigate(`/${flowKey}/${index + 1}`, { replace: true });
  }, [flowKey, navigate]);

  const next = useCallback(() => {
    if (flow && currentIndex < flow.steps.length - 1) goTo(currentIndex + 1);
  }, [flow, currentIndex, goTo]);

  const prev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [next, prev]);

  if (!flow) {
    return <div className={styles.main}><p style={{ padding: 32 }}>Flow not found.</p></div>;
  }

  return (
    <div className={styles.main}>
      <FlowHeader flow={flow} allSteps={allSteps} />
      <FlowCardArea steps={flow.steps} current={currentIndex} />
      <BottomNav
        current={currentIndex}
        total={flow.steps.length}
        onPrev={prev}
        onNext={next}
        steps={flow.steps}
        onNavigate={goTo}
      />
    </div>
  );
}
