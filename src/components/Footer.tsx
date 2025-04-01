import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-400">
              A family of six dedicated to African travel, education, and impact.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations" className="text-gray-400 hover:text-white">Destinations</Link></li>
              <li><Link to="/education" className="text-gray-400 hover:text-white">Education</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white">Impact</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Projects</h4>
            <ul className="space-y-2">
              <li><a href="https://livelovelegacy.life/troubled-heart" className="text-gray-400 hover:text-white">Troubled Heart</a></li>
              <li><a href="https://namibiachildrenshearttrust.com/" className="text-gray-400 hover:text-white">Children's Heart Trust</a></li>
              <li><a href="https://rotaryclubharare.org/" className="text-gray-400 hover:text-white">Rotary Club Harare</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <p className="text-gray-400 mb-4">
              Join our newsletter for updates on our journey and impact.
            </p>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}