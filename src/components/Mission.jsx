import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";
import { FaBullseye } from "react-icons/fa";

export default function Mission() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden shadow-lg border-[6px] border-black"
        >

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            className="w-full h-[300px] md:h-[400px] object-cover 
                       hover:scale-105 transition duration-500"
          />

        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">

            <div className="bg-black text-white p-3">
              <FaBullseye />
            </div>

            <h2 className="text-5xl font-semibold">
              Our Mission
            </h2>

          </div>

          <p className="text-gray-600 mb-5 leading-relaxed">
            To deliver high-quality agricultural products globally with transparency
            and ethical practices.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            We focus on empowering farmers, supporting communities, and building trust.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our mission is to set new standards in global agricultural exports.
          </p>

        </motion.div>

      </div>

    </section>
  );
}