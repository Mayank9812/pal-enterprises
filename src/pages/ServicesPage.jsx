import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="mt-[80px]">

        {/* HERO */}
        <section className="bg-[#0b1a2f] text-white py-24 px-6 md:px-12 text-center">

          <h1 className="text-5xl font-semibold mb-6">
            Our Services
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            At PAL ENTERPRISES, we offer complete export solutions to ensure
          a smooth and reliable experience for our global clients.
          </p>

        </section>

        {/* SERVICES COMPONENT */}
        <Services />

      </main>

      <Footer />
    </>
  );
}