import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navSections } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md rounded-3xl m-4 bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">LF</span>
            </div>
            <span className="hidden sm:inline text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Laeba
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="nav-glass-item text-gray-200 font-medium text-sm"
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden lg:block px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-purple-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 space-y-3 animate-fade-in">
            {navSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-purple-400 hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {section.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
