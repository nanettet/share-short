import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Pill } from '../components/Pill.jsx';
import { Waveform } from '../components/Waveform.jsx';
import { ImagePlaceholder } from '../components/ImagePlaceholder.jsx';
import { Icon } from '../components/Icons.jsx';

export function ArtifactBuilder({ onClose }) {
  const [step, setStep] = useState(0);
  const [format, setFormat] = useState('book');
  const [pages, setPages] = useState([
    { id: 1, kind: 'cover', label: 'Cover', title: 'The Cabin Book' },
    { id: 2, kind: 'photo', label: 'Cabin 1' },
    { id: 3, kind: 'text',  label: 'Journal, 1974' },
    { id: 4, kind: 'photo', label: 'Cabin 2' },
    { id: 5, kind: 'audio', label: 'Teaching to swim' },
    { id: 6, kind: 'photo', label: 'Cabin 3' },
  ]);
  const [voice, setVoice] = useState('warm');

  const formats = [
    { id: 'book',  title: 'Memory Book', sub: 'Printable hardcover · 24 pp', icon: Icon.Doc },
    { id: 'film',  title: 'Short Film',  sub: 'Photos + her voice · 3 min', icon: Icon.Photo },
    { id: 'site',  title: 'Private Page', sub: 'A link for the family', icon: Icon.Vault },
  ];

  const voices = [
    { id: 'warm',  label: 'Warm & personal', sub: '"She taught all the cousins to swim…"' },
    { id: 'plain', label: 'Plain & factual', sub: '"Crystal Lake, summers 2004–2006."' },
    { id: 'hers',  label: 'In her words',    sub: 'Stitched from her own journals & memos' },
  ];

  const Head = ({ title }) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 20px', borderBottom: '1px solid var(--line)', position: 'sticky', top: 0,
      background: 'var(--cream)', zIndex: 5,
    }}>
      <button onClick={step === 0 ? onClose : () => setStep(step - 1)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
        {step === 0 ? <Icon.Close/> : <Icon.Back/>}
      </button>
      <div style={{ textAlign: 'center' }}>
        <Eyebrow>{title}</Eyebrow>
      </div>
      <div style={{ fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--sans)' }}>
        {step < 3 ? `${step + 1}/3` : ''}
      </div>
    </div>
  );

  const PageThumb = ({ p, large }) => {
    const h = large ? 150 : 84;
    if (p.kind === 'cover') {
      return (
        <div style={{
          height: h, borderRadius: 10, background: 'var(--navy)', color: '#f5f2ee',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: 10, textAlign: 'center', gap: 6,
        }}>
          <Icon.Logo size={large ? 28 : 20} color="var(--sage)"/>
          <div style={{ fontFamily: 'var(--serif)', fontSize: large ? 18 : 12, fontWeight: 500, lineHeight: 1.2 }}>{p.title}</div>
        </div>
      );
    }
    if (p.kind === 'photo') return <ImagePlaceholder label={p.label} style={{ height: h, borderRadius: 10 }}/>;
    if (p.kind === 'audio') return (
      <div style={{ height: h, borderRadius: 10, background: 'var(--navy-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Waveform bars={large ? 20 : 10}/>
      </div>
    );
    return (
      <div style={{ height: h, borderRadius: 10, background: 'var(--cream-warm)', padding: 12, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: large ? 13 : 10, color: 'var(--ink-2)', lineHeight: 1.35, overflow: 'hidden' }}>
        "The lake was so cold this morning. Mama swam out past the dock…"
      </div>
    );
  };

  const removePage = (id) => setPages(ps => ps.filter(p => p.id !== id));

  return (
    <div style={{ minHeight: 480 }}>
      {step === 0 && (
        <div>
          <Head title="Make something"/>
          <div style={{ padding: '18px 22px 28px' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, margin: '4px 0 4px' }}>
              The Cabin Book.
            </h3>
            <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
              ShareThreads gathered <strong style={{ color: 'var(--ink)' }}>23 photos</strong>, 2 voice memos and 4 journal mentions across 3 summers. Choose a shape.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {formats.map(f => {
                const C = f.icon;
                const sel = format === f.id;
                return (
                  <div key={f.id} onClick={() => setFormat(f.id)} style={{
                    display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 16,
                    background: sel ? 'var(--sage-tint)' : 'var(--cream-card)',
                    border: sel ? '1.5px solid var(--sage)' : '1.5px solid var(--line)', cursor: 'pointer',
                  }}>
                    <div className="row-icon"><C s={20} c="#5a665e"/></div>
                    <div style={{ flex: 1 }}>
                      <div className="row-title" style={{ fontSize: 15 }}>{f.title}</div>
                      <div className="row-sub" style={{ fontSize: 12 }}>{f.sub}</div>
                    </div>
                    <div className="row-check" style={{ background: sel ? 'var(--sage)' : 'transparent', borderColor: sel ? 'var(--sage)' : 'rgba(26,43,53,0.15)' }}>
                      {sel && <Icon.Check c="#fdfaf5"/>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 22 }}>
              <Pill variant="sage" onClick={() => setStep(1)}>Arrange the pages</Pill>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <Head title="Arrange"/>
          <div style={{ padding: '18px 22px 28px' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, margin: '0 0 4px' }}>
              {pages.length} pages, in order.
            </h3>
            <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
              ShareThreads drafted a sequence. Remove anything that doesn't belong.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {pages.map((p, i) => (
                <div key={p.id} style={{ position: 'relative' }}>
                  <PageThumb p={p}/>
                  <div style={{
                    position: 'absolute', top: 6, left: 6, width: 20, height: 20, borderRadius: 999,
                    background: 'rgba(26,43,53,0.7)', color: '#f5f2ee', fontSize: 10,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--sans)',
                  }}>{i + 1}</div>
                  {p.kind !== 'cover' && (
                    <button onClick={() => removePage(p.id)} style={{
                      position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: 999,
                      background: 'rgba(26,43,53,0.7)', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon.Close s={12} c="#f5f2ee"/>
                    </button>
                  )}
                  <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 5, fontFamily: 'var(--sans)' }}>{p.label}</div>
                </div>
              ))}
              <div style={{
                height: 84, borderRadius: 10, border: '1.5px dashed var(--sage)', background: 'var(--cream-warm)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--sage-deep)',
              }}>
                <Icon.Plus s={20} c="#7a9485"/>
              </div>
            </div>

            <div style={{ marginTop: 22 }}>
              <Pill variant="sage" onClick={() => setStep(2)}>Choose the voice</Pill>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <Head title="Voice"/>
          <div style={{ padding: '18px 22px 28px' }}>
            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 500, margin: '0 0 4px' }}>
              How should it speak?
            </h3>
            <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
              The captions and narration take this tone. You can edit every line after.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {voices.map(v => {
                const sel = voice === v.id;
                return (
                  <div key={v.id} onClick={() => setVoice(v.id)} style={{
                    padding: 16, borderRadius: 16, cursor: 'pointer',
                    background: sel ? 'var(--sage-tint)' : 'var(--cream-card)',
                    border: sel ? '1.5px solid var(--sage)' : '1.5px solid var(--line)',
                  }}>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500, color: sel ? 'var(--sage-deep)' : 'var(--ink)' }}>
                      {v.label}
                    </div>
                    <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-2)', marginTop: 6, lineHeight: 1.4 }}>
                      {v.sub}
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: 22 }}>
              <Pill variant="sage" onClick={() => setStep(3)}>Generate preview</Pill>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <Head title="Preview"/>
          <div style={{ padding: '18px 22px 28px' }}>
            <div style={{
              background: 'var(--cream-card)', borderRadius: 18, padding: 16,
              boxShadow: '0 2px 12px rgba(26,43,53,0.08)',
            }}>
              <PageThumb p={pages[0]} large/>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
                {pages.slice(1, 5).map(p => <PageThumb key={p.id} p={p}/>)}
              </div>
              <div style={{
                marginTop: 12, fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14,
                color: 'var(--ink)', lineHeight: 1.5, textAlign: 'center',
              }}>
                "She taught all the cousins to swim, off the long dock — three summers, one lake, every one of us."
              </div>
            </div>

            <div style={{
              marginTop: 16, display: 'flex', alignItems: 'center', gap: 10,
              padding: 14, borderRadius: 14, background: 'var(--sage-tint)',
            }}>
              <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--sage-deep)' }}/>
              <div style={{ fontSize: 13, color: 'var(--sage-deep)', fontFamily: 'var(--sans)' }}>
                Draft ready · {pages.length} pages · {voice === 'hers' ? 'in her words' : voice === 'warm' ? 'warm tone' : 'plain tone'}
              </div>
            </div>

            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Pill variant="sage" onClick={onClose}>Save to vault & share</Pill>
              <Pill variant="ghost" onClick={() => setStep(1)}>Keep editing</Pill>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtifactBuilder;
