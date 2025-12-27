import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-20">
      <div className="max-w-5xl w-full text-center space-y-8 animate-fade-in">
        <div className="inline-block">
          <span className="text-purple-400 text-sm font-medium tracking-wider uppercase animate-pulse">
            {personalInfo.title}
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
            {personalInfo.name}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 font-light">
          {personalInfo.tagline}
        </p>

        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.summary}
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-6">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 animate-float"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white rounded-full font-medium border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 justify-center pt-8">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 group animate-float"
            style={{ animationDelay: '0.2s' }}
          >
            <Github className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 group animate-float"
            style={{ animationDelay: '0.4s' }}
          >
            <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-110 group animate-float"
            style={{ animationDelay: '0.6s' }}
          >
            <Mail className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </a>
        </div>

        {/* Contact info */}
        <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-purple-400" />
            {personalInfo.email}
          </span>
          <span className="hidden sm:block">•</span>
          <span>{personalInfo.location}</span>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-violet-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
}
