// app/components/TaskList.tsx
'use client';

import { Task } from '../types';

interface TaskListProps {
    tasks: Task[];
    onToggle: (index: number) => void;
    onDelete: (index: number) => void;
}

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
    return (
        <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
            {tasks.map((t, i) => (
                <li key={i} style={{ marginBottom: 10, display: 'flex', alignItems: 'center' }}>
                    <input
                        type="checkbox"
                        checked={t.completed}
                        onChange={() => onToggle(i)}
                    />
                    <div style={{ marginLeft: 10, flexGrow: 1 }}>
                        <div style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
                            {t.text}
                        </div>
                        {t.deadline && (
                            <small style={{ color: '#888' }}>
                                📅 Deadline: {new Date(t.deadline).toLocaleDateString()}
                            </small>
                        )}
                    </div>
                    <button onClick={() => onDelete(i)} style={{ marginLeft: 10 }}>❌</button>
                </li>
            ))}
        </ul>
    );
}
