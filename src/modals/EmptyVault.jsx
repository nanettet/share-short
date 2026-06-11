import React from 'react';
import { Pill } from '../components/Pill.jsx';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Icon } from '../components/Icons.jsx';

export function EmptyVault({ onClose, onAdd }) {
  const starters = [
    { icon: Icon.Photo, label: 'Import photos', sub: 'From your library' },
    { icon: Icon.Mic,   label: 'Record a voice', sub: 'A story, a memory' },
    { icon: Icon.Scan,  label: 'Scan a document', sub: 'Letters, journals' },
    { icon: Icon.Doc,   label: 'Upload files', sub: 'PDFs, folders' },
  ];

  return (
    <div style={{ padding: '18px 24px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Close/>
        </button>
        <Eyebrow>The Cabin · empty</Eyebrow>
        <div style={{ width: 22 }}/>
      </div>

      <div style={{ textAlign: 'center', padding: '24px 0 8px' }}>
        <div style={{
          width: 96, height: 96, borderRadius: 28, margin: '0 auto',
          background: 'var(--cream-warm)', border: '1.5px dashed var(--sage)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon.Vault s={42} c="#9eb89f"/>
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '20px 0 0' }}>
          Nothing here yet —<br/><em>and that's the start.</em>
        </h3>
        <p className="body-copy" style={{ fontSize: 14, marginTop: 10, maxWidth: 280, marginLeft: 'auto', marginRight: 'auto' }}>
          Add a few things. The moment there are two, ShareThreads begins finding the threads between them.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 18 }}>
        {starters.map(s => {
          const C = s.icon;
          return (
            <div key={s.label} onClick={onAdd} style={{
              background: 'var(--cream-card)', borderRadius: 16, padding: 16, cursor: 'pointer',
              border: '1px solid var(--line)', display: 'flex', flexDirection: 'column', gap: 10,
            }}>
              <C s={22} c="#7a9485"/>
              <div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500, color: 'var(--ink)' }}>{s.label}</div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{s.sub}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 18 }}>
        <Pill variant="sage" onClick={onAdd}>Add the first memory</Pill>
      </div>
    </div>
  );
}

export default EmptyVault;
