import { Plus } from 'lucide-react';
import { Task } from '../lib/supabase';
import { TaskCard } from './TaskCard';

interface ColumnProps {
  title: string;
  status: Task['status'];
  tasks: Task[];
  onAddTask: (status: Task['status']) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  onDragStart: (e: React.DragEvent, task: Task) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, status: Task['status']) => void;
}

const statusColors = {
  todo: 'glass-effect',
  in_progress: 'glass-effect',
  done: 'glass-effect',
};

const headerColors = {
  todo: 'text-cyan-300',
  in_progress: 'text-blue-300',
  done: 'text-emerald-300',
};

const buttonBgGradients = {
  todo: 'from-cyan-500/20 to-blue-500/10 hover:from-cyan-500/30 hover:to-blue-500/20',
  in_progress: 'from-blue-500/20 to-purple-500/10 hover:from-blue-500/30 hover:to-purple-500/20',
  done: 'from-emerald-500/20 to-cyan-500/10 hover:from-emerald-500/30 hover:to-cyan-500/20',
};

export function Column({
  title,
  status,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onDragStart,
  onDragOver,
  onDrop,
}: ColumnProps) {
  return (
    <div className={`rounded-2xl border ${statusColors[status]} p-6 flex flex-col min-h-[600px] card-shadow`}>
      <div className={`flex items-center justify-between mb-6 pb-4 border-b border-white/10 bg-gradient-to-r ${buttonBgGradients[status]} rounded-lg p-3 -mx-6 px-6 mb-6`}>
        <div>
          <h2 className={`text-xl font-bold ${headerColors[status]}`}>{title}</h2>
          <p className="text-sm text-white/60">{tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}</p>
        </div>
        <button
          onClick={() => onAddTask(status)}
          className={`p-2.5 bg-gradient-to-br ${buttonBgGradients[status].split(' ')[0]} rounded-lg transition-all hover:scale-110 shadow-lg`}
          title="Add task"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>
      <div
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, status)}
        className="flex-1 space-y-3"
      >
        {tasks
          .sort((a, b) => a.position - b.position)
          .map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={onEditTask}
              onDelete={onDeleteTask}
              onDragStart={onDragStart}
            />
          ))}
      </div>
    </div>
  );
}
