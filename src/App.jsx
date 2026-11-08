
import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Businesses from "./components/Businesses";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Businesses />
        <Founder />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
