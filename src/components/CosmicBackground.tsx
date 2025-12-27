import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface GradientBlob {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  expandRadius: number;
  isExpanding: boolean;
}

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const gradientBlobsRef = useRef<GradientBlob[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full document size
    canvas.width = window.innerWidth;
    canvas.height = document.documentElement.scrollHeight;

    const particles: Particle[] = [];
    const particleCount = 80;

    // Initialize gradient blobs for continuous motion - more blobs for full page coverage
    const gradientBlobs: GradientBlob[] = [];
    const blobColors = [
      'rgba(168, 85, 247, 0.08)',  // purple - lighter
      'rgba(139, 92, 246, 0.08)',  // violet - lighter
      'rgba(168, 85, 247, 0.06)',  // lighter purple - more faded
      'rgba(124, 58, 255, 0.08)',  // indigo - lighter
    ];

    for (let i = 0; i < 8; i++) {
      gradientBlobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 200 + 150,
        color: blobColors[i % blobColors.length],
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.15 + 0.08,
        expandRadius: 0,
        isExpanding: false,
      });
    }
    gradientBlobsRef.current = gradientBlobs;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Trigger gradient blob expansion on mouse movement
      gradientBlobs.forEach((blob) => {
        const dx = e.clientX - blob.x;
        const dy = e.clientY - blob.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 300) {
          blob.isExpanding = true;
          blob.expandRadius = Math.min(blob.expandRadius + 50, 200);
          blob.x -= dx * 0.001;
          blob.y -= dy * 0.001;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate gradient blobs
      gradientBlobs.forEach((blob) => {
        blob.x += blob.speedX;
        blob.y += blob.speedY;

        // Bounce off edges
        if (blob.x < 0 || blob.x > canvas.width) blob.speedX *= -1;
        if (blob.y < 0 || blob.y > canvas.height) blob.speedY *= -1;

        // Decay expansion
        if (blob.isExpanding) {
          blob.expandRadius -= 3;
          if (blob.expandRadius <= 0) {
            blob.isExpanding = false;
            blob.expandRadius = 0;
          }
        }

        // Draw gradient blob as radial gradient
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.size + blob.expandRadius);
        gradient.addColorStop(0, blob.color.replace(/[\d.]+\)$/, (blob.opacity + 0.15) + ')'));
        gradient.addColorStop(0.5, blob.color);
        gradient.addColorStop(1, blob.color.replace(/[\d.]+\)$/, '0)'));

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.size + blob.expandRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Animate particles
      particles.forEach((particle) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          particle.x -= dx * 0.002;
          particle.y -= dy * 0.002;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" style={{ minHeight: '100%', width: '100%' }}>
      {/* Base gradient background - extends full document height - lighter and more faded */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
      
      {/* Animated gradient blobs - lighter and more subtle */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl animate-blob opacity-50" />
      <div className="absolute bottom-40 right-40 w-[500px] h-[500px] bg-violet-900/15 rounded-full blur-3xl animate-blob opacity-50" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/10 rounded-full blur-3xl animate-blob opacity-30" style={{ animationDelay: '4s' }} />
      
      {/* Additional floating gradient accents - lighter */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-600/10 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl animate-float-slow" />
      
      {/* Gradient shift overlay - very subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/3 to-transparent animate-gradient-shift pointer-events-none" />
      
      {/* Canvas particle animation */}
      <canvas ref={canvasRef} className="absolute inset-0" />
      
      {/* Subtle radial gradient accent - lighter */}
      <div className="absolute inset-0 bg-radial-gradient opacity-15 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.05) 0%, transparent 70%)'
      }} />
    </div>
  );
}
