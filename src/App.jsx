import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Products from "./components/Products";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footerr from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Products />
      <Blog />
      <Newsletter />
      <Footerr />
    </>
  );
};

export default App;
