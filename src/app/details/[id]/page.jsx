import Image from 'next/image';
import { Star, BookOpen, ArrowLeft } from 'lucide-react';
import { getSingleBooks } from '@/db/data';
import ReadBooksButton from '@/components/bookdata/ReadBooksButton';
import Link from 'next/link';

const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;

  const singlebook = await getSingleBooks(id);

  if (!singlebook) {
    return (
      <section className="min-h-screen bg-[#0B1120] flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Book Not Found</h1>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-20 bg-[#0B1120] text-white">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* back button */}

          <div className="lg:col-span-2 mb-6">
            <Link href="/">
              <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
                <ArrowLeft size={18} />
                Back to Home
              </button>
            </Link>
          </div>

          {/* Image */}
          <div className="relative h-[600px] overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={singlebook.image}
              alt={singlebook.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm">
              {singlebook.category}
            </span>

            <h1 className="text-5xl font-bold mt-4">{singlebook.title}</h1>

            <p className="text-xl text-gray-400 mt-3">By {singlebook.author}</p>

            <div className="flex items-center gap-2 mt-5">
              <Star size={20} fill="currentColor" className="text-yellow-400" />
              <span className="text-lg">{singlebook.rating}</span>
            </div>

            <p className="mt-8 text-gray-300 leading-8 text-lg">
              {singlebook.description}
            </p>

            <div className="mt-8">
              <span className="text-4xl font-bold text-emerald-400">
                ${singlebook.price}
              </span>
            </div>

            {/* Book Info */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Pages</p>
                <p className="font-semibold">{singlebook.pages}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Language</p>
                <p className="font-semibold">{singlebook.language}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Publisher</p>
                <p className="font-semibold">{singlebook.publisher}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Published</p>
                <p className="font-semibold">{singlebook.publishedYear}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Format</p>
                <p className="font-semibold">{singlebook.format}</p>
              </div>

              <div className="bg-[#111827] p-4 rounded-xl">
                <p className="text-gray-400">Stock</p>
                <p className="font-semibold">{singlebook.stock}</p>
              </div>
            </div>

            {/* ISBN */}
            <div className="mt-6 bg-[#111827] p-4 rounded-xl">
              <p className="text-gray-400">ISBN</p>
              <p>{singlebook.isbn}</p>
            </div>

            {/* Button */}
            <div>
              <ReadBooksButton singlebook={singlebook._id} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksDetailsPage;
