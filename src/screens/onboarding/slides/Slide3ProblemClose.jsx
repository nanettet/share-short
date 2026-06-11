import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';

export function Slide3ProblemClose() {
  const item = { icon: '🖼', title: 'Albums no one opens', sub: 'Faces no one alive can name anymore' };

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow light>And then</Eyebrow>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          padding: '18px 20px',
          background: 'rgba(245, 242, 238, 0.05)',
          borderRadius: 16,
          border: '1px solid rgba(245, 242, 238, 0.08)',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'rgba(158, 184, 159, 0.16)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 22, flexShrink: 0,
          }}>{item.icon}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 500, color: '#f5f2ee', lineHeight: 1.3 }}>{item.title}</div>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'rgba(245, 242, 238, 0.45)', marginTop: 3 }}>{item.sub}</div>
          </div>
        </div>

        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 46, lineHeight: 1.07 }}>
          Both are<br/><em>slipping past.</em>
        </h1>
        <p className="body-copy body-copy-dark" style={{ fontSize: 17 }}>
          Loved, but unread. Known, but unnamed.
        </p>
      </div>
    </div>
  );
}

export default Slide3ProblemClose;
