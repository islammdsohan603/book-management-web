import { getData } from '@/db/data';
import BooksCard from './BooksCard';

const BooksData = async () => {
  const books = await getData();

  return (
    <section className="py-20 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-purple-400 uppercase tracking-[4px] text-sm">
            Latest Collection
          </span>

          <h2 className="text-4xl font-bold text-white mt-3">
            Recently Released Books
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover the newest arrivals in our collection and find your next
            favorite read.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {books.map(book => (
            <BooksCard key={book._id.toString()} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksData;
