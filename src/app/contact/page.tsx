'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send
} from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email services like EmailJS, Formspree, etc.
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-background pt-16'>
      {/* Hero Section */}
      <section className='py-20 bg-gradient-to-br from-background via-blue-50 to-indigo-100 dark:from-background dark:via-blue-900 dark:to-indigo-900'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-block mb-8'
            >
              <div className='w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl'>
                <MessageCircle className='w-10 h-10 text-primary-foreground' />
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-foreground mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let&apos;s Build Something{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Amazing
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to turn your ideas into reality? I&apos;m passionate about
              creating innovative web solutions and would love to discuss your
              next project.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
          {/* Contact Information */}
          <motion.div
            className='space-y-8'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className='text-4xl font-bold text-foreground mb-8'>
              Get In Touch
            </h2>

            <div className='space-y-6'>
              <motion.div
                className='flex items-start space-x-4 bg-background p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow'
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center'>
                  <Mail className='h-6 w-6 text-primary-foreground' />
                </div>
                <div>
                  <h3 className='font-bold text-foreground text-lg'>
                    Email
                  </h3>
                  <p className='text-muted-foreground'>
                    yash.govani1310@gmail.com
                  </p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    I typically respond within 24 hours
                  </p>
                </div>
              </motion.div>

              <motion.div
                className='flex items-start space-x-4 bg-background p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-shadow'
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className='flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center'>
                  <MapPin className='h-6 w-6 text-primary-foreground' />
                </div>
                <div>
                  <h3 className='font-bold text-foreground text-lg'>
                    Location
                  </h3>
                  <p className='text-muted-foreground'>
                    Ahmedabad, India
                  </p>
                  <p className='text-sm text-muted-foreground mt-1'>
                    Available for remote / in-office work worldwide
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl border border-blue-100 dark:border-blue-800'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className='font-bold text-foreground mb-6 text-lg'>
                Connect With Me
              </h3>
              <div className='flex space-x-4'>
                <motion.a
                  href='https://linkedin.com/in/yourprofile'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className='h-6 w-6' />
                </motion.a>
                <motion.a
                  href='https://github.com/yashgovani'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center w-12 h-12 bg-gradient-to-r from-secondary to-secondary/80 text-secondary-foreground rounded-xl hover:from-secondary/80 hover:to-secondary/60 transition-all duration-300 shadow-lg'
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className='h-6 w-6' />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            className='bg-background rounded-2xl shadow-xl p-8 border border-border'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className='text-2xl font-bold text-foreground mb-6'>
              Send Me a Message
            </h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-muted-foreground mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                    placeholder='Your Name'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-muted-foreground mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                    placeholder='your.email@example.com'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-muted-foreground mb-2'
                >
                  Subject *
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                  placeholder='Project Inquiry / Collaboration / Other'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-muted-foreground mb-2'
                >
                  Message *
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className='w-full px-4 py-3 border border-border bg-background text-foreground rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
                  placeholder='Tell me about your project, timeline, and requirements...'
                ></textarea>
              </div>

              <motion.button
                type='submit'
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-bold text-lg shadow-lg flex items-center justify-center'
              >
                Send Message
                <Send className='inline-block ml-2 h-5 w-5' />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div
          className='mt-20'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-foreground mb-4'>
              How I Can Help You
            </h2>
            <p className='text-xl text-muted-foreground'>
              Services I offer to bring your ideas to life
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Web Development',
                description:
                  'Full-stack web applications using modern technologies',
                icon: '🌐',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'API Development',
                description:
                  'Robust and scalable backend APIs and microservices',
                icon: '⚡',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Database Design',
                description: 'Efficient database architecture and optimization',
                icon: '🗄️',
                color: 'from-green-500 to-teal-500',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className='bg-background rounded-2xl shadow-lg hover:shadow-xl p-6 border border-border transition-all duration-300'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-4 text-2xl shadow-lg`}
                >
                  {service.icon}
                </div>
                <h3 className='text-lg font-bold text-foreground mb-2'>
                  {service.title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className='mt-20 text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white rounded-2xl p-12 shadow-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-4'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Let&apos;s discuss your ideas and create something amazing together.
            I&apos;m here to help bring your vision to life!
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <motion.a
              href='mailto:yash.govani1310@gmail.com?subject=Project Inquiry'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg'
            >
              <Mail className='mr-2 h-5 w-5' />
              Email Me Directly
            </motion.a>
            <motion.a
              href='/resume.pdf'
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className='inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg'
            >
              <Download className='mr-2 h-5 w-5' />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
