import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';
import { Icon } from '../../../components/Icons.jsx';
import { Waveform } from '../../../components/Waveform.jsx';

export function Slide8Capture() {
  const modes = [
    { id: 'voice', label: 'Voice', icon: <Icon.Mic c="#5a665e" /> },
    { id: 'photo', label: 'Photo', icon: <Icon.Photo c="#5a665e" /> },
    { id: 'scan',  label: 'Scan',  icon: <Icon.Scan c="#5a665e" /> },
    { id: 'upload',label: 'Upload',icon: <Icon.Doc c="#5a665e" /> },
  ];

  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 28px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Eyebrow>Capture anything</Eyebrow>
        <h1 className="headline" style={{ margin: 0, fontSize: 46, lineHeight: 1.06 }}>
          Today goes in<br/>as easily as<br/><em>yesterday.</em>
        </h1>

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 4,
        }}>
          {modes.map((m, i) => (
            <div key={m.id} style={{
              background: i === 0 ? 'var(--sage-tint)' : 'var(--cream-card)',
              border: i === 0 ? '1.5px solid var(--sage)' : '1.5px solid transparent',
              borderRadius: 16,
              padding: '16px 12px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
              boxShadow: '0 1px 2px rgba(26, 43, 53, 0.04)',
            }}>
              <div style={{ width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {m.icon}
              </div>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--ink)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        <div className="card" style={{ padding: 14 }}>
          <Waveform bars={24} />
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 14, fontStyle: 'italic',
            color: '#3d4a52', lineHeight: 1.4, textAlign: 'center', marginTop: 8,
          }}>
            "…and that was the summer she taught all the cousins to swim, off the long dock."
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 6, marginTop: 10,
          }}>
            <div className="chip chip-sage" style={{ fontSize: 12, padding: '5px 10px' }}>
              <span style={{ width: 5, height: 5, borderRadius: 50, background: 'var(--sage-deep)', display: 'inline-block', marginRight: 4 }}/>
              Auto-connected to 4 items
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide8Capture;
