import Link from "next/link";

export default function BooksPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          Library
        </p>
        <h1 className="mb-4 text-4xl font-black sm:text-5xl">Books collection</h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          This page is now available. Add your favorite books here and keep browsing the collection.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
