import Image from 'next/image';
import Link from 'next/link';
import { Star, BookOpen, ArrowRight } from 'lucide-react';

const BooksCard = ({ book }) => {
  return (
    <div
      className="
      group
      overflow-hidden
      rounded-3xl
      bg-[#111827]
      border
      border-white/10
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-purple-500/40
      hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
    "
    >
      {/* Image */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src={book.image?.trim()}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-white text-xl font-bold line-clamp-1">
          {book.title}
        </h2>

        <p className="text-gray-400 mt-2">by {book.author}</p>

        <p className="text-gray-500 mt-4 text-sm line-clamp-3">
          {book.description}
        </p>

        {/* Rating + Price */}
        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{book.rating}</span>
          </div>

          <span className="text-xl font-bold text-emerald-400">
            ${book.price}
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button
            className="
            flex-1
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-500
            to-emerald-500
            text-white
            font-medium
            hover:opacity-90
            transition
          "
          >
            Read Now
          </button>

          <Link
            href={`/books/${book._id}`}
            className="
            p-3
            rounded-xl
            border
            border-white/10
            text-white
            hover:bg-white/10
            transition
          "
          >
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
