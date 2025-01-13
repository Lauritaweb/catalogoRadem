import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Banner from "./components/Banner/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/css/main.css';


function App() {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Banner />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Catálogo" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="Catálogo" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </CartProvider>
    </Router>
  );
}

export default App;
