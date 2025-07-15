import React from 'react';
import { Target, Heart, Lightbulb } from 'lucide-react';

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Driving the future of student entrepreneurship across Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-blue-800 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                To become the <span className="text-yellow-400 font-semibold">#1 Student Business 
                E-Commerce Platform</span>, empowering every student entrepreneur to 
                reach their full potential and build successful businesses.
              </p>
            </div>

            <div className="bg-blue-800 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-900" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                To make it easier to be a student and an entrepreneur by providing the tools, 
                platform, and community needed to <span className="text-yellow-400 font-semibold">
                connect, create, and commerce</span> across African campuses.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-yellow-400 p-8 rounded-2xl text-blue-900">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold">Our Values</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Student-First</h4>
                  <p className="text-blue-800">Every decision is made with students in mind</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-blue-800">Continuously improving to serve our community better</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Community</h4>
                  <p className="text-blue-800">Yunimall provides a platform that fosters connection between students and student business owners</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Empowerment</h4>
                  <p className="text-blue-800">Giving students the tools to succeed</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-800 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why It Matters</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-blue-100">Creating sustainable income opportunities</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
                  <p className="text-blue-100">Building the next generation of African entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;