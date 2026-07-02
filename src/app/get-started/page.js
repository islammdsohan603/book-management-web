import Link from "next/link";

export default function GetStartedPage() {
  return (
    <section className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-purple-400">
          Get started
        </p>
        <h1 className="mb-4 text-4xl font-black sm:text-5xl">Start your reading journey</h1>
        <p className="mb-8 text-lg text-slate-300">
          This page is ready for your onboarding flow, featured lists, or signup experience.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-linear-to-r from-purple-500 to-emerald-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
