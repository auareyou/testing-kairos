import { ArrowLeft, ArrowRight, CheckIcon } from './icons';
import styles from './BottomNav.module.css';

export function BottomNav({ current, total, onPrev, onNext }: {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  const isFirst = current === 0;
  const isLast = current === total - 1;

  return (
    <div className={styles.nav}>
      <button
        className={`${styles.btnBack} ${isFirst ? styles.btnHidden : ''}`}
        onClick={onPrev}
        aria-hidden={isFirst}
        tabIndex={isFirst ? -1 : undefined}
      >
        <ArrowLeft /> Back
      </button>
      <span className={styles.counter}>{current + 1} of {total}</span>
      <button
        className={styles.btnNext}
        onClick={onNext}
        aria-label={isLast ? 'Done — last step' : `Next step`}
      >
        {isLast ? <>Done <CheckIcon /></> : <>Next <ArrowRight /></>}
      </button>
    </div>
  );
}
