import React from 'react';
import { Calendar, MapPin, GraduationCap, BookOpen, Users } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'training',
      title: 'DevOps Training',
      organization: 'LinuxWorld Informatics Pvt Ltd',
      location: 'Professional Training',
      period: 'Jan 2025 - Present',
      mentor: 'Vimal Daga',
      icon: Users
    },
    {
      type: 'training',
      title: '7 Days DevOps Program',
      organization: 'LinuxWorld Informatics Pvt Ltd',
      location: 'Professional Training',
      period: 'Dec 2024',
      mentor: 'Vimal Daga',
      icon: Users
    },
    {
      type: 'learning',
      title: 'Self-Learning DevOps',
      organization: 'Independent Study',
      location: 'Remote',
      // period: 'Dec 2024',
      icon: BookOpen
    },
    {
      type: 'education',
      title: 'B.E. Electronics & Telecommunication',
      organization: 'Sipna College of Engineering & Technology',
      location: 'Amravati',
      period: 'June 2020 - May 2024',
      icon: GraduationCap
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'training': return 'bg-blue-600';
      case 'projects':
      case 'learning': return 'bg-green-600';
      case 'education': return 'bg-orange-600';
      default: return 'bg-gray-600';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'training': return 'Professional Training';
      case 'projects': return 'Project Development';
      case 'learning': return 'Self Learning';
      case 'education': return 'Education';
      default: return 'Experience';
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Learning Journey</h2>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-green-600 to-orange-600 rounded-full"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-16 ml-20">
                <div className={`absolute -left-16 top-2 w-8 h-8 rounded-full ${getTypeColor(item.type)} border-4 border-gray-900 shadow-lg`}></div>

                <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-gray-700">
                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)}`}>
                      {getTypeLabel(item.type)}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${getTypeColor(item.type)}`}>
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <h4 className="text-lg text-blue-400 mb-2">{item.organization}</h4>
                      {item.mentor && (
                        <p className="text-sm text-green-400 mb-2 font-semibold">{item.mentor}</p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {item.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
