'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Cypress', 'Linux']
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + Math.random() * 15}%` }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Always learning and exploring new technologies to stay current with industry trends.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'React Native', 'Vue.js', 'Kubernetes', 'Terraform'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
              >
                {tech} <span className="text-xs">📚</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}