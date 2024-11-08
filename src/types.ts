export interface Task {
  id: string;
  title: string;
  dueDate: Date;
  completed: boolean;
  subject: string;
  priority: 'low' | 'medium' | 'high';
  description?: string;
}

export interface Class {
  id: string;
  subject: string;
  time: string;
  room: string;
  professor: string;
  type: 'lecture' | 'lab' | 'tutorial';
  color: string;
}

export interface Grade {
  subject: string;
  score: number;
  date: Date;
  type: 'exam' | 'assignment' | 'quiz';
  feedback?: string;
}

export interface Place {
  id: string;
  name: string;
  category: 'food' | 'library' | 'gym' | 'store' | 'cafe' | 'study';
  coordinates: [number, number];
  description: string;
  openHours?: string;
  rating?: number;
}

export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
    major?: string;
  };
  content: string;
  likes: number;
  comments: number;
  time: string;
  tags?: string[];
  attachments?: {
    type: 'image' | 'link' | 'file';
    url: string;
    title?: string;
  }[];
}

export interface Theme {
  isDark: boolean;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}