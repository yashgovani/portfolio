'use client';

import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import AnimatedProjectCard from '@/components/AnimatedProjectCard';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution built with .NET 8 Web API backend and React frontend. Features include user authentication, payment processing, admin dashboard, inventory management, and real-time notifications.',
      technologies: [
        '.NET 8',
        'React',
        'TypeScript',
        'SQL Server',
        'Azure',
        'Stripe',
      ],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://your-ecommerce.azurewebsites.net',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Modern chat application using SignalR for real-time messaging, Vue.js frontend with responsive design, JWT authentication, file sharing, and group chat functionality with message history.',
      technologies: [
        'Vue.js',
        '.NET Core',
        'SignalR',
        'Entity Framework',
        'PostgreSQL',
      ],
      githubUrl: 'https://github.com/yourusername/chat-app',
      liveUrl: 'https://your-chat-app.com',
    },
    {
      title: 'Task Management Dashboard',
      description:
        'Professional project management tool with drag-and-drop functionality, team collaboration features, real-time updates, Kanban boards, time tracking, and comprehensive reporting.',
      technologies: [
        'React',
        'TypeScript',
        '.NET 8',
        'PostgreSQL',
        'Docker',
        'Azure',
      ],
      githubUrl: 'https://github.com/yourusername/task-dashboard',
      liveUrl: 'https://task-manager-demo.azurewebsites.net',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Comprehensive social media management platform with post scheduling, analytics, multi-platform integration, content calendar, and automated reporting with beautiful data visualizations.',
      technologies: [
        'Vue.js',
        'Nuxt.js',
        '.NET 8',
        'MongoDB',
        'Redis',
        'Chart.js',
      ],
      githubUrl: 'https://github.com/yourusername/social-dashboard',
    },
    {
      title: 'Learning Management System',
      description:
        'Complete LMS with course creation, video streaming, progress tracking, quizzes, certificates, and payment integration. Supports multiple user roles and advanced analytics.',
      technologies: [
        'React',
        'Next.js',
        '.NET 8',
        'SQL Server',
        'Azure Blob',
        'Stripe',
      ],
      githubUrl: 'https://github.com/yourusername/lms-platform',
      liveUrl: 'https://lms-demo.vercel.app',
    },
    {
      title: 'Inventory Management System',
      description:
        'Enterprise-grade inventory management with barcode scanning, automated reordering, supplier management, reporting, and multi-location support with real-time synchronization.',
      technologies: [
        'Vue.js',
        '.NET 8',
        'Entity Framework',
        'SQL Server',
        'Azure',
      ],
      githubUrl: 'https://github.com/yourusername/inventory-system',
    },
    {
      title: 'Financial Portfolio Tracker',
      description:
        'Personal finance application with portfolio tracking, investment analysis, automated data feeds, risk assessment, and comprehensive financial reporting with interactive charts.',
      technologies: [
        'React',
        'TypeScript',
        '.NET 8',
        'PostgreSQL',
        'Chart.js',
        'API Integration',
      ],
      githubUrl: 'https://github.com/yourusername/portfolio-tracker',
    },
    {
      title: 'Restaurant Ordering System',
      description:
        'Complete restaurant management solution with online ordering, kitchen display system, table management, payment processing, and customer feedback integration.',
      technologies: [
        'Next.js',
        '.NET 8',
        'SignalR',
        'SQL Server',
        'Stripe',
        'PWA',
      ],
      githubUrl: 'https://github.com/yourusername/restaurant-system',
      liveUrl: 'https://restaurant-demo.vercel.app',
    },
    {
      title: 'Healthcare Management Platform',
      description:
        'HIPAA-compliant healthcare platform with patient records, appointment scheduling, telemedicine integration, prescription management, and comprehensive reporting dashboard.',
      technologies: [
        '.NET 8',
        'React',
        'SQL Server',
        'Azure',
        'WebRTC',
        'Security',
      ],
      githubUrl: 'https://github.com/yourusername/healthcare-platform',
    },
  ];

  const categories = [
    'All',
    'E-Commerce',
    'Real-Time Apps',
    'Management Systems',
    'Dashboards',
    'Healthcare',
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>
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
              <div className='w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl'>
                <Code className='w-10 h-10 text-white' />
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              My{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Projects
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
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
        {/* Filter Buttons */}
        <motion.div
          className='flex flex-wrap justify-center gap-4 mb-16'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-gray-600 text-blue-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent shadow-md'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

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
          className='text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16 px-8 rounded-2xl shadow-2xl'
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
}
