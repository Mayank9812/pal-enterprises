import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Newsletter() {
  return (
    <section className="bg-[#0b1a2f] text-white py-28 px-6 text-center">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl font-semibold mb-6"
        >
          Stay Connected
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mb-10"
        >
          Subscribe to receive updates on our latest products, partnerships,
          and insights from the global agricultural market.
        </motion.p>

        {/* Input + Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-4 mb-6"
        >

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 px-5 py-4 bg-transparent border border-gray-500 
                       text-white placeholder-gray-400 outline-none"
          />

          <button className="bg-white text-black px-8 py-4 
                             hover:scale-105 hover:bg-gray-200 
                             transition duration-300">
            Subscribe →
          </button>

        </motion.div>

        {/* Footer Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm"
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>

      </div>

    </section>
  );
}