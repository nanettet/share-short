import React from 'react';

export function Eyebrow({ children, light = false, style = {} }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`} style={style}>{children}</div>;
}

export default Eyebrow;
