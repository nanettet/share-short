import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';
import { Icon } from '../components/Icons.jsx';

export function ConnectionDetail({ onClose }) {
  const [verdict, setVerdict] = useState(null);

  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Back/>
        </button>
        <Eyebrow>Connection</Eyebrow>
        <div style={{ width: 18 }}/>
      </div>

      <div style={{ marginTop: 18 }}>
        <Eyebrow>The thread</Eyebrow>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '8px 0 0' }}>
          Same place. <em>Thirty-eight years apart.</em>
        </h3>
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ background: 'var(--cream-card)', borderRadius: 16, overflow: 'hidden' }}>
          <ImagePlaceholder label="Mama at the dock · 1968" style={{ width: '100%', height: 200 }}/>
          <div style={{ padding: 14 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500 }}>Mama at the long dock</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>Photo · August 1968 · Crystal Lake</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--sage)' }}/>
          <Icon.Tree c="#7a9485"/>
          <div style={{ flex: 1, height: 1, background: 'var(--sage)' }}/>
        </div>

        <div style={{ background: 'var(--cream-card)', borderRadius: 16, overflow: 'hidden' }}>
          <ImagePlaceholder label="Cousins at the dock · 2006" style={{ width: '100%', height: 200 }}/>
          <div style={{ padding: 14 }}>
            <div style={{ fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500 }}>You and your cousins</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>Photo · July 2006 · Crystal Lake</div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 18, padding: 14,
        background: 'var(--sage-tint)', borderRadius: 14,
        borderLeft: '3px solid var(--sage)',
      }}>
        <div style={{
          fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--sage-deep)', fontWeight: 500,
        }}>The Clerk · reasoning</div>
        <div style={{
          fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--ink)',
          marginTop: 8, lineHeight: 1.45,
        }}>
          Both photos reference Crystal Lake. Dock geometry matches (long L-pier, single ladder, north-facing). Treeline and water tower confirm location.
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
        <button
          onClick={() => setVerdict('confirm')}
          style={{
            flex: 1, padding: '14px 0', borderRadius: 999, border: 'none', cursor: 'pointer',
            background: verdict === 'confirm' ? 'var(--sage)' : 'var(--sage-tint)',
            color: verdict === 'confirm' ? '#fdfaf5' : 'var(--sage-deep)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
          }}
        >
          Confirm
        </button>
        <button
          onClick={() => setVerdict('reject')}
          style={{
            flex: 1, padding: '14px 0', borderRadius: 999, border: '1px solid var(--line)',
            cursor: 'pointer', background: 'transparent',
            color: 'var(--ink-2)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
          }}
        >
          Reject
        </button>
        <button
          onClick={() => setVerdict('flag')}
          style={{
            flex: 1, padding: '14px 0', borderRadius: 999, border: '1px solid var(--line)',
            cursor: 'pointer', background: 'transparent',
            color: 'var(--ink-2)',
            fontFamily: 'var(--sans)', fontSize: 13, fontWeight: 500,
          }}
        >
          Flag
        </button>
      </div>
    </div>
  );
}

export default ConnectionDetail;
