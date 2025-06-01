import { Project } from "@/types/project";

export const projects: Project[] = [
  // {
  //   id: 'chatify',
  //   title: 'Chatify',
  //   description: 'A real-time chat application supporting SMS and email messaging with multi-channel communication.',
  //   technologies: ['Laravel', 'Pusher', 'SMTP', 'Twilio', 'PHP', 'JavaScript', 'PostgreSQL', 'IMAP'],
  //   features: [
  //     'Real-time messaging using WebSockets',
  //     'Multi-channel communication (SMS & Email)',
  //     'Secure user authentication',
  //     'Message history and search functionality'
  //   ],
  //   image: '/projects/chatify.png',
  //   github: '#'
  // },
  {
    id: 'ehub',
    title: 'EHub',
    description: 'An e-learning platform designed to facilitate technology-based learning with role-based access control.',
    technologies: ['Spring Boot', 'Thymeleaf', 'PostgreSQL', 'Spring Security'],
    features: [
      'User authentication and authorization',
      'Role-based access control',
      'Course management system',
      'Interactive learning materials'
    ],
    image: '/e-hub.jpg',
    github: '#'
  },
  {
    id: 'ecricinfo',
    title: 'E-Cric Info',
    description: 'A platform displaying live cricket results and points tables using real-time web scraping.',
    technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'Web Scraping'],
    features: [
      'Live cricket scores and updates',
      'Real-time points tables',
      'Match statistics and player details',
      'Responsive design for all devices'
    ],
    image: '/cric-info.jpg',
    demo: '#'
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    description: 'A comprehensive CRM-style application for managing hospital operations and patient records.',
    technologies: ['Laravel', 'Filament', 'Tailwind CSS', 'MySQL'],
    features: [
      'Patient and doctor management',
      'Appointment scheduling',
      'Medical records management',
      'Role-based dashboards'
    ],
    image: '/hms.png',
    github: '#'
  }
];
