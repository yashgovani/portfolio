'use client';

import AnimatedProjectCard from '@/components/AnimatedProjectCard';
import { projects } from '@/constants';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';

const Projects = () => {

  return (
    <div className='min-h-screen bg-background pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-linear-to-br from-background via-blue-50 to-indigo-100 dark:from-background dark:via-blue-900 dark:to-indigo-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-block mb-8'
            >
              <div className='w-20 h-20 mx-auto bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl'>
                <Code className='w-10 h-10 text-primary-foreground' />
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-foreground mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My{' '}
              <span className='bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Projects
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A showcase of modern web applications built with cutting-edge
              technologies. Each project demonstrates my expertise in full-stack
              development, from responsive frontends to scalable backend
              solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Projects Grid */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {projects.map((project, index) => (
            <AnimatedProjectCard key={index} index={index} {...project} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className='text-center bg-linear-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 px-8 rounded-2xl shadow-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-4'>Have a Project in Mind?</h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            I&apos;m passionate about building innovative solutions that solve
            real-world problems. Let&apos;s collaborate and bring your ideas to
            life!
          </p>
          <motion.a
            href='/contact'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg'
          >
            Start a Project
            <ExternalLink className='ml-2 h-6 w-6' />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
