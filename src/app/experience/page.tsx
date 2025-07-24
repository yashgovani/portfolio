'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Calendar,
  Award,
  Download,
  CheckCircle,
} from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      period: '2022 - Present',
      description:
        'Lead full-stack development initiatives using .NET 8 and modern JavaScript frameworks. Architect scalable web applications serving 100K+ users. Mentor junior developers and establish coding standards across the development team.',
      achievements: [
        'Built microservices architecture that improved system performance by 40%',
        'Led development team of 6 engineers across 3 major product releases',
        'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
      ],
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Inc.',
      period: '2020 - 2022',
      description:
        'Developed responsive web applications using React, Vue.js, and .NET Core. Collaborated with UX/UI designers to create engaging user experiences. Optimized database queries and implemented caching strategies for improved performance.',
      achievements: [
        'Delivered 15+ client projects with 98% customer satisfaction rate',
        'Reduced page load times by 60% through optimization techniques',
        'Created reusable component library adopted across 5 development teams',
      ],
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2019 - 2020',
      description:
        'Specialized in creating modern, responsive user interfaces using React and Vue.js. Worked closely with designers to transform mockups into pixel-perfect web applications. Implemented state management and API integrations.',
      achievements: [
        'Increased user engagement by 35% through improved UI/UX design',
        'Developed mobile-first responsive designs for 20+ client websites',
        'Implemented automated testing reducing bug reports by 50%',
      ],
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS'],
      color: 'from-blue-100 to-cyan-100',
      border: 'border-blue-200',
    },
    {
      category: 'Backend',
      items: ['.NET 8', 'C#', 'Entity Framework', 'Web API', 'SignalR'],
      color: 'from-purple-100 to-pink-100',
      border: 'border-purple-200',
    },
    {
      category: 'Database',
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Azure SQL'],
      color: 'from-green-100 to-teal-100',
      border: 'border-green-200',
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Git'],
      color: 'from-yellow-100 to-orange-100',
      border: 'border-yellow-200',
    },
    {
      category: 'Tools & Testing',
      items: ['Visual Studio', 'VS Code', 'Jest', 'Cypress', 'Postman'],
      color: 'from-indigo-100 to-purple-100',
      border: 'border-indigo-200',
    },
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'React Professional Developer Certificate',
      issuer: 'Meta',
      date: '2022',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      name: '.NET Core Certification',
      issuer: 'Microsoft',
      date: '2021',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2020',
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
            className='text-center'
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='inline-block mb-8'
            >
              <div className='w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl'>
                <Briefcase className='w-10 h-10 text-white' />
              </div>
            </motion.div>

            <motion.h1
              className='text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Professional{' '}
              <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Experience
              </span>
            </motion.h1>

            <motion.p
              className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Over 5 years of experience building modern web applications with
              cutting-edge technologies. Passionate about creating scalable
              solutions that deliver exceptional user experiences and drive
              business success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Experience Timeline */}
        <div className='mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Work Experience
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              My professional journey and achievements
            </p>
          </motion.div>

          <div className='relative'>
            {/* Timeline line */}
            <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block'></div>

            <div className='space-y-12'>
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className='relative'
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className='flex items-start space-x-6 md:space-x-8'>
                    {/* Timeline dot */}
                    <motion.div
                      className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg relative z-10`}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Briefcase className='w-8 h-8 text-white' />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      className='flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-shadow'
                      whileHover={{ y: -5 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 25,
                      }}
                    >
                      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4'>
                        <div>
                          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                            {exp.title}
                          </h3>
                          <p
                            className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}
                          >
                            {exp.company}
                          </p>
                        </div>
                        <div className='flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full mt-2 lg:mt-0'>
                          <Calendar className='w-4 h-4' />
                          <span className='text-sm font-medium'>
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      <p className='text-gray-600 dark:text-gray-300 mb-6 leading-relaxed'>
                        {exp.description}
                      </p>

                      <div>
                        <h4 className='font-bold text-gray-900 dark:text-white mb-4 text-lg flex items-center'>
                          <Award className='w-5 h-5 mr-2 text-blue-600 dark:text-blue-400' />
                          Key Achievements:
                        </h4>
                        <ul className='space-y-3'>
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              className='flex items-start'
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 * idx }}
                              viewport={{ once: true }}
                            >
                              <CheckCircle className='flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-3' />
                              <span className='text-gray-700 dark:text-gray-300'>
                                {achievement}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className='mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Technical Expertise
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              Technologies I work with daily
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${skillGroup.color} dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-lg hover:shadow-xl p-8 border ${skillGroup.border} dark:border-gray-600 transition-all duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
                  {skillGroup.category}
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {skillGroup.items.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      className='px-4 py-2 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-xl shadow-sm hover:shadow-md transition-shadow'
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className='mb-16'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
              Certifications & Credentials
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              Professional certifications and achievements
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl p-8 border border-gray-100 dark:border-gray-700 transition-all duration-300'
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Award className='w-8 h-8 text-white' />
                </div>
                <h3 className='text-lg font-bold text-gray-900 dark:text-white mb-3'>
                  {cert.name}
                </h3>
                <p
                  className={`font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-2`}
                >
                  {cert.issuer}
                </p>
                <p className='text-gray-600 dark:text-gray-400 text-sm flex items-center'>
                  <Calendar className='w-4 h-4 mr-1' />
                  Earned: {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Download Resume */}
        <motion.div
          className='text-center bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white rounded-2xl p-12 shadow-2xl'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-3xl font-bold mb-4'>Want to Learn More?</h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Download my complete resume for detailed information about my
            experience, education, and technical accomplishments.
          </p>
          <motion.a
            href='/resume.pdf'
            download
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className='inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg'
          >
            <Download className='mr-3 h-6 w-6' />
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
