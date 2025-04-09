import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Camera } from 'lucide-react';

export function Destinations() {
  const destinations = [
    {
      title: "Tanzania",
      location: "Tanzania",
      description: "Experience the great migration and abundant wildlife.",
      image: "https://images.unsplash.com/photo-1532017201189-87395e311df4?auto=format&fit=crop&q=80",
      activities: ["Safari Tours", "Hot Air Balloon", "Photography"]
    },
    {
      title: "Zimbabwe",
      location: "Zimbabwe/Zambia",
      description: "Witness the world's largest waterfall and adventure activities.",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
      activities: ["White Water Rafting", "Bungee Jumping", "Helicopter Tours"]
    },
    {
      title: "Morocco",
      location: "Morocco",
      description: "Journey through golden dunes and Berber villages.",
      image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&q=80",
      activities: ["Camel Trek", "Desert Camping", "Star Gazing"]
    }
  ];

  const features = [
    {
      icon: MapPin,
      title: "Unique Locations",
      description: "Carefully selected destinations that offer authentic experiences"
    },
    {
      icon: Calendar,
      title: "Flexible Planning",
      description: "Customized itineraries that suit your schedule"
    },
    {
      icon: Users,
      title: "Local Guides",
      description: "Expert local guides who know the terrain and culture"
    },
    {
      icon: Camera,
      title: "Photo Opportunities",
      description: "Picture-perfect moments at every turn"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80"
            alt="African Safari"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Wanderlust African Family</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Discover breathtaking landscapes, vibrant cultures, and unforgettable adventures across the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Travel with Us</h2>
            <p className="text-xl text-gray-600">
              Experience Africa like never before with our expert guidance and local knowledge.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <feature.icon className="h-8 w-8 text-orange-500 mx-auto mb-4" />
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our African Adventures</h2>
            <p className="text-xl text-gray-600">
              Each destination carefully selected to provide unique and authentic experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{destination.location}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="space-y-2">
                  {destination.activities.map((activity) => (
                    <div key={activity} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-2"></div>
                      {activity}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your African Adventure?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you plan the perfect journey through Africa's most incredible destinations.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-colors duration-300"
            >
              Plan Your Trip
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}