import {
  BookOpen,
  Brain,
  Code,
  Coffee,
  Heart,
  Palette,
  Users,
  Zap,
} from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Mirafra Technologies',
    period: '10/2024 - Present',
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
    title: 'Software Engineer',
    company: 'Peerbits Solutions',
    period: '05/2023 - 09/2024',
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
    title: 'Associate Software Engineer',
    company: 'Accenture Solutions Pvt. Ltd.',
    period: '09/2021 - 05/2023',
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
    items: ['.NET 8', 'C#', 'Entity Framework', 'Web API'],
    color: 'from-purple-100 to-pink-100',
    border: 'border-purple-200',
  },
  {
    category: 'Database',
    items: ['My SQL', 'MongoDB'],
    color: 'from-green-100 to-teal-100',
    border: 'border-green-200',
  },
  {
    category: 'Tools',
    items: ['Git', 'Visual Studio', 'VS Code'],
    color: 'from-yellow-100 to-orange-100',
    border: 'border-yellow-200',
  },
  {
    category: 'Testing',
    items: ['Jest', 'Cypress', 'Postman'],
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

const projects = [
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
];

const stats = [
  { label: 'Years Experience', value: '4+', icon: Code },
  { label: 'Projects Completed', value: '50+', icon: Zap },
  { label: 'Happy Clients', value: '30+', icon: Heart },
  { label: 'Technologies', value: '15+', icon: Brain },
];

const skill = [
  {
    category: 'Frontend Development',
    icon: Palette,
    gradient: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'TypeScript', level: 92 },
      { name: 'React.js', level: 95 },
      { name: 'Vue.js', level: 90 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: Code,
    gradient: 'from-purple-500 to-pink-500',
    technologies: [
      { name: '.Net 8', level: 85 },
      { name: 'Entity Framework', level: 82 },
      { name: 'MySQL', level: 78 },
      { name: 'Rest API', level: 75 },
      { name: 'GraphQL', level: 75 },
    ],
  },
  {
    category: 'Testing & Tools',
    icon: Coffee,
    gradient: 'from-green-500 to-emerald-500',
    technologies: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Visual Studio Code', level: 90 },
      { name: 'Visual Studio', level: 90 },
      { name: 'Postman', level: 90 },
      { name: 'Unit Testing', level: 82 },
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
      'Dive deep into React ecosystem, learned TypeScript, and modern development practices.',
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
  {
    year: '2025',
    title: 'Professional Full Stack Developer',
    description:
      'Now building amazing user experiences and leading full stack projects.',
    color: 'from-teal-500 to-blue-500',
  },
];

const goals = [
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
];

export {
  certifications,
  experiences,
  journey,
  projects,
  skills,
  stats,
  skill,
  goals,
};
