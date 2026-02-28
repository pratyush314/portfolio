export const myProjects = [
  {
    id: 1,
    title: "TradingTantra",
    description:
      "Real-time trading platform handling stock data, market visualization, and simulated trades.",
    subDescription: [
      "Developed using React, Node.js/Express, and MongoDB for scalable REST APIs.",
      "Implemented WebSockets for live updates and candlestick/option-chain visualizations.",
      "Processed 1,000 simulated trades daily with 99% uptime and financial API integrations.",
      "Optimized MongoDB with query pipelines and indexing for high performance.",
    ],
    href: "https://tradingtantra.in/",
    logo: "",
    image: "/assets/projects/trading-tantra.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Node.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 4,
        name: "WebSockets",
        path: "/assets/websocket.svg",
      },
    ],
  },
  {
    id: 2,
    title: "TravelCRM",
    description:
      "Dashboard for managing travel bookings, customer data, and automated communications.",
    subDescription: [
      "Built with React, Tailwind CSS, Node.js/Express, and MongoDB.",
      "Integrated payment gateways, Twilio WhatsApp bot, and email templates.",
      "Improved user engagement by 35% and reduced missed leads via scheduling.",
      "Enhanced performance with MongoDB indexing strategies.",
    ],
    href: "https://github.com/pratyush314/travelCrm",
    logo: "",
    image: "/assets/projects/travel-crm.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Ping Panda",
    description:
      "Real-time Discord notifications app with payments and secure auth.",
    subDescription: [
      "Full-stack app using Next.js, TypeScript, React, Prisma ORM, and PostgreSQL.",
      "Added Clerk authentication, payment integration, and Tailwind CSS UI.",
      "Enabled real-time notifications for seamless user experience.",
    ],
    href: "https://ping-panda-ashy.vercel.app",
    logo: "",
    image: "/assets/projects/ping-panda.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.svg",
      },
      {
        id: 3,
        name: "Prisma",
        path: "/assets/prisma.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 4,
    title: "CaseCobra",
    description:
      "E-commerce platform for custom phone cases with configurator and order management.",
    subDescription: [
      "Developed with Next.js 14 App Router, PostgreSQL, TypeScript, Tailwind CSS, and shadcn-ui.",
      "Implemented drag-and-drop configurator, Kinde auth, and Stripe payments.",
      "Automated order processing for efficient e-commerce workflow.",
    ],
    href: "https://casecobra-clerk.vercel.app",
    logo: "",
    image: "/assets/projects/case-cobra.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/postgresql.svg",
      },
      {
        id: 3,
        name: "Stripe",
        path: "/assets/logos/stripe.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/pratyush314/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer Intern",
    job: "itsUnicornTech",
    date: "June 2025 - Dec 2025",
    contents: [
      "Built a comprehensive travel CRM system using MERN stack, implementing secure user authentication, booking management APIs, and responsive React dashboards.",
      "Developed a realtime trading platform with WebSocket integration for live price updates, order matching, and high-frequency data visualization using D3.js.",
      "Designed and deployed a job listing & resume analyzer full-stack application with MongoDB schema optimization, Prisma ORM, and AI-powered resume parsing.",
      "Implemented scalable backend APIs with Node.js/Express, Docker containerization, and AWS integrations for handling high-traffic marketplace operations.",
      "Enhanced frontend UI/UX with Tailwind CSS and React Router, focusing on responsive design, realtime notifications, and seamless websocket communication.",
      "Contributed to open-source projects and optimized database queries (MongoDB/PostgreSQL) for 10x performance improvements in production deployments.",
      "Managed end-to-end development lifecycle including Git workflows, CI/CD pipelines, and debugging complex full-stack issues in Linux/WSL environments.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
