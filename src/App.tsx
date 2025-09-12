import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from "./pages/About";
import Tutorial from "./pages/Tutorial";
import Privacidad from "./pages/Privacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/politicasDePrivacidad" element={<Privacidad />} />
            <Route path="/terminosYCondiciones" element={<TerminosCondiciones />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
