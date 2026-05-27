'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaBookOpen } from 'react-icons/fa';

export default function Banner() {
  return (
    <section
      className="
      min-h-screen
      bg-black
      overflow-hidden
      relative
      text-white
      "
    >
      <div
        className="
        absolute
        w-[600px]
        h-[600px]
        bg-purple-700
        blur-[250px]
        opacity-20
        -top-40
        left-20
        "
      />

      <div
        className="
        absolute
        w-[400px]
        h-[400px]
        bg-emerald-600
        blur-[200px]
        opacity-20
        right-0
        bottom-0
        "
      />

      <div className="w-10/12 mx-auto px-6">
        <div className="grid md:grid-cols-2 items-center min-h-screen">
          <motion.div
            initial={{
              opacity: 0,
              x: -100,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <div
              className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-white/10
              border
              border-purple-500
              mb-8
              "
            >
              📚 Premium Reading Experience
            </div>

            <h1
              className="
              text-6xl
              font-black
              leading-tight
              "
            >
              Discover The
              <span
                className="
                bg-linear-to-r
                from-purple-400
                to-emerald-400
                text-transparent
                bg-clip-text
                "
              >
                {' '}
                Future
              </span>
              <br />
              of Reading
            </h1>

            <p className="mt-8 text-gray-400 text-lg">
              Explore, Manage, Bookmark and discover thousands of books with
              modern experience.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/books"
                className="
                px-8
                py-4
                rounded-xl
                bg-linear-to-r
                from-purple-500
                to-emerald-500
                hover:scale-105
                duration-300
                "
              >
                Explore Books
              </Link>

              <Link
                href="/about"
                className="
                px-8
                py-4
                rounded-xl
                border
                border-white/20
                hover:bg-white/10
                "
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          <motion.div
            animate={{
              y: [0, -25, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="flex justify-center"
          >
            <div
              className="
              w-[350px]
              h-[350px]
              rounded-full
              bg-linear-to-r
              from-purple-600
              to-emerald-500
              flex
              items-center
              justify-center
              shadow-[0_0_150px_rgba(147,51,234,.6)]
              "
            >
              <FaBookOpen
                className="
                text-[180px]
                text-white
                "
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
