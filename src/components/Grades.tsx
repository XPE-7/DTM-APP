import React from 'react';
import { motion } from 'framer-motion';
import { Grade } from '../types';

const grades: Grade[] = [
  {
    subject: 'Mathematics',
    score: 92,
    date: new Date('2024-03-01')
  },
  {
    subject: 'Physics',
    score: 88,
    date: new Date('2024-03-05')
  },
  // Add more grades
];

const Grades = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Academic Performance</h2>
      <div className="grid gap-6">
        {grades.map((grade, index) => (
          <motion.div
            key={grade.subject}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg">{grade.subject}</h3>
                <p className="text-sm text-gray-600">
                  {grade.date.toLocaleDateString()}
                </p>
              </div>
              <div className="relative">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold ${
                    grade.score >= 90
                      ? 'bg-green-100 text-green-700'
                      : grade.score >= 80
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {grade.score}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Grades;