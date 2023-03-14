import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  hochunk,
  dodles,
  teschglobal,
  express,
  bootstrap,
  mysql,
} from '../assets'
  
export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'projects',
    title: 'Projects'
  }
]
  
const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Mobile Developer',
    icon: mobile,
  },
  {
    title: 'Full Stack Developer',
    icon: backend,
  },
  {
    title: 'World Traveler',
    icon: creator,
  },
]
  
const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'Bootstrap',
    icon: bootstrap,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Express JS',
    icon: express,
  },
  {
    name: 'MySQL',
    icon: mysql
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'git',
    icon: git,
  },
]
  
const experiences = [
  {
    title: 'IT Intern',
    company_name: 'Ho Chunk Nation',
    icon: hochunk,
    iconBg: '#2668af',
    date: 'June 2014 - August 2014',
    points: [
      'Designed a .NET based web application that allowed Ho Chunk Nation employees to confirm payment amount for a given time period.',
      'Analyzed a SQL Server to determine what data was needed for a query to pull information.',
      'Began the implementation of the Ho Chunk Gaming mobile application using Java.',
    ],
  },
  {
    title: 'QA Developer',
    company_name: 'dodl.es',
    icon: dodles,
    iconBg: '#00adea',
    date: 'May 2017 - September 2017',
    points: [
      'Created a guideline for and performed regression testing to verify software quality and function before it was released.',
      'Wrote test scripts in Java for automated testing within Appium.',
      'Implemented a resuable color picker component in React Native.',
      'Participated in sprint meetings every two weeks.',
    ],
  },
  {
    title: 'Solution Engineer',
    company_name: 'TESCHGlobal',
    icon: teschglobal,
    iconBg: '#116735',
    date: 'September 2017 - Present',
    points: [
      'Participated in daily stand up meetings to inform my team members about the current status of my tasks.',
      'Started a standard for automated front-end React unit testing using Git Hooks, Jest, and Enzyme.',
      'Designed numerous functional and class based components in React to be reused throught my projects.',
      'Responsible for API design and the development of RESTful services for the various web applications to consume.',
      'Assisted in the mentoring of interns by answering questions they have about programming and helping them learn JavaScript, React and Node best practices.',
      'Implemented a virtual video call room for Emergency Room Doctors to safely talk to their patients amidst the COVID-19 pandemic.',
      'Successfully implemented three web applications that integrate with Epic and are available within the App Market.'
    ],
  }
]
  
const projects = [
  // {
  //   name: 'Car Rent',
  //   description:
  //       'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'mongodb',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'tailwind',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Job IT',
  //   description:
  //       'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: 'https://github.com/',
  // },
  // {
  //   name: 'Trip Guide',
  //   description:
  //       'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: 'https://github.com/',
  // },
]
  
export { services, technologies, experiences, projects }