import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Pill } from '../components/Pill.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';
import { Icon } from '../components/Icons.jsx';

export function CorrectReading({ onClose }) {
  const [name, setName] = useState('Mary Lou Carmichael');
  const [place, setPlace] = useState('Crystal Lake, Wisconsin');
  const [saved, setSaved] = useState(false);

  const Field = ({ label, value, onChange, hint }) => (
    <div>
      <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px', height: 52,
        borderRadius: 14, background: 'var(--cream-card)', border: '1px solid var(--line)',
      }}>
        <input value={value} onChange={e => onChange(e.target.value)}
          style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink)' }}/>
      </div>
      {hint && <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6 }}>{hint}</div>}
    </div>
  );

  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Back/>
        </button>
        <Eyebrow>Correct the reading</Eyebrow>
        <div style={{ width: 18 }}/>
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 12, alignItems: 'center' }}>
        <ImagePlaceholder label="Photo · 1968" style={{ width: 72, height: 90, borderRadius: 12, flexShrink: 0 }}/>
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 500, margin: 0, lineHeight: 1.2 }}>
            You know better<br/>than the machine.
          </h3>
          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>Your edits become ground truth.</div>
        </div>
      </div>

      <div style={{
        marginTop: 18, padding: 14, background: 'var(--cream-warm)', borderRadius: 14,
        borderLeft: '3px solid var(--muted-soft)',
      }}>
        <div style={{ fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500 }}>
          The Clerk guessed
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.45 }}>
          "A woman, mid-thirties, on a wooden dock at golden hour. Likely Mary Lou Carmichael — confidence 0.71."
        </div>
      </div>

      <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Field label="Who is this?" value={name} onChange={setName} hint="Links this face across all matching items."/>
        <Field label="Where" value={place} onChange={setPlace}/>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, marginBottom: 8 }}>
            Relationship to you
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Mother', 'Grandmother', 'Aunt', 'Friend', 'Add…'].map((r, i) => (
              <div key={r} className={`chip ${i === 1 ? 'chip-sage' : ''}`}>{r}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        marginTop: 20, padding: 14, borderRadius: 14, background: 'var(--sage-tint)',
        fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--sage-deep)', lineHeight: 1.45,
      }}>
        Confirming will correctly name her in 18 items across 1957–2014.
      </div>

      <div style={{ marginTop: 20 }}>
        <Pill variant="sage" onClick={() => { setSaved(true); setTimeout(onClose, 700); }}>
          {saved ? 'Saved ✓' : 'Save correction'}
        </Pill>
      </div>
    </div>
  );
}

export default CorrectReading;
