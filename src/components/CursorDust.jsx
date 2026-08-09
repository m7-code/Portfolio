import { useEffect, useRef } from "react";


export default function CursorDust() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Skip entirely on touch / no-mouse devices
    const hasFineMouse = window.matchMedia("(pointer: fine)").matches;
    if (!hasFineMouse) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function spawnParticles(x, y) {
      const count = 2; // particles per mouse-move event
      for (let i = 0; i < count; i++) {
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: Math.random() * 0.5 + 0.2, // slight downward drift, like falling dust
          size: Math.random() * 2 + 1,
          life: 0,
          maxLife: Math.random() * 40 + 40,
          hue: Math.random() * 20 + 30, // subtle warm-paper tint variance
        });
      }
    }

    let lastX = null;
    let lastY = null;
    function handlePointerMove(e) {
      const x = e.clientX;
      const y = e.clientY;
      // spawn along the path so fast mouse movement doesn't leave gaps
      if (lastX !== null) {
        const dist = Math.hypot(x - lastX, y - lastY);
        const steps = Math.min(Math.ceil(dist / 8), 6);
        for (let s = 0; s < steps; s++) {
          const t = s / steps;
          spawnParticles(lastX + (x - lastX) * t, lastY + (y - lastY) * t);
        }
      } else {
        spawnParticles(x, y);
      }
      lastX = x;
      lastY = y;
    }
    window.addEventListener("mousemove", handlePointerMove);

    function tick() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.01; // gentle gravity, like real dust settling

        const lifeRatio = p.life / p.maxLife;
        const alpha = Math.max(0, 1 - lifeRatio);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - lifeRatio * 0.4), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 235, 225, ${alpha * 0.7})`;
        ctx.fill();
      });

      particles = particles.filter((p) => p.life < p.maxLife);
      animationId = requestAnimationFrame(tick);
    }
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999]"
      aria-hidden="true"
    />
  );
}