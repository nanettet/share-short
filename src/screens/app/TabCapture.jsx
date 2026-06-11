import React, { useState } from 'react';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { Waveform } from '../../components/Waveform.jsx';
import { ImagePlaceholder } from '../../components/ImagePlaceholder.jsx';
import { Icon } from '../../components/Icons.jsx';

export function TabCapture() {
  const [mode, setMode] = useState('voice');
  const [recording, setRecording] = useState(false);
  const modes = [
    { id: 'voice', label: 'Voice', icon: Icon.Mic },
    { id: 'photo', label: 'Photo', icon: Icon.Photo },
    { id: 'scan',  label: 'Scan',  icon: Icon.Scan },
    { id: 'note',  label: 'Note',  icon: Icon.Pen },
  ];

  return (
    <div style={{ padding: '14px 24px 100px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div style={{ paddingTop: 8 }}>
        <Eyebrow>Capture</Eyebrow>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 500, margin: '8px 0 0' }}>
          What's on your mind?
        </h2>
      </div>

      {/* Mode tabs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {modes.map(m => {
          const active = mode === m.id;
          const C = m.icon;
          return (
            <div
              key={m.id}
              onClick={() => setMode(m.id)}
              style={{
                padding: '14px 4px',
                borderRadius: 14,
                background: active ? 'var(--sage-tint)' : 'var(--cream-card)',
                border: active ? '1.5px solid var(--sage)' : '1.5px solid transparent',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
                cursor: 'pointer',
              }}
            >
              <C s={20} c={active ? 'var(--sage-deep)' : '#5a665e'}/>
              <div style={{ fontSize: 11, color: active ? 'var(--sage-deep)' : 'var(--ink-2)' }}>{m.label}</div>
            </div>
          );
        })}
      </div>

      {mode === 'voice' && (
        <div style={{
          background: 'var(--cream-card)', borderRadius: 22, padding: 24,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18,
          minHeight: 320,
        }}>
          <div style={{ width: '100%', minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {recording ? <Waveform bars={36}/> : (
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic', color: 'var(--muted)', textAlign: 'center' }}>
                Tap the circle to begin.
              </div>
            )}
          </div>
          <button
            onClick={() => setRecording(r => !r)}
            style={{
              width: 88, height: 88, borderRadius: 999,
              background: recording ? '#c97474' : 'var(--sage)',
              border: '6px solid #fff',
              boxShadow: recording
                ? '0 0 0 2px #c97474, 0 0 40px rgba(201, 116, 116, 0.4)'
                : '0 0 0 2px var(--sage), 0 0 30px rgba(158, 184, 159, 0.3)',
              cursor: 'pointer',
            }}
          />
          <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)', textAlign: 'center', maxWidth: 240 }}>
            This will auto-connect to your vault.<br/>No tags needed.
          </div>
        </div>
      )}
      {mode === 'photo' && (
        <div style={{
          background: 'var(--navy)', borderRadius: 22, padding: 0, minHeight: 360,
          overflow: 'hidden', position: 'relative',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <ImagePlaceholder label="Camera viewfinder" dark style={{ position: 'absolute', inset: 0 }}/>
          <div style={{
            position: 'absolute', bottom: 24, left: 0, right: 0,
            display: 'flex', justifyContent: 'center',
          }}>
            <div style={{
              width: 68, height: 68, borderRadius: 999,
              background: 'white', border: '4px solid rgba(255, 255, 255, 0.35)',
            }}/>
          </div>
        </div>
      )}
      {mode === 'scan' && (
        <div style={{
          background: 'var(--cream-card)', borderRadius: 22, padding: 28,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, minHeight: 320,
        }}>
          <Icon.Scan s={56} c="#9eb89f"/>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, textAlign: 'center' }}>
            Hold a document<br/>flat in good light.
          </div>
          <p className="body-copy" style={{ fontSize: 13, textAlign: 'center' }}>
            ShareThreads will detect edges, deskew, and read handwriting.
          </p>
        </div>
      )}
      {mode === 'note' && (
        <div style={{
          background: 'var(--cream-card)', borderRadius: 22, padding: 22, minHeight: 320,
        }}>
          <textarea
            placeholder="Begin typing…"
            style={{
              width: '100%', minHeight: 220, border: 'none', outline: 'none',
              background: 'transparent', resize: 'none',
              fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.5, color: 'var(--ink)',
            }}
          />
        </div>
      )}
    </div>
  );
}

export default TabCapture;
