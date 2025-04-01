import React from 'react';
import { Link } from 'react-router-dom';
import { Globe2, Menu } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Globe2 className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Wanderlust African Family</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-orange-500">About Us</Link>
            <Link to="/destinations" className="text-gray-700 hover:text-orange-500">Destinations</Link>
            <Link to="/education" className="text-gray-700 hover:text-orange-500">Education</Link>
            <Link to="/impact" className="text-gray-700 hover:text-orange-500">Impact</Link>
            <Link to="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Get In Touch
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
}