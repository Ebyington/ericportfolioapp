import React from "react";
import "./css/main.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Home />
      <div>
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
