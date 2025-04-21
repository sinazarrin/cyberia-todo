import React, { useCallback, useEffect, useState } from 'react'
import TaskForm from './TaskForm';
import TaskFilters from './TaskFilters';
import TaskList from './TaskList';
import { Task } from '../types';
import FilterButton from './FilterButton';
import { getLocalTasks, setLocalTasks } from '../lib/storage';

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'personal' | 'work'>('all');

    useEffect(() => {
        const task: Task[] = getLocalTasks()
        if (task) setTasks(task)
    }, [])

    const syncTasks = useCallback((updatedTasks: Task[]) => {
        setTasks(updatedTasks);
        setLocalTasks(updatedTasks);
    }, []);

    const addTask = (task: string, category: 'personal' | 'work'): void => {
        const newTask = { id: Date.now(), text: task, category, completed: false }
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        setLocalTasks(updatedTasks)
    };

    const deleteTask = (id: number): void => {
        const updateTask = tasks.filter(task => task.id !== id)
        syncTasks(updateTask)
    };

    const TaskCompletion = (id: number): void => {
        const completedTask = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
        syncTasks(completedTask)
    };

    const filteredTasks = tasks.filter((task) => {
        const statusMatch =
            filter === 'all' ||
            (filter === 'active' && !task.completed) ||
            (filter === 'completed' && task.completed);

        const categoryMatch =
            selectedCategory === 'all' || task.category === selectedCategory;

        return statusMatch && categoryMatch;
    });


    return (
        <div className="flex flex-col justify-center lg:flex-row gap-8 items-stretch w-full px-4">
            <div className="bg-white shadow-md rounded-lg p-6 lg:w-[600px] max-w-full h-full">
                <TaskForm addTask={addTask} />
                <TaskFilters
                    setSelectedCategory={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
                <TaskList
                    tasks={filteredTasks}
                    deleteTask={deleteTask}
                    TaskCompletion={TaskCompletion}
                />
            </div>
            <div className="lg:w-[130px] w-full">
                <FilterButton setFilter={setFilter} filter={filter} />
            </div>

        </div>
    );
}

export default TaskManager