import React from 'react';
import { CheckCircle } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud & Infrastructure',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'AWS (EC2, VPC, Lambda, ALB)', level: 85 },
        { name: 'Linux', level: 90 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 80 },
        { name: 'Networking', level: 75 }
      ]
    },
    {
      title: 'Automation & CI/CD',
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'Jenkins', level: 80 },
        { name: 'Ansible', level: 85 },
        { name: 'Terraform (IaC)', level: 70 },
        { name: 'Shell Scripting', level: 88 },
        { name: 'Git & GitHub', level: 85 }
      ]
    },
    {
      title: 'Development & Tools',
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'Python', level: 75 },
        { name: 'Flask', level: 70 },
        { name: 'YAML/JSON', level: 80 },
        { name: 'SSH & Security', level: 85 },
        { name: 'Troubleshooting', level: 88 }
      ]
    }
  ];

  const certifications = [
    'AWS Cloud Practitioner (In Progress)',
    'Linux System Administration',
    'Docker & Containerization',
    'Kubernetes Fundamentals'
  ];

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-sm"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;