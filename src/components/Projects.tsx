import React from 'react';
import { ExternalLink, Github, Server, Cloud, Cog } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Flask CI/CD Pipeline',
      description: 'Automated CI/CD pipeline for Flask applications with testing, building, and deployment stages.',
      technologies: ['Flask', 'Jenkins', 'Docker', 'AWS'],
      icon: Server,
      category: 'CI/CD',
      githubUrl: 'https://github.com/krutikaYawale/flask-cicd',
      demoUrl: '#'
    },
    {
      title: 'Scalable Web Application on AWS',
      description: 'Deployed a scalable web application on AWS using VPC, Auto Scaling Group, and Application Load Balancer for high availability and performance.',
      technologies: ['AWS', 'VPC', 'Auto Scaling', 'ALB', 'EC2'],
      icon: Cloud,
      category: 'Cloud Infrastructure',
      githubUrl: 'https://github.com/krutikaYawale/aws-vpc-project',
      demoUrl: '#'
    },
    {
      title: 'Ansible-Driven Kubernetes Configuration',
      description: 'Demonstrates manual Ansible setup inside Kubernetes pods for configuration management using SSH authentication to install and configure NGINX.',
      technologies: ['Ansible', 'Kubernetes', 'Docker', 'SSH', 'NGINX'],
      icon: Cog,
      category: 'Configuration Management',
      githubUrl: 'https://github.com/krutikaYawale/ansible-kubernetes-config',
      demoUrl: '#'
    },
    {
      title: 'AWS Lambda EBS Snapshot Cleanup',
      description: 'Automated EBS snapshot cleanup using AWS Lambda for cost efficiency and storage optimization.',
      technologies: ['AWS Lambda', 'EBS', 'Python', 'CloudWatch'],
      icon: Cloud,
      category: 'Automation',
      githubUrl: 'https://github.com/krutikaYawale/aws-lambda-ebs-cleanup',
      demoUrl: '#'
    },
    {
      title: 'GitHub Repository Access Manager',
      description: 'Tool for managing GitHub repository access permissions and user management automation.',
      technologies: ['GitHub API', 'Python', 'Shell Scripting'],
      icon: Server,
      category: 'DevOps Tools',
      githubUrl: 'https://github.com/krutikaYawale/github-access-manager',
      demoUrl: '#'
    },
    {
      title: 'Ansible Cluster Setup',
      description: 'Manual Ansible Master-Node architecture using custom Red Hat-based images, demonstrating cluster setup in both Docker containers and Kubernetes pods.',
      technologies: ['Ansible', 'Docker', 'Kubernetes', 'Red Hat', 'Linux'],
      icon: Cog,
      category: 'Infrastructure',
      githubUrl: 'https://github.com/krutikaYawale/ansible-cluster-setup',
      demoUrl: '#'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'CI/CD': return 'bg-blue-600';
      case 'Cloud Infrastructure': return 'bg-green-600';
      case 'Configuration Management': return 'bg-orange-600';
      case 'Automation': return 'bg-purple-600';
      case 'DevOps Tools': return 'bg-red-600';
      case 'Infrastructure': return 'bg-indigo-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                    <project.icon size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;