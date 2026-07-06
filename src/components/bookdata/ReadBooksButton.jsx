'use client';

import { BookOpen, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const ReadBooksButton = ({ singlebook }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleReadeBooks = async e => {
    if (isLoading) return;
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    try {
      setIsLoading(true);

      const res = await fetch(`${baseUrl}/api/read-book`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(singlebook),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('Successfully added to Bookmarks!');
        console.log('success', data);
      } else {
        toast.error(data.message || 'Failed to add bookmark');
      }
    } catch (err) {
      toast.warning('Error connecting to server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleReadeBooks}
        disabled={isLoading}
        className={`mt-8 cursor-pointer px-8 py-4 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 font-semibold flex items-center gap-2 transition 
          ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
      >
        {isLoading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <BookOpen size={20} />
        )}

        {isLoading ? 'Processing...' : 'Read Book'}
      </button>
    </div>
  );
};

export default ReadBooksButton;
