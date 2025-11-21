import React from 'react';

export function VibeMeter({ energyLevel }) {
    const level = (energyLevel || 'Moderate').toLowerCase();
    let percentage = '50%';
    if (level.includes('low')) percentage = '20%';
    if (level.includes('high')) percentage = '80%';

    return (
        <div className="vibe-meter-container glass-light">
            <h4>Energy Vibe</h4>
            <div className="meter-track">
                <div
                    className="meter-fill"
                    style={{ width: percentage, background: 'var(--type-accent)' }}
                />
            </div>
            <div className="meter-labels">
                <span>Chill</span>
                <span>Balanced</span>
                <span>Hype</span>
            </div>
        </div>
    );
}
