import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import About from "./components/About";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomeHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;