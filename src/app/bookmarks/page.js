import Link from "next/link";

export default function BookmarksPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          Saved Reads
        </p>
        <h1 className="mb-4 text-4xl font-black sm:text-5xl">Your bookmarks</h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-300">
          Your saved books will appear here. Start bookmarking favorites to build your personal library.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-linear-to-r from-purple-500 to-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
