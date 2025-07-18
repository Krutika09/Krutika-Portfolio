import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm actively seeking DevOps opportunities and always open to discussing interesting projects, 
                collaborations, or sharing knowledge about cloud infrastructure and automation. Let's connect 
                and explore how we can work together!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <a href="mailto:krutikayawale2002@gmail.com" className="text-blue-400 hover:text-blue-300">
                      krutikayawale2002@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a href="tel:+919423349467" className="text-green-400 hover:text-green-300">
                      +91 94233 49467
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400">Amravati, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/iamkrutikayawale/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://github.com/Krutika09" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://medium.com/@krutikayawale2002" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-green-600 p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-900/30 border border-green-600 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-400">Available for Opportunities</h4>
                </div>
                <p className="text-sm text-gray-300">
                  Currently seeking DevOps Engineer positions and open to freelance projects
                </p>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-200"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-200"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;