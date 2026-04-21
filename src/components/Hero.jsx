import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen mt-[70px] overflow-hidden">

      {/* Background Image */}
      <img
        src={images[index]}
        alt="hero"
        className="absolute top-0 left-0 w-full h-full object-cover transition duration-1000"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 text-white"
      >

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          Best Product Quality,<br />
          Is Our First Priority.
        </h1>

        <p className="mt-4 text-gray-200 max-w-xl">
          Delivering premium agricultural and food products to international markets
          with reliability and sustainability.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-white text-black px-6 py-2 rounded hover:scale-105 transition">
            About Us →
          </button>

          <button className="border px-6 py-2 rounded hover:bg-white hover:text-black transition">
            Products →
          </button>
        </div>

      </motion.div>

    </section>
  );
}