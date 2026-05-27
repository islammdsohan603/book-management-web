'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Book',
      href: '/books',
    },
    {
      name: 'BookMarks',
      href: '/bookmarks',
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="w-10/12 mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-linear-to-r from-purple-500 to-emerald-500 p-2 rounded-xl">
              <BookOpen />
            </div>

            <h1 className="text-white font-black text-2xl">BookVerse</h1>
          </Link>

          <div className="hidden md:flex gap-10">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <Link
              href="/signin"
              className="text-white   px-6
              py-3
              rounded-xl
               
              hover:scale-105
              duration-300"
            >
              Login
            </Link>

            <Link
              href="/get-started"
              className="
              px-6
              py-3
              rounded-xl
              bg-linear-to-r
              from-purple-500
              to-emerald-500
              hover:scale-105
              duration-300
              "
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className=" cursor-pointer md:hidden text-white"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
              }}
              className="
              md:hidden
              bg-slate-900
              rounded-xl
              p-6
              space-y-4
              "
            >
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block p-3 text-white hover:bg-gray-800 duration-500 rounded-2xl  "
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col">
                <Link
                  href="/signin"
                  className="text-white   px-6
              py-3
              rounded-xl
               
              hover:scale-105
              duration-300"
                >
                  Login
                </Link>

                <Link
                  href="/get-started"
                  className="
              px-6
              py-3
              rounded-xl
              bg-linear-to-r
              from-purple-500
              to-emerald-500
              hover:scale-105
              duration-300
              "
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
