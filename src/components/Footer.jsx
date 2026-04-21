import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] px-6 md:px-12 py-16">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10"
      >

        {/* LEFT */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Pal Enterprises
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Delivering premium agricultural and food products globally
            with trust and sustainability.
          </p>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-600 text-sm">Email: palenterprises014@gmail.com</p>
          <p className="text-gray-600 text-sm">Phone: +91 8851300918</p>
          <p className="text-gray-600 text-sm">Delhi, India</p>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>

          <div className="flex gap-3">

            {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="border p-3 hover:bg-black hover:text-white transition cursor-pointer"
                >
                  <Icon />
                </div>
              )
            )}

          </div>
        </div>

      </motion.div>

      {/* Bottom */}
      <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
        © 2026 Pal Enterprises. All rights reserved.
      </div>

    </footer>
  );
}