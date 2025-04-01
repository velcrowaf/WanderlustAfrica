import { Heart, HandHeart, School, Stethoscope, Users, Trophy } from 'lucide-react';

export function Impact() {
  const projects = [
    {
      title: "Children's Heart Trust",
      description: "Supporting cardiac care for children in Namibia",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
      link: "https://namibiachildrenshearttrust.com/"
    },
    {
      title: "Rotary Club Harare",
      description: "Community development initiatives in Zimbabwe",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80",
      link: "https://rotaryclubharare.org/"
    },
    {
      title: "Troubled Heart",
      description: "Book proceeds supporting women's health initiatives",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
      link: "https://livelovelegacy.life/troubled-heart"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[300px] sm:h-[500px] object-cover"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
            alt="Impact in Africa"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">Making an Impact</h1>
          <p className="text-xl text-white max-w-2xl">
            Our journey is about more than travel—it's about creating lasting positive change in the communities we visit.
          </p>
        </div>
      </div>

      {/* Impact Areas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-12">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-50 p-8 rounded-lg">
            <School className="h-12 w-12 text-orange-500 mb-4" aria-label="Education Icon" />
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-gray-600">
              Supporting schools and educational programs across Africa to improve access to quality education.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <Stethoscope className="h-12 w-12 text-orange-500 mb-4" aria-label="Healthcare Icon" />
            <h3 className="text-xl font-bold mb-2">Healthcare</h3>
            <p className="text-gray-600">
              Working with medical facilities and organizations to enhance healthcare access and quality.
            </p>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <Users className="h-12 w-12 text-orange-500 mb-4" aria-label="Community Development Icon" />
            <h3 className="text-xl font-bold mb-2">Community Development</h3>
            <p className="text-gray-600">
              Empowering local communities through sustainable development initiatives.
            </p>
          </div>
        </div>
      </div>

      {/* Current Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Current Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Stats */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-500 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <Heart className="h-8 w-8 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-2">100+</div>
                <div>Children Supported</div>
              </div>
              <div>
                <School className="h-8 w-8 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-2">15</div>
                <div>Schools Partnered</div>
              </div>
              <div>
                <HandHeart className="h-8 w-8 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-2">25+</div>
                <div>Community Projects</div>
              </div>
              <div>
                <Trophy className="h-8 w-8 mx-auto mb-2" />
                <div className="text-4xl font-bold mb-2">5</div>
                <div>Countries Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}