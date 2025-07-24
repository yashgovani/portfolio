'use client';

import { motion } from 'framer-motion';
import {
  Code,
  Palette,
  Brain,
  Coffee,
  Users,
  Zap,
  BookOpen,
  Heart,
} from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '4+', icon: Code },
    { label: 'Projects Completed', value: '50+', icon: Zap },
    { label: 'Happy Clients', value: '30+', icon: Heart },
    { label: 'Technologies', value: '15+', icon: Brain },
  ];

  const skills = [
    {
      category: 'Frontend Development',
      icon: Palette,
      gradient: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Framer Motion', level: 85 },
      ],
    },
    {
      category: 'Backend & APIs',
      icon: Code,
      gradient: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: Coffee,
      gradient: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS/Vercel', level: 78 },
        { name: 'CI/CD', level: 75 },
        { name: 'Testing', level: 82 },
      ],
    },
  ];

  const journey = [
    {
      year: '2021',
      title: 'Started Web Development',
      description:
        'Began learning HTML, CSS, and JavaScript. Built my first interactive websites.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      year: '2022',
      title: 'Mastered React & Modern JS',
      description:
        'Dove deep into React ecosystem, learned TypeScript, and modern development practices.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      year: '2023',
      title: 'Full-Stack Development',
      description:
        'Expanded to backend development with Node.js, databases, and cloud deployment.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      year: '2024',
      title: 'Professional Frontend Developer',
      description:
        'Now building amazing user experiences and leading frontend projects.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-block mb-8'
            >
              <div className='relative'>
                <div className='w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl'>
                  <span className='text-4xl font-bold text-white'>👨‍💻</span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse'></div>
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              About{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Me
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I&apos;m a passionate frontend developer who loves crafting
              beautiful, interactive, and user-friendly web experiences. With 4+
              years of experience, I specialize in React, Next.js, and modern
              web technologies.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className='bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center'
              >
                <stat.icon className='w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400' />
                <div className='text-3xl font-bold text-gray-900 dark:text-white mb-1'>
                  {stat.value}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              My Journey
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              From curious beginner to passionate frontend developer
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                Hello, I&apos;m a Frontend Developer!
              </h3>
              <div className='space-y-4 text-gray-600 dark:text-gray-300'>
                <p>
                  My passion for web development started 4 years ago when I
                  built my first website. What began as curiosity quickly became
                  an obsession with creating beautiful, functional user
                  interfaces.
                </p>
                <p>
                  I specialize in React ecosystem and modern JavaScript, with a
                  strong focus on performance, accessibility, and user
                  experience. I love turning complex problems into simple,
                  elegant solutions.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new
                  design trends, contributing to open-source projects, or
                  sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='flex items-start space-x-4'
                >
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {item.year}
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900 dark:text-white mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-gray-600 dark:text-gray-300 text-sm'>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className='py-20 bg-gray-50 dark:bg-gray-800/50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              Technologies I love working with
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skillGroup.gradient} rounded-xl flex items-center justify-center mb-6`}
                >
                  <skillGroup.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
                  {skillGroup.category}
                </h3>

                <div className='space-y-4'>
                  {skillGroup.technologies.map(tech => (
                    <div key={tech.name}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-gray-700 dark:text-gray-300 font-medium'>
                          {tech.name}
                        </span>
                        <span className='text-gray-500 dark:text-gray-400 text-sm'>
                          {tech.level}%
                        </span>
                      </div>
                      <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                        <motion.div
                          className={`bg-gradient-to-r ${skillGroup.gradient} h-2 rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='py-20 bg-white dark:bg-gray-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              What Drives Me
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Core values that guide my development approach
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                icon: Users,
                title: 'User-Centered Design',
                description:
                  'I believe great code starts with understanding user needs and creating intuitive experiences.',
              },
              {
                icon: Zap,
                title: 'Performance First',
                description:
                  'Every line of code is written with performance and scalability in mind.',
              },
              {
                icon: BookOpen,
                title: 'Continuous Learning',
                description:
                  'Staying curious and constantly learning new technologies and best practices.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6'>
                  <value.icon className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-4'>
                  {value.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Let&apos;s Create Something Amazing Together
            </h2>
            <p className='text-xl text-blue-100 mb-10 leading-relaxed'>
              I&apos;m always excited to work on new projects and collaborate
              with talented people. Whether you need a new website, want to
              improve an existing one, or just want to chat about tech!
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <motion.a
                href='/contact'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg'
              >
                Get In Touch
              </motion.a>
              <motion.a
                href='/projects'
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className='inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300'
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
