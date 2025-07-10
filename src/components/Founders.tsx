import { Award, Briefcase, GraduationCap, Linkedin } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: 'Ayomide Abiola',
      role: 'COO/CFO',
      image: 'ayomide.jpg',
      achievements: [
        'PAU Entrepreneurship Award Winner',
        'Student Leadership Excellence',
        'Financial Management Expert',
        'Strategic Operations Leader'
      ],
      bio: 'Leading operations and financial strategy at Yunimall with a passion for student entrepreneurship and sustainable business growth.',
      linkedin: '#'
    },
    {
      name: 'Augustine Achike',
      role: 'CEO',
      image: 'augustine.jpg',
      achievements: [
        'Visionary Leader',
        'Tech Innovation Expert',
        'Student Advocate',
        'Platform Strategist'
      ],
      bio: 'Driving the vision of Yunimall to become Africa\'s premier student business platform through innovative technology and strategic partnerships.',
      linkedin: '#'
    }
  ];

  return (
    <section id="founders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Meet the Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate leaders behind Yunimall's mission to empower student entrepreneurs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover object-center border-4 border-yellow-400"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{founder.name}</h3>
                  <p className="text-lg text-yellow-600 font-semibold mb-4">{founder.role}</p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>

                  <div className="w-full">
                    <h4 className="flex items-center text-blue-900 font-semibold mb-4">
                      <Award className="w-5 h-5 mr-2" />
                      Key Achievements
                    </h4>
                    <div className="space-y-2 mb-6">
                      {founder.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                 
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-blue-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Leadership Recognition
            </h3>
            <p className="text-gray-600 mb-6">
              Our founders have been recognized for their outstanding contributions to student entrepreneurship
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-900" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-blue-900">PAU Entrepreneurship Award</p>
                  <p className="text-sm text-gray-600">Student Excellence Recognition</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-blue-900">Student Leadership</p>
                  <p className="text-sm text-gray-600">Campus Innovation Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;