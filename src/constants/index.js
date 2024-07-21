import {
  mobile,
  gehu,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  cpp,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  c,
  queens,
  trustingbrains,
  
  
  facetracking,
  scroll,
  modern,
  wordpress,
  map,
  chess,
  travel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "comptetive coder",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "c",
    icon: c,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Trusting Brains",
    icon: trustingbrains,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Creating impactful solutions for real-world challenges and contributing effectively to software development initiatives..",
      "Engaged in diverse projects, demonstrating proficiency in various aspects of software engineering..",
    ],
  },
  {
    title: "Undergraduation",
    company_name: "Graphic Era Hill University",
    icon: gehu,
    iconBg: "#E6DEDD",
    date: "2022 - 2026",
    points: [
      "I am currently pursuing a B.Tech in Computer Science from Graphic Era Hill University.",
      "CGPA : 8.56",
    ],
  },
  {
    title: "Intermediate",
    company_name: "Queen's Sr Sec School",
    icon: queens,
    iconBg: "#383E56",
    date: "2020-2021",
    points: [
      "Completed my intermediate from queens senior secondary school haldwani.",
      "Percentage : 94% ",
    ],
  },
  {
    title: "High School",
    company_name: "Queen's Sr Sec School",
    icon: queens,
    iconBg: "#383E56",
    date: "2018-2019",
    points: [
      "Completed my highschool from queens senior secondary school haldwani.",
      "Percentage : 92.6% ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate ullam dolorem distinctio ut laborum..",
    name: "abc",
    designation: "CFO",
    company: "xyz",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate ullam dolorem distinctio ut laborum..",
    name: "abc",
    designation: "COO",
    company: "xyz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cupiditate ullam dolorem distinctio ut laborum.!",
    name: "abc",
    designation: "CTO",
    company: "xyz",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "chess game",
    description:
      "created a multiplayer chess game using socket.io and chess.js .",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "chess.js",
        color: "pink-text-gradient",
      },
    ],
    image: chess,
    source_code_link: "https://github.com/ankitadhikari2004/chess",
  },
  {
    name: "live location tracking",
    description:
      "created a simple location tracking website using leaflet and socket.io which uses users current location and show it in map .",
    tags: [
      {
        name: "leaflet",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
    ],
    image: map,
    source_code_link: "https://github.com/ankitadhikari2004/tracker-1",
  },
  {
    name: "face tracking turrent",
    description:
      "robust real-time face tracking system utilizing advanced computer vision algorithms. The system accurately identifies and tracks face and point it using turrent controlled using arduino.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "opencv",
        color: "green-text-gradient",
      },
      {
        name: "arduino",
        color: "pink-text-gradient",
      },
    ],
    image: facetracking,
    source_code_link: "https://github.com/ankitadhikari2004/face-tracking-module",
  },
  {
    name: "Scroll Animation",
    description:
      "Experience smooth scroll animation landing page made with html css js.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "java script",
        color: "pink-text-gradient",
      },
    ],
    image: scroll,
    source_code_link: "https://github.com/ankitadhikari2004/scrolling-animation",
  },
  {
    name: "Modern Landing Page",
    description:
      "Modern landing page made using html css js and library called shery.js which elevated the user experience by different effects .",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "shery.js",
        color: "pink-text-gradient",
      },
    ],
    image: modern,
    source_code_link: "https://github.com/ankitadhikari2004/modern-landing-page",
  },
  {
    name: "Bharat Trips",
    description:
      "created a tours and travel website for hackathon conducted at our university.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/ankitadhikari2004/BharatTrips",
  },
];

export { services, technologies, experiences, testimonials, projects };