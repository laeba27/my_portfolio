import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  leftX?: number;
  rightX?: number;
  y?: number;
  duration?: number;
  ease?: string;
  stagger?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    leftX = -150,
    rightX = 150,
    y = 100,
    duration = 1.2,
    ease = 'power2.out',
    stagger = 0.2,
  } = options;

  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!leftRef.current || !rightRef.current) return;

    // Left column animation
    gsap.fromTo(
      leftRef.current,
      {
        x: leftX,
        y: y,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1, // Smooth scroll linking
          markers: false,
        },
        duration: duration,
        ease: ease,
      }
    );

    // Right column animation with stagger
    gsap.fromTo(
      rightRef.current,
      {
        x: rightX,
        y: y,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false,
        },
        duration: duration,
        ease: ease,
        delay: stagger,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [leftX, rightX, y, duration, ease, stagger]);

  return { leftRef, rightRef };
}

// Alternative hook using IntersectionObserver + rAF for more control
export function useScrollRevealIntersection(options: ScrollRevealOptions = {}) {
  const {
    leftX = -150,
    rightX = 150,
    y = 100,
    duration = 1.2,
    ease = 'power2.out',
    stagger = 0.2,
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && leftRef.current && rightRef.current) {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / (duration * 1000), 1);

              // Spring easing approximation
              const easeProgress =
                progress < 0.5
                  ? 2 * progress * progress
                  : -1 + (4 - 2 * progress) * progress;

              const leftTransform = {
                x: leftX + easeProgress * -leftX,
                y: y + easeProgress * -y,
                opacity: easeProgress,
              };

              const rightTransform = {
                x: rightX + easeProgress * -rightX,
                y: y + easeProgress * -y,
                opacity: easeProgress,
              };

              if (leftRef.current) {
                leftRef.current.style.transform = `translate3d(${leftTransform.x}px, ${leftTransform.y}px, 0)`;
                leftRef.current.style.opacity = `${leftTransform.opacity}`;
              }

              if (rightRef.current) {
                rightRef.current.style.transform = `translate3d(${rightTransform.x}px, ${rightTransform.y}px, 0)`;
                rightRef.current.style.opacity = `${rightTransform.opacity}`;
              }

              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };

            animate();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [leftX, rightX, y, duration, ease, stagger]);

  return { containerRef, leftRef, rightRef };
}
