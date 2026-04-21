import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled ? "bg-white shadow-md" : "bg-white/70 backdrop-blur-md"}
      `}
    >
      <div className="relative flex justify-between items-center px-6 md:px-12 py-4">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 object-contain hover:scale-105 transition"
        />

        {/* CENTER TEXT */}
        <h1 className="absolute left-1/2 -translate-x-1/2 font-semibold text-sm md:text-base tracking-wide">
          Pal Enterprises
        </h1>

        {/* MENU BUTTON */}
        <button className="p-2 hover:bg-black hover:text-white transition rounded">
          <FaBars />
        </button>

      </div>
    </motion.header>
  );
}