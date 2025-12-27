import { useRef } from 'react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { leftRef, rightRef } = useScrollReveal({
    leftX: -150,
    rightX: 150,
    y: 80,
    duration: 1.2,
    ease: 'power2.out',
  });

  return (
    <section id="skills" className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
          Technical <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Languages, frameworks, and tools I use to build amazing products
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Frontend & Backend */}
          <div ref={leftRef} className="space-y-6">
            {/* Frontend Skills */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></span>
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-gray-200 text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></span>
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-gray-200 text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Databases & Tools */}
          <div ref={rightRef} className="space-y-6">
            {/* Databases Skills */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-gray-200 text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                Tools & Other
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-white/10 text-gray-200 text-sm hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
