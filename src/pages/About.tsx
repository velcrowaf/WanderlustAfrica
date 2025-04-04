import { motion } from 'framer-motion';
import { Users, Heart, Globe } from 'lucide-react';

export function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[400px] object-cover"
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80"
            alt="A family enjoying their time in Africa"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Family</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A family of six on a mission to explore Africa while making a lasting impact through education and community development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              We're a family that believes in the power of experiential learning and meaningful impact. Our journey across Africa combines our passion for travel with our commitment to education and community development.
            </p>
            <p className="text-gray-600">
              Through our adventures, we're showing that family travel in Africa can be both enriching and impactful, creating lasting change in the communities we visit.
            </p>
          </motion.article>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Users className="h-8 w-8 text-orange-500 mb-2" aria-label="Family First Icon" />
              <h3 className="font-bold mb-1">Family First</h3>
              <p className="text-sm text-gray-600">Growing together through travel and learning</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Heart className="h-8 w-8 text-orange-500 mb-2" aria-label="Community Impact Icon" />
              <h3 className="font-bold mb-1">Community Impact</h3>
              <p className="text-sm text-gray-600">Making a difference in lives across Africa</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Globe className="h-8 w-8 text-orange-500 mb-2" aria-label="Global Education Icon" />
              <h3 className="font-bold mb-1">Global Education</h3>
              <p className="text-sm text-gray-600">Learning beyond traditional boundaries</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our journey and shape our impact across Africa.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authentic Experiences",
                description: "We believe in genuine connections and real cultural exchanges that benefit both travelers and local communities."
              },
              {
                title: "Sustainable Impact",
                description: "Our projects focus on creating lasting positive change through education and community development initiatives."
              },
              {
                title: "Family Growth",
                description: "Every journey is an opportunity for our family to learn, grow, and strengthen our bonds together."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}