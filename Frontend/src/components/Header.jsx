import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <img
              src="/logo.png"
              alt="logo"
              className="h-10 object-contain"
            />

            <h1 className="text-lg font-semibold tracking-wide">
              PAL ENTERPRISES
            </h1>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

  <Link
    to="/about"
    className="relative group tracking-wide"
  >
    About

    <span
      className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black
                 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>

  <Link
    to="/services"
    className="relative group tracking-wide"
  >
    Services

    <span
      className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black
                 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>

   <Link
  to="/products"
  className="relative group tracking-wide"
>
  Products

  <span
    className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"
  ></span>
</Link>

  <Link
    to="/contact"
    className="relative group tracking-wide"
  >
    Contact

    <span
      className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-black
                 transition-all duration-300 group-hover:w-full"
    ></span>
  </Link>

</div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            <FaBars />
          </button>

        </div>

      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-[72px] right-0 w-full bg-white shadow-md z-40 md:hidden">

          <div className="flex flex-col p-6 gap-6 text-lg font-medium">

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              Services
            </Link>

            <Link
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              Products
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-500 transition"
            >
              Contact
            </Link>

          </div>

        </div>
      )}
    </>
  );
}