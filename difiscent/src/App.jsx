import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
