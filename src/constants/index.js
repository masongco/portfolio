const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 7, suffix: "+", label: "Clients Served" },
  { value: 11, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Project Success Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: "/images/logos/logos/python.svg",
  },
  {
    name: "React",
    imgPath: "/images/logos/logos/react.png",
  },
  {
    name: "Backend",
    imgPath: "/images/logos/logos/node.png",
  },
  {
    name: "UI/UX Designer",
    imgPath: "/images/logos/logos/figma.png",
  },
  {
    name: "GIT",
    imgPath: "/images/logos/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python Developer",
    modelPath: "./models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "./models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "./models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "./models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "React Developer",
    modelPath: "./models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Created Python-based desktop applications using Python, Tkinter for the GUI and MySQL for the database.",
    imgPath: "/images/tech-sample2.png",
    logoPath: "/images/python.png",
    title: "Software Developer",
    date: "December 2024 - May 2025",
    responsibilities: [
      "Created a Python-based desktop application for an Automotive Care Service Company to handle customer appointments, service records, job orders, inventory, and billing.",
      "Built a Python-based desktop application for a local Logistics/ Trucking Company with features for shipping management and employee payroll management, streamlining operations and improving efficiency.",
    ],
  },
  {
    review: "Used Python and Django as the primary languages for the development of an Open Edx web platform, utilizing AWS for deployment and static assets management.",
    imgPath: "/images/tech-sample.png",
    logoPath: "/images/python.png",
    title: "Full Stack Web Developer",
    date: "September 2021 - November 2024",
    responsibilities: [
      "Improved and maintained scalable web applications, enhancing performance and user experience through optimized UI/UX and SQL queries, reducing response times by 30%.",
      "Automated deployment pipelines using Git and cloud-based CI/CD tools, streamlining development and delivery.",
      "Led data export/import processes for 100,000+ users and supported data-driven decisions through workflow optimization.",
      "Designed and integrated UI/UX elements into dynamic web architectures for a seamless user experience.",
      "Continuously upskilled in technologies like Flutter, Next.js, and DevOps to drive innovation and project success."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
    link:"https://www.instagram.com/markallensongco",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    link:"https://www.linkedin.com/in/mark-songco-792764146",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};