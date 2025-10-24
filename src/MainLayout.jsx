import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Layout Components import
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Main pages import
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Blog from './pages/blog/Blog';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

// Support pages import 
import ScrollToTop from "./utilis/ScrollToTop";
import FAQ from "./pages/supportPages/FAQ";
import Returns from "./pages/supportPages/Returns";
import Privacy from "./pages/supportPages/Privacy";
import Terms from "./pages/supportPages/Terms";
import Error from "./components/Error";
import Details from "./pages/Details";
import Cart from "./pages/cart/Cart";

const MainLayout = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id/:title" element={<Details />} /> {/*Product Details Page*/}
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        {/* Support routes */}
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        {/* Error Page */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
