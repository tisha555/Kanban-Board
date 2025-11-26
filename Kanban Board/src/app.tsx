import { useState } from 'react';
import { Kanban } from 'lucide-react';
import { useTasks } from './hooks/useTasks';
import { Column } from './components/Column';
import { TaskModal } from './components/TaskModal';
import { Task } from './lib/supabase';

function App() {
  const { tasks, loading, addTask, updateTask, deleteTask, moveTask } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [targetStatus, setTargetStatus] = useState<Task['status']>('todo');
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const handleAddTask = (status: Task['status']) => {
    setTargetStatus(status);
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setTargetStatus(task.status);
    setIsModalOpen(true);
  };

  const handleSaveTask = (title: string, description: string) => {
    if (editingTask) {
      updateTask(editingTask.id, { title, description });
    } else {
      addTask(title, description, targetStatus);
    }
  };

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, newStatus: Task['status']) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      const tasksInNewStatus = tasks.filter(t => t.status === newStatus);
      moveTask(draggedTask.id, newStatus, tasksInNewStatus.length);
    }
    setDraggedTask(null);
  };

  const columns = [
    { title: 'To Do', status: 'todo' as const },
    { title: 'In Progress', status: 'in_progress' as const },
    { title: 'Done', status: 'done' as const },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-lg shadow-blue-500/50">
              <Kanban className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kanban Board
              </h1>
              <p className="text-cyan-300/80 text-lg mt-1">Organize your tasks efficiently</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {columns.map((column) => (
            <Column
              key={column.status}
              title={column.title}
              status={column.status}
              tasks={tasks.filter(t => t.status === column.status)}
              onAddTask={handleAddTask}
              onEditTask={handleEditTask}
              onDeleteTask={deleteTask}
              onDragStart={handleDragStart}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            />
          ))}
        </div>
      </div>

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveTask}
        task={editingTask}
      />
    </div>
  );
}

export default App;
