import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/frontend/HomePage/HomePage";
import About from "../pages/frontend/About/About";
import Contact from "../pages/frontend/Contact/Contact";
import Page404 from "../pages/Page404/Page404";
import Navbar from "../components/frontComponents/common/Navbar/Navbar";
import Footer from "../components/frontComponents/common/Footer/Footer";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/frontend/Cart/Cart";
import Checkout from "../pages/frontend/Checkout/Checkout";

const FrontPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/about" index element={<About />} />
        <Route path="/contact" index element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default FrontPage;
