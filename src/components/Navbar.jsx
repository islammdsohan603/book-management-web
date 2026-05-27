'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'হোম', href: '/' },
    { name: 'বইয়ের তালিকা', href: '/books' },
    { name: 'বুকমার্ক', href: '/bookmarks' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* বাম পাশে লোগো */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold tracking-wider text-emerald-400"
            >
              বুক ম্যানেজমেন্ট
            </Link>
          </div>

          {/* বড় স্ক্রিনের জন্য মেনু ও বাটনসমূহ (Desktop View) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* নেভিগেশন লিংকসমূহ */}
            <div className="flex items-center space-x-6">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-emerald-400 transition-colors duration-300 font-medium text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* ডান পাশের অ্যাকশন বাটনসমূহ */}
            <div className="flex items-center space-x-4 border-l border-slate-700 pl-6">
              <Link
                href="/signin"
                className="text-sm font-medium hover:text-emerald-400 transition-colors duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/get-started"
                className="text-sm font-medium bg-emerald-500 hover:bg-emerald-600 text-slate-900 px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-emerald-500/20"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* মোবাইল স্ক্রিনের জন্য হ্যামবার্গার মেনু বাটন */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md cursor-pointer text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-all duration-300"
            >
              <div className="transition-transform duration-300 ease-in-out transform">
                {isOpen ? (
                  <X className="block h-6 w-6 text-emerald-400 rotate-90 transition-all duration-300" />
                ) : (
                  <Menu className="block h-6 w-6 transition-all duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল স্ক্রিনের জন্য রেসপনসিভ ড্রপডাউন মেনু */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-slate-800 border-t border-slate-700">
          {/* মোবাইল নেভিগেশন লিংক */}
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-emerald-400 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-4 border-t border-slate-700 flex flex-col space-y-2 px-3">
            <Link
              href="/signin"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 rounded-md text-base font-medium border border-slate-600 hover:bg-slate-700 text-white transition-all duration-200"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-2 rounded-md text-base font-medium bg-emerald-500 hover:bg-emerald-600 text-slate-900 transition-all duration-200 shadow-lg shadow-emerald-500/10"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
