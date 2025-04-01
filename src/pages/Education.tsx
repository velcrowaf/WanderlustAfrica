import { BookOpen, GraduationCap, Globe2, Users, Brain, Lightbulb } from 'lucide-react';

export function Education() {
  const programs = [
    {
      title: 'Cultural Immersion',
      icon: Globe2,
      description: 'Learn through direct interaction with local communities and traditions.'
    },
    {
      title: 'Nature Studies',
      icon: Lightbulb,
      description: 'Hands-on learning about African wildlife and ecosystems.'
    },
    {
      title: 'History & Heritage',
      icon: BookOpen,
      description: 'Exploring African history through site visits and storytelling.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[500px] object-cover"
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80"
            alt="Education in Africa"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div
          className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
          style={{ paddingBottom: '260px' }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">World-schooling in Africa</h1>
          <p className="text-xl text-white max-w-2xl">
            Transform your family's education through immersive learning experiences across Africa.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Educational Approach</h2>
            <p className="text-gray-600 mb-4">
              We believe in education that goes beyond textbooks. Our world-schooling approach combines academic excellence with real-world experiences, creating meaningful learning opportunities through travel.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Brain className="h-6 w-6 text-orange-500 mr-3" />
                <span>Experiential Learning</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-3" />
                <span>Cultural Integration</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 text-orange-500 mr-3" />
                <span>Academic Excellence</span>
              </div>
            </div>
          </div>
          <div className="bg-orange-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Educational Programs</h3>
            <div className="space-y-6">
              {programs.map((program) => (
                <div key={program.title} className="flex items-start">
                  <program.icon className="h-8 w-8 text-orange-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">{program.title}</h4>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Parent Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The world-schooling experience has transformed our children's understanding of education and the world around them."
              </p>
              <p className="font-bold">- Sarah M., Mother of two</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Our kids have learned more in six months of travel than they did in two years of traditional schooling."
              </p>
              <p className="font-bold">- James K., Father of three</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The cultural immersion and hands-on learning experiences have been invaluable for our family."
              </p>
              <p className="font-bold">- Lisa R., Mother of four</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}