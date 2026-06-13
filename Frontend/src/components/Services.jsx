import { motion } from "framer-motion";
import { fadeUp } from "../animations";

import {
  FaSearch,
  FaCheckCircle,
  FaBoxOpen,
  FaFileAlt,
  FaShippingFast,
  FaDollarSign,
  FaHeadset
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaSearch />,
      title: "Product Sourcing",
      desc: "We source high-quality agricultural products including rice, spices, pulses, and fresh produce from trusted suppliers across India."
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Inspection",
      desc: "All products are carefully checked to meet international quality standards before shipment."
    },
    {
      icon: <FaBoxOpen />,
      title: "Customized Packaging",
      desc: "Flexible packaging options including private labeling and customized specifications."
    },
    {
      icon: <FaFileAlt />,
      title: "Export Documentation",
      desc: "We handle all export documentation ensuring compliance with international trade regulations."
    },
    {
      icon: <FaShippingFast />,
      title: "Logistics & Shipment Support",
      desc: "We coordinate with shipping partners to ensure timely and efficient delivery."
    },
    {
      icon: <FaDollarSign />,
      title: "Competitive Pricing (FOB & CIF)",
      desc: "We provide competitive FOB and CIF pricing based on buyer requirements."
    },
    {
      icon: <FaHeadset />,
      title: "Customer Support & Communication",
      desc: "Clear, prompt, and professional communication throughout the entire process."
    }
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto">

       

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg p-6
                         hover:shadow-xl hover:-translate-y-1
                         transition duration-300"
            >

              <div className="flex gap-4">

                {/* Icon */}
                <div className="bg-black text-white p-3 rounded h-fit">
                  {service.icon}
                </div>

                {/* Content */}
                <div>

                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
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
          className="text-center text-gray-600 max-w-4xl mx-auto mt-14 leading-relaxed"
        >
          Our goal is to provide reliable, efficient, and transparent export
          services to our clients worldwide.
        </motion.p>

      </div>

    </section>
  );
}