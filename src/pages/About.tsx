import React from 'react';
import { Users, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[300px] sm:h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80"
            alt="A family enjoying their time in Africa"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">About Our Family</h1>
          <p className="text-xl text-white max-w-2xl">
            A family of six on a mission to explore Africa while making a lasting impact through education and community development.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <article>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We're a family that believes in the power of experiential learning and meaningful impact. Our journey across Africa combines our passion for travel with our commitment to education and community development.
            </p>
            <p className="text-gray-600">
              Through our adventures, we're showing that family travel in Africa can be both enriching and impactful, creating lasting change in the communities we visit.
            </p>
          </article>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-orange-50 p-6 rounded-lg">
              <Users className="h-8 w-8 text-orange-500 mb-2" aria-label="Family First Icon" />
              <h3 className="font-bold mb-1">Family First</h3>
              <p className="text-sm text-gray-600">Growing together through travel and learning</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <Heart className="h-8 w-8 text-orange-500 mb-2" aria-label="Community Impact Icon" />
              <h3 className="font-bold mb-1">Community Impact</h3>
              <p className="text-sm text-gray-600">Making a difference in lives across Africa</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <Globe className="h-8 w-8 text-orange-500 mb-2" aria-label="Global Education Icon" />
              <h3 className="font-bold mb-1">Global Education</h3>
              <p className="text-sm text-gray-600">Learning beyond traditional boundaries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}