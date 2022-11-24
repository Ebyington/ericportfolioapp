import React from "react";
import About from './About';
import Contact from "./Contact";
import Projects from './Projects';
import Resume from './Resume';
import Nav from './Nav';
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
    return (
      <>
      <Header />
      <div className="top">
    <h1>Eric Byington's Portfolio
      <Nav />
      
    </h1>
  </div>
  </>
 )
}
