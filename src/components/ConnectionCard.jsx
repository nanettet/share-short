import React from 'react';
import { Waveform } from './Waveform.jsx';
import { ImagePlaceholder } from './ImagePlaceholder.jsx';

export function ConnectionCard({ left, right, connType, onClick }) {
  const renderPane = (p) => {
    if (p.kind === 'photo') {
      return <ImagePlaceholder label={p.label} style={{ width: '100%', height: '100%', borderRadius: 12 }}/>;
    }
    if (p.kind === 'audio') {
      return (
        <div style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 6, padding: 8,
        }}>
          <Waveform bars={14}/>
          <div style={{ fontSize: 10, color: 'var(--muted)', textAlign: 'center' }}>{p.label}</div>
        </div>
      );
    }
    return (
      <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 12, color: '#3d4a52', lineHeight: 1.35 }}>
        {p.text}
      </div>
    );
  };

  return (
    <div className="conn-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="conn-pair">
        <div className={`conn-pane ${left.kind === 'photo' ? 'photo' : ''}`}>
          {left.kind !== 'photo' && <div className="date">{left.date}</div>}
          {renderPane(left)}
        </div>
        <div className="conn-line-wrap">
          <div className="conn-line"/>
        </div>
        <div className={`conn-pane ${right.kind === 'photo' ? 'photo' : ''}`}>
          {right.kind !== 'photo' && <div className="date">{right.date}</div>}
          {renderPane(right)}
        </div>
      </div>
      <div className="conn-meta">
        <span className="label">{connType}</span>
        <span style={{ marginLeft: 'auto' }}>2 items</span>
      </div>
    </div>
  );
}

export default ConnectionCard;
