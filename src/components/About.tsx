import React from 'react';
import { Code, Server, Cloud, Award, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm Krutika Yawale, a passionate DevOps engineer with a strong foundation in Electronics & Telecommunication engineering. 
                After completing my degree from Sipna College of Engineering & Technology, Amravati in 2024, I embarked 
                on a self-learning journey into the world of DevOps.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                My journey took a significant turn when I joined LinuxWorld, where I deepened my expertise in Linux, 
                Docker, AWS, Kubernetes, Terraform, Jenkins, and shell scripting. I'm driven by the challenge of solving 
                complex infrastructure problems and optimizing development workflows through automation.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I believe in continuous learning and staying updated with the latest DevOps practices and cloud technologies. 
                My goal is to help organizations achieve faster deployment cycles, improved reliability, and cost-effective 
                infrastructure solutions.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Server size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Infrastructure Automation</h4>
                  <p className="text-gray-400">Expert in Docker, Kubernetes, Jenkins, and automated deployment pipelines</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-3 rounded-lg">
                  <Cloud size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Cloud Solutions</h4>
                  <p className="text-gray-400">AWS expertise in VPC, EC2, Lambda, S3, CloudWatch, Cloud Formation Template, Route53  and scalable architecture</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Configuration Management</h4>
                  <p className="text-gray-400">Skills in Ansible, Terraform (IaC), and shell scripting</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">6+</h4>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">10+</h4>
              <p className="text-gray-400">Technologies Mastered</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">100%</h4>
              <p className="text-gray-400">Automation Focus</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">AWS</h4>
              <p className="text-gray-400">Cloud Expertise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;