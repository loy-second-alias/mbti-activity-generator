import React from 'react';
import { motion } from 'framer-motion';

export function MBTICard({ type, onClick, index }) {
    return (
        <motion.div
            className="glass-panel mbti-card"
            style={{
                '--type-color': `var(--color-${type.color}-primary)`,
                '--type-accent': `var(--color-${type.color}-accent)`
            }}
            onClick={() => onClick(type)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02, borderColor: 'var(--type-accent)' }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Top Right Badge */}
            <span className="mbti-badge">{type.category}</span>

            {/* Centered Code */}
            <span className="mbti-code">{type.code}</span>

            {/* Nickname */}
            <h3 className="mbti-nickname">{type.name}</h3>

            {/* Bottom Category Text */}
            <span className="mbti-category-text">{type.category}</span>
        </motion.div>
    );
}
