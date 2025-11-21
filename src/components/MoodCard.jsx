import React from 'react';
import { motion } from 'framer-motion';

export function MoodCard({ mood, onClick, index }) {
    return (
        <motion.div
            className="mood-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onClick(mood)}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
                position: 'relative',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f1620 100%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 24,
                minHeight: 200,
                padding: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                overflow: 'hidden',
                aspectRatio: '1/1.2'
            }}
        >
            {/* Pearlescent Overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, rgba(138, 43, 226, 0.3), rgba(75, 0, 130, 0.3), rgba(25, 25, 112, 0.3))',
                    opacity: 0.6,
                    mixBlendMode: 'overlay',
                    zIndex: 1
                }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <h3 className="mood-name" style={{
                    fontSize: '1.75rem',
                    fontWeight: 600,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0ff 50%, #ffffff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
                    marginBottom: 12
                }}>
                    {mood.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                    {mood.description}
                </p>
            </div>
        </motion.div>
    );
}
