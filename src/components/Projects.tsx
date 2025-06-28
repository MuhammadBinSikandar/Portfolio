import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Filter, Eye } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      title: 'SAAS Platform',
      description: 'Comprehensive SAAS platform foundation with user authentication, subscription management, Stripe payment integration, Redis caching, and Docker containerization.',
      longDescription: 'A complete Software as a Service platform built with modern web technologies. Features include user registration/authentication, subscription-based billing with Stripe, Redis for session management and caching, Docker containerization for easy deployment, and comprehensive admin dashboard for user management.',
      technologies: ['Django', 'PostgreSQL', 'Docker', 'Stripe', 'Redis', 'Railway'],
      category: 'Full Stack',
      github: 'https://github.com/MuhammadBinSikandar/SAAS_PLATFORM',
      demo: null,
      image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Weather Application',
      description: 'Full-stack weather application with real-time data fetching, web scraping from multiple sources, responsive UI design, and MongoDB for flexible data storage.',
      longDescription: 'A sophisticated weather monitoring application that aggregates data from multiple sources including personal weather stations and public APIs. Features real-time updates, historical data analysis, and a beautiful responsive interface built with Tailwind CSS.',
      technologies: ['Django', 'Tailwind CSS', 'BeautifulSoup', 'MongoDB'],
      category: 'Full Stack',
      github: 'https://github.com/MuhammadBinSikandar/WeatherApp',
      demo: null,
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'Melodify - Music Streaming App',
      description: 'Cross-platform music streaming application with robust FastAPI backend, MVVM architecture, Riverpod state management, and RESTful APIs.',
      longDescription: 'A complete music streaming solution with mobile app built in Flutter and backend API in FastAPI. Includes user authentication, playlist management, music discovery, offline playback, and social features for sharing music with friends.',
      technologies: ['FastAPI', 'PostgreSQL', 'Flutter', 'MVVM', 'Riverpod'],
      category: 'Mobile',
      github: 'https://github.com/MuhammadBinSikandar/Melodify',
      demo: null,
      image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'AI LMS SAAS Platform',
      description: 'Full-stack AI-powered Learning Management System with SAAS architecture, automated course material design, and intelligent content generation.',
      longDescription: 'An intelligent Learning Management System that uses AI to automatically generate course content, create quizzes, and provide personalized learning paths. Built with Next.js and integrated with modern AI APIs for content generation and analysis.',
      technologies: ['React', 'Tailwind', 'Inngest', 'Clerk', 'Neon', 'Gemini', 'Next.js'],
      category: 'AI/ML',
      github: 'https://github.com/MuhammadBinSikandar/AI-SAAS-LMS',
      demo: null,
      image: 'https://images.pexels.com/photos/5553047/pexels-photo-5553047.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'FlexiHub - Fiverr Clone',
      description: 'Freelancing platform clone with complete marketplace functionality, user authentication, service listings, and payment integration.',
      longDescription: 'A comprehensive freelancing marketplace that replicates core Fiverr functionality. Features include user profiles, gig creation and management, order processing, messaging system, review and rating system, and secure payment processing.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      category: 'Full Stack',
      github: 'https://github.com/MuhammadBinSikandar/Flexi_Hub',
      demo: null,
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      title: 'Grievance WhatsApp Bot',
      description: 'Sophisticated automated customer service bot with two-way communication, comprehensive admin panel for user management, conversation tracking, and report generation.',
      longDescription: 'An intelligent WhatsApp bot for customer service and grievance handling. Features automated responses, escalation to human agents, conversation logging, analytics dashboard, and multi-language support. Built for enterprise-level customer support operations.',
      technologies: ['Django', 'MySQL', 'Twilio', 'WhatsApp Business API'],
      category: 'AI/ML',
      github: null,
      demo: 'https://wa.me/12055499307',
      image: 'https://images.pexels.com/photos/5453827/pexels-photo-5453827.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      title: 'AI Automation Agents',
      description: 'Intelligent web scraping agents for data collection and lead generation, PDF chatbot with vector database integration, automated outreach bots, and AI-powered business process optimization.',
      longDescription: 'A suite of AI-powered automation tools including web scrapers for lead generation, intelligent chatbots for document Q&A, automated email outreach systems, and business process optimization bots. Utilizes modern AI APIs and vector databases for enhanced functionality.',
      technologies: ['Python', 'Pinecone', 'OpenAI API', 'Web Scraping'],
      category: 'AI/ML',
      github: null,
      demo: null,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const categories = ['All', 'Full Stack', 'AI/ML', 'Mobile'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'AI/ML':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Mobile':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions spanning web development, AI automation, and mobile applications
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === category
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 shadow-md'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Filter size={16} />
                  {category}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  project.featured ? 'ring-2 ring-blue-500/20' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Github size={16} />
                        Source Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        {project.title.includes('WhatsApp') ? 'Try Bot' : 'Live Demo'}
                      </motion.a>
                    )}
                    {!project.github && !project.demo && (
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-lg font-medium"
                      >
                        <Eye size={16} />
                        Private Project
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent just a fraction of my capabilities. I'm always excited to take on 
              new challenges and create innovative solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start a Project
              </motion.button>
              <motion.a
                href="https://github.com/MuhammadBinSikandar"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
              >
                <Github size={20} />
                View More on GitHub
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;