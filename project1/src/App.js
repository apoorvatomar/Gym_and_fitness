import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Music from "./pages/Music/Music";
import Diet from "./pages/Diet/Diet";
import GainWeight from "./pages/Diet/weightGain";
import LossWeight from "./pages/Diet/weightLoss";
import Manloss from "./pages/Diet/MenLoss";
import ManGain from "./pages/Diet/MenGain";
import WomenLoss from "./pages/Diet/womenLoss";
import WomenGain from "./pages/Diet/WomenGain";
import Bollywood from "./pages/Music/Bollywood";
import English from "./pages/Music/English";
import Panjabi from "./pages/Music/Punjabi";
import Rap from "./pages/Music/Rap";
import Bhakti from "./pages/Music/Bhakti";
import About from "./pages/Home/About";
import Body1 from "./pages/Body/body1";
import Contact from "./pages/Contact/Contact";
import Service from "./pages/Home/services";
import Footer from "./pages/Home/Footer";
import ScrollToTop from "./pages/Home/ScrollToTop";
import { Logout } from "./components/Modal/logout";
import MusicControl from "./pages/Music/MusicControl";
import { AudioProvider, useAudio } from "./pages/Music/AudioContext";

function App() {
  return (
    <div className="w-full min-h-screen h-auto bg-[#171717]">
      <AudioProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/music" element={<Music />} />
            <Route path="/diet" element={<Diet />} />
            <Route path="/gainWeight" element={<GainWeight />} />
            <Route path="/LossWeight" element={<LossWeight />} />
            <Route path="/manloss" element={<Manloss />} />
            <Route path="/manGain" element={<ManGain />} />
            <Route path="/womenLoss" element={<WomenLoss />} />
            <Route path="/womenGain" element={<WomenGain />} />
            <Route path="/Bollywood-Song" element={<Bollywood />} />
            <Route path="/English-Song" element={<English />} />
            <Route path="/Punjabi-Song" element={<Panjabi />} />
            <Route path="/Bhakti-Song" element={<Bhakti />} />
            <Route path="/Rap-Song" element={<Rap />} />
            <Route path="/body" element={<Body1 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Service />} />
            <Route path="/about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>

          <Footer />
          <ConditionalMusicControl />
        </Router>
      </AudioProvider>
    </div>
  );
}

const ConditionalMusicControl = () => {
  const { isPlayerVisible } = useAudio();
  return isPlayerVisible ? <MusicControl /> : null;
};

export default App;
