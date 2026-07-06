import React from 'react';
import Image from 'next/image';
import { Star, BookOpen, Layers } from 'lucide-react';

const BookMarks = ({ read }) => {
  const {
    title,
    author,
    category,
    price,
    rating,
    pages,
    language,
    image,
    description,
  } = read;

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-slate-900 hover:shadow-xl hover:shadow-purple-500/5">
      <div>
        {/* Book Image Wrapper */}
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-800">
          <img
            src={
              image ||
              'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500'
            }
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Top Badge (Category) */}
          <span className="absolute top-3 left-3 rounded-full bg-purple-500/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-xs">
            {category}
          </span>
        </div>

        {/* Book Details */}
        <div className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="line-clamp-1 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {title}
            </h2>
            {/* Rating */}
            <div className="flex items-center gap-1 shrink-0 rounded-md bg-amber-500/10 px-1.5 py-0.5 text-xs text-amber-400">
              <Star size={13} fill="currentColor" />
              <span>{rating}</span>
            </div>
          </div>

          <p className="mt-1 text-sm text-gray-400">By {author}</p>

          <p className="mt-3 line-clamp-2 text-sm text-gray-300/80 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Mini Meta Info (Pages & Language) */}
        <div className="mt-4 flex items-center gap-4 border-t border-white/5 pt-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-purple-400" />
            <span>{pages} Pages</span>
          </div>
          <div className="flex items-center gap-1">
            <Layers size={14} className="text-emerald-400" />
            <span>{language}</span>
          </div>
        </div>
      </div>

      {/* Bottom Section (Price & Action) */}
      <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-3">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-gray-500">
            Price
          </p>
          <span className="text-xl font-extrabold text-emerald-400">
            ${price}
          </span>
        </div>

        <button className="flex items-center gap-1.5 rounded-lg bg-linear-to-r from-purple-500/10 to-emerald-500/10 px-4 py-2 text-xs font-semibold text-white border border-white/10 hover:border-transparent hover:from-purple-500 hover:to-emerald-500 transition-all duration-300 cursor-pointer">
          Read Now
        </button>
      </div>
    </div>
  );
};

export default BookMarks;
