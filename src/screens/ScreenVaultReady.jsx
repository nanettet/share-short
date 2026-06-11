import React from 'react';
import { Phone } from '../components/Phone.jsx';
import { Pill } from '../components/Pill.jsx';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Icon } from '../components/Icons.jsx';

export function ScreenVaultReady({ onEnter }) {
  return (
    <Phone dataLabel="Vault Ready">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '40px 28px 100px',
      }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
          <div style={{ textAlign: 'center' }}>
            <Eyebrow>Your vault is ready</Eyebrow>
          </div>
          <h1 className="headline" style={{ margin: 0, fontSize: 40, textAlign: 'center' }}>
            A lifetime of memories,<br/>
            <em>finally findable.</em>
          </h1>

          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            <div className="stat"><div className="stat-num">1,247</div><div className="stat-label">items indexed</div></div>
            <div className="stat"><div className="stat-num">832</div><div className="stat-label">connections</div></div>
            <div className="stat"><div className="stat-num">62 yrs</div><div className="stat-label">of memory</div></div>
          </div>

          <div style={{ marginTop: 12 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 18px',
              background: 'var(--cream-card)',
              borderRadius: 999,
              border: '1px solid var(--line)',
            }}>
              <Icon.Search s={18} c="#8a857d"/>
              <input
                placeholder="What do you want to find…"
                style={{
                  flex: 1, border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink)',
                }}
                readOnly
              />
            </div>
          </div>

          <div style={{ marginTop: 8 }}>
            <Eyebrow style={{ textAlign: 'center', marginBottom: 12 }}>Try asking</Eyebrow>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
              {['her voice', 'Crystal Lake', "Dad's handwriting", '1987'].map(q => (
                <div key={q} className="chip">{q}</div>
              ))}
            </div>
          </div>
        </div>

        <Pill variant="sage" onClick={onEnter}>Enter your vault</Pill>
      </div>
    </Phone>
  );
}

export default ScreenVaultReady;
