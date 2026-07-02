'use client';

import { motion } from 'framer-motion';
import {
  FaBookOpen,
  FaRocket,
  FaSearch,
  FaFilm,
  FaBrain,
  FaPaintBrush,
} from 'react-icons/fa';

const genres = [
  {
    title: 'CLASSICS',
    icon: FaBookOpen,
  },
  {
    title: 'SCI-FI',
    icon: FaRocket,
  },
  {
    title: 'MYSTERY',
    icon: FaSearch,
  },
  {
    title: 'NON-FICTION',
    icon: FaFilm,
  },
  {
    title: 'PHILOSOPHY',
    icon: FaBrain,
  },
  {
    title: 'ART',
    icon: FaPaintBrush,
  },
];

export default function CuratedGenres() {
  return (
    <section className="bg-[#090d16] py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white text-3xl font-bold mb-16"
        >
          Curated Genres
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {genres.map((genre, index) => {
            const Icon = genre.icon;

            return (
              <motion.div
                key={genre.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="
                  group
                  flex
                  flex-col
                  items-center
                  text-center
                  cursor-pointer
                "
              >
                <div
                  className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-[#141923]
                  border
                  border-white/5
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-purple-500/50
                  group-hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]
                "
                >
                  <Icon
                    className="
                    text-xl
                    text-purple-300
                    group-hover:scale-110
                    duration-300
                  "
                  />
                </div>

                <p
                  className="
                  mt-4
                  text-[11px]
                  tracking-[3px]
                  text-gray-400
                  font-medium
                  "
                >
                  {genre.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
