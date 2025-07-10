import React from 'react';
import { ArrowRight, Users, Store, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold text-blue-900 leading-tight">
                Built by Students,{' '}
                <span className="text-yellow-400">For Students</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Yunimall connects student businesses with fellow students across campuses, 
                making it easier to be both a student and an entrepreneur.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center px-8 py-4 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg">
                <Users className="w-5 h-5 mr-2" />
                Join as a Buyer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="group flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-500 transition-all duration-200 transform hover:scale-105 shadow-lg font-medium">
                <Store className="w-5 h-5 mr-2" />
                Join as a Seller
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Campus-focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Student-owned</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Africa-wide</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Store className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">Student Store</h3>
                      <p className="text-sm text-gray-600">PAU Campus</p>
                    </div>
                  </div>
                  <span className="text-green-600 text-sm font-medium">Online</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Textbooks & Materials</span>
                    <span className="text-sm font-medium text-blue-900">₦2,500</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Snacks & Beverages</span>
                    <span className="text-sm font-medium text-blue-900">₦800</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">Tech Accessories</span>
                    <span className="text-sm font-medium text-blue-900">₦1,200</span>
                  </div>
                </div>

                <button className="w-full py-3 bg-yellow-400 text-blue-900 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-200">
                  Browse Products
                </button>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;