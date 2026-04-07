"use client";

import { useState } from "react";
import SectionHeading from "@/components/common/SectionHeading";

export default function ProjectsContent() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      client: "ISRO Bangalore",
      logo: "/assets/isro.png",
      title: "Oil Circulation System",
      description:
        "Designed and developed an advanced oil circulation system for high-voltage transformers to ensure efficient cooling and reliable performance.",
      industry: "Space Research",
    },
    {
      id: 2,
      client: "BARC Trombay",
      logo: "/assets/barc.png",
      title: "Radioactive Material Handling System",
      description:
        "Engineered a specialized system for safe handling and movement of radioactive materials in highly controlled environments.",
      industry: "Nuclear",
    },
    {
      id: 3,
      client: "NPCIL",
      logo: "/assets/npcil.png",
      title: "Dynamic Load Testing System",
      description:
        "Developed dynamic load testing devices and crane systems for critical applications in nuclear power plants.",
      industry: "Power / Nuclear",
    },
    {
      id: 4,
      client: "Mahindra Defense",
      logo: "/assets/mahindra.png",
      title: "Decoy Launching System",
      description:
        "Designed and supplied decoy launching systems for defense applications, ensuring precision and operational reliability.",
      industry: "Defense",
    },
    {
      id: 5,
      client: "SAMEER",
      logo: "/assets/sameer.png",
      title: "Advanced Engineering Solutions",
      description:
        "Provided customized engineering solutions for research and industrial applications with a focus on precision and efficiency.",
      industry: "Research",
    },
  ];

  return (
    <div className="projects_content_wrapper sec_pad">
      <div className="container">
        <SectionHeading title="Our Projects" subtitle="Projects" />

        {/* 🔥 GRID */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 projects_grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="projects_col cursor-pointer transition p-4 rounded-lg bg-white"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.logo} className="w-full mb-4" />

              <h3 className="client_name font-semibold">
                {project.client}
              </h3>

              <p className="project_title text-sm text-gray-500">
                {project.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 💎 MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          
          <div className="bg-white max-w-lg w-full rounded-xl p-6 relative animate-fadeIn project_modal">
            
            {/* ❌ Close Button */}
            <button
              className="absolute top-3 right-3 text-xl modal_close_btn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            {/* Content */}
            <img
              src={selectedProject.logo}
              className="h-40"
            />

            <h2 className="project_modal_title">
              {selectedProject.title}
            </h2>

            <p className="project_modal_description">
              {selectedProject.description}
            </p>

            <p className="mt-4 text-sm text-gray-400">
              Industry: {selectedProject.industry}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}