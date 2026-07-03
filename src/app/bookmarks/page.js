import { getAllBooks } from "@/db/data";
import Link from "next/link";

export default async function BookmarksPage() {

  const allbooks = await getAllBooks()


  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">

        <div className="space-y-2">
          <h1 className="text-2xl font-bold">BookShopes</h1>
          <p className="text-sm text-gray-500">Discover the best books from the world</p>
        </div>



      </div>
    </section>
  );
}
