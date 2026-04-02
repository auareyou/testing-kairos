import type { Note } from '../data/types';
import { noteIcons } from './icons';
import styles from './NoteCard.module.css';

export function NoteCard({ note }: { note: Note }) {
  return (
    <div className={`${styles.note} ${styles[note.type]}`}>
      <strong>{noteIcons[note.type]}{note.label}</strong>
      {note.text}
    </div>
  );
}
