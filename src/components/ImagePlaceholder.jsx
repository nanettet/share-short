import React from 'react';

export function ImagePlaceholder({ label, dark = false, style = {} }) {
  return <div className={`img-ph ${dark ? 'dark' : ''}`} data-label={label} style={style} />;
}

export default ImagePlaceholder;
