import React from 'react';
import { Trophy, Users, Calendar, ExternalLink } from 'lucide-react';

const News = () => {
  const milestones = [
    {
      date: 'December 2024',
      title: 'Co-Founder wins Award',
      description: 'Our Co-founder wins the Entrepreneurship Award at Pan-Atlantic University, a proud moment that highlights the exceptional talent and innovation driving Yunimall forward.',
      image: 'augustine-award.jpg',
      category: 'Award',
      icon: Trophy,
      color: 'bg-green-100 text-green-600'
    },
    {
      date: 'November 2022',
      title: 'Yunimall Wins EDC-PAU Demo Day',
      description: 'Our platform was recognized as the top student business solution at the Enterprise Development Centre Demo Day at Pan-Atlantic University.',
      image: 'demo-day-winner.jpg',
      category: 'Award',
      icon: Trophy,
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      date: 'July 2022',
      title: 'Top 5 at PAU\'s First Demo Day',
      description: 'Yunimall secured a top 5 position at Pan-Atlantic University\'s inaugural Demo Day, with Ayomide and Ireayo earning 2nd Best Presenters award.',
      image: 'top5-pau.jpg',
      category: 'Recognition',
      icon: Users,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Our Journey So Far
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key milestones and achievements that have shaped Yunimall's path to success
          </p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div key={index} className="group">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 ${milestone.color} rounded-full text-sm font-medium`}>
                        {milestone.category}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 ${milestone.color} rounded-full flex items-center justify-center`}>
                      <milestone.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span>{milestone.date}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-blue-900">{milestone.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg">
                    {milestone.description}
                  </p>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200">
                      <span>Learn More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Milestone Achieved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              More Achievements Coming Soon
            </h3>
            <p className="text-gray-600 mb-6">
              We're constantly working on new innovations and partnerships to better serve the student community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-900 font-semibold">Platform Launch</span>
              </div>
              <div className="bg-yellow-50 px-4 py-2 rounded-lg">
                <span className="text-yellow-700 font-semibold">University Partnerships</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-green-700 font-semibold">Student Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;