import React from "react";
import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 bg-gray-900 text-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-blue-900 rounded-full mix-blend-screen filter blur-[100px] opacity-20"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get In Touch</h2>
          <div className="mt-4 w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 bg-gray-800/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-gray-700">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-200">Email</h3>
                <a href="mailto:varshaamcc@gmail.com" className="mt-1 block text-blue-400 hover:text-blue-300 transition-colors text-lg">
                  varshaamcc@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-green-400 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-200">Phone</h3>
                <p className="mt-1 text-gray-400 text-lg">9025601622</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 mt-1">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div className="ml-6">
                <h3 className="text-lg font-medium text-gray-200">Location</h3>
                <p className="mt-1 text-gray-400 text-lg">Chennai</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-6 md:pt-0 md:border-l md:border-gray-700 md:pl-8">
            <h3 className="text-xl font-medium text-white mb-6">Social Profiles</h3>
            
            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-gray-800/80 rounded-xl hover:bg-gray-700 border border-gray-700 transition-all duration-300 hover:border-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="text-gray-400 group-hover:text-blue-400 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-white transition-colors">[ADD LINKEDIN]</span>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center p-4 bg-gray-800/80 rounded-xl hover:bg-gray-700 border border-gray-700 transition-all duration-300 hover:border-gray-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-900/20">
              <div className="text-gray-400 group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </div>
              <span className="ml-4 font-medium text-gray-300 group-hover:text-white transition-colors">[ADD GITHUB]</span>
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
