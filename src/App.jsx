import React from 'react';
import './task';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';
import Landspace from './components/Landspace';
import Reviews from './components/Reviews';

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Garden />
    <Landspace />
    <Reviews />
    </>
  );
};

export default App;