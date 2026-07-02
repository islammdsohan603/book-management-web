'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Books', href: '/books' },
    { name: 'Bookmarks', href: '/bookmarks' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-20 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 transition-transform duration-300 hover:scale-110">
                <BookOpen className="text-white" />
              </div>
              <h1 className="text-xl md:text-2xl font-black text-white">
                BookVerse
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition ${pathname === link.href ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  {pathname === link.href && (
                    <div className="absolute -bottom-2 left-0 h-0.5 w-full bg-purple-500" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/signin"
                className="text-white hover:text-purple-400 transition"
              >
                Login
              </Link>
              <Link
                href="/get-started"
                className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 text-white hover:scale-105 transition-transform duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white focus:outline-none"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
          <div className="fixed top-20 left-4 right-4 z-50 md:hidden rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-white/10 p-6">
            <div className="space-y-2">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 transition ${
                    pathname === link.href
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className="text-center rounded-xl border border-white/10 py-3 text-white"
              >
                Login
              </Link>
              <Link
                href="/get-started"
                onClick={() => setOpen(false)}
                className="text-center rounded-xl py-3 bg-linear-to-r from-purple-500 to-emerald-500 text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
