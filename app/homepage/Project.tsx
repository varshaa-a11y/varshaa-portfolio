import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Project() {
  const projects = [
    {
      title: "Industrial Business Website",
      description:
        "Designed a responsive website to showcase industrial products and company information. Planned the website structure and enhanced usability.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  return (
    <AnimatedSection id="projects" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Projects</h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="flex-1 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 font-light">{project.description}</p>
              </div>
              
              <div className="mt-auto relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group-hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.link === "#" ? "[ADD PROJECT LINK]" : "View Project"}
                  <svg className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
