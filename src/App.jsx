import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Router basename="/portfolio">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
