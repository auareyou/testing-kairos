import { useRef, useEffect } from 'react';
import type { FlowStep } from '../data/types';
import styles from './PhaseTimeline.module.css';

interface Phase {
  name: string;
  start: number;
  end: number;
}

export function PhaseTimeline({ steps, current, onNavigate }: {
  steps: FlowStep[];
  current: number;
  onNavigate: (index: number) => void;
}) {
  const navRef = useRef<HTMLDivElement>(null);

  // Build phases
  const phases: Phase[] = [];
  steps.forEach((s, i) => {
    if (!phases.length || phases[phases.length - 1].name !== s.phase) {
      phases.push({ name: s.phase, start: i, end: i });
    } else {
      phases[phases.length - 1].end = i;
    }
  });

  // Scroll active phase into view
  useEffect(() => {
    const el = navRef.current?.querySelector(`.${styles.active}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, [current]);

  return (
    <div className={styles.nav} ref={navRef}>
      <div className={styles.timeline} role="group" aria-label="Step progress">
        {phases.map((p, pi) => {
          const isActive = current >= p.start && current <= p.end;
          const isCompleted = current > p.end;
          const groupClass = [
            styles.phaseGroup,
            isActive ? styles.active : '',
            isCompleted ? styles.completed : '',
          ].join(' ');

          return (
            <div
              key={pi}
              className={groupClass}
              onClick={() => onNavigate(isCompleted ? p.start : isActive ? Math.min(current + 1, p.end) : p.start)}
            >
              <div className={styles.phaseName}>{p.name}</div>
              <div className={styles.dots}>
                {Array.from({ length: p.end - p.start + 1 }, (_, j) => {
                  const idx = p.start + j;
                  const dotClass = [
                    styles.dot,
                    idx < current ? styles.dotCompleted : '',
                    idx === current ? styles.dotActive : '',
                  ].join(' ');
                  return (
                    <button
                      key={idx}
                      className={dotClass}
                      aria-label={`Step ${idx + 1}: ${steps[idx].title}`}
                      aria-current={idx === current ? 'step' : undefined}
                      onClick={(e) => { e.stopPropagation(); onNavigate(idx); }}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
