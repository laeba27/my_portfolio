import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { leftRef, rightRef } = useScrollReveal({
    leftX: -120,
    rightX: 120,
    y: 60,
    duration: 1,
    ease: 'power2.out',
  });

  return (
    <section id="about" className="py-16 px-6 md:py-20">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-white text-center mb-14">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — ABOUT */}
          <div ref={leftRef} className="space-y-6 md:pr-6">
            <div className="glass-card rounded-3xl p-8">

              <p className="text-gray-300 text-lg">
                I am a<strong> full-stack developer </strong>who loves
                designing clean backend systems and building purposeful web apps.
              </p>

              <p className="text-gray-300 text-lg mt-3">
                My core strength lies in backend-first development:
                REST APIs, authentication, data modeling, and writing code
                that scales without becoming messy. I also care about frontend
                quality, so users interact with something fast and meaningful.
              </p>

              <p className="text-gray-300 text-lg mt-3">
                Right now, I’m an early-career developer gaining real-world
                experience through projects and internships, focusing on
                production-ready engineering rather than academic demos.
              </p>
            </div>
          </div>

          {/* RIGHT — EDUCATION */}
          <div ref={rightRef}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                🎓 Education
              </h3>

              <p className="text-purple-300 font-semibold text-lg">
                Bachelor of Technology — Computer Science
              </p>

              <p className="text-gray-400 mt-1">
                SGT University • Gurgaon, Haryana
              </p>

              <p className="text-gray-400">
                2022 — 2026 • CGPA: <strong>9.12</strong>
              </p>

              <hr className="border-white/10 my-5" />

              <h4 className="text-white font-semibold mb-2">
                Core Subjects & Technical Focus
              </h4>

              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Data Structures & Algorithms</li>
                <li>• Database Management Systems</li>
                <li>• Web Development</li>
                <li>• Operating Systems</li>
                <li>• Object Oriented Programming</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
