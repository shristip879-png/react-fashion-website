import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";
import About from "./components/About";
import Contact from "./components/Contact";
import OrderPage from "./components/OrderPage";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Protected from "./protected";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<HomeHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;


