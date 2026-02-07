import { ShoppingCart, Store, ArrowRight, Users, Star } from 'lucide-react';

const MarketplaceCTA = () => {
  return (
    <section id="marketplace" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Join the Yunimall Community?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you're looking to shop from fellow students or start your own business,
            Yunimall has everything you need to succeed
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become a Student Buyer</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Access products and services from verified student businesses across your campus.
                Find everything from textbooks to tech accessories, snacks to study materials.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Browse campus-specific products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Support fellow student entrepreneurs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Convenient campus delivery options</span>
                </div>
              </div>

              <a
                href="https://app.yuni-mall.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 rounded-lg hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
              >
                <Users className="w-5 h-5 mr-2" />
                Join as a Buyer
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <Store className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become a Student Seller</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Turn your skills and ideas into a profitable business. Join thousands of student
                entrepreneurs who are building their future with Yunimall's powerful platform.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Easy business registration process</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Sales automation and analytics tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm text-blue-100">Access to student customer base</span>
                </div>
              </div>

              <a
                href="https://app.yuni-mall.com/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg font-semibold"
              >
                <Star className="w-5 h-5 mr-2" />
                Start Your Business
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">1000+</div>
                <div className="text-sm text-blue-100">Students Registered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-blue-100">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">25+</div>
                <div className="text-sm text-blue-100">Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">99%</div>
                <div className="text-sm text-blue-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceCTA;