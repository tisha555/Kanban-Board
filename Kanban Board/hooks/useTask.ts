import { useState, useEffect } from 'react';
import { Task } from '../lib/supabase';

const STORAGE_KEY = 'kanban_tasks';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  const loadTasks = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setTasks(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTask = (title: string, description: string, status: Task['status']) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      description,
      status,
      position: tasks.filter(t => t.status === status).length,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, ...updates, updated_at: new Date().toISOString() }
          : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const moveTask = (id: string, newStatus: Task['status'], newPosition: number) => {
    setTasks(prev => {
      const task = prev.find(t => t.id === id);
      if (!task) return prev;

      const updatedTasks = prev.map(t => {
        if (t.id === id) {
          return { ...t, status: newStatus, position: newPosition, updated_at: new Date().toISOString() };
        }
        if (t.status === newStatus && t.position >= newPosition) {
          return { ...t, position: t.position + 1 };
        }
        return t;
      });

      return updatedTasks;
    });
  };

  return {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
    moveTask,
  };
}
