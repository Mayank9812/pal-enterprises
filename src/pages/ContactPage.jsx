import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="mt-[80px]">

        {/* HERO */}
        <section className="bg-[#0b1a2f] text-white py-24 px-6 md:px-12 text-center">

          <h1 className="text-5xl font-semibold mb-6">
            Contact Us
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            We would love to hear from you. Get in touch for
            product inquiries, export partnerships, or business discussions.
          </p>

        </section>

        {/* CONTACT SECTION */}
        <section className="bg-white py-24 px-6 md:px-12">

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

            {/* LEFT INFO */}
            <div>

              <h2 className="text-3xl font-semibold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">

                {/* EMAIL */}
                <div className="flex gap-4">

                  <div className="bg-black text-white p-4 h-fit">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      palenterprises014@gmail.com
                    </p>
                  </div>

                </div>

                {/* PHONE */}
                <div className="flex gap-4">

                  <div className="bg-black text-white p-4 h-fit">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +91 8851300918
                    </p>
                  </div>

                </div>

                {/* ADDRESS */}
                <div className="flex gap-4">

                  <div className="bg-black text-white p-4 h-fit">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">
                      Address
                    </h3>

                    <p className="text-gray-600">
                      Delhi, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                ></textarea>

                <button
                  type="submit"
                  className="bg-black text-white px-8 py-4 hover:opacity-90 transition"
                >
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}