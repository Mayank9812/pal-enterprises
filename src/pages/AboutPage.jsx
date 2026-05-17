import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../animations";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className="bg-white py-24 px-6 md:px-12 mt-[70px] min-h-screen">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-lg"
          >

            <img
              src="https://images.unsplash.com/photo-1518843875459-f738682238a6"
              alt="About Us"
              className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition duration-500"
            />

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              About Us
            </h1>

            <p className="text-gray-600 leading-relaxed mb-5">
              PAL ENTERPRISES is an India-based export company specializing in the
              supply of high-quality agricultural products including rice, spices,
              and other food commodities.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
              We are committed to delivering premium quality products that meet
              international standards. Our focus is on building long-term
              relationships with global buyers through competitive pricing,
              timely delivery, and consistent quality.
            </p>

            <p className="text-gray-600 leading-relaxed mb-5">
            With a strong sourcing network and quality control process, we provide
              customized solutions based on our clients’ requirements.
              Whether it is bulk supply or specific packaging needs,
              we ensure smooth and reliable service.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At PAL ENTERPRISES, trust, transparency, and customer satisfaction
              are at the core of our business. We look forward to serving clients
              across the globe and building successful partnerships.
            </p>

          </motion.div>

        </div>

      </section>

      <Footer />
    </>
  );
}