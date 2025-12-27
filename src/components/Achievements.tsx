import { Award, Trophy, Star, Code2, Zap, Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Achievements() {
  const { leftRef, rightRef } = useScrollReveal({
    leftX: -150,
    rightX: 150,
    y: 100,
    duration: 1.3,
    ease: 'power2.out',
    stagger: 0.1,
  });

  const achievements = [
    {
      icon: Trophy,
      title: '9.12 CGPA',
      organization: 'SGT University',
      year: '2024',
      description: 'Maintaining excellent academic performance in Computer Science',
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      organization: 'Practical Experience',
      year: 'Current',
      description: 'Building production-grade applications with React, Node.js, and cloud platforms',
    },
    {
      icon: Zap,
      title: 'Database Optimization',
      organization: 'Smile Returns',
      year: '2024',
      description: 'Improved data retrieval efficiency by 30% through schema optimization',
    },
    {
      icon: Star,
      title: 'Multi-Tenant Architecture',
      organization: 'Xellerate Solutions',
      year: '2024',
      description: 'Designed scalable systems supporting 50,000+ concurrent users',
    },
    {
      icon: Users,
      title: 'Secure Authentication',
      organization: 'Industry Experience',
      year: 'Current',
      description: 'Implemented RBAC/ACL models and OAuth2.0 security protocols',
    },
    {
      icon: Award,
      title: 'RESTful API Development',
      organization: 'Professional Skills',
      year: 'Current',
      description: 'Expert in designing and building secure, scalable REST and GraphQL APIs',
    },
  ];

  return (
    <section id="achievements" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Achievements & Highlights</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Recognition and milestones achieved through dedication and practical experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;
            const ref = isLeft ? leftRef : rightRef;
            
            return (
              <div
                key={index}
                ref={ref}
                className="glass-card rounded-3xl p-8 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-600/30 to-violet-600/30 rounded-2xl border border-purple-500/30 group-hover:scale-110 transition-transform group-hover:rotate-12">
                    <achievement.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-purple-400 font-medium text-sm mb-3">
                  {achievement.organization}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
