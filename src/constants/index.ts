import type { WindowKey } from "@store";

const navLinks: Array<{ id: number; name: string; type: WindowKey }> = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Jan 2025",
    title: "FireBoots – Full-Featured E-Commerce Platform",
    image: "/projects/fireboots-logo.png",
    link: "https://github.com/athul21eb/E-COMMERCE-PROJECT-FRONTEND",
  },
  // {
  //   id: 2,
  //   date: "Dec 2024",
  //   title: "DUX – Mentorship Service Platform (In Development)",
  //   image: "/projects/dux-logo.png",
  //   link: "https://github.com/athul21eb/DUX",
  // },
  {
    id: 3,
    date: "Nov 2024",
    title: "Blog App – Simple Blogging Platform",
    image: "/projects/blog-logo.png",
    link: "https://github.com/athul21eb/Blog-App---Nest-js/",
  },
  {
    id: 4,
    date: "Oct 2024",
    title: "Dev Events Platform – Full-Stack Event Management",
    image: "/projects/devevents-logo.png",
    link: "https://github.com/athul21eb/dev-events-next.js-16",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  // {
  //   category: "Mobile",
  //   items: ["React Native", "Expo"],
  // },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/athul21eb",
  },
  // {
  //   id: 2,
  //   text: "Platform",
  //   icon: "/icons/atom.svg",
  //   bg: "#4bcb63",
  //   link: "https://athul.com/",
  // },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/athul",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/athulkrishna-e-b-369053249/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/a.jpg",
    name:"athul"
  },
  {
    id: 2,
    img: "/projects/devevent-1.png",
    name:"dev events"
  },
  {
    id: 3,
    img: "/projects/blog-2.png",
    name:"blog"
  },
  {
    id: 4,
    img: "/projects/fireboots-1.png",
    name:"fire boots"
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 — Fire Boots Ecommerce (from your GitHub repo)
    {
      id: 20,
      name: "Fire Boots Ecommerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-20 right-5",
      children: [
        {
          id: 1,
          name: "Fire Boots Ecommerce.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Fire Boots Ecommerce is a full-featured shopping platform built using the MERN stack (MongoDB, Express, React, Node.js).",
            "The frontend provides a smooth and responsive shopping experience with modern UI and fast performance.",
            "Users can browse products, add items to cart, manage orders, and explore categories with clean navigation.",
            "This project focuses on real-world ecommerce workflow with secure backend APIs and optimized user experience.",
          ],
        },
        {
          id: 2,
          name: "fireboots.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://fireboots-client-athuleb21-gmailcoms-projects.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "fireboots-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/projects/fireboots-1.png",
        },
        {
          id: 4,
          name: "fireboots-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/projects/fireboots-2.png",
        },
      ],
    },
    // ▶ Project 2 — Blog App (React + NestJS)
    {
      id: 21,
      name: "Blog App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-40 right-55",
      children: [
        {
          id: 1,
          name: "Blog App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "A full-stack Blog Application built with React (frontend) and Nest.js (backend).",
            "Users can create blogs, edit posts, delete content, authenticate, and manage profiles.",
            "The UI is responsive and fast, while Nest.js ensures secure APIs and structured backend logic.",
            "This project is designed like a compact medium-style blogging platform.",
          ],
        },
        {
          id: 2,
          name: "blogapp.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://blog-app-khaki-pi.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "blogapp-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/projects/blog-1.png",
        },
        {
          id: 4,
          name: "blogapp-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 left-5",
          imageUrl: "/projects/blog-2.png",
        },
      ],
    },

    // ▶ Project 3 — DevEvents (Next.js 16)
    {
      id: 22,
      name: "DevEvents",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-90 right-15",
      children: [
        {
          id: 1,
          name: "DevEvents Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "DevEvents is a simple event booking and listing application built with Next.js 16.",
            "Users can browse developer-focused events, view details, and explore event categories.",
            "The app is fast, clean, responsive, and utilises modern Next.js features.",
            "Ideal for showcasing how Next.js handles routing, data fetching, and UI layouts.",
          ],
        },
        {
          id: 2,
          name: "devevents.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://dev-events-next-js-16-one.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "devevents-1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/projects/devevent-1.png",
        },
        {
          id: 4,
          name: "devevents-2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-60 right-20",
          imageUrl: "/projects/devevent-2.png",
        },
      ],
    },
  ],
};
const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/a.jpg",
    },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/a.jpg",
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/a.jpg",
    // },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/a.jpg",
      description: [
        "Hi, I'm Athul 👋 — a MERN Stack Developer passionate about building scalable, high-performance, and user-centric web applications.",
        "I specialize in JavaScript, TypeScript, React, Next.js, Node.js, Express.js, and MongoDB, with hands-on experience using modern tools and architectures like Redux Toolkit, Prisma, MVC, SOLID, and Clean Architecture.",
        "I enjoy creating clean UI, smooth UX, and writing maintainable code that solves real problems without unnecessary complexity.",
        "Beyond coding, you’ll probably find me experimenting with new UI ideas, I’m always experimenting, learning something new, and bringing those ideas into my work",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

export type WindowConfig = {
  isOpen: boolean;
  zIndex: number;
  data?: unknown | null;
};

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },

  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
} satisfies Record<string, WindowConfig>;

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
