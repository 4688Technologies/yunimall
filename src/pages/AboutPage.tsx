import { Calendar, MapPin, Building, Globe } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
    const timeline = [
        {
            year: '2021',
            title: 'The Beginning',
            description: 'Founded by passionate students at Pan-Atlantic University',
            icon: Calendar,
            color: 'bg-blue-500'
        },
        {
            year: '2023',
            title: 'Official Registration',
            description: 'Registered as a company in Nigeria (RC 7095154)',
            icon: Building,
            color: 'bg-yellow-500'
        },
        {
            year: '2024',
            title: 'Headquarters',
            description: 'Established official headquarters in Lagos, Nigeria',
            icon: MapPin,
            color: 'bg-green-500'
        },
        {
            year: 'Now',
            title: 'Going Global',
            description: 'Expanding across African universities with yuni-mall.com',
            icon: Globe,
            color: 'bg-purple-500'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="pt-16">
                <section id="about" className="py-10 sm:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-blue-900 mb-4">
                                About Yunimall
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                From a student idea to Africa's premier student business platform
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <div className="prose prose-lg">
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        Yunimall was born from the entrepreneurial spirit of students at Pan-Atlantic University
                                        who saw the potential to connect student businesses across African campuses. What started as
                                        a simple idea has evolved into a comprehensive platform that empowers student entrepreneurs
                                        while serving the unique needs of the student community.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        Today, we're officially registered in Nigeria and operating from our Lagos headquarters,
                                        but our vision extends far beyond borders. We're building the infrastructure that will
                                        make student entrepreneurship accessible, sustainable, and profitable across Africa.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <span className="font-semibold text-blue-900">Quick Facts</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-500">Founded:</span>
                                            <p className="font-medium text-blue-900">2021</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">RC Number:</span>
                                            <p className="font-medium text-blue-900">7095154</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Headquarters:</span>
                                            <p className="font-medium text-blue-900">Lagos, Nigeria</p>
                                        </div>
                                        <div>
                                            <span className="text-gray-500">Domain:</span>
                                            <p className="font-medium text-blue-900">yuni-mall.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="space-y-8">
                                    {timeline.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-4">
                                            <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                                                <item.icon className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-2">
                                                    <span className="text-lg font-bold text-blue-900">{item.year}</span>
                                                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                    <span className="text-lg font-semibold text-gray-800">{item.title}</span>
                                                </div>
                                                <p className="text-gray-600">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-yellow-200 -z-10"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutPage;
