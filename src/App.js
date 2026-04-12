import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home/Page";
import About from "./pages/About/Page";
import Services from "./pages/Services/Page";
import Projects from "./pages/Projects/Page";
import Contact from "./pages/Contact/Page";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop /> {/* ✅ CORRECT PLACE */}

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;