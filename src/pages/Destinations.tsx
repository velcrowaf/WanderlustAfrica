import { Compass, Map, Sun, Tent } from 'lucide-react';

export function Destinations() {
  const destinations = [
    {
      country: 'Namibia',
      image: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Desert landscapes and wildlife sanctuaries',
      activities: ['Safari Adventures', 'Desert Exploration', 'Cultural Immersion']
    },
    {
      country: 'Zimbabwe',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&q=80',
      description: 'Victoria Falls and national parks',
      activities: ['Waterfall Tours', 'Game Drives', 'Community Projects']
    },
    {
      country: 'Botswana',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
      description: 'Okavango Delta and luxury safaris',
      activities: ['Delta Expeditions', 'Luxury Camping', 'Wildlife Photography']
    }
  ];

  const features = [
    { icon: Compass, title: 'Guided Tours', description: 'Expert-led family adventures' },
    { icon: Map, title: 'Custom Itineraries', description: 'Tailored to your family\'s needs' },
    { icon: Sun, title: 'Year-round Travel', description: 'Perfect timing for each destination' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[300px] sm:h-[500px] object-cover"
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"
            alt="African Safari"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">African Destinations</h1>
          <p className="text-xl text-white max-w-2xl">
            Discover the magic of Africa through our carefully curated family travel experiences.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-orange-50 p-6 rounded-lg">
              <feature.icon className="h-8 w-8 text-orange-500 mb-4" aria-label={`${feature.title} Icon`} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Featured Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div key={destination.country} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={destination.image}
                  alt={`Image of ${destination.country}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{destination.country}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <ul className="space-y-2">
                    {destination.activities.map((activity) => (
                      <li key={activity} className="flex items-center text-sm text-gray-600">
                        <Tent className="h-4 w-4 text-orange-500 mr-2" aria-label="Activity Icon" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}