"use client";

import { useEffect, useRef } from "react";

export default function AnimatedShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener("pointermove", handlePointerMove);

    // Aurora blob configurations
    const blobs = [
      { x: width * 0.25, y: height * 0.25, targetX: width * 0.25, targetY: height * 0.25, radius: Math.min(width, height) * 0.35, color: "rgba(221, 123, 187, 0.12)", speed: 0.02 }, // Pink/Rose
      { x: width * 0.75, y: height * 0.35, targetX: width * 0.75, targetY: height * 0.35, radius: Math.min(width, height) * 0.4, color: "rgba(215, 159, 30, 0.08)", speed: 0.015 },  // Gold/Yellow
      { x: width * 0.5, y: height * 0.75, targetX: width * 0.5, targetY: height * 0.75, radius: Math.min(width, height) * 0.45, color: "rgba(76, 120, 148, 0.1)", speed: 0.01 }   // Blue/Indigo
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      blobs.forEach((blob, idx) => {
        // Move towards mouse or run a gentle float animation
        const angle = Date.now() * 0.0005 * (idx + 1);
        const offsetX = Math.cos(angle) * 50;
        const offsetY = Math.sin(angle) * 50;

        // Attract towards mouse position with damping
        const targetX = blob.targetX + (mouse.x - width / 2) * (0.2 * (idx + 1)) + offsetX;
        const targetY = blob.targetY + (mouse.y - height / 2) * (0.2 * (idx + 1)) + offsetY;

        blob.x += (targetX - blob.x) * blob.speed;
        blob.y += (targetY - blob.y) * blob.speed;

        // Draw radial gradient for each blob
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "rgba(18, 18, 18, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block bg-[#121212]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
