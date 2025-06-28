import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TechStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = {
    frontend: [
      { name: 'HTML5', color: 'from-orange-500 to-red-500' },
      { name: 'CSS3', color: 'from-blue-500 to-blue-600' },
      { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500' },
      { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
      { name: 'React.js', color: 'from-cyan-400 to-cyan-500' },
      { name: 'Next.js', color: 'from-gray-800 to-black' },
      { name: 'Tailwind CSS', color: 'from-cyan-500 to-blue-500' },
      { name: 'Flutter', color: 'from-blue-400 to-blue-600' },
    ],
    backend: [
      { name: 'Python', color: 'from-blue-500 to-yellow-500' },
      { name: 'Django', color: 'from-green-600 to-green-700' },
      { name: 'FastAPI', color: 'from-teal-500 to-green-500' },
      { name: 'Node.js', color: 'from-green-500 to-green-600' },
      { name: 'Express.js', color: 'from-gray-700 to-gray-800' },
    ],
    database: [
      { name: 'PostgreSQL', color: 'from-blue-600 to-blue-700' },
      { name: 'MySQL', color: 'from-orange-500 to-orange-600' },
      { name: 'MongoDB', color: 'from-green-500 to-green-600' },
      { name: 'Redis', color: 'from-red-500 to-red-600' },
    ],
    tools: [
      { name: 'Git', color: 'from-orange-500 to-red-500' },
      { name: 'GitHub', color: 'from-gray-700 to-gray-900' },
      { name: 'VS Code', color: 'from-blue-500 to-blue-600' },
      { name: 'Docker', color: 'from-blue-400 to-blue-500' },
      { name: 'Railway', color: 'from-purple-500 to-purple-600' },
      { name: 'Vercel', color: 'from-black to-gray-800' },
    ],
    ai: [
      { name: 'OpenAI API', color: 'from-green-400 to-green-500' },
      { name: 'Pinecone', color: 'from-purple-500 to-purple-600' },
      { name: 'Pandas', color: 'from-blue-600 to-purple-600' },
      { name: 'BeautifulSoup', color: 'from-yellow-500 to-orange-500' },
      { name: 'Selenium', color: 'from-green-500 to-green-600' },
    ],
    other: [
      { name: 'Stripe', color: 'from-purple-600 to-blue-600' },
      { name: 'Twilio', color: 'from-red-500 to-red-600' },
      { name: 'Inngest', color: 'from-blue-500 to-purple-500' },
      { name: 'Clerk', color: 'from-purple-500 to-pink-500' },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const floatingAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const TechBadge: React.FC<{ tech: { name: string; color: string }; index: number }> = ({ tech, index }) => (
    <motion.div
      variants={techVariants}
      whileHover={{ scale: 1.1, rotate: 5 }}
      animate={floatingAnimation}
      style={{ animationDelay: `${index * 0.2}s` }}
      className="group relative"
    >
      <div className={`bg-gradient-to-r ${tech.color} p-0.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}>
        <div className="bg-white dark:bg-gray-800 px-4 py-3 rounded-lg">
          <div className="text-center">
            <div className={`w-8 h-8 mx-auto mb-2 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center`}>
              <span className="text-white font-bold text-sm">
                {tech.name.charAt(0)}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {tech.name}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const TechCategory: React.FC<{ title: string; techs: { name: string; color: string }[]; icon: string }> = ({ title, techs, icon }) => (
    <motion.div variants={categoryVariants} className="mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {techs.map((tech, index) => (
          <TechBadge key={tech.name} tech={tech} index={index} />
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of the technologies, frameworks, and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Technology Categories */}
          <TechCategory title="Frontend Development" techs={technologies.frontend} icon="🎨" />
          <TechCategory title="Backend Development" techs={technologies.backend} icon="⚙️" />
          <TechCategory title="Database & Storage" techs={technologies.database} icon="🗄️" />
          <TechCategory title="Development Tools" techs={technologies.tools} icon="🛠️" />
          <TechCategory title="AI & Automation" techs={technologies.ai} icon="🤖" />
          <TechCategory title="APIs & Services" techs={technologies.other} icon="🔗" />

          {/* Skills Summary */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 p-8 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of web development and AI innovation. 
              My commitment to learning ensures that I can always provide cutting-edge solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;