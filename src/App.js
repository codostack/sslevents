import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home/Page";
import About from "./pages/About/Page";
import Services from "./pages/Services/Page";
import Projects from "./pages/Projects/Page";
import Contact from "./pages/Contact/Page";
import Light from "./pages/Services/Light";
import Video from "./pages/Services/Video";
import Staging from "./pages/Services/Staging";
import Audio from "./pages/Services/Audio";
import Ceremonies from "./pages/Projects/Ceremonies";
import ConcertsFestivals from "./pages/Projects/ConcertsFestivals";
import SpecialEvents from "./pages/Projects/SpecialEvents";
import Sports from "./pages/Projects/Sports";
import CorporateEvents from "./pages/Projects/CorporateEvents";
import TradeShows from "./pages/Projects/TradeShows";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Services Parent */}
          <Route path="/services" element={<Services />}>
            <Route path="light" element={<Light />} />
            <Route path="audio" element={<Audio />} />
            <Route path="video" element={<Video />} />
            <Route path="staging" element={<Staging />} />
          </Route>

          <Route path="/projects" element={<Projects />}>
            <Route path="ceremonies" element={<Ceremonies />} />
            <Route path="concerts-festivals" element={<ConcertsFestivals />} />
            <Route path="special-events" element={<SpecialEvents />} />
            <Route path="sports" element={<Sports />} />
            <Route path="corporate-events" element={<CorporateEvents />} />
            <Route path="trade-shows" element={<TradeShows />} />
          </Route>

          <Route path="/contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;