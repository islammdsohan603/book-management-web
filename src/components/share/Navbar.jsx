'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, BookOpen } from 'lucide-react';

import { authClient, useSession } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import { toast } from 'react-toastify';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { data: session, isPending } = useSession();
  const users = session?.user;
  const router = useRouter();

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

  const handleSignOut = async () => {
    try {
      await authClient.signOut();
      toast.success('LogOut successfully');
      setOpen(false);

      window.location.href = '/get-started';
    } catch (error) {
      toast.error('Failed to LogOut');
    }
  };

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
              {isPending ? (
                <div className="flex items-center gap-3 animate-pulse">
                  <div className="h-9 w-9 rounded-full bg-orange-200/20" />
                  <div className="h-8 w-20 rounded-xl bg-orange-200/20" />
                </div>
              ) : users ? (
                <div className="flex items-center gap-3">
                  <Link href={'/dashboard/user/profile'}>
                    <Avatar className="w-10 h-10">
                      <Avatar.Image
                        alt={users?.name}
                        src={users?.image}
                        width={50}
                        height={50}
                        className="object-cover rounded-full"
                      />
                      <Avatar.Fallback>
                        {users?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="bg-orange-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-600 duration-300 text-white font-medium"
                  >
                    SignOut
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link
                    href="/signin"
                    className="text-white hover:text-purple-400 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/get-started"
                    className="px-5 py-2.5 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 text-white hover:scale-105 transition-transform duration-300 font-medium"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-white focus:outline-none p-2 rounded-xl bg-white/5 border border-white/10"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay & Menu */}
      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          />
          <div className="fixed top-24 left-4 right-4 z-50 md:hidden rounded-3xl bg-slate-900/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl">
            {/* Nav Links */}
            <div className="space-y-1 mb-6">
              {links.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 transition font-medium ${
                    pathname === link.href
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Auth Buttons (এখানে ফিডব্যাক ফিক্স করা হয়েছে) */}
            <div className="pt-4 border-t border-white/10">
              {isPending ? (
                <div className="flex items-center gap-3 animate-pulse">
                  <div className="h-10 w-10 rounded-full bg-orange-200/20" />
                  <div className="h-10 flex-1 rounded-xl bg-orange-200/20" />
                </div>
              ) : users ? (
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={'/dashboard/user/profile'}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <Avatar className="w-10 h-10">
                      <Avatar.Image
                        alt={users?.name}
                        src={users?.image}
                        className="object-cover rounded-full"
                      />
                      <Avatar.Fallback>
                        {users?.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                    <span className="text-sm font-medium text-slate-200">
                      {users?.name}
                    </span>
                  </Link>

                  <button
                    onClick={handleSignOut}
                    className="bg-orange-500 px-4 py-2 rounded-xl cursor-pointer hover:bg-orange-600 duration-300 text-white font-medium text-sm"
                  >
                    SignOut
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <Link
                    href="/signin"
                    onClick={() => setOpen(false)}
                    className="w-full py-3 rounded-xl border border-white/10 text-center text-white hover:bg-white/5 transition font-medium text-sm"
                  >
                    Login
                  </Link>
                  <Link
                    href="/get-started"
                    onClick={() => setOpen(false)}
                    className="w-full py-3 rounded-xl bg-linear-to-r from-purple-500 to-emerald-500 text-center text-white transition font-medium text-sm block"
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}
