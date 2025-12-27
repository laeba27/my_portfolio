import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-2 text-gray-400 text-sm group hover:text-purple-300 transition-colors">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400 animate-pulse" />
            <span className="font-semibold">by Laeba Firdous</span>
          </div>

          <div className="text-gray-400 text-sm">
            © {currentYear} All rights reserved
          </div>

          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 duration-300 inline-block">
              About
            </a>
            <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 duration-300 inline-block">
              Projects
            </a>
            <a href="#skills" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 duration-300 inline-block">
              Skills
            </a>
            <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-110 duration-300 inline-block">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-500">
          <span>📍 Gurgaon, Haryana</span>
          <span className="hidden sm:block">•</span>
          <span>📧 laeba2704@gmail.com</span>
          <span className="hidden sm:block">•</span>
          <span>📱 9717809918</span>
        </div>
      </div>
    </footer>
  );
}
