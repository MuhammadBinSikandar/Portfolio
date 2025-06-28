import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Freelance Developer',
      company: 'Upwork',
      location: 'Remote',
      period: 'Dec 2024 – Jan 2025',
      type: 'Freelance',
      description: 'Developed sophisticated Grievance WhatsApp Bot using Django and MySQL with Twilio integration.',
      achievements: [
        'Built comprehensive WhatsApp Business API integration for seamless customer communication',
        'Created advanced admin panel for user management, conversation tracking, and report generation',
        'Implemented two-way communication system with automated response capabilities',
        'Delivered complete solution within tight deadlines for international client'
      ],
      technologies: ['Django', 'MySQL', 'Twilio', 'WhatsApp Business API', 'Python', 'HTML/CSS'],
      link: '+12055499307',
      linkType: 'whatsapp'
    },
    {
      title: 'Research & Development Engineer',
      company: 'NIC Nutech',
      location: 'Islamabad, PK',
      period: 'Jun 2024 – Aug 2024',
      type: 'Internship',
      description: 'Developed comprehensive weather application with advanced web scraping capabilities and modern UI.',
      achievements: [
        'Built full-stack weather application using Django framework and BeautifulSoup for data extraction',
        'Integrated personal weather station with Wunderground API for real-time data access',
        'Implemented responsive frontend using DaisyUI and modern CSS frameworks',
        'Collaborated with senior engineers on R&D projects involving IoT and weather monitoring systems'
      ],
      technologies: ['Django', 'BeautifulSoup', 'DaisyUI', 'MongoDB', 'Python', 'API Integration'],
      link: 'https://github.com/MuhammadBinSikandar/WeatherApp',
      linkType: 'github'
    },
    {
      title: 'Technical Content Writer',
      company: 'Various Clients',
      location: 'Onsite and Remote',
      period: 'Jul 2023 – Feb 2024',
      type: 'Freelance',
      description: 'Created high-quality technical documentation and content for technology companies.',
      achievements: [
        'Authored comprehensive technical documentation for web development projects',
        'Created engaging content focused on modern development technologies and best practices',
        'Collaborated with development teams to understand complex technical concepts',
        'Maintained consistent quality standards while meeting tight publication deadlines'
      ],
      technologies: ['Technical Writing', 'Documentation', 'Web Technologies', 'Research', 'Content Strategy'],
      link: null,
      linkType: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Freelance':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      case 'Internship':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const renderLink = (experience: typeof experiences[0]) => {
    if (!experience.link) return null;
    
    if (experience.linkType === 'whatsapp') {
      return (
        <motion.a
          href={`https://wa.me/${experience.link.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium"
        >
          <ExternalLink size={16} />
          Try WhatsApp Bot: {experience.link}
        </motion.a>
      );
    }
    
    return (
      <motion.a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
      >
        <ExternalLink size={16} />
        View Project
      </motion.a>
    );
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
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
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A journey through impactful roles in web development, AI automation, and technical innovation
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-teal-500 h-full rounded-full"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {experience.title}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {experience.company}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                            {experience.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{experience.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-700 dark:text-gray-300 text-sm flex items-start gap-2">
                              <span className="text-blue-500 mt-1.5 block w-1 h-1 rounded-full bg-current flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Link */}
                      {renderLink(experience)}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, innovative projects, 
              and ways to contribute to your team's success.
            </p>
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
              <div className="flex items-center gap-2">
                <Briefcase size={20} />
                Let's Connect
              </div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;