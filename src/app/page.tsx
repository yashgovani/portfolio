'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedProjectCard from '@/components/AnimatedProjectCard';
import HeroSection from '@/components/HeroSection';
import { Code, Palette, Smartphone, Zap, Users, Lightbulb } from 'lucide-react';

export default function Home() {
  const featuredProjects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Modern shopping experience with React, Next.js, and Stripe integration. Features real-time inventory, advanced filtering, and smooth checkout flow.',
      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Stripe',
        'Tailwind CSS',
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce.vercel.app',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features.',
      technologies: [
        'React',
        'TypeScript',
        'Framer Motion',
        'Socket.io',
        'Node.js',
      ],
      githubUrl: 'https://github.com/yourusername/task-dashboard',
      liveUrl: 'https://your-dashboard.vercel.app',
    },
    {
      title: 'Weather Forecast App',
      description:
        'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      technologies: [
        'React Native',
        'TypeScript',
        'Weather API',
        'Maps',
        'Redux',
      ],
      githubUrl: 'https://github.com/yourusername/weather-app',
    },
  ];

  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, Vue.js, TypeScript',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Modern design principles, Figma, Adobe XD',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Progressive Web Apps',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Web optimization, Core Web Vitals',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Git, Agile, Team leadership',
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Latest tech trends, Creative solutions',
      gradient: 'from-red-500 to-pink-500',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section className='py-20 bg-gray-50 dark:bg-gray-800/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Skills & Expertise
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Passionate about creating exceptional digital experiences with
              modern technologies
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className='group'
              >
                <div className='relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300'></div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <skill.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-3'>
                    {skill.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Featured Projects
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Showcasing innovative web applications built with cutting-edge
              technologies and modern design principles
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AnimatedProjectCard index={index} {...project} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <Link
              href='/projects'
              className='group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-xl font-semibold shadow-lg hover:shadow-xl'
            >
              <span>View All Projects</span>
              <motion.svg
                className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800'></div>
        <div className='absolute inset-0 bg-black/20'></div>
        <motion.div
          className='absolute inset-0'
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(119, 198, 255, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <div className='relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Ready to Build Something Amazing?
            </h2>
            <p className='text-xl text-blue-100 mb-10 leading-relaxed'>
              I&apos;m passionate about creating innovative web solutions that
              drive success. Let&apos;s collaborate and turn your vision into
              reality with cutting-edge technology.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/contact'
                  className='inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                  Start a Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href='/about'
                  className='inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
