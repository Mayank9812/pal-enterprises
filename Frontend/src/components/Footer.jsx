import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2f] text-white pt-20 pb-8 px-6 md:px-12">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* COMPANY */}
        <div>
          <h2 className="text-2xl font-semibold mb-5">
            PAL ENTERPRISES
          </h2>

          <p className="text-gray-300 leading-relaxed text-sm">
            Exporting premium agricultural products from India
            with trust, quality, and reliability.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-300 text-sm">

            <a
              href="/"
              className="hover:text-white transition"
            >
              Home
            </a>

            <a
              href="/about"
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="/services"
              className="hover:text-white transition"
            >
              Services
            </a>

            <a
              href="/contact"
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-gray-300 text-sm">

            <p>Product Sourcing</p>
            <p>Quality Inspection</p>
            <p>Export Documentation</p>
            <p>Logistics Support</p>

          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-5">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">

            <div className="flex gap-3 items-start">
              <FaEnvelope className="mt-1" />

              <p>
                palenterprises014@gmail.com
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <FaPhoneAlt className="mt-1" />

              <p>
                +91 8851300918
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="mt-1" />

              <p>
                Delhi, India
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="max-w-7xl mx-auto mt-12 flex justify-center gap-4">

        <a
          href="https://www.facebook.com/share/1EDnj4wEvK/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.instagram.com/palenterprise1?igsh=ZmdrcmFzMTFyb3I3"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-600 p-3 rounded-full hover:bg-white hover:text-black transition duration-300"
        >
          <FaInstagram />
        </a>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">

        © {new Date().getFullYear()} PAL ENTERPRISES.
        All Rights Reserved.

      </div>

    </footer>
  );
}