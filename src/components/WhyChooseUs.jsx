import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import {
  FaAward,
  FaShieldAlt,
  FaGlobe,
  FaChartLine,
  FaUsers,
  FaCheckCircle
} from "react-icons/fa";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <FaAward />,
      title: "Premium Quality",
      desc: "Rigorous quality control ensures top international standards."
    },
    {
      icon: <FaShieldAlt />,
      title: "Reliability & Trust",
      desc: "Consistent supply and transparent communication."
    },
    {
      icon: <FaGlobe />,
      title: "Global Expertise",
      desc: "Strong understanding of international markets."
    },
    {
      icon: <FaChartLine />,
      title: "Competitive Pricing",
      desc: "Efficient sourcing ensures best value pricing."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      desc: "Dedicated support and long-term relationships."
    },
    {
      icon: <FaCheckCircle />,
      title: "Certified Excellence",
      desc: "Fully compliant with international standards."
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
        className="text-5xl font-semibold mb-4"
      >
        Why Choose Us
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-gray-500 mb-14 text-lg"
      >
        Partnering with Pal Enterprises means choosing excellence, reliability,
        and sustainable growth in agricultural exports.
      </motion.p>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-left">

        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white border border-gray-200 p-8 
                       hover:shadow-lg hover:-translate-y-2 
                       transition duration-300"
          >

            {/* Icon */}
            <div className="bg-gray-100 w-12 h-12 flex items-center justify-center mb-5 text-lg">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-3">
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