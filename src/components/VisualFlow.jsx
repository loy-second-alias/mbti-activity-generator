import React from 'react';

export function VisualFlow({ steps }) {
    if (!steps || !Array.isArray(steps)) return null;

    return (
        <div className="visual-flow glass-light">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flow-step">
                        <div className="step-icon glass-medium">{index + 1}</div>
                        <p className="step-text">{step}</p>
                    </div>
                    {index < steps.length - 1 && <div className="flow-connector" />}
                </React.Fragment>
            ))}
        </div>
    );
}
