import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Skills() {
  const technicalSkills = ["Python", "SQL", "Tableau", "Microsoft Excel", "Power BI"];
  const softSkills = ["Communication", "Leadership", "Quick Learner"];

  return (
    <AnimatedSection id="skills" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">Skills</h2>
          <div className="mt-4 w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technical Skills</h3>
            </div>
            <ul className="flex flex-wrap gap-3">
              {technicalSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-blue-50/50 border border-blue-100/50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_14px_0_rgb(37,99,235,0.39)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Soft Skills</h3>
            </div>
            <ul className="flex flex-wrap gap-3">
              {softSkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-green-50/50 border border-green-100/50 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition-all duration-300 cursor-default transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_4px_14px_0_rgb(22,163,74,0.39)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
