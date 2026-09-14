import { useEffect, useRef } from 'react';
import styles from './IntroFlow.module.css';

interface ParticleFieldProps {
  depth: 'background' | 'foreground';
}

interface Particle {
  depth: number;
  radius: number;
  velocityX: number;
  velocityY: number;
  x: number;
  y: number;
}

const LAYER_CONFIG = {
  background: {
    density: 28_000,
    lineDistance: 70,
    lineToken: '--loader-particle-line-background',
    maxParticles: 70,
    maxRadius: 1.35,
    maxSpeed: 0.15,
    minParticles: 24,
    minRadius: 0.55,
    minSpeed: 0.075,
    parallaxMultiplier: 28,
    particleToken: '--loader-particle-background',
  },
  foreground: {
    density: 50_000,
    lineDistance: 250,
    lineToken: '--loader-particle-line-foreground',
    maxParticles: 42,
    maxRadius: 2.4,
    maxSpeed: 0.6,
    minParticles: 16,
    minRadius: 1.1,
    minSpeed: 0.3,
    parallaxMultiplier: 14,
    particleToken: '--loader-particle-foreground',
  },
} as const;

const randomBetween = (minimum: number, maximum: number) =>
  minimum + Math.random() * (maximum - minimum);

const createParticles = (
  width: number,
  height: number,
  count: number,
  config: (typeof LAYER_CONFIG)[keyof typeof LAYER_CONFIG],
) =>
  Array.from({ length: count }, (): Particle => {
    const angle = Math.random() * Math.PI * 2;
    const speed = randomBetween(config.minSpeed, config.maxSpeed);

    return {
      depth: randomBetween(0.45, 1),
      radius: randomBetween(config.minRadius, config.maxRadius),
      velocityX: Math.cos(angle) * speed,
      velocityY: Math.sin(angle) * speed,
      x: Math.random() * width,
      y: Math.random() * height,
    };
  });

export function ParticleField({ depth }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const config = LAYER_CONFIG[depth];
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let previousTimestamp = 0;
    let targetOffsetX = 0;
    let targetOffsetY = 0;
    let currentOffsetX = 0;
    let currentOffsetY = 0;

    const styles = window.getComputedStyle(canvas);
    const particleColor = styles.getPropertyValue(config.particleToken).trim();
    const lineColor = styles.getPropertyValue(config.lineToken).trim();

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.min(
        config.maxParticles,
        Math.max(config.minParticles, Math.round((width * height) / config.density)),
      );
      particles = createParticles(width, height, particleCount, config);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetOffsetX = (event.clientX - width / 2) / config.parallaxMultiplier;
      targetOffsetY = (event.clientY - height / 2) / config.parallaxMultiplier;
    };

    const draw = (timestamp: number) => {
      const frameScale = previousTimestamp
        ? Math.min(2, (timestamp - previousTimestamp) / 16.67)
        : 1;
      previousTimestamp = timestamp;
      context.clearRect(0, 0, width, height);

      currentOffsetX += (targetOffsetX - currentOffsetX) * 0.05;
      currentOffsetY += (targetOffsetY - currentOffsetY) * 0.05;

      particles.forEach((particle) => {
        if (!motionQuery.matches) {
          particle.x += particle.velocityX * frameScale;
          particle.y += particle.velocityY * frameScale;

          if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;
        }
      });

      for (let firstIndex = 0; firstIndex < particles.length; firstIndex += 1) {
        const firstParticle = particles[firstIndex];
        const firstX = firstParticle.x + currentOffsetX * firstParticle.depth;
        const firstY = firstParticle.y + currentOffsetY * firstParticle.depth;

        for (let secondIndex = firstIndex + 1; secondIndex < particles.length; secondIndex += 1) {
          const secondParticle = particles[secondIndex];
          const secondX = secondParticle.x + currentOffsetX * secondParticle.depth;
          const secondY = secondParticle.y + currentOffsetY * secondParticle.depth;
          const distance = Math.hypot(firstX - secondX, firstY - secondY);

          if (distance < config.lineDistance) {
            context.beginPath();
            context.moveTo(firstX, firstY);
            context.lineTo(secondX, secondY);
            context.strokeStyle = lineColor;
            context.lineWidth = 1;
            context.stroke();
          }
        }

        context.beginPath();
        context.arc(firstX, firstY, firstParticle.radius, 0, Math.PI * 2);
        context.fillStyle = particleColor;
        context.fill();
      }

      if (!motionQuery.matches) animationFrame = window.requestAnimationFrame(draw);
    };

    const restartAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      previousTimestamp = 0;
      draw(performance.now());
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (motionQuery.matches) draw(performance.now());
    });

    resize();
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    motionQuery.addEventListener('change', restartAnimation);
    restartAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      motionQuery.removeEventListener('change', restartAnimation);
    };
  }, [depth]);

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.particleField} ${
        depth === 'foreground' ? styles.particleForeground : styles.particleBackground
      }`}
      aria-hidden="true"
    />
  );
}
