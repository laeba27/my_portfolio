// Portfolio Data - Easily customizable data file
// Update this file to change portfolio content

export const personalInfo = {
  name: 'Laeba Firdous',
  title: 'Full Stack Developer & CS Student',
  tagline: 'Building Scalable Web Solutions & Modern Experiences',
  summary:
    'Motivated Computer Science student specializing in full-stack development and scalable systems. Skilled in React, Next.js, Node.js, and cloud platforms. Seeking to contribute to impactful software solutions.',
  email: 'laeba2704@gmail.com',
  phone: '9717809918',
  location: 'Gurgaon, Haryana',
  github: 'https://github.com/laebafirdous',
  linkedin: 'https://linkedin.com/in/laeba-firdous',
  portfolio: 'https://portfolio-kohl-nu-44.vercel.app/',
};

export const education = {
  degree: 'Bachelor of Technology, Computer Science',
  institution: 'SGT University, Gurgaon Haryana',
  period: '2022 - 2026',
  cgpa: '9.12',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Database Management Systems',
    'Web Development',
    'Operating Systems',
    'Object-Oriented Programming',
  ],
};

export const skills = {
  frontend: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Redux', 'Context API', 'Radix UI', 'Figma'],
  backend: ['Node.js', 'Express.js', 'RESTful APIs', 'Python (Flask/Django)', 'NestJS', 'GraphQL (Basic)', 'Socket.IO'],
  databases: ['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase Firestore', 'MySQL', 'Clerk', 'Kinde', 'JWT', 'OAuth2.0'],
  tools: ['Postman', 'React Testing Library', 'Git', 'Agile/Scrum', 'Problem-solving', 'Communication', 'Teamwork'],
  languages: ['English', 'Hindi'],
};

export const experience = [
  {
    title: 'Backend Developer Intern',
    company: 'Xellerate Solutions',
    period: 'Nov 2024 - Present',
    description:
      'Developing and managing RESTful APIs using Supabase and PostgreSQL for a startup-investor matching platform.',
    achievements: [
      'Developed RESTful APIs for startup-investor matching platform',
      'Implemented hierarchical file & folder management system in Supabase',
      'Enforced secure authentication/authorization for sensitive data',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Smile Returns',
    period: 'Ongoing',
    description:
      'Contributed to a scalable, multi-tenant SaaS platform using Next.js, Supabase, and PostgreSQL, supporting 50,000+ users.',
    achievements: [
      'Built multi-tenant SaaS platform supporting 50,000+ users',
      'Optimized database schemas improving data retrieval by 30%',
      'Implemented secure file storage for medical data with compliance',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Task & Team Collaboration Platform',
    description: 'A comprehensive project management solution with real-time collaboration features.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    features: [
      'Kanban boards with drag-and-drop',
      'Role-based access control',
      'Real-time notifications',
      'File uploads & comments',
      'Task deadlines & reminders',
    ],
    tags: ['Next.js', 'MongoDB', 'Express.js', 'Clerk', 'Socket.IO'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
  {
    id: 2,
    title: 'Smart Resume Parser & Job Tracker',
    description: 'AI-powered resume parsing with automatic job matching and application tracking.',
    image: 'https://images.unsplash.com/photo-1586281380349-56ef4d49a814?w=800&q=80',
    features: [
      'PDF to JSON resume parsing',
      'NLP-powered skill matching',
      'Job scraper integration',
      'Saved jobs dashboard',
      'Email alerts for matches',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Puppeteer'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
  {
    id: 3,
    title: 'Invoice & Subscription Management App',
    description: 'Complete billing solution with invoice generation, payment tracking, and recurring subscriptions.',
    image: 'https://images.unsplash.com/photo-1554050857-71f58bda9960?w=800&q=80',
    features: [
      'Create & send invoices',
      'Stripe payment integration',
      'Subscription billing with webhooks',
      'PDF exports & reports',
      'Client dashboard',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'PDFMake'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
  {
    id: 4,
    title: 'Meeting Scheduler Application',
    description: 'User-friendly meeting management system with scheduling, rescheduling, and calendar integration.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    features: [
      'User dashboard for managing meetings',
      'Edit & reschedule capabilities',
      'Cancel meetings with notifications',
      'Upcoming, ongoing & past meeting views',
      'Calendar integration',
    ],
    tags: ['Next.js', 'React.js', 'Firebase', 'Shadcn UI', 'Kinde'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
  {
    id: 5,
    title: 'AI Image Generator',
    description: 'Web application for generating and downloading AI-powered images with advanced customization.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    features: [
      'AI model integration (Together AI)',
      'Image generation from prompts',
      'Download functionality',
      'Accessible UI components',
      'Real-time generation',
    ],
    tags: ['Next.js', 'React.js', 'Tailwind CSS', 'Radix UI', 'Together AI'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
  {
    id: 6,
    title: 'Multi-Tenant SaaS Platform (Smile Returns)',
    description: 'Scalable SaaS platform supporting 50,000+ users with real-time features and secure data handling.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&q=80',
    features: [
      'Multi-tenant architecture',
      'Real-time prescription booking',
      'Secure file storage for medical data',
      'Data retrieval optimization (30% improvement)',
      'HIPAA compliance',
    ],
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'React', 'Tailwind CSS'],
    github: 'https://github.com/laebafirdous',
    demo: 'https://portfolio-kohl-nu-44.vercel.app/',
  },
];

export const achievements = [
  {
    icon: 'Award',
    title: '9.12 CGPA',
    organization: 'SGT University',
    year: '2024',
    description: 'Maintaining excellent academic performance in Computer Science',
  },
  {
    icon: 'Code2',
    title: 'Full Stack Development',
    organization: 'Practical Experience',
    year: 'Current',
    description: 'Building production-grade applications with React, Node.js, and cloud platforms',
  },
  {
    icon: 'Zap',
    title: 'Database Optimization',
    organization: 'Smile Returns',
    year: '2024',
    description: 'Improved data retrieval efficiency by 30% through schema optimization',
  },
  {
    icon: 'Star',
    title: 'Multi-Tenant Architecture',
    organization: 'Xellerate Solutions',
    year: '2024',
    description: 'Designed scalable systems supporting 50,000+ concurrent users',
  },
  {
    icon: 'Users',
    title: 'Secure Authentication',
    organization: 'Industry Experience',
    year: 'Current',
    description: 'Implemented RBAC/ACL models and OAuth2.0 security protocols',
  },
  {
    icon: 'Award',
    title: 'Hackathon Winner',
    organization: 'NITI Aayog',
    year: '2023',
    description: 'Secured 1st place in a hackathon focused on innovative tech solutions based on blockchain technology',
  },
];

export const navSections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const web3formsConfig = {
  accessKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get from https://web3forms.com/
  // To get your access key:
  // 1. Go to https://web3forms.com/
  // 2. Sign up and verify your email
  // 3. Copy your access key from the dashboard
  // 4. Replace 'YOUR_WEB3FORMS_ACCESS_KEY' with your actual key
};
