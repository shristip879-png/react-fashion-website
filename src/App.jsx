import Navbar from "./Components/Navbar";
import HomeHero from "./Components/HomeHero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import OrderPage from "./Components/OrderPage";
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
