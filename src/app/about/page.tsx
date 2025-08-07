'use client';

import { goals, journey, skill, stats } from '@/constants';
import { motion } from 'framer-motion';
import { BookOpen, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className='min-h-screen bg-background pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-blue-50 to-indigo-100 dark:from-background dark:via-blue-900 dark:to-indigo-900'>
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
                  <span className='text-4xl font-bold text-primary-foreground'>👨‍💻</span>
                </div>
                <div className='absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse'></div>
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-foreground mb-6'
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
              className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
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
                className='bg-background p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border border-border'
              >
                <stat.icon className='w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400' />
                <div className='text-3xl font-bold text-foreground mb-1'>
                  {stat.value}
                </div>
                <div className='text-sm text-muted-foreground'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className='py-20 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              My Journey
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
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
              <h3 className='text-2xl font-bold text-foreground mb-6'>
                Hello, I&apos;m a Frontend Developer!
              </h3>
              <div className='space-y-4 text-muted-foreground'>
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
                    <h4 className='text-lg font-semibold text-foreground mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-muted-foreground text-sm'>
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
      <section className='py-20 bg-secondary/50'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
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
              Technologies I love working with
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {skill.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-card p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${skillGroup.gradient} rounded-xl flex items-center justify-center mb-6`}
                >
                  <skillGroup.icon className='w-8 h-8 text-white' />
                </div>

                <h3 className='text-xl font-bold text-card-foreground mb-6'>
                  {skillGroup.category}
                </h3>

                <div className='space-y-4'>
                  {skillGroup.technologies.map(tech => (
                    <div key={tech.name}>
                      <div className='flex justify-between items-center mb-2'>
                        <span className='text-foreground font-medium'>
                          {tech.name}
                        </span>
                        <span className='text-muted-foreground text-sm'>
                          {tech.level}%
                        </span>
                      </div>
                      <div className='w-full bg-secondary rounded-full h-2'>
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
      <section className='py-20 bg-background'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              What Drives Me
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              Core values that guide my development approach
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {goals.map((value, index) => (
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
                <h3 className='text-xl font-bold text-foreground mb-4'>
                  {value.title}
                </h3>
                <p className='text-muted-foreground'>
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
};

export default About;
