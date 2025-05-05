// app/components/AddTask.tsx
'use client';

import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Task } from '../types';

interface AddTaskProps {
    onAdd: (task: Task) => void;
}

export default function AddTask({ onAdd }: AddTaskProps) {
    const [text, setText] = useState('');
    const [deadline, setDeadline] = useState('');

    const add = () => {
        if (text.trim() === '') return;
        onAdd({ text, completed: false, deadline });
        setText('');
        setDeadline('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <input
                type="text"
                placeholder="Enter task"
                value={text}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && add()}
                style={{ padding: 8 }}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setDeadline(e.target.value)}
                style={{ padding: 8 }}
            />
            <button onClick={add} style={{ padding: 8, alignSelf: 'flex-start' }}>
                Add
            </button>
        </div>
    );
}
