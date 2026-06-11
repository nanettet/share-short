import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';

export function Slide2ProblemPain() {
  const items = [
    { icon: '🎙', title: 'Voice memos she recorded alone', sub: 'Never transcribed, never shared' },
    { icon: '📓', title: 'Journals in seven boxes',        sub: 'Forty years of handwriting in a basement' },
  ];

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow light>The problem</Eyebrow>
        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 44, lineHeight: 1.07 }}>
          She left behind<br/><em>a lifetime.</em>
        </h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '16px 18px',
              background: 'rgba(245, 242, 238, 0.05)',
              borderRadius: 16,
              border: '1px solid rgba(245, 242, 238, 0.08)',
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 12,
                background: 'rgba(158, 184, 159, 0.16)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, flexShrink: 0,
              }}>{it.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 500, color: '#f5f2ee', lineHeight: 1.3 }}>{it.title}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245, 242, 238, 0.45)', marginTop: 3 }}>{it.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slide2ProblemPain;
