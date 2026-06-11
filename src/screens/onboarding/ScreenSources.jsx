import React, { useState } from 'react';
import { Phone } from '../../components/Phone.jsx';
import { Pill } from '../../components/Pill.jsx';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { Dots } from '../../components/Dots.jsx';
import { Icon } from '../../components/Icons.jsx';

export function ScreenSources({ onNext }) {
  const initial = [
    { id: 'photos',  icon: <Icon.Photo c="#5a665e" />, title: 'Photos & Videos', sub: 'Apple Photos library' },
    { id: 'voice',   icon: <Icon.Mic c="#5a665e" />,   title: 'Voice Memos',     sub: 'iPhone recordings' },
    { id: 'files',   icon: <Icon.Doc c="#5a665e" />,   title: 'Files & Documents', sub: 'Folders, PDFs' },
    { id: 'email',   icon: <Icon.Mail c="#5a665e" />,  title: 'Email',           sub: 'Gmail / Outlook' },
    { id: 'scan',    icon: <Icon.Scan c="#5a665e" />,  title: 'Scan',            sub: 'Physical documents, journals' },
  ];
  const [selected, setSelected] = useState({ photos: true, voice: true });
  const toggle = (id) => setSelected(s => ({ ...s, [id]: !s[id] }));
  const count = Object.values(selected).filter(Boolean).length;

  return (
    <Phone dataLabel="12 Sources">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '20px 28px 100px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <Dots count={3} active={1} />
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18, paddingTop: 24 }}>
          <Eyebrow>Your first action</Eyebrow>
          <h1 className="headline" style={{ margin: 0, fontSize: 40 }}>
            Bring in <em>what you already have.</em>
          </h1>
          <p className="body-copy" style={{ fontSize: 16, marginBottom: 4 }}>
            Select your sources. ShareThreads handles the rest.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {initial.map(s => (
              <div
                key={s.id}
                className={`row ${selected[s.id] ? 'selected' : ''}`}
                onClick={() => toggle(s.id)}
              >
                <div className="row-icon">{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <div className="row-title">{s.title}</div>
                  <div className="row-sub">{s.sub}</div>
                </div>
                <div className="row-check">
                  {selected[s.id] && <Icon.Check c="#fdfaf5" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Pill variant="sage" onClick={onNext} disabled={count === 0}>
          {count === 0 ? 'Select a source' : `Connect ${count} source${count > 1 ? 's' : ''}`}
        </Pill>
      </div>
    </Phone>
  );
}

export default ScreenSources;
