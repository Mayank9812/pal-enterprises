import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";

export default function Foundation() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h2 className="text-5xl font-semibold mb-6">
            Foundation
          </h2>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Pal Enterprises was built on a vision to transform global agricultural
            trade through excellence, integrity, and innovation.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            Our foundation rests on three pillars: unwavering commitment to quality,
            trust-based partnerships, and sustainable practices that benefit
            communities worldwide.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            We work directly with farmers and suppliers to ensure ethical sourcing,
            while delivering premium products that meet the highest international standards.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Every partnership we forge is built to last, creating value that extends
            beyond transactions to meaningful, long-term relationships.
          </p>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded-lg shadow-md"
        >

          <img
            src="https://images.unsplash.com/photo-1586201375761-83865001e31c"
            alt="Rice"
            className="w-full h-[300px] md:h-[400px] object-cover 
                       hover:scale-105 transition duration-500"
          />

        </motion.div>

      </div>

    </section>
  );
}