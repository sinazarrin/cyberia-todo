import React, { useState } from 'react';
import { filterCategory } from '../constants';

interface TaskFormProps {
  addTask: (task: string, category: 'personal' | 'work') => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ addTask }) => {
  const [task, setTask] = useState<string>('');
  const [category, setCategory] = useState<'personal' | 'work'>('personal');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!task.trim()) {
      setError('Task cannot be empty');
      return;
    }

    addTask(task, category);
    setTask('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className='flex gap-5 mb-4 justify-center'>
        {
          filterCategory.map(item => (
            <div key={item.id} className='flex gap-1'>
              <label htmlFor={item.state}>{item.state}</label>
              <input type="radio" name="choose-cat" id={item.state} checked={category === item.state} value={item.state} onChange={(e) => setCategory(e.target.value as 'personal' | 'work')} />
            </div>
          ))
        }
      </div>
      <div className="flex items-start gap-2">
        <div className='flex-1'>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className={`w-full p-2 border rounded-lg focus:outline-none focus:ring ${error ? 'border-red-500' : 'border-gray-300'} `}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;