import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Balls3D from "./components/Balls/Balls3D";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Balls3D />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
