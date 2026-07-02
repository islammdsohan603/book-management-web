'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaBookOpen,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBookOpen className="text-3xl text-emerald-500" />
              <h2 className="text-2xl font-bold">BookVerse</h2>
            </div>

            <p className="text-slate-400 leading-relaxed">
              A modern Book Management System to organize, track and manage
              books efficiently with a clean and user-friendly experience.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-slate-400">
              {['Home', 'Books', 'Add Book', 'Borrow Summary'].map(item => (
                <li key={item}>
                  <Link
                    href="/"
                    className="hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">Categories</h3>

            <ul className="space-y-3 text-slate-400">
              <li className="hover:text-emerald-400 transition">
                Fiction Books
              </li>
              <li className="hover:text-emerald-400 transition">
                Science Books
              </li>
              <li className="hover:text-emerald-400 transition">Technology</li>
              <li className="hover:text-emerald-400 transition">History</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-5">Contact</h3>

            <div className="space-y-3 text-slate-400">
              <p>Email: support@bookverse.com</p>
              <p>Phone: +880 1849-468455</p>
              <p>Dhaka, Bangladesh</p>
            </div>

            <div className="flex gap-4 mt-6">
              {[
                {
                  icon: <FaFacebookF />,
                  link: '#',
                },
                {
                  icon: <FaGithub />,
                  link: '#',
                },
                {
                  icon: <FaLinkedinIn />,
                  link: '#',
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-lg hover:bg-emerald-500 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500"
        >
          © {new Date().getFullYear()} BookVault. All Rights Reserved.
          <span className="block mt-2 text-sm">Developed by Sohan Islam</span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
