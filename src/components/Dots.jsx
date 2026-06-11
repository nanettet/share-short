import React from 'react';

export function Dots({ count, active, dark = false }) {
  return (
    <div className="dots">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`dot ${i === active ? 'active' : ''} ${dark ? 'dot-dark' : ''}`} />
      ))}
    </div>
  );
}

export default Dots;
