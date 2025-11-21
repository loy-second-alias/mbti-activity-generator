import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconUtils } from './IconUtils';

export function ActivityCard({ activity, typeColor, onToggleFavorite, isFavorite, index }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = (e) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className={`activity-card-wrapper ${isFlipped ? 'flipped' : ''}`}
            style={{
                '--type-color': `var(--color-${typeColor}-primary)`,
                '--type-accent': `var(--color-${typeColor}-accent)`
            }}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1] // Bouncy entrance
            }}
        >
            <div className="activity-card-flipper">
                {/* FRONT SIDE */}
                <div className="activity-card-front">
                    <h3 className="activity-title-gradient">{activity.title}</h3>

                    <p className="activity-desc">
                        {activity.description}
                    </p>

                    <div className="activity-meta">
                        <span className="meta-item"><IconUtils.Time size={18} color="var(--type-accent)" /> {activity.time}</span>
                        <span className="meta-item"><IconUtils.Group size={18} color="var(--type-accent)" /> {activity.groupSize}</span>
                        <span className="meta-item"><IconUtils.Energy size={18} color="var(--type-accent)" /> {activity.energy}</span>
                    </div>

                    <div className="vibe-tags">
                        {(activity.vibe || []).map((v, i) => (
                            <span key={i} className="vibe-tag">{v}</span>
                        ))}
                    </div>

                    <div className="activity-actions">
                        <button
                            className="details-btn"
                            onClick={handleFlip}
                        >
                            View Details <IconUtils.Back size={18} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button
                            className={`fav-btn ${isFavorite ? 'active' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onToggleFavorite(activity);
                            }}
                        >
                            <IconUtils.Heart
                                size={24}
                                fill={isFavorite ? "currentColor" : "none"}
                            />
                        </button>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div className="activity-card-back">
                    <div className="back-logo-container">
                        {/* Dynamic icon based on vibe/category could go here, using generic for now */}
                        <IconUtils.Sparkles size={40} color="#c084fc" />
                    </div>

                    <div className="divider-ornament">═══════════════</div>

                    <h3 className="activity-title-gradient" style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: 16 }}>
                        {activity.title}
                    </h3>

                    <div className="divider-line"></div>

                    <div className="extended-desc">
                        <p>{activity.description}</p>
                        <p style={{ marginTop: 12, fontStyle: 'italic', opacity: 0.8 }}>
                            Why it fits: {activity.reason}
                        </p>
                    </div>

                    <div className="divider-line"></div>

                    <div className="stats-list">
                        <div className="meta-item">
                            <IconUtils.Time size={18} color="var(--type-accent)" />
                            <strong>Duration:</strong> {activity.time}
                        </div>
                        <div className="meta-item">
                            <IconUtils.Group size={18} color="var(--type-accent)" />
                            <strong>Group Size:</strong> {activity.groupSize}
                        </div>
                        <div className="meta-item">
                            <IconUtils.Energy size={18} color="var(--type-accent)" />
                            <strong>Energy Level:</strong> {activity.energy}
                        </div>
                    </div>

                    <div className="divider-line"></div>

                    <h4 style={{ paddingLeft: 16, marginBottom: 12, color: '#5a4a6a' }}>Steps to Follow:</h4>
                    <ol className="steps-list">
                        {activity.steps && activity.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                        ))}
                    </ol>

                    <div className="vibe-tags" style={{ justifyContent: 'center', marginTop: 20 }}>
                        {(activity.vibe || []).map((v, i) => (
                            <span key={i} className="vibe-tag">{v}</span>
                        ))}
                    </div>

                    <button className="flip-back-btn" onClick={handleFlip}>
                        ← Back to List
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
