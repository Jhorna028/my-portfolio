import {
  AcademicCapIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Jhorna Akter.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I architect <strong className="text-stone-100">secure, intelligent digital environments</strong>. As a Computer Science engineering student at United International University, my work operates at the intersection of <strong className="text-stone-100">Networking, Machine Learning, and Modern Web Design</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Equipped with a technical stack that includes Python, JavaScript, C++, React, Node.js, PHP, MySQL, and MongoDB, I am driven by the mechanics of how complex technologies function under the hood. From deploying full-stack frameworks to investigating ML-driven threat detection models, Whether I am diving into a new research paper or debugging a web project, my primary objective is to continuously grow and build smart, secure solutions that tackle real-world problems.
      </p>
    </>
  ),
  actions: [
    {
      href: '#contact',
      primary: true,
      text: 'Contact Me',
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a driven Computer Science and Engineering student who loves diving deep into the mechanics of networks, AI, and software architecture. When I'm not training machine learning models or building responsive web applications, I enjoy staying updated with the latest in tech research and exploring how decentralized systems are shaping the future.`,
  aboutItems: [
    {label: 'Location', text: 'Dhaka, Bangladesh', Icon: MapIcon},
    {label: 'Study', text: 'United International University (UIU)', Icon: AcademicCapIcon},
    {label: 'Interests', text: 'AI, Edge Computing, Web Security', Icon: SparklesIcon},
    {label: 'Employment', text: 'Open to Opportunities', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {name: 'Python', level: 9},
      {name: 'JavaScript', level: 8},
      {name: 'C++', level: 7},
      {name: 'PHP', level: 6},
    ],
  },
  {
    name: 'Web Development',
    skills: [
      {name: 'React', level: 8},
      {name: 'Node.js', level: 7},
      {name: 'MySQL', level: 8},
      {name: 'MongoDB', level: 7},
    ],
  },
  {
    name: 'Core Focus Areas',
    skills: [
      {name: 'Machine Learning', level: 8},
      {name: 'Network Security', level: 7},
      {name: 'Edge Computing', level: 7},
      {name: 'Software Architecture', level: 7},
    ],
  },
];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Comparative analysis of machine learning algorithms on CICIDS2017 dataset for network intrusion detection',
    description: 'A collaborative machine learning research project evaluating intrusion detection systems using the CICIDS2017 dataset. Implemented the SMOTE-Tomek algorithm to resolve class imbalance and conducted a comprehensive comparative analysis of 10 algorithms across 5 families, evaluating performance against 14 distinct metrics.',
    url: 'https://github.com/Jhorna028/ML_Project_Repost', // Replace with your actual link
    image: porfolioImage1, 
  },
  {
    title: 'SMART-FARMHUB',
    description: 'Smart_farmhub began as an agricultural management platform built with [Technologies: Php, MYSQL, js, Html and CSS] to streamline farm resource tracking and monitoring. In a subsequent Computer Security course, we advanced the project by re-engineering the architecture, implementing 20+ robust security features to harden the system against vulnerabilities and ensure data integrity.',
    url: 'https://github.com/Jhorna028/Security-based-project-20-security-features', // Replace with your actual link
    image: porfolioImage2,
  },
  {
    title: 'Learning Management System (LMS) ',
    description: 'Architected a comprehensive LMS platform to streamline educational content delivery and user engagement. Developed a scalable backend utilizing PHP, MySQL and JS, featuring sophisticated database-driven workflows for teacher-side grading, tiered attendance tracking, and dynamic student performance analytics.',
    url: 'https://github.com/Jhorna028/Web_LMS_Project', // Replace with your actual link
    image: porfolioImage3,
  },

  {
    title: 'Footstep Power Generation ',
    description: 'A hardware project from my Electronics course focused on energy harvesting. We designed a system using piezoelectric sensors to capture kinetic energy from footsteps, engineered the conversion circuit to stabilize AC output into usable DC, and implemented an Arduino microcontroller to manage energy storage and power distribution for smart streetlights.',
    url: 'https://github.com/Jhorna028/Electronic_Lab---Footstep-Power-Generator-', // Replace with your actual link
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2023 - 2027',
    gpa: 'CGPA: ', // Add your actual CGPA here
    location: 'United International University (UIU)',
    title: 'B.Sc. in Computer Science and Engineering',
    content: (
      <p>
        Focusing on <strong>Network Security</strong>. Actively researching vehicular networks and edge computing, while building a strong foundation in Data Structures, Algorithms, and Machine Learning.
      </p>
    ),
  },
  {
    date: '2021',
    gpa: 'GPA: ',
    location: 'Shiddeswari Girls College',
    title: 'Higher Secondary Certificate (HSC)',
    content: (
      <p>
        Science Group. Focused on core physics, chemistry, and mathematics with a keen interest in computer science fundamentals.
      </p>
    ),
  },
  {
    date: '2018',
    gpa: 'GPA: ',
    location: 'Shiddeswari Girls College',
    title: 'Secondary School Certificate (SSC)',
    content: (
      <p>
        Science Group. Built a solid academic foundation in mathematics and logic, sparking my initial interest in technology.
      </p>
    ),
  },
];



export const experience: TimelineItem[] = [];

/**
 * Fill Experiences when u have !!!!!
 */




/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I am currently open to new opportunities and collaborations. Feel free to send me an email!',
  items: [
    {
      type: ContactType.Email,
      text: 'your-email@example.com', // Replace with your actual email
      href: 'mailto:your-email@example.com',
    },
    {
      type: ContactType.Location,
      text: 'Dhaka, Bangladesh',
      href: 'https://www.google.com/maps/place/Dhaka,+Bangladesh',
    },
    {
      type: ContactType.Github,
      text: 'Jhorna028',
      href: 'https://github.com/Jhorna028',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Jhorna028'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jhorna-akter-2538a2420/'}, // Add your LinkedIn link
  // You can remove Stack Overflow, Instagram, or Twitter if you don't use them
];