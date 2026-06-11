import React from 'react';

export function Waveform({ bars = 28, color = 'var(--sage)' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 30 }}>
      {Array.from({ length: bars }).map((_, i) => {
        const peak = 8 + Math.abs(Math.sin(i * 0.7)) * 18;
        const delay = (i % 6) * 0.08;
        return (
          <span
            key={i}
            className="wave-bar"
            style={{
              '--peak': `${peak}px`,
              background: color,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export default Waveform;
