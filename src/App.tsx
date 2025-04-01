import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Destinations } from './pages/Destinations';
import { Education } from './pages/Education';
import { Impact } from './pages/Impact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/education" element={<Education />} />
        <Route path="/impact" element={<Impact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App