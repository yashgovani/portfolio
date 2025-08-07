'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Eye } from 'lucide-react';

interface AnimatedProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  index: number;
}

export default function AnimatedProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  index,
}: AnimatedProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className='group relative bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-border'
    >
      {/* Project Image/Gradient */}
      <div className='relative overflow-hidden'>
        {imageUrl ? (
          <div className='h-48 w-full bg-secondary relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='text-muted-foreground text-sm'>
                Project Image
              </span>
            </div>
          </div>
        ) : (
          <motion.div
            className='h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center relative overflow-hidden'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background elements */}
            <motion.div
              className='absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full'
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className='absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full'
              animate={{
                x: [0, -80, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
            <motion.span
              className='text-white text-lg font-bold text-center px-4 relative z-10'
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {title}
            </motion.span>
          </motion.div>
        )}

        {/* Hover overlay with action buttons */}
        <motion.div
          className='absolute inset-0 bg-black/60 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className='w-5 h-5' />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className='w-5 h-5' />
            </motion.a>
          )}
          <motion.button
            className='p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye className='w-5 h-5' />
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className='p-6'>
        <motion.h3
          className='text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'
          layoutId={`title-${index}`}
        >
          {title}
        </motion.h3>

        <motion.p
          className='text-muted-foreground mb-4 leading-relaxed text-sm'
          layoutId={`description-${index}`}
        >
          {description}
        </motion.p>

        {/* Technologies */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className='px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-800'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + techIndex * 0.1 }}
              whileHover={{ scale: 1.05, y: -1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action buttons */}
        <div className='flex space-x-3'>
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors flex items-center justify-center space-x-2'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className='w-4 h-4' />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center space-x-2'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className='w-4 h-4' />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>

      {/* Animated border effect */}
      <motion.div
        className='absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-2xl transition-all duration-300'
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
    </motion.div>
  );
}
