import { Task } from "../types";

// This module handles all interactions with the browser's localStorage for tasks.

const STORAGE_KEY = "local_students";

export const getLocalTasks = (): Task[] => {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const addLocalTask = (student: Task): void => {
  const tasks = getLocalTasks();
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...tasks, student]));
};

export const setLocalTasks = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
};

export const clearLocalTasks = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};