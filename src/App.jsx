import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotFound } from "./components/notFound"
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Home } from "./pages/home/home";
import { Shop } from "./pages/shop/shop";
import { Shop2 } from "./pages/shop/shop2";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Product1 } from "./pages/shop/productPages/product1";
import { Product2 } from "./pages/shop/productPages/product2";
import { Product3 } from "./pages/shop/productPages/product3";
import { Product4 } from "./pages/shop/productPages/product4";
import { Product5 } from "./pages/shop/productPages/product5";
import { Product6 } from "./pages/shop/productPages/product6";
import { Product7 } from "./pages/shop/productPages/product7";
import { Product8 } from "./pages/shop/productPages/product8";
import { Product9 } from "./pages/shop/productPages/product9";
import { Product10 } from "./pages/shop/productPages/product10";
import { Product11 } from "./pages/shop/productPages/product11";
import { Product12 } from "./pages/shop/productPages/product12";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop2" element={<Shop2 />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<NotFound />} />

          <Route path="/product1" element={<Product1 />} />
          <Route path="/product2" element={<Product2 />} />
          <Route path="/product3" element={<Product3 />} />
          <Route path="/product4" element={<Product4 />} />
          <Route path="/product5" element={<Product5 />} />
          <Route path="/product6" element={<Product6 />} />
          <Route path="/product7" element={<Product7 />} />
          <Route path="/product8" element={<Product8 />} />
          <Route path="/product9" element={<Product9 />} />
          <Route path="/product10" element={<Product10 />} />
          <Route path="/product11" element={<Product11 />} />
          <Route path="/product12" element={<Product12 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
