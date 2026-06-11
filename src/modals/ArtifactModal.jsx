import React from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Pill } from '../components/Pill.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';

export function ArtifactModal({ onClose, onBuild }) {
  return (
    <div style={{ padding: '20px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
        <div style={{ width: 36, height: 4, borderRadius: 999, background: 'var(--muted-soft)' }}/>
      </div>

      <Eyebrow>Make something</Eyebrow>
      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 500, margin: '8px 0 18px' }}>
        The Cabin Book.
      </h3>

      <div style={{
        background: 'var(--cream-card)', borderRadius: 14, padding: 16,
        display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.5 }}>
          What ShareThreads found:
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {[
            { n: 23, l: 'photos' },
            { n: 2,  l: 'voice recordings' },
            { n: 4,  l: 'journal mentions' },
            { n: 3,  l: 'summers' },
          ].map(f => (
            <div key={f.l}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, color: 'var(--ink)' }}>{f.n}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)' }}>{f.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[1, 2, 3, 4].map(i => (
            <ImagePlaceholder key={i} label={`Cabin ${i}`} style={{ flex: 1, height: 68, borderRadius: 8 }}/>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: 14,
        background: 'var(--cream-card)', borderRadius: 14, padding: 16,
        opacity: 0.7, position: 'relative',
      }}>
        <div className="badge badge-coming" style={{ position: 'absolute', top: 12, right: 12 }}>
          Coming soon
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 16, fontWeight: 500, marginBottom: 8 }}>
          Preview
        </div>
        <ImagePlaceholder label="Curated story page" style={{ width: '100%', height: 100, borderRadius: 10 }}/>
        <div style={{ marginTop: 10, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 12, color: 'var(--ink-2)' }}>
          "She taught all the cousins to swim, off the long dock…"
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 12, fontSize: 11, color: 'var(--muted)' }}>
          <span>Preview</span><span>·</span><span>Edit</span><span>·</span><span>Share</span>
        </div>
      </div>

      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Pill variant="sage" onClick={onBuild || onClose}>Start building this</Pill>
        <Pill variant="ghost" onClick={onClose}>Not now</Pill>
      </div>
    </div>
  );
}

export default ArtifactModal;
