'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedProjectCard from '@/components/AnimatedProjectCard';
import HeroSection from '@/components/HeroSection';
import { Code, Palette, Smartphone, Zap, Users, Lightbulb } from 'lucide-react';
import { projects } from '@/constants';

export default function Home() {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'React, Next.js, Vue.js, TypeScript',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      title: 'Backend Development',
      description: '.Net 8, GraphQL, MySQL, REST APIs',
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
    <div className='min-h-screen bg-background transition-colors duration-300'>
      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <section className='py-20 bg-secondary/50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              Skills & Expertise
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
                <div className='relative bg-background p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border overflow-hidden'>
                  <div className='absolute inset-0 bg-linear-to-br opacity-5 group-hover:opacity-10 transition-opacity duration-300'></div>
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${skill.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <skill.icon className='w-8 h-8 text-primary-foreground' />
                  </div>
                  <h3 className='text-xl font-bold text-foreground mb-3'>
                    {skill.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed'>
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              Featured Projects
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Showcasing innovative web applications built with cutting-edge
              technologies and modern design principles
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
            {projects.map((project, index) => (
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
              className='group inline-flex items-center px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-xl font-semibold shadow-lg hover:shadow-xl'
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
        <div className='absolute inset-0 bg-linear-to-br from-blue-600 via-purple-600 to-blue-800'></div>
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
            <h2 className='text-4xl md:text-5xl font-bold text-primary-foreground mb-6'>
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
                  className='inline-block bg-background text-primary px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl'
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
                  className='inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300'
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
