import React from 'react';
import { Task } from '../types';
import { Trash } from 'iconsax-reactjs';

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  TaskCompletion: (id: number) => void;
}

// Displays a single task with checkbox and delete button
const TaskItem: React.FC<TaskItemProps> = ({ task, deleteTask, TaskCompletion }) => {
  return (
    <li className={`flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm ${task.category === 'work' && 'bg-red-100'}`}>
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => TaskCompletion(task.id)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.text}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white p-1.5 rounded-lg hover:bg-red-600"
      >
        <Trash size="18" color="#fff"/>
      </button>
    </li>
  );
};

export default TaskItem;