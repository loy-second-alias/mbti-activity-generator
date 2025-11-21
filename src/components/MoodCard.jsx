import React from 'react';
import { motion } from 'framer-motion';

export function MoodCard({ mood, onClick, index }) {
    return (
        <motion.div
            className="mood-card"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] // Bouncy
            }}
            onClick={() => onClick(mood)}
            whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)'
            }}
            whileTap={{ scale: 0.98, y: -8 }}
            style={{
                background: `linear-gradient(135deg, ${mood.color}99 0%, ${mood.color}80 100%)`, // Use mood color with opacity
                borderColor: 'rgba(255, 255, 255, 0.5)'
            }}
        >
            {/* Pearlescent Overlay handled in CSS via ::before */}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px' }}>
                <h3 className="mood-name">
                    {mood.name}
                </h3>
                <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.9rem',
                    marginTop: 8,
                    fontWeight: 500,
                    textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}>
                    {mood.description}
                </p>
            </div>
        </motion.div>
    );
}
