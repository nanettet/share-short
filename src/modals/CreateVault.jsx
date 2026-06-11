import React, { useState } from 'react';
import { Eyebrow } from '../components/Eyebrow.jsx';
import { Pill } from '../components/Pill.jsx';
import { Icon } from '../components/Icons.jsx';

export function CreateVault({ onClose, onCreated }) {
  const [step, setStep] = useState(0);
  const [type, setType] = useState(null);
  const [name, setName] = useState('');

  const ModalHead = ({ title }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
      <button onClick={step === 0 ? onClose : () => setStep(step - 1)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
        {step === 0 ? <Icon.Close/> : <Icon.Back/>}
      </button>
      <Eyebrow>{title}</Eyebrow>
      <div style={{ width: 22 }}/>
    </div>
  );

  if (step === 2) {
    return (
      <div style={{ padding: '26px 24px 30px', textAlign: 'center' }}>
        <div style={{
          width: 84, height: 84, borderRadius: 24, margin: '8px auto 0',
          background: type === 'memorial' ? 'var(--navy)' : 'linear-gradient(160deg, #b6c7b1, #7a9485)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 50px rgba(158, 184, 159, 0.3)',
        }}>
          <Icon.Vault s={38} c="#f5f2ee"/>
        </div>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, margin: '22px 0 0' }}>
          "{name || (type === 'memorial' ? 'New Memorial' : 'New Living')}" is ready.
        </h3>
        <p className="body-copy" style={{ fontSize: 14, marginTop: 10 }}>
          {type === 'memorial'
            ? 'A place to preserve a life. Bring in what exists — ShareThreads will read it carefully.'
            : "A place to shape what's next. Add to it together, anytime."}
        </p>
        <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Pill variant="sage" onClick={onCreated}>Add your first memories</Pill>
          <Pill variant="ghost" onClick={onClose}>Later</Pill>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '18px 24px 30px' }}>
      <ModalHead title={step === 0 ? 'New vault' : 'Name it'}/>

      {step === 0 && (
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '14px 0 6px' }}>
            What kind of vault?
          </h3>
          <p className="body-copy" style={{ fontSize: 13, marginBottom: 18 }}>
            You can change the voice and members later.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { id: 'memorial', name: 'Memorial', tagline: 'Preserve a life that was.', detail: 'The Clerk describes & connects — never interprets.', dark: true },
              { id: 'living',   name: 'Living',   tagline: 'Shape the life that is.',   detail: 'The Collaborator surfaces stories & proposes projects.', dark: false },
            ].map(opt => {
              const sel = type === opt.id;
              return (
                <div key={opt.id} onClick={() => setType(opt.id)}
                  style={{
                    padding: 18, borderRadius: 18, cursor: 'pointer',
                    background: opt.dark ? 'var(--navy)' : 'var(--cream-card)',
                    color: opt.dark ? '#f5f2ee' : 'var(--ink)',
                    border: sel ? '2px solid var(--sage)' : `2px solid ${opt.dark ? 'var(--navy)' : 'var(--line)'}`,
                    transition: 'all 0.18s ease',
                  }}>
                  <div className={`badge ${opt.dark ? 'badge-memorial' : 'badge-living'}`}
                    style={{ background: opt.dark ? 'rgba(245,242,238,0.12)' : 'var(--sage-tint)', color: opt.dark ? '#f5f2ee' : 'var(--sage-deep)' }}>
                    {opt.name}
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 21, fontWeight: 500, marginTop: 10 }}>
                    {opt.tagline}
                  </div>
                  <div style={{ fontSize: 12, marginTop: 6, color: opt.dark ? 'rgba(245,242,238,0.55)' : 'var(--muted)', lineHeight: 1.4 }}>
                    {opt.detail}
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 22 }}>
            <Pill variant="sage" onClick={() => setStep(1)} disabled={!type}>
              {type ? 'Continue' : 'Pick a type'}
            </Pill>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 500, margin: '14px 0 18px' }}>
            Give it a name.
          </h3>

          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px', height: 56,
            borderRadius: 16, background: 'var(--cream-card)', border: '1px solid var(--line)',
          }}>
            <input
              autoFocus
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder={type === 'memorial' ? "Mom's Vault" : 'Our Family'}
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)',
              }}
            />
          </div>

          <Eyebrow style={{ marginTop: 24, display: 'block' }}>Suggestions</Eyebrow>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
            {(type === 'memorial'
              ? ["Mom's Vault", 'Grandpa Joe', 'The Carmichaels', 'In memory of Lou']
              : ['Our Family', 'The Cabin', 'Kids & Cousins', '2026 onward']
            ).map(s => (
              <div key={s} className="chip" onClick={() => setName(s)}>{s}</div>
            ))}
          </div>

          <div style={{
            marginTop: 24, padding: 14, borderRadius: 14, background: 'var(--cream-warm)',
            fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.45,
          }}>
            {type === 'memorial'
              ? 'Memorial vaults are read-only at their core. The past, kept exactly as it was.'
              : 'Living vaults grow. Invite family, and everyone adds to the same thread.'}
          </div>

          <div style={{ marginTop: 22 }}>
            <Pill variant="sage" onClick={() => setStep(2)}>Create vault</Pill>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateVault;
