'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>
      {/* Particle Background */}
      <ParticleBackground />

      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-15 rounded-full blur-3xl'
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full blur-3xl'
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16'>
        <motion.div
          className='text-center'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants} className='mb-8'>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className='inline-block'
            >
              <div className='relative'>
                <div className='w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl'>
                  <span className='text-3xl font-bold text-white'>👨‍💻</span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse'></div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white'>
              Hi, I&apos;m a{' '}
              <span className='bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent'>
                Frontend
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'React Expert',
                  2000,
                  'UI/UX Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper='span'
                speed={50}
                className='bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent'
                repeat={Infinity}
              />
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className='text-xl md:text-2xl mb-8 text-blue-700 dark:text-blue-300 font-medium'>
              React • Next.js • TypeScript • Modern Web Technologies
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className='text-lg mb-12 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed'>
              Crafting beautiful, interactive, and user-friendly web experiences
              with modern technologies. Passionate about clean code, innovative
              design, and creating digital solutions that make a difference.
            </p>
          </motion.div>

          <motion.div
            className='flex flex-col sm:flex-row gap-6 justify-center mb-12'
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/projects'
                className='group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl'
              >
                <span>View My Work</span>
                <motion.div className='group-hover:translate-x-1 transition-transform'>
                  →
                </motion.div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href='/contact'
                className='group px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 inline-flex items-center space-x-2'
              >
                <span>Let&apos;s Connect</span>
                <motion.div className='group-hover:scale-110 transition-transform'>
                  ✨
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className='flex justify-center space-x-6 mb-12'
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon className='w-6 h-6' />
              </motion.a>
            ))}
          </motion.div>

          {/* Tech Stack Pills */}
          <motion.div
            className='flex flex-wrap justify-center gap-3 mb-16'
            variants={itemVariants}
          >
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Framer Motion',
              'Node.js',
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className='px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-400 transition-all duration-300'
                whileHover={{ scale: 1.05, y: -1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className='w-6 h-6 text-gray-400 dark:text-gray-500' />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
