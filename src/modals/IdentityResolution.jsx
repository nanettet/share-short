import React from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Pill } from '../components/Pill.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';
import { Icon } from '../components/Icons.jsx';

export function IdentityResolution({ onClose }) {
  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Close/>
        </button>
        <Eyebrow>Identity</Eyebrow>
        <div style={{ width: 22 }}/>
      </div>

      <div style={{ marginTop: 18, textAlign: 'center' }}>
        <Eyebrow>Is this the same person?</Eyebrow>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '10px 0 0' }}>
          Name her, <em>and the engine lights up.</em>
        </h3>
      </div>

      <div style={{ marginTop: 22, display: 'flex', gap: 10 }}>
        <div style={{ flex: 1, background: 'var(--cream-card)', borderRadius: 16, overflow: 'hidden' }}>
          <ImagePlaceholder label="Photo · 1968" style={{ width: '100%', aspectRatio: '1', borderRadius: 0 }}/>
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>1968 · Crystal Lake</div>
            <div style={{ fontSize: 13, marginTop: 2, fontFamily: 'var(--sans)' }}>"Mary Lou C."</div>
          </div>
        </div>
        <div style={{ flex: 1, background: 'var(--cream-card)', borderRadius: 16, overflow: 'hidden' }}>
          <ImagePlaceholder label="Photo · 1991" style={{ width: '100%', aspectRatio: '1', borderRadius: 0 }}/>
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>1991 · Madison</div>
            <div style={{ fontSize: 13, marginTop: 2, fontFamily: 'var(--sans)' }}>"Lou Carmichael"</div>
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 18, padding: 14, borderRadius: 14,
        background: 'var(--cream-warm)',
        fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45,
        fontFamily: 'var(--serif)', fontStyle: 'italic',
      }}>
        Confirming would link 18 items across 1957–2014.
      </div>

      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <Pill variant="sage" onClick={onClose}>Confirm — same person</Pill>
        <Pill variant="ghost" onClick={onClose} style={{ background: 'var(--cream-warm)', color: 'var(--ink-2)' }}>
          Different person
        </Pill>
        <Pill variant="ghost" onClick={onClose}>Not sure yet</Pill>
      </div>
    </div>
  );
}

export default IdentityResolution;
