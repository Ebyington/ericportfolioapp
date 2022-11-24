import React from "react";
import "./css/main.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <div>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
