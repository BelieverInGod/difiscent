import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import "./style.css";

function App() {

useEffect(() => {
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
