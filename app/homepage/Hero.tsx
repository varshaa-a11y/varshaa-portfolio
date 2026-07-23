import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 transition-transform hover:scale-105 duration-500">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">Varshaa E</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          BSc Computer Science Student | <span className="font-medium text-gray-700">Data Analytics &amp; Visualization</span> Enthusiast
        </p>
        <div className="mt-10 flex justify-center gap-6">
          <a href="#projects" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:scale-105 shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)]">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-white text-gray-900 font-medium hover:bg-gray-50 transition-all hover:scale-105 border border-gray-200 shadow-sm hover:shadow-md">
            Contact Me
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
