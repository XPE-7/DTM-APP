import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const notifications = [
  {
    id: '1',
    title: 'New Assignment Posted',
    message: 'Physics Lab Report due next week',
    time: '5 minutes ago',
    type: 'academic'
  },
  {
    id: '2',
    title: 'Study Group Invitation',
    message: 'Sarah invited you to join Mathematics study group',
    time: '1 hour ago',
    type: 'social'
  },
  {
    id: '3',
    title: 'Grade Updated',
    message: 'Your Chemistry quiz grade has been posted',
    time: '2 hours ago',
    type: 'grade'
  }
];

interface NotificationsProps {
  onClose: () => void;
}

const Notifications: React.FC<NotificationsProps> = ({ onClose }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`absolute right-0 top-0 w-96 ${
        theme.isDark ? 'bg-gray-800' : 'bg-white'
      } rounded-lg shadow-xl z-50 p-4`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className={`font-semibold ${theme.text}`}>Notifications</h3>
        <button
          onClick={onClose}
          className={`p-1 rounded-lg ${
            theme.isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-3 rounded-lg ${
              theme.isDark ? 'bg-gray-700' : 'bg-gray-50'
            } hover:bg-opacity-80 transition-colors cursor-pointer`}
          >
            <h4 className={`font-medium ${theme.text}`}>{notification.title}</h4>
            <p className={`text-sm ${
              theme.isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {notification.message}
            </p>
            <span className={`text-xs ${
              theme.isDark ? 'text-gray-500' : 'text-gray-400'
            }`}>
              {notification.time}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Notifications;