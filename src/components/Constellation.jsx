import React, { useEffect, useRef } from 'react';

export function Constellation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Stars/Nodes
        const stars = Array.from({ length: 50 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            vx: (Math.random() - 0.5) * 0.2, // Slow drift
            vy: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.5 + 0.3,
        }));

        // Connections
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach(star => {
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;

                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();
            });

            // Draw connections
            stars.forEach((star, i) => {
                stars.slice(i + 1).forEach(otherStar => {
                    const dx = star.x - otherStar.x;
                    const dy = star.y - otherStar.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(star.x, star.y);
                        ctx.lineTo(otherStar.x, otherStar.y);
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="constellation-container"
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
        />
    );
}
