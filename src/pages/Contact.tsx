import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Twitter, TikTok } from 'lucide-react'; // Import social media icons

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email address.';
    if (!formData.message) newErrors.message = 'Message is required.';

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log('Form submitted:', formData);
      // Add form submission logic here
    }
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-gray-600 mb-8">
              Whether you're interested in travel consultations, speaking engagements, or partnership opportunities, we'd love to hear from you.
            </p>
            <address className="space-y-4 not-italic">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-500 mr-3" aria-label="Email Icon" />
                <span>hello@wanderlustafricanfamily.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-500 mr-3" aria-label="Phone Icon" />
                <span>+1 (234) 567-8900</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-3" aria-label="Location Icon" />
                <span>Currently traveling across Africa</span>
              </div>
            </address>

            {/* Social Media Links */}
            <div className="mt-8">
              <h2 className="text-lg font-bold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-orange-500 hover:text-orange-600"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/@yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-orange-500 hover:text-orange-600"
                >
                  <TikTok className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  className="text-orange-500 hover:text-orange-600"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  aria-describedby="name-error"
                />
                {errors.name && <p id="name-error" className="text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  aria-describedby="email-error"
                />
                {errors.email && <p id="email-error" className="text-sm text-red-500">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  aria-describedby="message-error"
                ></textarea>
                {errors.message && <p id="message-error" className="text-sm text-red-500">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}