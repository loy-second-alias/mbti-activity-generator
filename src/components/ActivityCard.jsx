import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { IconUtils } from './IconUtils';

export function ActivityCard({ activity, typeColor, onToggleFavorite, onDetails, isFavorite, index }) {
    return (
        <motion.div
            className="glass-strong activity-card"
            style={{
                '--type-color': `var(--color-${typeColor}-primary)`,
                '--type-accent': `var(--color-${typeColor}-accent)`
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <div className="activity-header">
                <h3 className="activity-title">{activity.title}</h3>
                <div className="activity-badges">
                    {(activity.vibe || []).map((v, i) => (
                        <span key={i} className="vibe-badge">{v}</span>
                    ))}
                </div>
            </div>

            <p className="activity-desc">{activity.description}</p>

            <div className="activity-meta">
                <span className="meta-item"><IconUtils.Time size={16} /> {activity.time}</span>
                <span className="meta-item"><IconUtils.Group size={16} /> {activity.groupSize}</span>
                <span className="meta-item"><IconUtils.Energy size={16} /> {activity.energy}</span>
            </div>

            <div className="activity-actions">
                <button
                    className="glass-light action-btn details-btn"
                    onClick={() => onDetails(activity)}
                >
                    See Details
                </button>
                <button
                    className={`glass-light action-btn fav-btn ${isFavorite ? 'active' : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(activity);
                    }}
                >
                    <IconUtils.Heart
                        size={20}
                        fill={isFavorite ? "#ff4081" : "none"}
                        color={isFavorite ? "#ff4081" : "currentColor"}
                    />
                </button>
            </div>
        </motion.div>
    );
}
