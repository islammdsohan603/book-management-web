import Image from 'next/image';
import Link from 'next/link';
import { Star, BookOpen, ArrowRight } from 'lucide-react';

const BooksCard = ({ book }) => {
  return (
    <div
      className="
    group
    flex
    flex-col
    h-full
    overflow-hidden
    rounded-3xl
    bg-[#111827]
    border
    border-white/10
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
      <div className="p-6 flex flex-col flex-1">
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
        <div className="mt-auto pt-6">
          <Link
            href={`/details/${book._id}`}
            className="
      w-full
      py-3
      rounded-xl
      flex
      items-center
      justify-center
      gap-2
      bg-linear-to-r
      from-purple-500
      to-emerald-500
      text-white
      font-medium
      group
    "
          >
            Read Now
            <ArrowRight
              size={18}
              className="
        transition-transform
        duration-300
        group-hover:translate-x-2
      "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
