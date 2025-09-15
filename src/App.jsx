import React, { useEffect, useState } from "react";
import "./task";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Garden from "./components/Garden";
import Landspace from "./components/Landspace";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <Hero />
          <About />
          <Projects />
          <Garden />
          <Landspace />
          <Reviews />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
