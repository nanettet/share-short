import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';

export function Slide5SolutionFeatures1() {
  const bullets = [
    { t: "Finds connections you'd never think to search for", s: 'Same person across forty years. Same lake, two generations.' },
    { t: 'Works on what you already have',                   s: 'Photos, voice memos, scanned journals — no new work required.' },
  ];

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow light>How it works</Eyebrow>
        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 44, lineHeight: 1.07 }}>
          Feed it your archive.
        </h1>
        <p className="body-copy body-copy-dark" style={{ fontSize: 17, marginTop: -8 }}>
          It reads the photographs, listens to the voices, weighs the journals.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 10, height: 10, borderRadius: 50,
                background: 'var(--sage)', marginTop: 7, flexShrink: 0,
              }}/>
              <div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 16, fontWeight: 500, color: '#f5f2ee', lineHeight: 1.3 }}>{b.t}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: 'rgba(245, 242, 238, 0.5)', marginTop: 5 }}>{b.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide5SolutionFeatures1;
