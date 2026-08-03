require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");

const sampleProjects = [
  {
    title: "Decathlon Product & Sustainability Analytics",
    description:
      "Scraped Decathlon's full product catalog and found only 38.6% is their own in-house brand — making their public '100% eco-designed products' target structurally unachievable as stated.",
    image: "/projects/Decathlon_Dashboard.png",
    tags: [
      "Python",
      "BeautifulSoup",
      "PostgreSQL",
      "SQL",
      "Power BI",
      "Web Scraping",
      "Git",
    ],
    repoUrl: "https://github.com/ABsynced/decathlon-analytics",
    featured: false,
    order: 1,
  },
  {
    title: "Superstore Sales Analytics",
    description:
      "Uncovered a hard discount threshold costing $135K in lost profit, using a PostgreSQL star schema, SQL analysis, and an interactive Power BI dashboard.",
    tags: [
      "Python",
      "Pandas",
      "PostgreSQL",
      "SQL",
      "Power BI",
      "PowerShell",
      "Git",
    ],
    image: "/projects/dashboard_overview.png",
    repoUrl: "https://github.com/ABsynced/superstore-sales-analytics",
    featured: false,
    order: 2,
  },
  {
    title: "Omnifood — Food Subscription Landing Page",
    description:
      "Fully responsive landing page for a fictional food delivery subscription service. Built with modern HTML5, CSS3, and vanilla JavaScript, featuring a hero section, pricing plans, testimonials, and mobile-first responsive layouts across all breakpoints.",
    image: "/projects/omnifood-hero.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    liveUrl: "https://absynced.github.io/Omnifood/",
    repoUrl: "https://github.com/ABsynced/Omnifood",
    featured: false,
    order: 3,
  },
  {
    title: "This Portfolio — React + Tailwind Website",
    description:
      "This very site: a full-stack-built portfolio (originally MERN) now deployed as a static React + Tailwind site on GitHub Pages, with a particle-effect hero, an interactive experience/projects layout, and a violet-accented near-black design.",
    image: "/projects/portfolio-preview.png",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "GitHub Actions",
    ],
    liveUrl: "https://absynced.github.io/portfolio/",
    repoUrl: "https://github.com/ABsynced/portfolio",
    featured: false,
    order: 4,
  },
  {
    title: "Coming Soon...",
    description:
      "Multi-page Power BI dashboard for retail sales performance and trends.",
    tags: ["Power BI", "DAX", "Power Query"],
    featured: false,
    order: 5,
  },
];

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected. Seeding...");
    await Project.deleteMany({});
    await Project.insertMany(sampleProjects);
    console.log(`Seeded ${sampleProjects.length} projects.`);
  } catch (err) {
    console.error("Seed error:", err.message);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

run();
