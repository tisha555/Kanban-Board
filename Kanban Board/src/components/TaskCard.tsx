import { Pencil, Trash2 } from 'lucide-react';
import { Task } from '../lib/supabase';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onDragStart: (e: React.DragEvent, task: Task) => void;
}

export function TaskCard({ task, onEdit, onDelete, onDragStart }: TaskCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-4 border border-white/10 cursor-move hover:border-white/30 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group hover:scale-105 hover:-translate-y-1"
    >
      <div className="flex justify-between items-start gap-2 mb-3">
        <h3 className="font-semibold text-white flex-1 text-sm">{task.title}</h3>
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(task)}
            className="p-1.5 hover:bg-blue-500/30 rounded-lg transition-colors"
            title="Edit task"
          >
            <Pencil className="w-4 h-4 text-cyan-400" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1.5 hover:bg-red-500/30 rounded-lg transition-colors"
            title="Delete task"
          >
            <Trash2 className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </div>
      {task.description && (
        <p className="text-xs text-white/70 line-clamp-3">{task.description}</p>
      )}
    </div>
  );
}
