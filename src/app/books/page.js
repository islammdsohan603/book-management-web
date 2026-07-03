import BooksCard from "@/components/bookdata/BooksCard";
import { getAllBooks } from "@/db/data";
import Link from "next/link";

export default async function BooksPage() {
  const allbooks = await getAllBooks()
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
        <div className="space-y-2 mb-3">
          <h1 className="text-2xl md:text-4xl font-bold">BookShopes</h1>
          <p className="text-sm md:text-2xl text-gray-500">Discover the best books from the world</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6">

          {
            allbooks.map((book) => (
              <BooksCard key={book._id} book={book} />
            ))
          }

        </div>
      </div>
    </section>
  );
}
