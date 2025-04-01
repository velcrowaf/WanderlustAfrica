import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Icons for the hamburger menu
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Destinations } from './pages/Destinations';
import { Education } from './pages/Education';
import { Impact } from './pages/Impact';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Wanderlust Africa</Link>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="sm:hidden block focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/destinations" className="hover:underline">
            Destinations
          </Link>
          <Link to="/education" className="hover:underline">
            Education
          </Link>
          <Link to="/impact" className="hover:underline">
            Impact
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Visible when isMenuOpen is true) */}
      {isMenuOpen && (
        <div className="sm:hidden bg-orange-600">
          <Link
            to="/"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/destinations"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Destinations
          </Link>
          <Link
            to="/education"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Education
          </Link>
          <Link
            to="/impact"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Impact
          </Link>
          <Link
            to="/contact"
            className="block px-4 py-2 hover:bg-orange-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

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