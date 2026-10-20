import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'taskora',
    title: 'Taskora',
    category: 'Full-Stack',
    tagline: 'Collaborative task and project management workspace with granular role controls.',
    problem:
      'Distributed product teams often struggle with overloaded enterprise tools that introduce friction instead of clarity in daily sprint planning and task execution.',
    solution:
      'Engineered an intuitive Kanban-style workspace engine that simplifies project hierarchies into workspaces, projects, and actionable cards with live status filtering and role-based permissions.',
    features: [
      'Multi-tenant workspace organization with team-level access control',
      'Dynamic Kanban task boards with status updates and tag filtering',
      'Secure authentication flow using JWT tokens and role verification',
      'Responsive drag-and-drop workflow with real-time UI feedback',
      'Audit log and project summary views for sprint visibility',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Prisma'],
    githubUrl: 'https://github.com/JhanvibaZala/ctpm-backend',
    isPlaceholderLinks: true,
    mockupType: 'taskora',
    badge: 'Featured Full-Stack',
  },
  {
    id: 'piggypilot',
    title: 'PiggyPilot',
    category: 'Full-Stack',
    tagline: 'Personal finance tracker with transaction categorizing and real-time financial summaries.',
    problem:
      'Individuals frequently lose track of recurring expenses and discretionary spending across disparate accounts without a straightforward way to visualize cash flow.',
    solution:
      'Created a streamlined financial dashboard that tracks income and expense transactions, computes category totals in real time, and produces digestible monthly health reports.',
    features: [
      'Categorized transaction management with multi-currency support',
      'Visual breakdown of spending habits by category and timeframe',
      'Monthly budget threshold alerts and expense trend tracking',
      'Secure session management and encrypted user financial records',
      'Responsive dashboard metrics optimized for desktop and mobile viewports',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Mongoose', 'REST APIs'],
    githubUrl: 'https://github.com/JhanvibaZala/PiggyPilot',
    isPlaceholderLinks: true,
    mockupType: 'piggypilot',
    badge: 'Finance & Analytics',
  },
  {
    id: 'tiffinwallah',
    title: 'TiffinWallah',
    category: 'Full-Stack',
    tagline: 'Food ordering and recurring tiffin service platform for flexible meal subscriptions.',
    problem:
      'Students and working professionals needing daily homemade meals often face unreliable ordering channels, rigid plans, and lack of transparency in daily menus.',
    solution:
      'Built a dedicated meal ordering and subscription system allowing customers to browse daily rotating menus, customize dietary preferences, and track delivery schedules seamlessly.',
    features: [
      'Dynamic weekly rotating meal catalogue with vegetarian and custom options',
      'Flexible subscription management (daily, weekly, or monthly schedules)',
      'Operational administrative dashboard for kitchen inventory and order dispatch',
      'Interactive cart, order checkout, and status tracking screens',
      'Relational data architecture designed for high consistency and order history',
    ],
    technologies: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'Sequelize'],
    githubUrl: 'https://github.com/JhanvibaZala/Tiffin-Wallah',
    liveDemoUrl: 'https://tiffin-wallah-57dn2b3z4-jhanvibazalas-projects.vercel.app/',
    isPlaceholderLinks: true,
    mockupType: 'tiffinwallah',
    badge: 'E-Commerce / FoodTech',
  },
  {
    id: 'wanderlust',
    title: 'Wanderlust',
    category: 'Full-Stack',
    tagline: 'Travel destination discovery platform with interactive itinerary mapping.',
    problem:
      'Planning a multi-city journey requires jumping between blogs, maps, and note-taking apps, making travel logistics overwhelming and disconnected.',
    solution:
      'Designed a sleek, discovery-first web portal where travelers can search curated destinations, filter by activity interests, and construct personalized day-by-day itineraries.',
    features: [
      'Interactive destination browsing with dynamic category filters',
      'Day-by-day trip itinerary builder with drag-and-drop sequencing',
      'Local landmark bookmarks and estimated budget calculation',
      'Polished glassmorphic UI with responsive card layouts and micro-interactions',
      'Fast client-side search and caching for seamless mobile browsing',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'NestJS', 'PostgreSQL', 'REST APIs'],
    githubUrl: 'https://github.com/JhanvibaZala/MAJOR_PROJECT_WANDERLUST',
    liveDemoUrl: 'https://major-project-wanderlust-r930.onrender.com/listings',
    isPlaceholderLinks: true,
    mockupType: 'wanderlust',
    badge: 'Travel & Lifestyle',
  },
  {
    id: 'eventhub',
    title: 'EventHub',
    category: 'Full-Stack',
    tagline: 'Community event discovery and ticket reservation portal with capacity tracking.',
    problem:
      'Community leaders and technical meetups lack a clean, lightweight reservation tool that handles registrations without excessive ticketing fees or complex setups.',
    solution:
      'Developed a modern event coordination portal where hosts can publish gatherings, set ticket quotas, and attendees can browse events and reserve passes in seconds.',
    features: [
      'Explore upcoming conferences, workshops, and meetups by category',
      'Seat reservation system with real-time ticket availability counters',
      'Digital attendee confirmation pass generator with unique reservation codes',
      'Organizer dashboard for attendee rosters and check-in confirmation',
      'Filter by date, location type (in-person vs virtual), and popularity',
    ],
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    githubUrl: 'https://github.com/JhanvibaZala/event-hub',
    isPlaceholderLinks: true,
    mockupType: 'eventhub',
    badge: 'Events & Community',
  },
];
