import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import About from "./components/About";
import Contact from "./components/Contact";
import OrderPage from "./components/OrderPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/order" element={<OrderPage />} />

        

        
      </Routes>
    </>
  );
}

export default App;