import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Book, MapPin, MessageCircle, User, Moon, Sun, Bell } from 'lucide-react';
import Map from './Map';
import Schedule from './Schedule';
import Tasks from './Tasks';
import Grades from './Grades';
import Social from './Social';
import Notifications from './Notifications';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const [activeTab, setActiveTab] = React.useState('schedule');
  const [showNotifications, setShowNotifications] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const tabs = [
    { id: 'schedule', icon: Calendar, label: 'Schedule' },
    { id: 'tasks', icon: Book, label: 'Tasks' },
    { id: 'map', icon: MapPin, label: 'Map' },
    { id: 'social', icon: MessageCircle, label: 'Social' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'schedule':
        return <Schedule />;
      case 'tasks':
        return <Tasks />;
      case 'map':
        return <Map />;
      case 'social':
        return <Social />;
      case 'profile':
        return <Grades />;
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme.background}`}>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <header className="mb-8 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl font-bold bg-gradient-to-r ${theme.primary} bg-clip-text text-transparent`}
          >
            Student Hub
          </motion.h1>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-gray-100'} 
                hover:bg-opacity-80 transition-colors`}
            >
              {theme.isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className={`p-2 rounded-lg ${theme.isDark ? 'bg-gray-800' : 'bg-gray-100'} 
                hover:bg-opacity-80 transition-colors relative`}
            >
              <Bell className={`w-5 h-5 ${theme.isDark ? 'text-gray-300' : 'text-gray-600'}`} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
          </div>
        </header>

        <div className="flex gap-6">
          <motion.nav 
            className={`flex flex-col gap-4 ${theme.isDark ? 'bg-gray-800' : 'bg-white'} 
              p-4 rounded-xl shadow-lg w-20`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${theme.primary} text-white`
                    : `${theme.isDark ? 'text-gray-400 hover:bg-gray-700' : 'text-gray-500 hover:bg-gray-100'}`
                }`}
              >
                <tab.icon className="w-6 h-6" />
              </button>
            ))}
          </motion.nav>

          <div className="flex-1 relative">
            <AnimatePresence>
              {showNotifications && (
                <Notifications onClose={() => setShowNotifications(false)} />
              )}
            </AnimatePresence>

            <motion.main 
              className={`${theme.isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {renderContent()}
            </motion.main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;