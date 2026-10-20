import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    category: 'Frontend Development',
    description: 'Crafting responsive, high-performance interfaces with modern React paradigms and utility styling.',
    icon: 'Layout',
    skills: [
      { name: 'React.js', tag: 'Primary' },
      { name: 'TypeScript', tag: 'Core' },
      { name: 'JavaScript (ES6+)', tag: 'Core' },
      { name: 'Tailwind CSS', tag: 'Styling' },
      { name: 'Bootstrap CSS', tag: 'Styling' },
      { name: 'HTML5', tag: 'Markup' },
      { name: 'CSS3', tag: 'Styling' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend & APIs',
    description: 'Designing modular server architectures, secure authentication workflows, and robust RESTful services.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', tag: 'Runtime' },
      { name: 'Express.js', tag: 'Framework' },
      { name: 'NestJS', tag: 'Enterprise' },
      { name: 'REST APIs', tag: 'Architecture' },
      { name: 'JWT Authentication', tag: 'Security' },
    ],
  },
  {
    id: 'databases',
    category: 'Databases & ORM/ODM',
    description: 'Structuring schemas, optimizing queries, and handling data persistence across relational and document stores.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', tag: 'Relational' },
      { name: 'MySQL', tag: 'Relational' },
      { name: 'MongoDB', tag: 'NoSQL' },
      { name: 'Prisma', tag: 'ORM' },
      { name: 'Sequelize', tag: 'ORM' },
      { name: 'Mongoose', tag: 'ODM' },
    ],
  },
  {
    id: 'tools',
    category: 'Tools & Workflows',
    description: 'Version control, API documentation, and collaborative testing suites for clean developer velocity.',
    icon: 'Wrench',
    skills: [
      { name: 'Git', tag: 'Version Control' },
      { name: 'GitHub', tag: 'Collaboration' },
      { name: 'Postman', tag: 'API Testing' },
      { name: 'Swagger', tag: 'API Docs' },
    ],
  },
];
