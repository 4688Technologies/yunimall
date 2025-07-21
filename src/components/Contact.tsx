import React, { useState } from 'react';
import { Mail, Instagram, MapPin, Send, Phone } from 'lucide-react';
import ComingSoonModal from './ComingSoonModal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `This message was sent from the Yunimall website contact form.`
    );
    
    // Open default email client
    window.location.href = `mailto:info@yuni-mall.com?subject=${subject}&body=${body}`;
    
    // Show success message and reset form
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Yunimall? Want to partner with us? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Email</p>
                    <a href="mailto:info@yuni-mall.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      info@yuni-mall.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Instagram</p>
                    <a href="https://instagram.com/yu_nimall" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                      @yu_nimall
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900">Headquarters</p>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-yellow-50 p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-blue-900 mb-4">Quick Links</h4>
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setShowPartnerModal(true)}
                  className="block text-left w-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Partnership Opportunities
                </button>
                <button
                  type="button"
                  onClick={() => setShowInvestorModal(true)}
                  className="block text-left w-full text-gray-700 hover:text-blue-600 transition-colors duration-200"
                >
                  Investor Relations
                </button>
                <a href="#" className="block text-gray-700 hover:text-blue-600 transition-colors duration-200">
                  Support Center
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200 font-medium"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm">
                    ✅ Your email client should have opened with the message. If not, please email us directly at 4688postproductions@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <ComingSoonModal
        open={showPartnerModal}
        onClose={() => setShowPartnerModal(false)}
        title="Partnership Opportunities"
        message={
          <>
            <div className="mb-2 font-semibold text-blue-900">Thank you for your interest in partnering with Yunimall!</div>
            <div className="text-blue-900">Our partnership program is launching soon. For early inquiries, email <a href="mailto:info@yuni-mall.com" className="underline text-yellow-500">info@yuni-mall.com</a>.</div>
          </>
        }
        badge={<span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold animate-pulse">Coming Soon</span>}
      />
      <ComingSoonModal
        open={showInvestorModal}
        onClose={() => setShowInvestorModal(false)}
        title="Investor Relations"
        message={
          <>
            <div className="mb-2 font-semibold text-blue-900">Thank you for your interest in investing in Yunimall!</div>
            <div className="text-blue-900">Our investor program is coming soon. For early conversations, email <a href="mailto:info@yuni-mall.com" className="underline text-yellow-500">info@yuni-mall.com</a>.</div>
          </>
        }
        badge={<span className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full font-semibold animate-pulse">Coming Soon</span>}
      />
    </section>
  );
};

export default Contact;