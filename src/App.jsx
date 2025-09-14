import React from 'react';
import './task';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Garden from './components/Garden';

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Garden />
    </>
  );
};

export default App;