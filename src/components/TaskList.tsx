import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  TaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, deleteTask, TaskCompletion }) => {
  return (
    // Renders a list of TaskItem components from provided tasks
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          TaskCompletion={TaskCompletion}
        />
      ))}
    </ul>
  );
};

export default TaskList;