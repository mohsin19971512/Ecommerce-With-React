import "./App.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
function App() {
  return (
    <>
    
      <Router>
      <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
