import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Share/Navbar/Navbar";
import Footer from "./Components/Share/Footer/Footer";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import OpenSummaryPage from "./Components/ProductSummary/ProductSummary";
import CartUi from "./Components/CartUI/CartSystemui";
import Checkout from "./Components/Checkout/Checkout";
import Wishlistui from "./Components/WishlistUI/WishlistUI";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Signup from "./Components/Login/Signup";

import { CartProvider } from "./Components/Context/CartContext";
import { WishlistProvider } from "./Components/Context/WishlistContext";

function App(){
  return (
    <CartProvider>
    <WishlistProvider >
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<OpenSummaryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/profile" element={<Signup />} />
          <Route path="/wishlist" element={<Wishlistui />} />
          <Route path="/cart" element={<CartUi />} />
         <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </WishlistProvider>
    </CartProvider>
  );
}

export default App;