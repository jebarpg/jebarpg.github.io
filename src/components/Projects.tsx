// import { AnimatePresence, motion } from "framer-motion";
// import { Image } from "./Image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";
// interface ProjectsProps {
//   data: {
//     title: string;
//     largeImage: string;
//     smallImage: string;
//   }[];
// }

interface Project {
  id: number;
  title: string;
  staticImg: string;
  animatedImg: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Random Enemy Generator",
    staticImg: "/imgs/enemyGenerator.png",
    animatedImg: "/imgs/animated1.gif",
    tags: ["HTML5", "CSS3", "JavaScript", "Vibe Coding"],
    link: "https://jebarpg.github.io/enemyGenerator",
  },
  // {
  //   id: 2,
  //   title: "Node API Service",
  //   staticImg: "/images/static2.jpg",
  //   animatedImg: "/images/animated2.gif",
  //   tags: ["Node.js"],
  // },
  // {
  //   id: 3,
  //   title: "Phaser Game",
  //   staticImg: "/images/static3.jpg",
  //   animatedImg: "/images/animated3.gif",
  //   tags: ["JavaScript"],
  // },
  // {
  //   id: 4,
  //   title: "Fullstack App",
  //   staticImg: "/images/static4.jpg",
  //   animatedImg: "/images/animated4.gif",
  //   tags: ["Node.js"],
  // },

  // {
  //   id: 5,
  //   title: "Fullstack App",
  //   staticImg: "/imgs/project1.jpg",
  //   animatedImg: "/imgs/animated1.gif",
  //   tags: ["Node.js"],
  // },
];

// Extract all unique tags from projects
const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();

const Projects = () => {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div id="projects" className="text-center">
      <div className="gallery-container">
        <div style={{ padding: "25px" }}></div>
        <h1 className="gallery-title">My Projects</h1>

        <div className="filter-bar">
          <button
            className={activeTag === "All" ? "active" : ""}
            onClick={() => setActiveTag("All")}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={activeTag === tag ? "active" : ""}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="gallery-item"
              >
                <img
                  className="static"
                  src={project.staticImg}
                  alt={project.title}
                  loading="lazy"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="animated"
                    src={project.animatedImg}
                    alt={`${project.title} animation`}
                    loading="lazy"
                  />
                </a>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
