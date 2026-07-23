import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">About Me</h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 transform hover:-translate-y-1">
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            I&apos;m <span className="font-medium text-blue-600">Varshaa E</span>, an enthusiastic BSc Computer Science student at Madras
            Christian College, Tambaram, with foundational skills in Python, SQL, and
            data visualization tools like Tableau and Excel. I recently completed an
            internship at Aptiv Connection Systems India Private Limited, where I
            cleaned and analyzed large business datasets and built interactive Power
            BI dashboards to support data-driven decision-making. I&apos;m passionate
            about learning new technologies and applying my knowledge to real-world
            problems, and I speak English, Tamil, Hindi, and German.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
