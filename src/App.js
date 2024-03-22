import Header from "./comp/Header/Header";
import Products from "./comp/Products/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import MyCart from "./comp/Cart/Ccart.jsx";
import Footer from "./comp/Footer/Footer.jsx";
import Contact from "./pages/contact/Contact.jsx";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
