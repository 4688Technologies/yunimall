import React from 'react';
import { GraduationCap, BookOpen, Users, TrendingUp } from 'lucide-react';

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Impact & Corporate Social Responsibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond business, we're committed to empowering the next generation of African entrepreneurs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Entrepreneurship Training</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We're launching comprehensive training programs for student business owners, 
                covering everything from business planning to digital marketing and financial management.
              </p>
              <div className="flex items-center space-x-2">
                <div className="px-3 py-1 bg-yellow-400 text-blue-900 rounded-full text-sm font-medium">
                  Launching Soon
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-blue-900 mb-4">Program Highlights</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BookOpen className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Business Fundamentals Workshop</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Mentorship Program</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-yellow-600" />
                  <span className="text-gray-700">Growth Strategy Sessions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-900 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-blue-100">
                    <span className="text-white font-semibold">Education First:</span> Providing resources and training to all student entrepreneurs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-blue-100">
                    <span className="text-white font-semibold">Community Building:</span> Creating networks that support long-term success
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-blue-100">
                    <span className="text-white font-semibold">Sustainable Growth:</span> Building businesses that benefit entire communities
                  </p>
                </div>
              </div>
              
              {/* Impact goals */}
              {/* <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <h4 className="font-semibold mb-3">Impact Goals for 2024</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">500+</div>
                    <div className="text-sm text-blue-100">Students Trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">100+</div>
                    <div className="text-sm text-blue-100">Businesses Launched</div>
                  </div>
                </div>
              </div> */}
              
            </div>
            
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-yellow-50 to-blue-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Want to Get Involved?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our community of student entrepreneurs and mentors making a difference across Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium">
                Become a Mentor
              </button>
              <button className="px-6 py-3 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-colors duration-200 font-medium">
                Partner with Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;