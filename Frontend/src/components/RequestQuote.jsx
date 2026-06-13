import { FaCheckCircle } from "react-icons/fa";

export default function RequestQuote() {
  return (
    <section className="bg-[#0b1a2f] text-white py-24 px-6 md:px-12">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Looking for a Reliable Export Partner?
        </h2>

        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12">
          Get in touch with us for product details, pricing, packaging options,
          and export inquiries. We are committed to providing reliable service
          and premium quality agricultural products from India.
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">

          <div className="flex items-center justify-center gap-2">
            <FaCheckCircle />
            <span>Premium Quality</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaCheckCircle />
            <span>Competitive Pricing</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaCheckCircle />
            <span>Global Shipping</span>
          </div>

          <div className="flex items-center justify-center gap-2">
            <FaCheckCircle />
            <span>Reliable Support</span>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="/contact"
            className="bg-white text-black px-8 py-4 font-medium
                       hover:scale-105 transition duration-300"
          >
            Request a Quote →
          </a>

          <a
            href="https://wa.me/918851300918?text=Hello%20PAL%20ENTERPRISES,%20I%20would%20like%20to%20request%20a%20quotation."
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-4
                       hover:bg-white hover:text-black
                       transition duration-300"
          >
            WhatsApp Us
          </a>

        </div>

      </div>

    </section>
  );
}