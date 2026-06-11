import React from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Waveform } from '../components/Waveform.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';
import { Icon } from '../components/Icons.jsx';

export function ItemDetail({ onClose, onConnection, onCorrect }) {
  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Back/>
        </button>
        <Eyebrow>Item</Eyebrow>
        <div style={{ width: 18 }}/>
      </div>

      <div style={{ marginTop: 14 }}>
        <ImagePlaceholder label="Photo · 2.1MB" style={{ width: '100%', aspectRatio: '4/5', borderRadius: 18 }}/>
      </div>

      <div style={{ marginTop: 18 }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, margin: 0 }}>
          Mama at the long dock, summer 1968.
        </h3>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.02em' }}>
          Photo · 35mm color · Crystal Lake, Wisconsin
        </div>
      </div>

      <div style={{
        marginTop: 18, padding: 14,
        background: 'var(--sage-tint)',
        borderRadius: 14,
        borderLeft: '3px solid var(--sage)',
      }}>
        <div style={{
          fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--sage-deep)', fontWeight: 500,
        }}>The Clerk · provisional reading</div>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
          color: 'var(--ink)', marginTop: 8, lineHeight: 1.45,
        }}>
          A woman, mid-thirties, standing on a wooden dock at golden hour. Face matches "Mary Lou Carmichael" in three other items. Background matches Crystal Lake.
        </div>
        <button onClick={onCorrect} style={{
          marginTop: 12, background: 'transparent', border: '1px solid var(--sage-deep)',
          color: 'var(--sage-deep)', fontSize: 12, padding: '6px 12px', borderRadius: 999,
          fontFamily: 'var(--sans)', cursor: 'pointer',
        }}>
          Correct reading
        </button>
      </div>

      <div style={{ marginTop: 22 }}>
        <Eyebrow>Connected to</Eyebrow>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginTop: 12, marginRight: -22, paddingRight: 22 }}>
          {[
            { label: 'Journal, 1974',  kind: 'text' },
            { label: 'Photo, 2006',    kind: 'photo' },
            { label: 'Voice, 2019',    kind: 'audio' },
            { label: 'Letter, 1971',   kind: 'text' },
          ].map((c, i) => (
            <div
              key={i}
              onClick={onConnection}
              style={{
                flexShrink: 0, width: 130,
                background: 'var(--cream-card)', borderRadius: 14, padding: 10,
                cursor: 'pointer',
              }}
            >
              {c.kind === 'photo' && <ImagePlaceholder label={c.label} style={{ width: '100%', height: 80, borderRadius: 8 }}/>}
              {c.kind === 'audio' && (
                <div style={{
                  width: '100%', height: 80, borderRadius: 8, background: 'var(--navy-soft)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Waveform bars={10}/>
                </div>
              )}
              {c.kind === 'text' && (
                <div style={{
                  width: '100%', height: 80, borderRadius: 8, background: 'var(--cream-warm)',
                  padding: 8, fontFamily: 'var(--serif)', fontStyle: 'italic',
                  fontSize: 10, color: 'var(--ink-2)', lineHeight: 1.3, overflow: 'hidden',
                }}>
                  "The lake was so cold this morning…"
                </div>
              )}
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
