"use client";

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="flex items-center space-x-2 bg-pink-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
    >
      <span className="text-xl">❤️</span>
      <span>{likes} Likes</span>
    </button>
  );
}