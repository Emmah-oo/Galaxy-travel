import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";

import { Routes, Route } from 'react-router-dom'
import Footer from "./Components/Footer";
import Pricing from "./Routes/Pricing";
import Training from "./Routes/Training";
import Contact from "./Routes/Contact";

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer />
    </>
  );
}

export default App;
