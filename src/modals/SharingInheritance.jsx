import React from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Icon } from '../components/Icons.jsx';

export function SharingInheritance({ onClose }) {
  const members = [
    { initial: 'E', name: 'Eliza Carmichael', role: 'Keeper', you: true },
    { initial: 'J', name: 'James Carmichael', role: 'Contributor' },
    { initial: 'R', name: 'Ruth Okafor', role: 'Viewer' },
  ];

  return (
    <div style={{ padding: '16px 22px 30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon.Back/>
        </button>
        <Eyebrow>Sharing & inheritance</Eyebrow>
        <div style={{ width: 18 }}/>
      </div>

      <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '14px 0 4px' }}>
        Who holds the thread<br/><em>when you can't?</em>
      </h3>
      <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
        Decide who can see, add to, and one day inherit this vault.
      </p>

      <Eyebrow style={{ display: 'block' }}>People</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
        {members.map(m => (
          <div key={m.name} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
            borderRadius: 16, background: 'var(--cream-card)', border: '1px solid var(--line)',
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 999, background: 'var(--sage-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)',
            }}>{m.initial}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>
                {m.name}{m.you && <span style={{ color: 'var(--muted)', fontWeight: 400 }}> · you</span>}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{m.role}</div>
            </div>
            <Icon.ArrowRight c="#8a857d"/>
          </div>
        ))}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
          borderRadius: 16, background: 'var(--cream-warm)', cursor: 'pointer',
        }}>
          <div style={{
            width: 40, height: 40, borderRadius: 999, border: '1.5px dashed var(--sage)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}><Icon.Plus s={18} c="#7a9485"/></div>
          <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500, color: 'var(--sage-deep)' }}>Invite someone</div>
        </div>
      </div>

      <Eyebrow style={{ display: 'block', marginTop: 24 }}>Legacy plan</Eyebrow>
      <div style={{
        marginTop: 12, background: 'var(--navy)', borderRadius: 18, padding: 18, color: '#f5f2ee',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, lineHeight: 1.3 }}>
          When the time comes, <em style={{ color: 'var(--sage)' }}>James</em> becomes Keeper.
        </div>
        <div style={{ fontSize: 12, color: 'rgba(245,242,238,0.55)', marginTop: 10, lineHeight: 1.5 }}>
          Transfer triggers after 12 months of inactivity, or manually. Everything stays encrypted; only the Keeper key changes hands.
        </div>
        <button style={{
          marginTop: 14, background: 'rgba(245,242,238,0.1)', border: '1px solid rgba(245,242,238,0.2)',
          color: '#f5f2ee', fontFamily: 'var(--sans)', fontSize: 13, padding: '10px 16px',
          borderRadius: 999, cursor: 'pointer',
        }}>
          Edit legacy plan
        </button>
      </div>
    </div>
  );
}

export default SharingInheritance;
