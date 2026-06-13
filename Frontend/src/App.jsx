import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <>
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />

      <Route path="/services" element={<ServicesPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="/products" element={<ProductsPage />} />

    </Routes>
    <WhatsappButton />
     </>
  );
}