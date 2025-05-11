import { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Destinations } from './pages/Destinations';
import { Education } from './pages/Education';
import { Impact } from './pages/Impact';
import { VisualEditing } from './components/VisualEditor';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/education', label: 'Education' },
    { to: '/impact', label: 'Impact' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-black/60 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="py-2">
            <Logo isSmall={false} className={scrolled ? '' : 'text-white'} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors duration-300 relative group ${
                  scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-200'
                } ${location.pathname === link.to ? 'font-semibold' : ''}`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    location.pathname === link.to ? 'w-full' : 'w-0'
                  } ${scrolled ? 'bg-orange-500' : 'bg-white'}`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-200 ${
                location.pathname === link.to ? 'bg-orange-50 text-orange-500 font-semibold' : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/education" element={<Education />} />
          <Route path="/impact" element={<Impact />} />
        </Routes>
      </main>
      <Footer />
      <VisualEditing />
    </div>
  );
}

export default App;