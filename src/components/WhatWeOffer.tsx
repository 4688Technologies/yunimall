import React from 'react';
import { MapPin, FileText, BarChart3, Truck } from 'lucide-react';

const WhatWeOffer = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Search by Campus',
      description: 'Find student businesses and products specific to your campus location.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: FileText,
      title: 'Business Registration',
      description: 'Easy registration process for student entrepreneurs to showcase their services.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Sales Automation',
      description: 'Built-in tools to help student businesses manage orders and track performance.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Truck,
      title: 'Delivery Options',
      description: 'Flexible delivery solutions including campus pickup and direct delivery.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="offers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            What Yunimall Offers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed as a student entrepreneur or find what you need as a student buyer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-yellow-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Validated by Students
            </h3>
            <p className="text-gray-600 mb-6">
              Our platform development is backed by comprehensive student surveys and feedback
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-blue-900">94%</span>
                <p className="text-sm text-gray-600">Students interested</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-yellow-600">92%</span>
                <p className="text-sm text-gray-600">Want campus-specific shopping</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-green-600">78%</span>
                <p className="text-sm text-gray-600">Run or want to run businesses</p>
              </div>
               <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                <span className="text-2xl font-bold text-green-600">71%</span>
                <p className="text-sm text-gray-600">Reported that students make up the majority of their business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;