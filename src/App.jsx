import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import Products1 from "./components/Products1";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail/>} />
          <Route path="/Products1" element={<Products1/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;