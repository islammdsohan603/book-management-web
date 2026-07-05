'use client';

import { BookOpen } from 'lucide-react';

const ReadBooksButton = ({ singlebook }) => {
  return (
    <div>
      <button className="mt-8 cursor-pointer px-8 py-4 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 font-semibold flex items-center gap-2 hover:scale-105 transition">
        <BookOpen size={20} />
        Read Book
      </button>
    </div>
  );
};

export default ReadBooksButton;
