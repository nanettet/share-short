import React, { useState } from 'react';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { Icon } from '../../components/Icons.jsx';

export function TabSettings({ onRestart, goTo }) {
  const [aiPersona, setAiPersona] = useState('clerk');
  const [notifs, setNotifs] = useState(false);

  const Section = ({ title, children }) => (
    <div>
      <Eyebrow style={{ marginLeft: 6 }}>{title}</Eyebrow>
      <div style={{
        background: 'var(--cream-card)', borderRadius: 16, marginTop: 10,
        boxShadow: '0 1px 2px rgba(26, 43, 53, 0.04)', overflow: 'hidden',
      }}>{children}</div>
    </div>
  );

  const Row = ({ title, sub, trailing, last, onClick }) => (
    <div onClick={onClick} style={{
      padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12,
      borderBottom: last ? 'none' : '0.5px solid var(--line)',
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, color: 'var(--ink)' }}>{title}</div>
        {sub && <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>}
      </div>
      {trailing}
    </div>
  );

  const Toggle = ({ on, onChange }) => (
    <button
      onClick={() => onChange(!on)}
      style={{
        width: 44, height: 26, borderRadius: 999,
        background: on ? 'var(--sage)' : '#d4cfc4',
        border: 'none', cursor: 'pointer', position: 'relative',
        transition: 'background 0.18s',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 3, left: on ? 21 : 3,
        width: 20, height: 20, borderRadius: 999, background: '#fff',
        transition: 'left 0.18s',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      }}/>
    </button>
  );

  return (
    <div style={{ padding: '14px 16px 100px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div style={{ paddingTop: 8, paddingLeft: 8 }}>
        <Eyebrow>Settings</Eyebrow>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 500, margin: '8px 0 0' }}>
          Your account.
        </h2>
      </div>

      <Section title="Profile">
        <Row
          title="Eliza Carmichael"
          sub="eliza@familyarchive.org"
          trailing={
            <div style={{
              width: 40, height: 40, borderRadius: 999, background: 'var(--sage-soft)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)',
            }}>E</div>
          }
          last
        />
      </Section>

      <Section title="Vaults">
        <Row title="Mom's Vault" sub="Memorial · 1,247 items" trailing={<Icon.ArrowRight c="#8a857d"/>}/>
        <Row title="Our Family" sub="Living · 412 items" trailing={<Icon.ArrowRight c="#8a857d"/>}/>
        <Row title="Add new vault" sub="Memorial or living" trailing={<Icon.Plus s={18} c="#8a857d"/>} onClick={() => goTo && goTo('createVault')} last/>
      </Section>

      <Section title="Data sources">
        <Row title="Apple Photos" sub="Connected · last sync 2h ago" trailing={
          <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--sage)' }}/>
        }/>
        <Row title="Voice Memos" sub="Connected" trailing={
          <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--sage)' }}/>
        }/>
        <Row title="Email · Gmail" sub="Connected" trailing={
          <div style={{ width: 8, height: 8, borderRadius: 50, background: 'var(--sage)' }}/>
        }/>
        <Row title="Manage sources" trailing={<Icon.ArrowRight c="#8a857d"/>} onClick={() => goTo && goTo('manageSources')} last/>
      </Section>

      <Section title="AI voice">
        <div style={{ padding: 14 }}>
          <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 10 }}>
            Choose how ShareThreads addresses each vault.
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {[
              { id: 'clerk', label: 'The Clerk', sub: 'Describes & connects. Never interprets.' },
              { id: 'collaborator', label: 'The Collaborator', sub: 'Surfaces stories, proposes projects.' },
            ].map(opt => (
              <div
                key={opt.id}
                onClick={() => setAiPersona(opt.id)}
                style={{
                  flex: 1, padding: 12, borderRadius: 12,
                  background: aiPersona === opt.id ? 'var(--sage-tint)' : 'var(--cream-warm)',
                  border: aiPersona === opt.id ? '1.5px solid var(--sage)' : '1.5px solid transparent',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  fontFamily: 'var(--serif)', fontSize: 15, fontWeight: 500,
                  color: aiPersona === opt.id ? 'var(--sage-deep)' : 'var(--ink)',
                }}>
                  {opt.label}
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 4, lineHeight: 1.3 }}>
                  {opt.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Notifications">
        <Row
          title="Discovery prompts"
          sub="Stories, not pings. Off by default."
          trailing={<Toggle on={notifs} onChange={setNotifs}/>}
          last
        />
      </Section>

      <Section title="Privacy & security">
        <Row title="Encryption" sub="End-to-end" trailing={<Icon.ArrowRight c="#8a857d"/>}/>
        <Row title="Data export" sub="Download everything" trailing={<Icon.ArrowRight c="#8a857d"/>}/>
        <Row title="Sharing & inheritance" trailing={<Icon.ArrowRight c="#8a857d"/>} onClick={() => goTo && goTo('sharing')} last/>
      </Section>

      <Section title="Prototype">
        <div
          onClick={onRestart}
          style={{
            padding: '16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, color: 'var(--sage-deep)', fontWeight: 500 }}>Restart from the beginning</div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Returns to splash · resets onboarding</div>
          </div>
          <Icon.ArrowRight c="#7a9485"/>
        </div>
      </Section>

      <div style={{
        textAlign: 'center', fontSize: 11, color: 'var(--muted)', letterSpacing: '0.02em',
        marginTop: 4,
      }}>
        ShareThreads v1.0 · Your family's data never trains any model.
      </div>
    </div>
  );
}

export default TabSettings;
