import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //JV: importing Browser Router to allow linking in header
import Header from "./components/Header";
import { Home, Contact, About, Gallery, Services, GalleryID } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryID />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
