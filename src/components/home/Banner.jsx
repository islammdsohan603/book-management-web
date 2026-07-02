'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

export default function Banner() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Blur Effects */}
      <div className="absolute -top-40 left-0 md:left-20 h-[300px] md:h-[600px] w-[300px] md:w-[600px] bg-purple-700 opacity-20 blur-[120px] md:blur-[250px]" />
      <div className="absolute bottom-0 right-0 h-[250px] md:h-[400px] w-[250px] md:w-[400px] bg-emerald-600 opacity-20 blur-[120px] md:blur-[200px]" />

      <div className="w-11/12 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid min-h-screen items-center gap-12 py-20 md:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left"
          >
            <div className="inline-flex rounded-full border border-purple-500 bg-white/10 px-4 py-2 text-xs sm:text-sm md:text-base mb-6">
              📚 Premium Reading Experience
            </div>

            <h1 className="font-black leading-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              Discover The
              <span className="bg-linear-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {' '}
                Future
              </span>
              <br />
              of Reading
            </h1>

            <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
              Explore, Manage, Bookmark and discover thousands of books with a
              modern, fast and user-friendly reading experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/books"
                className="rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 px-8 py-4 font-semibold transition duration-300 hover:scale-105"
              >
                Explore Books
              </Link>

              <Link
                href="/about"
                className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition duration-300 hover:bg-white/10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center"
          >
            <div className="flex items-center justify-center rounded-full bg-linear-to-r from-purple-600 to-emerald-500 shadow-[0_0_120px_rgba(147,51,234,.6)] w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px]">
              <FaBookOpen className="text-white text-[90px] sm:text-[120px] md:text-[170px] lg:text-[200px]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
