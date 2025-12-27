import { Briefcase, GraduationCap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const { leftRef, rightRef } = useScrollReveal({
    leftX: -150,
    rightX: 150,
    y: 80,
    duration: 1.2,
    ease: 'power2.out',
  });

  const experiences = [
    {
      title: 'Backend Developer Intern',
      company: 'Xellerate Solutions',
      period: 'Nov 2024 - Present',
      description: 'Developing and managing RESTful APIs using Supabase and PostgreSQL for a startup-investor matching platform.',
      achievements: [
        'Developed RESTful APIs for startup-investor matching platform',
        'Implemented hierarchical file & folder management system in Supabase',
        'Enforced secure authentication/authorization for sensitive data',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Smile Returns',
      period: 'Ongoing',
      description: 'Contributed to a scalable, multi-tenant SaaS platform using Next.js, Supabase, and PostgreSQL, supporting 50,000+ users.',
      achievements: [
        'Built multi-tenant SaaS platform supporting 50,000+ users',
        'Optimized database schemas improving data retrieval by 30%',
        'Implemented secure file storage for medical data with compliance',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology, Computer Science',
      institution: 'SGT University, Gurgaon Haryana',
      period: '2022 - 2026',
      description: 'CGPA: 9.12 | Relevant Coursework: Data Structures, Algorithms, DBMS, Web Development, OS, OOP',
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-white mb-4">Journey</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-violet-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div ref={leftRef} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-600/20 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Work Experience</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-violet-600 to-transparent animate-pulse" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute -left-[33px] top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-black group-hover:scale-125 transition-transform group-hover:shadow-lg group-hover:shadow-purple-500/50" />

                  <div className="glass-card rounded-2xl p-6 group-hover:translate-x-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{exp.title}</h4>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors">
                          <span className="text-purple-400 mt-1">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div ref={rightRef} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-purple-600/20 rounded-xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="relative pl-8 space-y-8">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 via-violet-600 to-transparent animate-pulse" />

            {education.map((edu, index) => (
                <div key={index} className="relative group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute -left-[33px] top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-black group-hover:scale-125 transition-transform group-hover:shadow-lg group-hover:shadow-purple-500/50" />

                  <div className="glass-card rounded-2xl p-6 group-hover:translate-x-2">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{edu.degree}</h4>
                        <p className="text-purple-400 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full border border-white/10">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
