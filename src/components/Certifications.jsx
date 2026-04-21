import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight } from "../animations";
import { FaCheckCircle } from "react-icons/fa";

export default function Certifications() {
  const items = [
    { title: "GST", desc: "Registered under GST for compliance." },
    { title: "APEDA", desc: "Export certification authority." },
    { title: "FSSAI", desc: "Food safety certification." },
    { title: "IEC", desc: "Import Export Code approved." },
    { title: "UDYAM", desc: "MSME Government recognized." }
  ];

  return (
    <section className="bg-[#f5f5f5] py-24 px-6 md:px-12 text-center">

      {/* Heading */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-semibold mb-3"
      >
        Our Certifications
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-500 mb-12 max-w-2xl mx-auto"
      >
        Fully certified and compliant with international agricultural standards.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto mb-16">

        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white border p-6 hover:shadow-md transition"
          >

            <div className="bg-gray-100 w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle />
            </div>

            <h3 className="font-semibold text-sm mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center text-left">

        {/* Image */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-hidden rounded shadow-md"
        >

          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
            className="w-full h-[300px] md:h-[400px] object-cover 
                       hover:scale-105 transition duration-500"
          />

        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          <h3 className="text-xl font-semibold mb-3">
            Commitment to Quality & Compliance
          </h3>

          <p className="text-gray-600 mb-4 text-sm leading-relaxed">
            Our certifications reflect our commitment to maintaining the highest
            standards in food safety and regulatory compliance.
          </p>

          <p className="text-gray-600 text-sm leading-relaxed">
            Every shipment is backed by proper documentation ensuring smooth
            international trade and customer confidence.
          </p>

        </motion.div>

      </div>

    </section>
  );
}