import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Target, Code2 } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A passionate Computer Science student and Full Stack Developer with expertise in 
              modern web technologies and AI automation solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg text-gray-600 dark:text-gray-400">
                <p className="mb-6">
                  I'm currently pursuing my Bachelor of Science in Computer Science at 
                  COMSATS University Islamabad, maintaining a strong CGPA of 3.69/4.0. 
                  My journey in technology is driven by a passion for creating innovative 
                  solutions that bridge the gap between complex problems and elegant implementations.
                </p>
                <p className="mb-6">
                  With expertise spanning from full-stack web development to AI automation, 
                  I specialize in building scalable applications using Django, React, and 
                  modern cloud technologies. My experience includes developing SAAS platforms, 
                  intelligent automation systems, and comprehensive web applications.
                </p>
                <p>
                  I'm particularly interested in the intersection of AI and web development, 
                  creating systems that not only function efficiently but also provide 
                  intelligent automation capabilities for businesses and users.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">2+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Education & Achievements */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Bachelor of Science in Computer Science
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      COMSATS University Islamabad
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      Sep 2022 – Jun 2026 | CGPA: 3.69/4.0
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      F.Sc. Pre Engineering
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Punjab College Faisalabad
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      2022 | 91%
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Competencies */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg">
                    <Target className="text-teal-600 dark:text-teal-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Core Competencies</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    'Full Stack Web Development',
                    'AI Automation & Integration',
                    'Django & FastAPI Development',
                    'React & Next.js Applications',
                    'Database Design & Optimization',
                    'Cloud Deployment & DevOps'
                  ].map((competency, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Code2 size={16} className="text-blue-600 dark:text-blue-400" />
                      <span className="text-gray-700 dark:text-gray-300">{competency}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Values */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg">
                    <Award className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">My Approach</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  I believe in writing clean, maintainable code and creating user-centric solutions. 
                  My goal is to leverage technology to solve real-world problems while continuously 
                  learning and adapting to new technologies and methodologies.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;