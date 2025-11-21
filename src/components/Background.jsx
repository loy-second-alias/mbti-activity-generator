import React, { useEffect, useRef } from 'react';

export function Background({ typeColor }) {
    // We can implement the canvas blob animation here or use CSS
    // For now, let's stick to the CSS implementation but managed by React
    // We can inject styles or classes based on typeColor

    useEffect(() => {
        const root = document.documentElement;
        if (typeColor) {
            root.style.setProperty('--bg-blob-1', `var(--color-${typeColor}-primary)`);
            root.style.setProperty('--bg-blob-2', `var(--color-${typeColor}-accent)`);
        } else {
            root.style.removeProperty('--bg-blob-1');
            root.style.removeProperty('--bg-blob-2');
        }
    }, [typeColor]);

    return (
        <div className="background-canvas">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
            <div className="blob blob-3"></div>
        </div>
    );
}
