import { Heart, GraduationCap, Globe2, BookOpen, HandHeart } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80"
            alt="African Landscape"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore. Empower. Impact—Across Africa.
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Join our family of six on an extraordinary journey of travel, education, and impact across Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#book-consultation"
              className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 transition"
            >
              Book a Consultation
            </a>
            <a
              href="#learn-more"
              className="bg-white text-orange-500 px-8 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-8 rounded-lg">
            <GraduationCap className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">World-schooling</h3>
            <p className="text-gray-600">
              Experience education beyond borders through immersive, real-world learning.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <Globe2 className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">African Travel</h3>
            <p className="text-gray-600">
              Discover safe, enriching, and culturally immersive experiences across Africa.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <HandHeart className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Impact Projects</h3>
            <p className="text-gray-600">
              Join us in making a difference through education, health, and gender advocacy.
            </p>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Current Projects & Partnerships</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BookOpen className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Troubled Heart</h3>
              <p className="text-gray-600 mb-4">
                Explore our latest book on resilience and transformation.
              </p>
              <a
                href="https://livelovelegacy.life/troubled-heart"
                className="text-orange-500 hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Your Copy →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Heart className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Children's Heart Trust</h3>
              <p className="text-gray-600 mb-4">
                Supporting children's cardiac care in Namibia.
              </p>
              <a
                href="https://namibiachildrenshearttrust.com/"
                className="text-orange-500 hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <HandHeart className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Rotary Club Harare</h3>
              <p className="text-gray-600 mb-4">
                Partnering for community development initiatives.
              </p>
              <a
                href="https://rotaryclubharare.org/"
                className="text-orange-500 hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}