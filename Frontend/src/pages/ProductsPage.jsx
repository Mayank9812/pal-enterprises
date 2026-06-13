import Header from "../components/Header";
import Footer from "../components/Footer";
import img28 from "../img/img28.jpeg";
import img27 from "../img/img27.jpeg";
import img26 from "../img/img26.jpeg";
import img21 from "../img/img21.jpeg";

const products = [
  {
    title: "Basmati Rice",
    image: img28,
    desc: "Premium quality long-grain basmati rice for international markets.",
  },
  {
    title: "Indian Spices",
    image: img27,
    desc: "Fresh and authentic Indian spices sourced from trusted suppliers.",
  },
  {
    title: "Pulses",
    image: img26,
    desc: "Nutritious and export-grade pulses with quality assurance.",
  },
  {
    title: "Fresh Produce",
    image: img21,
    desc: "Fresh vegetables and agricultural products from India.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main className="mt-[80px]">

        {/* Hero */}
        <section className="bg-[#0b1a2f] text-white py-24 px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Our Products
          </h1>

          <p className="max-w-3xl mx-auto text-gray-300">
            We export premium quality agricultural products
            sourced directly from trusted suppliers across India.
          </p>
        </section>

        {/* Products */}
        <section className="py-20 px-6 md:px-12 bg-gray-50">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}