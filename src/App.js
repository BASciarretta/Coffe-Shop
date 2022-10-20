import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import IndexContainer from "./containers/IndexContainer";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexContainer />} />
          <Route path="/cafe" element={<ItemListContainer />} />
          <Route path="/cafe/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;
