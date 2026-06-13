import { motion } from "framer-motion";
import { fadeUp } from "../animations";

import {
  FaSeedling,
  FaAward,
  FaDollarSign,
  FaBoxes,
  FaShippingFast,
  FaComments,
  FaHandshake
} from "react-icons/fa";

export default function IndiaCommodities() {
  const points = [
    {
      icon: <FaSeedling />,
      title: "Direct Sourcing from India",
      desc: "We procure products directly from trusted farmers and suppliers, ensuring authenticity and freshness."
    },
    {
      icon: <FaAward />,
      title: "Premium Quality Products",
      desc: "Our rice, spices, and agricultural commodities are carefully selected to meet international standards."
    },
    {
      icon: <FaDollarSign />,
      title: "Competitive Pricing Advantage",
      desc: "Being based in India, we offer cost-effective pricing without compromising quality."
    },
    {
      icon: <FaBoxes />,
      title: "Customized Solutions",
      desc: "Flexible packaging, quantity options, and specifications based on buyer requirements."
    },
    {
      icon: <FaShippingFast />,
      title: "Efficient Export Handling",
      desc: "From documentation to shipment, we ensure smooth and hassle-free export processes."
    },
    {
      icon: <FaComments />,
      title: "Strong Communication & Support",
      desc: "We believe in quick, transparent, and professional communication with global clients."
    },
    {
      icon: <FaHandshake />,
      title: "Long-Term Partnership Approach",
      desc: "Our goal is to build strong and lasting business relationships with every buyer."
    }
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold text-center mb-6"
        >
          Why Choose Us for Agricultural Commodities from India
        </motion.h2>

        {/* Intro */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16"
        >
          At PAL ENTERPRISES, we bring the richness of Indian agriculture to
          global markets with a strong focus on quality, reliability,
          and customer satisfaction.
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
              className="bg-white border border-gray-200 rounded-lg p-6
                         hover:shadow-lg hover:-translate-y-1
                         transition duration-300"
            >

              <div className="flex gap-4">

                {/* Icon */}
                <div className="bg-black text-white p-3 rounded h-fit">
                  {item.icon}
                </div>

                {/* Content */}
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

        {/* Bottom text */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 max-w-4xl mx-auto mt-14 leading-relaxed"
        >
          We aim to be your trusted partner for sourcing high-quality
          agricultural products from India.
        </motion.p>

      </div>

    </section>
  );
}