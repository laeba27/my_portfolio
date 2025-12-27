import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Projects() {
  const { leftRef, rightRef } = useScrollReveal({
    leftX: -150,
    rightX: 150,
    y: 100,
    duration: 1.3,
    ease: 'power2.out',
    stagger: 0.15,
  });
  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of projects combining technical excellence with real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={index % 2 === 0 ? leftRef : rightRef}
              className="glass-card group rounded-3xl overflow-hidden flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-600/20 to-violet-600/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex-grow">
                  <h4 className="text-purple-400 font-semibold text-sm mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-xs text-gray-400">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-purple-400 mt-1">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30 group-hover:bg-purple-600/40 group-hover:border-purple-500/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs border border-purple-500/30">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-gray-300 hover:bg-purple-600/20 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300 group/btn hover:scale-105"
                    >
                      <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group/btn hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
