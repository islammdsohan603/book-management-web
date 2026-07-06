import BooksCard from "@/components/bookdata/BooksCard";
import BookMarks from "@/components/bookmarks/BookMarks";
import { getReadBooksBookMarks } from "@/db/data";
import { useSession } from "@/lib/auth-client";


export default async function BookmarksPage() {



  const readebook = await getReadBooksBookMarks() || [];



  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold my-2.5 text-center"> BooksMarks For My Book </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-2.5">

          {readebook.map((read) => <BookMarks read={read} key={read._id} />)}

        </div>

      </div>
    </section>
  );
}
