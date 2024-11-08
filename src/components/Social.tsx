import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ThumbsUp, Share2 } from 'lucide-react';

const posts = [
  {
    id: '1',
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    content: 'Looking for study partners for tomorrow\'s math exam! Library at 3PM?',
    likes: 12,
    comments: 5,
    time: '2 hours ago'
  },
  {
    id: '2',
    user: {
      name: 'James Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    content: 'Just finished the physics project! Here are some tips for everyone...',
    likes: 24,
    comments: 8,
    time: '4 hours ago'
  }
];

const Social = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Student Community</h2>
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          New Post
        </button>
      </div>

      <div className="space-y-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={post.user.avatar}
                alt={post.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{post.user.name}</h3>
                <p className="text-sm text-gray-500">{post.time}</p>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{post.content}</p>

            <div className="flex gap-6 text-gray-500">
              <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <ThumbsUp className="w-5 h-5" />
                {post.likes}
              </button>
              <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                {post.comments}
              </button>
              <button className="flex items-center gap-2 hover:text-indigo-600 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Social;