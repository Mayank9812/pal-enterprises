import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import { FaHeart, FaHandshake, FaChartLine } from "react-icons/fa";

export default function WeCare() {
  const items = [
    {
      icon: <FaHeart />,
      title: "Quality",
      desc: "We care about the quality of agricultural products."
    },
    {
      icon: <FaHandshake />,
      title: "Trust",
      desc: "We build long-term relationships with reliability and transparency."
    },
    {
      icon: <FaChartLine />,
      title: "Growth",
      desc: "We focus on sustainable growth in global agricultural trade."
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12 text-center">

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-5xl font-semibold mb-6"
      >
        We Care
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-500 text-lg mb-16"
      >
        At Pal Enterprises, we believe in responsible sourcing and building
        long-term partnerships with farmers, suppliers and global buyers.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white border border-gray-200 p-8 text-left 
                       hover:shadow-lg hover:-translate-y-2 
                       transition duration-300"
          >

            {/* Top row */}
            <div className="flex justify-between items-center mb-6">

              <div className="text-xl">
                {item.icon}
              </div>

              <span className="text-gray-400 text-xl">↘</span>

            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </section>
  );
}