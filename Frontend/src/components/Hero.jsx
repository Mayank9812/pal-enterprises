import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import img14 from "../img/img14.jpeg";
import img10 from "../img/img10.jpeg";
import img2 from "../img/img2.jpeg";

export default function Hero() {
  const images = [
    img14,
    img10,
    img2
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

  <Link
    to="/about"
    className="bg-white text-black px-8 py-3 rounded-md font-medium
               hover:scale-105 transition duration-300"
  >
    About Us →
  </Link>

  <Link
    to="/products"
    className="border border-white px-8 py-3 rounded-md font-medium
               hover:bg-white hover:text-black transition duration-300"
  >
    Products →
  </Link>

</div>

      </motion.div>

    </section>
  );
}