import React from 'react';
import { motion } from 'framer-motion';
import { Constellation } from './Constellation';

export function Background({ typeColor, darkMode }) {
    // Enhanced pastel palette
    const colors = [
        '#e6d5f5', '#f0e0ff', // Lavender
        '#ffd5c8', '#ffe5dc', // Peach
        '#d0f5dc', '#e0ffed', // Mint
        '#ffd5e5', '#ffe5f0', // Rose
        '#fff0c8', '#fff8dc', // Yellow
        '#d5e5ff', '#e0f0ff', // Blue
        '#ffd5d5', '#ffe5e5', // Coral
        '#e5d5ff', '#f0e5ff'  // Purple
    ];

    // Generate more blobs for richness
    const blobs = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        width: Math.random() * 600 + 300, // 300-900px
        height: Math.random() * 600 + 300,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 20, // 20-40s
        delay: Math.random() * 10,
        scale: Math.random() * 0.6 + 0.7, // 0.7-1.3
    }));

    // White "cloud" blobs
    const clouds = Array.from({ length: 3 }).map((_, i) => ({
        id: `cloud-${i}`,
        width: Math.random() * 400 + 600, // 600-1000px
        height: Math.random() * 400 + 600,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 30 + 30,
        delay: Math.random() * 5,
    }));

    return (
        <div className={`background-canvas ${darkMode ? 'dark-mode-bg' : ''}`}>
            {darkMode ? (
                <Constellation />
            ) : (
                <>
                    {/* Colored Blobs */}
                    {blobs.map((blob) => (
                        <motion.div
                            key={blob.id}
                            style={{
                                position: 'absolute',
                                left: `${blob.x}%`,
                                top: `${blob.y}%`,
                                width: blob.width,
                                height: blob.height,
                                borderRadius: '50%',
                                background: blob.color,
                                filter: 'blur(120px)', // Increased blur
                                opacity: 0.45,
                                zIndex: -2,
                                mixBlendMode: 'multiply',
                            }}
                            animate={{
                                x: [0, Math.random() * 400 - 200, 0],
                                y: [0, Math.random() * 400 - 200, 0],
                                scale: [1, blob.scale, 1],
                                rotate: [0, 360],
                            }}
                            transition={{
                                duration: blob.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: blob.delay,
                            }}
                        />
                    ))}

                    {/* White Cloud Blobs */}
                    {clouds.map((cloud) => (
                        <motion.div
                            key={cloud.id}
                            style={{
                                position: 'absolute',
                                left: `${cloud.x}%`,
                                top: `${cloud.y}%`,
                                width: cloud.width,
                                height: cloud.height,
                                borderRadius: '50%',
                                background: '#ffffff',
                                filter: 'blur(180px)', // Extreme blur
                                opacity: 0.6,
                                zIndex: -1,
                                mixBlendMode: 'screen',
                            }}
                            animate={{
                                x: [0, Math.random() * 200 - 100, 0],
                                y: [0, Math.random() * 200 - 100, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: cloud.duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: cloud.delay,
                            }}
                        />
                    ))}
                </>
            )}
        </div>
    );
}
