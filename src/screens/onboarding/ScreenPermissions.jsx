import React, { useState } from 'react';
import { Phone } from '../../components/Phone.jsx';
import { Pill } from '../../components/Pill.jsx';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { Dots } from '../../components/Dots.jsx';
import { Icon } from '../../components/Icons.jsx';

export function ScreenPermissions({ onNext }) {
  const perms = [
    { id: 'photos', icon: Icon.Photo, title: 'Photos & Videos', sub: 'So ShareThreads can read your library', why: 'Read-only · stays on device until indexed' },
    { id: 'mic',    icon: Icon.Mic,   title: 'Microphone & Voice Memos', sub: 'To transcribe recordings', why: 'Transcribed locally, never uploaded raw' },
    { id: 'files',  icon: Icon.Doc,   title: 'Files & Documents', sub: 'For journals, letters, PDFs', why: 'Only folders you choose' },
  ];
  const [granted, setGranted] = useState({});
  const grant = (id) => setGranted(g => ({ ...g, [id]: true }));
  const allGranted = perms.every(p => granted[p.id]);

  return (
    <Phone dataLabel="13 Permissions">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '24px 28px 90px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <Dots count={3} active={2}/>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, paddingTop: 16 }}>
          <Eyebrow>Permissions</Eyebrow>
          <h1 className="headline" style={{ margin: 0, fontSize: 40 }}>
            Grant access <em>once.</em><br/>Forget it forever.
          </h1>
          <p className="body-copy" style={{ fontSize: 16, marginTop: -8 }}>
            ShareThreads reads only what you allow, and never sends raw files anywhere.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {perms.map(p => {
              const C = p.icon;
              const ok = granted[p.id];
              return (
                <div key={p.id} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 16px', borderRadius: 16,
                  background: ok ? 'var(--sage-tint)' : 'var(--cream-card)',
                  border: ok ? '1.5px solid var(--sage)' : '1.5px solid var(--line)',
                  transition: 'all 0.2s ease',
                }}>
                  <div className="row-icon"><C s={20} c="#5a665e"/></div>
                  <div style={{ flex: 1 }}>
                    <div className="row-title" style={{ fontSize: 14 }}>{p.title}</div>
                    <div className="row-sub" style={{ fontSize: 11 }}>{ok ? p.why : p.sub}</div>
                  </div>
                  {ok ? (
                    <div style={{
                      width: 26, height: 26, borderRadius: 999, background: 'var(--sage)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon.Check s={13} c="#fdfaf5"/>
                    </div>
                  ) : (
                    <button
                      onClick={() => grant(p.id)}
                      style={{
                        border: 'none', background: 'var(--navy)', color: '#f5f2ee',
                        fontFamily: 'var(--sans)', fontSize: 12, fontWeight: 500,
                        padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                      }}
                    >
                      Allow
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <Pill variant="sage" onClick={onNext} disabled={!allGranted}>
          {allGranted ? 'Build my vault' : 'Allow access to continue'}
        </Pill>
      </div>
    </Phone>
  );
}

export default ScreenPermissions;
