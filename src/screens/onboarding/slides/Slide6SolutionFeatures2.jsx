import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';

export function Slide6SolutionFeatures2() {
  const bullets = [
    { t: 'Two vault types: memorial and living', s: 'For preserving the past. For shaping what comes next.' },
    { t: "Your family's data never trains any model", s: 'Encrypted at rest. Yours alone, forever.' },
  ];

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow light>And quietly</Eyebrow>
        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 44, lineHeight: 1.07 }}>
          It notices what<br/>only a careful<br/>reader would.
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 4 }}>
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

export default Slide6SolutionFeatures2;
