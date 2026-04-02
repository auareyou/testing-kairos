import { Routes, Route, Navigate } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { FlowPanel } from './components/FlowPanel';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/first-day/1" replace />} />
        <Route path="/:flowKey/:step?" element={<FlowPanel />} />
      </Routes>
    </>
  );
}
