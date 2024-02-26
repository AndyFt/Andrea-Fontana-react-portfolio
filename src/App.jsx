import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  ProjectGallery,
  Contact,
  Custom404,
} from "./components/Pages";
import MyNav from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className={App}>
      <Router basename={"/Andrea-Fontana-react-portfolio"}>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/custom404" element={<Custom404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
