import React, { useState, useEffect } from 'react';
import { Phone } from '../components/Phone.jsx';

export function ScreenLoading({ onComplete }) {
  const steps = [
    { label: 'Indexing 1,247 photos…' },
    { label: 'Transcribing voice memos (14)…' },
    { label: 'Reading documents and PDFs…' },
    { label: 'Building your connection map…' },
    { label: 'Connecting threads across time…' },
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (active >= steps.length) {
      const t = setTimeout(onComplete, 800);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setActive(a => a + 1), 1100);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <Phone dark dataLabel="Loading">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', padding: '20px 32px 60px',
      }}>
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 40,
          width: '100%',
        }}>
          <div className="orb"/>
          <div style={{ textAlign: 'center' }}>
            <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 36 }}>
              Building your vault
            </h1>
            <p className="body-copy body-copy-dark" style={{ marginTop: 12, fontSize: 15, maxWidth: 280, marginLeft: 'auto', marginRight: 'auto' }}>
              ShareThreads is reading everything. This usually takes a few minutes.
            </p>
          </div>
        </div>

        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 24 }}>
          {steps.map((s, i) => {
            const state = i < active ? 'done' : i === active ? 'active' : '';
            return (
              <div key={i} className={`progress-item ${state}`}>
                <div className="progress-dot"/>
                <div>{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Phone>
  );
}

export default ScreenLoading;
