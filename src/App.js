import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div >
      <NavBar />
      <div >
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
          <Route 
            path="/aboutme"
            element={<AboutMe />}
          />
          <Route 
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route 
            path="/resume"
            element={<Resume />}
          />
           <Route 
            path="/contact"
            element={<Contact />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
