import { motion } from 'framer-motion';
import { Heart, School, TreePine, Users, Handshake, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Impact() {
  const initiatives = [
    {
      title: "Education Support",
      description: "Building and supporting schools in rural communities",
      metric: "12 Schools",
      icon: School
    },
    {
      title: "Community Development",
      description: "Empowering local communities through sustainable projects",
      metric: "8 Communities",
      icon: Users
    },
    {
      title: "Environmental Conservation",
      description: "Supporting wildlife and habitat preservation efforts",
      metric: "3 Projects",
      icon: TreePine
    }
  ];

  const stories = [
    {
      title: "Namib Desert School Project",
      location: "Namibia",
      description: "Established a sustainable school program reaching 200+ children",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
    },
    {
      title: "Maasai Community Initiative",
      location: "Kenya",
      description: "Partnered with local leaders to create educational opportunities",
      image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80"
    },
    {
      title: "Conservation Education",
      location: "Tanzania",
      description: "Launched wildlife conservation awareness programs",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80"
            alt="Community Impact"
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
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Making a Difference</h1>
              <p className="text-xl text-gray-200 max-w-2xl">
                Our journey is about more than travel - it's about creating lasting positive change in the communities we visit.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We believe that responsible travel should leave a positive footprint. Through our initiatives, we're working to create sustainable change in education, community development, and environmental conservation.
            </p>
            <p className="text-gray-600">
              By partnering with local communities, we ensure our impact is meaningful, lasting, and aligned with community needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Heart className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Compassion</h3>
              <p className="text-sm text-gray-600">Driving positive change</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Handshake className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Partnership</h3>
              <p className="text-sm text-gray-600">Working together</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg hover:bg-orange-100 transition-colors duration-300">
              <Globe className="h-8 w-8 text-orange-500 mb-2" />
              <h3 className="font-bold mb-1">Sustainability</h3>
              <p className="text-sm text-gray-600">Long-term focus</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Initiatives</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Making a real difference through targeted programs and community partnerships.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <initiative.icon className="h-12 w-12 text-orange-500 mb-6" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">{initiative.title}</h3>
                <p className="text-gray-600 mb-4">{initiative.description}</p>
                <p className="text-orange-500 font-bold">{initiative.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Impact Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories of change from the communities we work with.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{story.location}</p>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{story.title}</h3>
                <p className="text-gray-600">{story.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="bg-orange-500 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Together, we can create lasting positive change in communities across Africa.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-orange-500 px-8 py-4 rounded-full hover:bg-orange-50 transition-colors duration-300"
              >
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}