import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";
import { FaEye } from "react-icons/fa";

export default function Vision() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* Icon + Title */}
          <div className="flex items-center gap-4 mb-6">

            <div className="bg-black text-white p-3">
              <FaEye />
            </div>

            <h2 className="text-5xl font-semibold">
              Our Vision
            </h2>

          </div>

          <p className="text-gray-600 mb-5 leading-relaxed">
            To become a globally recognized leader in agricultural exports,
            known for uncompromising quality and ethical practices.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            We envision a world where premium Indian agricultural products reach
            every corner of the globe.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our vision bridges cultures through food and global trade excellence.
          </p>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden shadow-lg border-[6px] border-black"
        >

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            className="w-full h-[300px] md:h-[400px] object-cover 
                       hover:scale-105 transition duration-500"
          />

        </motion.div>

      </div>

    </section>
  );
}