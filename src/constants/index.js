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
  pixelpack,
  tinyhop,
  splithub,
  calc,
  tip,
  tictactoe,
  tictactoev2,
  keysensei

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
    title: "Machine Learning",
    icon: mobile,
  },
  {
    title: "System Design",
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
      "Ankit doesn’t just code—he also remembers all his friends’ Wi-Fi passwords. Truly a full-stack human being!",
    name: "Tony Stark",
    designation: "CFO",
    company: "Stark Industries",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Watching Ankit debug code is like watching a Christopher Nolan movie—confusing at first, but mind-blowing at the end.",
    name: "Forrest Gump",
    designation: "COO",
    company: "Box of Chocolates Inc.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
  {
    testimonial:
      "If coffee ever disappears from the world, I’m convinced Ankit could still power his laptop with pure determination.",
    name: "Hermione Granger",
    designation: "CTO",
    company: "Hogwarts Tech",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Ankit’s Google search history deserves a documentary. Half of it is bugs, the other half is Stack Overflow.",
    name: "Deadpool",
    designation: "Head of Chaos",
    company: "Marvel Enterprises",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    testimonial:
      "I once asked Ankit for help with my laptop. He fixed it, upgraded it, and now it makes me coffee every morning.",
    name: "Luna Lovegood",
    designation: "Chief Daydreamer",
    company: "Quibbler Media",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    testimonial:
      "Working with Ankit is like having Wi-Fi in the mountains—rare, magical, and makes life way better.",
    name: "Jon Snow",
    designation: "Lord Commander",
    company: "The Night’s Watch",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];


const projects = [
  {
    name: "keySensei",
    description:
      "created a fusion of code + typing master .",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: keysensei,
    source_code_link: "https://keysensei.vercel.app/",
  },
  {
    name: "TicTacToe v2",
    description:
      "created a interactive tictactoe game having different tic tac toe games and ai vs ai feature",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "min/max algo",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoev2,
    source_code_link: "https://tictactoe-a-ivs-ai-bet.vercel.app/",
  },
  {
    name: "TinyHop",
    description:
      "Built a React.js + Supabase URL shortener with custom links and fast redirection.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: tinyhop,
    source_code_link: "https://tinyhop.vercel.app/",
  },
  {
    name: "split Hub",
    description:
      "Developed SplitHub, a React + Supabase app to manage group expenses with automatic split, tracking, and settlement.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Convex",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: splithub,
    source_code_link: "https://splithub.vercel.app/",
  },
  {
    name: "pixel pack",
    description:
      "A simple, beautiful web app to compress text files, images, and PDFs.",
    tags: [
      {
        name: "huffman",
        color: "blue-text-gradient",
      },
      {
        name: "deflate",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: pixelpack,
    source_code_link: "https://pixel-pack-iota.vercel.app/",
  },
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
    name: "TicTacToe",
    description:
      "A terminal-based Tic Tac Toe game in C++ implementing the Min-Max algorithm, designed with Low-Level Design principles for clean, modular code.",
    tags: [
      {
        name: "cpp",
        color: "blue-text-gradient",
      },
      {
        name: "min-max",
        color: "green-text-gradient",
      },
      {
        name: "low level design",
        color: "pink-text-gradient",
      },
    ],
    image: tictactoe,
    source_code_link: "https://github.com/ankitadhikari1/tic-tac-toe-OOPS-LLD",
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
    name: "HeheCalculator",
    description:
      "A simple calculator app for performing basic arithmetic operations with a clean UI.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css,javascript",
        color: "green-text-gradient",
      },
      {
        name: "weather api",
        color: "pink-text-gradient",
      },
    ],
    image: calc,
    source_code_link: "https://hehecalculator.netlify.app/",
  },
   {
    name: "Tip calculator",
    description:
      "A Tip Calculator that lets users quickly split bills and calculate tips with adjustable percentages.",
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
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tip,
    source_code_link: "https://ankitadhikari1.github.io/tip-calculator/",
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