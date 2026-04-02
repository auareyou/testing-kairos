import { useNavigate, useParams } from 'react-router-dom';
import { FLOW_TABS } from '../data';
import { SunIcon } from './icons';
import styles from './Topbar.module.css';

export function Topbar() {
  const navigate = useNavigate();
  const { flowKey } = useParams<{ flowKey: string }>();

  return (
    <header className={styles.topbar} role="banner">
      <div className={styles.left}>
        <div className={styles.logo} aria-hidden="true">
          <SunIcon />
        </div>
        <span className={styles.title}>Circadian — User Flows</span>
      </div>
      <nav className={styles.tabs} role="tablist" aria-label="Flow tabs">
        {FLOW_TABS.map(tab => (
          <button
            key={tab.key}
            className={flowKey === tab.key ? styles.tabActive : styles.tab}
            role="tab"
            aria-selected={flowKey === tab.key}
            tabIndex={flowKey === tab.key ? 0 : -1}
            onClick={() => navigate(`/${tab.key}/1`)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
      <div className={styles.spacer} />
    </header>
  );
}
