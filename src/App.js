import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //JV: importing Browser Router to allow linking in header
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Home,
  Contact,
  About,
  Gallery,
  Services,
  GalleryID,
  ServicesID,
} from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryID />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServicesID />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
