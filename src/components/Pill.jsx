import React from 'react';

export function Pill({ children, variant = 'sage', onClick, glow = false, disabled = false, style = {} }) {
  return (
    <button
      className={`pill pill-${variant} ${glow ? 'glow' : ''}`}
      onClick={onClick}
      disabled={disabled}
      style={{ opacity: disabled ? 0.4 : 1, ...style }}
    >
      {children}
    </button>
  );
}

export default Pill;
