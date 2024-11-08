import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Theme } from '../types';

const lightTheme: Theme = {
  isDark: false,
  primary: 'from-indigo-500 to-purple-500',
  secondary: 'from-pink-500 to-rose-500',
  accent: 'indigo',
  background: 'bg-gray-50',
  text: 'text-gray-900'
};

const darkTheme: Theme = {
  isDark: true,
  primary: 'from-indigo-900 to-purple-900',
  secondary: 'from-pink-900 to-rose-900',
  accent: 'indigo',
  background: 'bg-gray-900',
  text: 'text-gray-100'
};

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: darkTheme,
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(darkTheme);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setTheme(isDark ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev.isDark ? lightTheme : darkTheme;
      localStorage.setItem('darkMode', String(newTheme.isDark));
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);