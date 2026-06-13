import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/918851300918?text=Hello%20PAL%20ENTERPRISES,%20I%20would%20like%20to%20know%20more%20about%20your%20products."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        text-white
        p-4
        rounded-full
        shadow-xl
        z-50
        hover:scale-110
        hover:bg-green-600
        transition-all
        duration-300
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}