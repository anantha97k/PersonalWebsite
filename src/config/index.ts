import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kumar Portfolio",
  author: "Kumar",
  description:
    "Software Engineer",
  lang: "en",
  siteLogo: "/ak-pic.png",
  navLinks: [
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ananthakumar28" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
  ],

};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ananthakumar [Kumar]",
    specialty: "FullStack Developer",
    summary:
      `Electrical Engineering graduate pursuing a career in Full-Stack Development, with experience in ReactJS, Node.js, Express, PostgreSQL, and MongoDB. 
      Familiar with CI/CD workflows, Docker, and deploying full-stack applications on Render and Vercel.`,
  },
  education: [
    {
      company: "",
      position: "Skills",
      startDate: "English, Bahasa Melayu",
      endDate: "Professional Competency",
      summary: [
        `Programming Skills : Typescript, Python, C, C++, HTML, CSS, Javascript, PostgreSQL, MongoDB, SQLite, git`,
        "Frameworks/Library : ReactJS, Redux, NodeJS. Express, Redis, FastAPI, Docker, Tailwind, Shadcn UI, Material UI, Jest, Vitest",
        "Hosting/Deployment : Render, Vercel",
      ],
    },
    {
      company: "",
      position: "Bac. Hons Electronic and Communications Engineering, CGPA: 3.02",
      startDate: "Oct 2018 - Jan 2023,",
      endDate: "Sg. Long",
      summary: [
        `Courses such as Wireless Communications, Object-Oriented Programming,
          Procedural Programming, Computer Architecture and Assembly Programming etc.`,
          `Final Year Project : Performance Analysis of MIMO Communication Systems using MATLAB & simulink`,
          `Developed and implemented models of MIMO Communication Systems
          to analyse various Modulation and Encoding schemes along with Diversity techniques.`,
          `Visualized the simulated data using graphs to demonstrate the bit error rate (BER)
          performance of different MIMO models`
      ],
    },
  ],
  projects: [
    {
      name: "Anime Search App",
      summary: "Built a two-page React + TypeScript SPA with Redux-managed state, and instant search.",
      skills: [
        'React', 'Typescript', 'react-router', 'Redux', 'Shadcn UI', 'Tailwind',
      ],
      linkSource: "https://github.com/anantha97k/AnimeSearch-App",
      image: "/SearchApp.png",
    },
    {
      name: "Data processing",
      summary: `Built a CSV upload system, processing files asynchronously
                and notify users upon completion in realtime.`,
      skills: ['Python', 'FastAPI', 'SQLite', 'Redis', 'Python RQ', 'React'],
      linkSource: "https://github.com/anantha97k/CSV-Processing-Backend",
      image: "/CSV.png",
    },
    {
      name: "Todo-a-List",
      summary: "Developed a Todo List application using the Express framework, with the MVC architecture",
      skills: ['NodeJS', 'Prisma ORM', 'Docker'],
      linkSource: "https://github.com/anantha97k/todo-list",
      image: "/todos.png",
    },
    {
      name: "Resume Maker",
      summary: "Enables users to create, view, update, and manage resumes",
      skills: ['React', 'react-router', 'Express', 'PostgreSQL', 'MongoDB', 'Render Deployment'],
      linkSource: "https://github.com/anantha97k/monorepo",
      image: "/Resume.png",
    },
    {
      name: "AI chatbot",
      summary: `Built an AI-powered sales assistant with n8n frontend integration, 
                triggers lead booking, and sends automated emails in a complete end-to-end workflow.`,
      skills: ['n8n', 'React'],
      linkSource: "https://github.com/anantha97k/AI-Chatbot",
      image: "/n8n.png",
    },
  ],
  experience : [
    {
      company: "Train & Place Up-skilling Program",
      position: "Software Engineering Track",
      startDate: "USAINS Holding Sdn.Bhd.",
      endDate: "",
      summary: [
        `Technical Courses such as Statistics for Data Mining, JavaScript, Software Development
and Testing, Database Access with SQL, Website Development with HTML5 and CSS3, etc.`,
        `Soft skills Courses such as Change Management, Technical Communication &
Presentation Skills, etc.`,
      ],
  },
],

  about: {
    description: [
      `I am an aspiring Software Engineer and Full-Stack Developer with a strong foundation for building scalable, user-focused applications. With hands-on experience from a structured Software Engineering upskilling program, I combine analytical problem-solving with practical coding expertise. I am comfortable working across both frontend and backend systems.`,

      `I have applied my skills to end-to-end projects that demonstrate performance, reliability, and clean architecture.These experiences have strengthened my focus on intelligent automation, real-time systems, and maintainable code, and I am excited to contribute to dynamic development projects.`
    ]
  },
};
