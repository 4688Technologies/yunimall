import React from 'react';
import { Truck, Package, MapPin, Clock } from 'lucide-react';
import NotifyForm from './NotifyForm';

const ComingSoon = () => {
  return (
    <section id="logistics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Yunimall Logistics
          </h2>
          <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-semibold mb-4">
            Coming Soon
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building comprehensive logistics solutions to make delivery and order tracking seamless for student businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Truck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Smart Delivery Network</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Campus-optimized delivery routes and scheduling that works around student schedules 
                and university regulations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Package className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Order Tracking</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Real-time tracking system that keeps both buyers and sellers informed throughout 
                the entire delivery process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Campus Pickup Points</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Secure pickup locations strategically placed around campus for convenient 
                collection of orders.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Integrated Platform</h4>
                    <p className="text-blue-100 text-sm">
                      Logistics seamlessly integrated into the main Yunimall platform
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Flexible Options</h4>
                    <p className="text-blue-100 text-sm">
                      Multiple delivery methods to suit different needs and budgets
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-900 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Student-Friendly</h4>
                    <p className="text-blue-100 text-sm">
                      Affordable rates and timing designed specifically for student life
                    </p>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-900 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Get Notified When We Launch
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know when Yunimall Logistics becomes available on your campus
            </p>
            <NotifyForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;