import React from "react";
import Header from "../components/Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Footer from "../components/Footer";
import "../CSS/Home.css"

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default Home;