import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Balls3D from "./components/Balls/Balls3D";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Balls3D />
      </main>
      <Footer />
    </div>
  );
};
export default App;
