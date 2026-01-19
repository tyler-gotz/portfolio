import { ExternalLink, Github } from "lucide-react";
import { useInView, motion } from "motion/react";
import React, { useRef, useState } from "react";

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Dr. Chris Wagner Website",
      category: "Personal Branding",
      description:
        "A sleek, modern website for Dr. Chris Wagner, showcasing his expertise in general surgery with a focus on patient trust and professionalism.",
      tags: ["React", "Mantine UI", "TypeScript"],
      emoji: "👨‍⚕️",
      websiteLink: "http://drwagnersurgery.com/",
      githubLink: "https://github.com/tyler-gotz/drwagnersurgery",
    },
    {
      title: "EDLoop",
      category: "Healthcare Innovation",
      description:
        "A platform designed to streamline communication for emergency departments, enhancing patient care and operational efficiency.",
      tags: ["Groovy", "Grails", "Translation API", "Twilio"],
      emoji: "🚑",
    },
    {
      title: "Lupus Advisor",
      category: "Healthcare Decision Support",
      description:
        "A decision support tool for lupus patients and healthcare providers, offering personalized treatment recommendations based on patient data and clinical guidelines.",
      tags: [
        "React",
        "Express",
        "Node.js",
        "MySQL",
        "Epic",
        "FHIR",
        "SMART on FHIR",
      ],
      emoji: "🩺",
    },
    {
      title: "TrackByNovir",
      category: "Personal Health Record",
      description:
        "A personal health record application that tracks covid-19 test results and vaccination status.",
      tags: ["Angular", "Express", "Node.js", "PostgreSQL"],
      emoji: "🧬",
    },
    {
      title: "CV Builder",
      category: "Productivity Tool",
      description:
        "A web application that helps users create professional CVs quickly and easily with customizable templates.",
      tags: ["React", "Amplify", "DynamoDB", "S3", "Lambda", "Serverless"],
      emoji: "📄",
    },
    {
      title: "ConnectID - Member Portal",
      category: "Healthcare Member Portal",
      description:
        "A member portal allowing users to view their health information, insurance details, benefits explanations, and more.",
      tags: ["React", "Express", "Node.js", "TypeScript", "FHIR", "Smile CDR"],
      emoji: "🔐",
    },
    {
      title: "FHIR Component Library",
      category: "Healthcare UI Components",
      description:
        "A reusable component library built with React and TypeScript for displaying FHIR resources following multiple IG standards in healthcare applications.",
      tags: ["React", "TypeScript", "FHIR", "Storybook", "Bootstrap"],
      emoji: "🧩",
    },
    {
      title: "Peer Review Plus\u2122 ",
      category: "Healthcare Quality Improvement",
      description:
        "A web application that streamlines the peer review process for healthcare providers, enhancing quality improvement initiatives.",
      tags: ["React", "Express", "Node.js", "MySQL", "Bootstrap"],
      emoji: "⭐",
    },
    {
      title: "Zenito",
      category: "Stress and Anxiety Management",
      description:
        "A web application designed to help users manage stress and anxiety through guided meditation, breathing exercises, and mindfulness techniques.",
      tags: ["React", "Chakra UI"],
      emoji: "🧘‍♂️",
      websiteLink: "https://zenito.onrender.com/",
    },
    {
      title: "My Portfolio Website",
      category: "Personal Website",
      description:
        "A portfolio website to showcase my projects, skills, and experience as a software developer.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      emoji: "💼",
      websiteLink: "https://tylergotz.com/",
      githubLink: "https://github.com/tyler-gotz/portfolio",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 py-32 px-4 relative"
    >
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-7xl mb-6">🏔️</div>
          <h2 className="text-6xl md:text-7xl text-green-900 mb-6">
            My Mountain{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Conquests
            </span>
          </h2>
          <p className="text-xl text-green-800 max-w-3xl mx-auto">
            Each project is a peak I've climbed. Some were steep, some were
            rocky, but I reached the summit every time.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 80,
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -15, rotate: hoveredIndex === index ? 2 : 0 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border-4 border-green-200 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-green-100 to-emerald-100">
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-9xl opacity-80">{project.emoji}</div>
                </motion.div>
                <motion.div className="absolute inset-0 bg-green-600/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.websiteLink && (
                    <motion.a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-6 h-6 text-green-600" />
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-full"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-6 h-6 text-green-600" />
                    </motion.a>
                  )}
                </motion.div>
              </div>
              <div className="p-6">
                <div className="text-green-600 text-sm mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl text-green-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-green-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#86efac",
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
