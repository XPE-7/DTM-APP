import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Circle, Plus, AlertCircle } from 'lucide-react';
import { Task } from '../types';
import { useTheme } from '../context/ThemeContext';

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Math Assignment',
    dueDate: new Date('2024-03-20'),
    completed: false,
    subject: 'Mathematics',
    priority: 'high',
    description: 'Complete chapters 5-7 exercises'
  },
  {
    id: '2',
    title: 'Physics Lab Report',
    dueDate: new Date('2024-03-22'),
    completed: false,
    subject: 'Physics',
    priority: 'medium',
    description: 'Write up the experimental results'
  }
];

const Tasks = () => {
  const [tasks, setTasks] = React.useState<Task[]>(initialTasks);
  const [showAddTask, setShowAddTask] = React.useState(false);
  const [newTask, setNewTask] = React.useState<Partial<Task>>({
    priority: 'medium'
  });
  const { theme } = useTheme();

  const toggleTask = (taskId: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.title && newTask.subject && newTask.dueDate) {
      setTasks(prev => [
        ...prev,
        {
          ...newTask as Task,
          id: Date.now().toString(),
          completed: false
        }
      ]);
      setShowAddTask(false);
      setNewTask({ priority: 'medium' });
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-500';
      case 'medium':
        return 'text-yellow-500';
      case 'low':
        return 'text-green-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`text-2xl font-bold ${theme.text}`}>Tasks & Homework</h2>
        <button
          onClick={() => setShowAddTask(true)}
          className={`px-4 py-2 bg-gradient-to-r ${theme.primary} text-white rounded-lg 
            hover:opacity-90 transition-opacity flex items-center gap-2`}
        >
          <Plus className="w-4 h-4" />
          Add Task
        </button>
      </div>

      <AnimatePresence>
        {showAddTask && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${theme.isDark ? 'bg-gray-700' : 'bg-gray-50'} p-4 rounded-lg`}
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Task title"
                value={newTask.title || ''}
                onChange={e => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                className={`w-full p-2 rounded-lg ${
                  theme.isDark ? 'bg-gray-600 text-white' : 'bg-white'
                }`}
              />
              <input
                type="text"
                placeholder="Subject"
                value={newTask.subject || ''}
                onChange={e => setNewTask(prev => ({ ...prev, subject: e.target.value }))}
                className={`w-full p-2 rounded-lg ${
                  theme.isDark ? 'bg-gray-600 text-white' : 'bg-white'
                }`}
              />
              <textarea
                placeholder="Description (optional)"
                value={newTask.description || ''}
                onChange={e => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                className={`w-full p-2 rounded-lg ${
                  theme.isDark ? 'bg-gray-600 text-white' : 'bg-white'
                }`}
              />
              <div className="flex gap-4">
                <input
                  type="date"
                  value={newTask.dueDate ? new Date(newTask.dueDate).toISOString().split('T')[0] : ''}
                  onChange={e => setNewTask(prev => ({ ...prev, dueDate: new Date(e.target.value) }))}
                  className={`p-2 rounded-lg ${
                    theme.isDark ? 'bg-gray-600 text-white' : 'bg-white'
                  }`}
                />
                <select
                  value={newTask.priority}
                  onChange={e => setNewTask(prev => ({ ...prev, priority: e.target.value as Task['priority'] }))}
                  className={`p-2 rounded-lg ${
                    theme.isDark ? 'bg-gray-600 text-white' : 'bg-white'
                  }`}
                >
                  <option value="low">Low Priority</option>
                  <option value="medium">Medium Priority</option>
                  <option value="high">High Priority</option>
                </select>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowAddTask(false)}
                  className={`px-4 py-2 ${
                    theme.isDark ? 'bg-gray-600' : 'bg-gray-200'
                  } rounded-lg`}
                >
                  Cancel
                </button>
                <button
                  onClick={addTask}
                  className={`px-4 py-2 bg-gradient-to-r ${theme.primary} text-white rounded-lg`}
                >
                  Add Task
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="grid gap-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`p-4 rounded-lg border ${
              theme.isDark
                ? task.completed
                  ? 'bg-gray-700 border-gray-600'
                  : 'bg-gray-800 border-gray-700'
                : task.completed
                ? 'bg-green-50 border-green-200'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => toggleTask(task.id)}
                className={`text-gray-600 hover:text-${theme.accent}-600`}
              >
                {task.completed ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className={`font-medium ${
                      task.completed
                        ? 'line-through text-gray-500'
                        : theme.text
                    }`}
                  >
                    {task.title}
                  </h3>
                  <AlertCircle className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
                </div>
                {task.description && (
                  <p className={`text-sm ${
                    theme.isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {task.description}
                  </p>
                )}
                <p className={`text-sm ${
                  theme.isDark ? 'text-gray-500' : 'text-gray-600'
                }`}>
                  Due: {task.dueDate.toLocaleDateString()}
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                theme.isDark
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-indigo-100 text-indigo-800'
              }`}>
                {task.subject}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;