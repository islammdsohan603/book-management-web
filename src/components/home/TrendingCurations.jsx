'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaStar, FaExternalLinkAlt } from 'react-icons/fa';
import { Sparkles, BookOpenCheck } from 'lucide-react';

export default function TrendingCurations() {
  return (
    <section className="bg-[#090d16] py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-3xl font-bold mb-10"
        >
          Trending Curations
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT BIG CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="bg-[#11151f] rounded-3xl overflow-hidden border border-white/5"
          >
            <div className="relative h-[420px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
                alt="The Alchemist's Shadow Book Cover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="p-8">
              <span className="text-xs bg-purple-600 px-3 py-1 rounded-full text-white font-semibold tracking-wider">
                TOP RATED
              </span>

              <h3 className="text-white text-2xl font-bold mt-5">
                The Alchemist's Shadow
              </h3>

              <p className="text-gray-400 mt-3">
                A deep dive into the lost arts of the 14th century, beautifully
                rendered for digital screens.
              </p>

              <div className="flex items-center gap-2 mt-6 text-yellow-400">
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar key={star} />
                ))}
                <span className="text-gray-300 text-sm ml-2">
                  4.9 (1.2k Reviews)
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE SECTION */}
          <div className="grid gap-6">
            {/* RIGHT SIDE: TOP MINI CARD */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#11151f] rounded-3xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
                    alt="Architecture of Silence Book Cover"
                    width={90}
                    height={130}
                    style={{ width: 'auto', height: 'auto' }}
                    className="rounded-xl object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Architecture of Silence
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    By Arthur L. Frame
                  </p>
                  <button className="mt-5 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors">
                    Explore
                    <FaExternalLinkAlt size={12} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: BOTTOM TWO GRID CARDS */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Modern Curation Card */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-[#11151f] rounded-3xl p-8 border border-white/5 flex flex-col justify-between min-h-[220px]"
              >
                <Sparkles size={28} className="text-purple-400" />
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Modern Curation
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    Daily hand-picked selection.
                  </p>
                </div>
              </motion.div>

              {/* Join the Club Card (Gradient) */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl p-8 bg-linear-to-br from-purple-600 to-indigo-600 min-h-[220px] flex flex-col justify-between shadow-xl"
              >
                <BookOpenCheck size={28} className="text-white" />
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    Join the Club
                  </h3>
                  <p className="text-white/80 text-sm mt-2">
                    Monthly digital first editions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
