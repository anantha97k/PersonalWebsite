import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kumar Portfolio",
  author: "Kumar",
  description: "Software Engineer",
  lang: "en",
  siteLogo: "/ak-pic.png",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Education", href: "#education" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/ananthakumar28" },
    { text: "Github", href: "https://github.com/anantha97k" },
  ],
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ananthakumar [Kumar]",
    specialty: "Backend / FullStack Developer",
    summary: `Full-Stack Software Engineer with skillsl in Python, FastAPI, React.js, and cloud technologies.
       Experienced in building RESTful APIs, implementing asynchronous processing systems, and
       deploying scalable applications using AWS, Redis, and PostgreSQL`,
  },
  experience: [
    {
      company: "Train & Place Up-skilling Program",
      position: "Software Engineering Track",
      startDate: "USAINS Holding Sdn.Bhd.",
      endDate: "",
      summary: [
      `Completed 3-month intensive full-stack web development program, applying SDLC and
        Agile/Scrum methodologies in collaborative team projects using JavaScript, Python, SQL, MySQL,
        and Git version control`,
      `Developed professional competencies in technical communication, problem-solving, and change
        management through hands-on projects and structured training modules`,
      ],
    },
  ],
  education: [
    {
      company: "Technical Skills",
      position: "",
      startDate: "",
      endDate: "",
      summary: [
        "Languages: Python, JavaScript, TypeScript, C/C++, HTML5, CSS3",
        "Frameworks & Libraries: React.js, Redux, Node.js, Express.js, FastAPI, Tailwind CSS, Celery",
        "Backend Technologies: RESTful APIs, WebSockets, JWT Authentication, Redis, Message Queues, Asynchronous Processing, Microservices",
        "Cloud & DevOps: AWS, Docker, CI/CD, Git, GitHub",
        "Databases: PostgreSQL, MySQL, MongoDB, SQLite ",
      ],
    },
    {
      company: "",
      position:
        "Bac. Hons Electronic and Communications Engineering, CGPA: 3.02",
      startDate: "2018 - 2023,",
      endDate: "Sg. Long",
      summary: [
        `Courses such as Wireless Communications, Object-Oriented Programming,
          Procedural Programming, Computer Architecture and Assembly Programming etc.`,
        `Final Year Project : Performance Analysis of MIMO Communication Systems using MATLAB & simulink`,
        `Developed and implemented models of MIMO Communication Systems
          to analyse various Modulation and Encoding schemes along with Diversity techniques.`,
        `Visualized the simulated data using graphs to demonstrate the bit error rate (BER)
          performance of different MIMO models`,
      ],
    },
  ],
  projects: [
    {
      name: "Anime Search App",
      summary:
        "Built a two-page React + TypeScript SPA with Redux-managed state, and instant search.",
      skills: [
        "React",
        "Typescript",
        "react-router",
        "Redux",
        "Shadcn UI",
        "Tailwind",
      ],
      linkSource: "https://github.com/anantha97k/AnimeSearch-App",
      image: "/SearchApp.png",
    },
    {
      name: "Data processing",
      summary: `Built a CSV upload system, processing files asynchronously
                and notify users upon completion in realtime.`,
      skills: ["Python", "FastAPI", "SQLite", "Redis", "Python RQ", "React"],
      linkSource: "https://github.com/anantha97k/CSV-Processing",
      image: "/CSV.png",
    },
    {
      name: "Todo-a-List",
      summary:
        "Developed a Todo List application using the Express framework, with the MVC architecture",
      skills: ["NodeJS", "Prisma ORM", "Docker"],
      linkSource: "https://github.com/anantha97k/todo-list",
      image: "/todos.png",
    },
    {
      name: "Resume Maker",
      summary: "Enables users to create, view, update, and manage resumes",
      skills: [
        "React",
        "react-router",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Render Deployment",
      ],
      linkSource: "https://github.com/anantha97k/monorepo",
      image: "/Resume.png",
    },
    {
      name: "Image Processing",
      summary: `Developed an Image Processing app to illustrate skills in caching, AWS and asynchronous processing`,
      skills: [
        "Python",
        "FastAPI",
        "JWT",
        "AWS S3",
        "CloudFront",
        "Redis",
        "Celery",
      ],
      linkSource: "https://github.com/anantha97k/Image-Processing",
      image: "/image-processing.png",
    },
  ],

  about: {
    description: [
      `My projects demonstrate a commitment to reliability, real-time systems, and maintainable code. I'm passionate about delivering solutions that 
        work efficiently in production environments.`,

        `Email: anantha97k@gmail.com`,
        `Tel: +60 17 698 0784`
    ],
  },
};
