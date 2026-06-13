import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import {
  FaCertificate,
  FaCheckCircle,
  FaComments,
  FaTags,
  FaShippingFast,
  FaUsers
} from "react-icons/fa";

export default function BuyerTrust() {
  const points = [
    {
      icon: <FaCertificate />,
      title: "Verified Exporter",
      desc: "We are registered with the Government of India and hold a valid IEC ensuring compliant export operations."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Assurance",
      desc: "Our products are carefully sourced and checked to meet international quality standards."
    },
    {
      icon: <FaComments />,
      title: "Transparent Communication",
      desc: "We maintain clear and timely communication with buyers at every stage."
    },
    {
      icon: <FaTags />,
      title: "Competitive Pricing",
      desc: "We offer fair and competitive prices without compromising on quality."
    },
    {
      icon: <FaShippingFast />,
      title: "Reliable Delivery",
      desc: "We ensure proper documentation and timely shipment to avoid delays."
    },
    {
      icon: <FaUsers />,
      title: "Customer-Centric Approach",
      desc: "We focus on long-term partnerships and customized buyer requirements."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center mb-6"
        >
          Why International Buyers Trust Us
        </motion.h2>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-16"
        >
          At PAL ENTERPRISES, we understand that trust is the foundation of
          international trade. We are committed to delivering reliability,
          transparency, and consistent quality in every transaction.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          {points.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 p-6 rounded-lg 
                         hover:shadow-lg hover:-translate-y-1 
                         transition duration-300"
            >

              <div className="flex items-start gap-4">

                {/* Icon */}
                <div className="bg-black text-white p-3 rounded">
                  {item.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom Text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mt-14 max-w-4xl mx-auto leading-relaxed"
        >
          We aim to build strong, long-term partnerships by delivering trust,
          consistency, and value in every shipment.
        </motion.p>

      </div>

    </section>
  );
}