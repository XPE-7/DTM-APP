import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin } from 'lucide-react';
import { Class } from '../types';

const classes: Class[] = [
  {
    id: '1',
    subject: 'Mathematics',
    time: '09:00 AM',
    room: 'Room 101',
    professor: 'Dr. Smith'
  },
  {
    id: '2',
    subject: 'Physics',
    time: '11:00 AM',
    room: 'Lab 3',
    professor: 'Prof. Johnson'
  },
  // Add more classes
];

const Schedule = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Today's Schedule</h2>
      <div className="grid gap-4">
        {classes.map((class_, index) => (
          <motion.div
            key={class_.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-indigo-900">
                  {class_.subject}
                </h3>
                <p className="text-gray-600">{class_.professor}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {class_.time}
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-1" />
                  {class_.room}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;