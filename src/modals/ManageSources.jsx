import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Icon } from '../components/Icons.jsx';

export function ManageSources({ onClose }) {
  const [sources, setSources] = useState([
    { id: 'photos', icon: Icon.Photo, title: 'Apple Photos', sub: '1,247 items · synced 2h ago', on: true },
    { id: 'voice',  icon: Icon.Mic,   title: 'Voice Memos', sub: '14 recordings · synced 2h ago', on: true },
    { id: 'gmail',  icon: Icon.Mail,  title: 'Gmail', sub: 'Attachments only · synced 1d ago', on: true },
    { id: 'files',  icon: Icon.Doc,   title: 'Files & Folders', sub: '3 folders', on: true },
    { id: 'scan',   icon: Icon.Scan,  title: 'Scanner', sub: 'On-demand', on: false },
  ]);
  const available = [
    { id: 'drive', icon: Icon.Doc, title: 'Google Drive' },
    { id: 'icloud', icon: Icon.Photo, title: 'iCloud Drive' },
    { id: 'outlook', icon: Icon.Mail, title: 'Outlook' },
  ];
  const toggle = (id) => setSources(s => s.map(x => x.id === id ? { ...x, on: !x.on } : x));

  const Toggle = ({ on, onClick }) => (
    <button onClick={onClick} style={{
      width: 44, height: 26, borderRadius: 999, background: on ? 'var(--sage)' : '#d4cfc4',
      border: 'none', cursor: 'pointer', position: 'relative', transition: 'background 0.18s', flexShrink: 0,
    }}>
      <div style={{ position: 'absolute', top: 3, left: on ? 21 : 3, width: 20, height: 20, borderRadius: 999, background: '#fff', transition: 'left 0.18s', boxShadow: '0 1px 2px rgba(0,0,0,0.2)' }}/>
    </button>
  );

  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Back/>
        </button>
        <Eyebrow>Sources</Eyebrow>
        <div style={{ width: 18 }}/>
      </div>

      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '14px 0 4px' }}>
        Where memories flow in.
      </h3>
      <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
        Toggle a source off and ShareThreads stops reading it — nothing already indexed is lost.
      </p>

      <Eyebrow style={{ display: 'block' }}>Connected</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
        {sources.map(s => {
          const C = s.icon;
          return (
            <div key={s.id} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderRadius: 16, background: 'var(--cream-card)', border: '1px solid var(--line)',
            }}>
              <div className="row-icon"><C s={20} c="#5a665e"/></div>
              <div style={{ flex: 1 }}>
                <div className="row-title" style={{ fontSize: 14 }}>{s.title}</div>
                <div className="row-sub" style={{ fontSize: 11 }}>{s.sub}</div>
              </div>
              <Toggle on={s.on} onClick={() => toggle(s.id)}/>
            </div>
          );
        })}
      </div>

      <Eyebrow style={{ display: 'block', marginTop: 24 }}>Add a source</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
        {available.map(s => {
          const C = s.icon;
          return (
            <div key={s.id} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px',
              borderRadius: 16, background: 'var(--cream-warm)', cursor: 'pointer',
            }}>
              <div className="row-icon"><C s={20} c="#5a665e"/></div>
              <div style={{ flex: 1 }} className="row-title">{s.title}</div>
              <Icon.Plus s={18} c="#7a9485"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ManageSources;
