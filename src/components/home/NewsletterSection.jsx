'use client';

import { motion } from 'framer-motion';
import { HiOutlineMail } from 'react-icons/hi';

export default function NewsletterSection() {
  return (
    <section className="bg-[#0b0f19] py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          max-w-6xl
          mx-auto
          rounded-[32px]
          bg-[#2a2d37]
          px-6
          md:px-16
          py-16
          text-center
          relative
          overflow-hidden
        "
      >
        {/* Glow Effect */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/10 blur-[120px]" />

        <motion.div
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <div className="w-14 h-14 rounded-full bg-purple-600/20 flex items-center justify-center">
            <HiOutlineMail className="text-purple-400 text-2xl" />
          </div>
        </motion.div>

        <h2 className="text-white text-2xl md:text-4xl font-bold">
          Illuminated Updates
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed">
          Join our inner circle for exclusive early access to curated
          collections and literary insights.
        </p>

        {/* Input + Button */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              md:w-[420px]
              bg-[#11151f]
              border
              border-gray-700
              rounded-xl
              px-5
              py-4
              text-white
              outline-none
              focus:border-purple-500
              transition-all
            "
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-purple-500
              to-violet-600
              text-white
              font-semibold
              shadow-lg
              shadow-purple-500/30
            "
          >
            Subscribe Now
          </motion.button>
        </div>

        <p className="text-xs text-gray-500 mt-5 tracking-widest uppercase">
          No Spam. Only Inspiration & Exclusivities.
        </p>
      </motion.div>
    </section>
  );
}
