import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";
import { FaLeaf, FaLightbulb, FaGlobe } from "react-icons/fa";

export default function Commitment() {
  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12">

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-16">
        Our Commitment
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">

        {/* 1. Sustainability */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FaLeaf className="mb-4 text-xl" />

            <h3 className="text-2xl font-semibold mb-3">
              Sustainability
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We focus on eco-friendly sourcing practices and sustainable agriculture
              that supports environmental balance and long-term global trade.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
              className="w-full h-[300px] md:h-[400px] object-cover 
                         hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>

        {/* 2. Innovation */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-2 md:order-1 overflow-hidden rounded shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              className="w-full h-[300px] md:h-[400px] object-cover 
                         hover:scale-105 transition duration-500"
            />
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <FaLightbulb className="mb-4 text-xl" />

            <h3 className="text-2xl font-semibold mb-3">
              Innovation
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              We leverage modern technologies and innovative methods to improve
              efficiency, product quality, and global competitiveness.
            </p>
          </motion.div>

        </div>

        {/* 3. Impact */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <FaGlobe className="mb-4 text-xl" />

            <h3 className="text-2xl font-semibold mb-3">
              Impact
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              Our global network empowers farmers, supports communities, and creates
              long-term positive impact through ethical trade practices.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
              className="w-full h-[300px] md:h-[400px] object-cover 
                         hover:scale-105 transition duration-500"
            />
          </motion.div>

        </div>

      </div>

    </section>
  );
}