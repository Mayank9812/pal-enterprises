import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
            We'd love to hear from you.
            Reach out for product inquiries,
            quotations, and export partnerships.
          </p>
        </section>

        {/* CONTACT */}
        <section className="bg-white py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

            {/* LEFT SIDE */}
            <div>

              <h2 className="text-3xl font-semibold mb-8">
                Get In Touch
              </h2>

              <div className="space-y-8">

                <div className="flex gap-4">

                  <div className="bg-black text-white p-4">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className="text-gray-600">
                      palenterprises014@gmail.com
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="bg-black text-white p-4">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Phone
                    </h3>

                    <p className="text-gray-600">
                      +91 8851300918
                    </p>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="bg-black text-white p-4">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      Address
                    </h3>

                    <p className="text-gray-600">
                      Delhi, India
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}
            <div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                />

                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  className="w-full border border-gray-300 p-4 outline-none focus:border-black"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-8 py-4 hover:opacity-90 transition"
                >
                  {loading
                    ? "Sending..."
                    : "Send Message →"}
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