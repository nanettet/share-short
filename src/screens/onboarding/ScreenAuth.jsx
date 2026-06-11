import React, { useState } from 'react';
import { Phone } from '../../components/Phone.jsx';
import { Pill } from '../../components/Pill.jsx';
import { Dots } from '../../components/Dots.jsx';
import { Icon } from '../../components/Icons.jsx';

export function ScreenAuth({ onNext }) {
  const [mode, setMode] = useState('create'); // create | signin

  const providers = [
    { id: 'apple',  label: 'Continue with Apple',  glyph: '' },
    { id: 'google', label: 'Continue with Google', glyph: 'G' },
  ];

  return (
    <Phone dark dataLabel="11 Account">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: '24px 28px 80px',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8 }}>
          <Dots count={3} active={0} dark/>
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 22 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 18, alignSelf: 'flex-start',
            background: 'linear-gradient(160deg, #b6c7b1, #7a9485)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 40px rgba(158, 184, 159, 0.25)',
          }}>
            <Icon.Logo size={32} color="#f5f2ee"/>
          </div>

          <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 40 }}>
            {mode === 'create'
              ? <>Create the account<br/><em>that keeps it all.</em></>
              : <>Welcome back to<br/><em>your family's vault.</em></>}
          </h1>
          <p className="body-copy body-copy-dark" style={{ fontSize: 16, marginTop: -6 }}>
            One private account. Encrypted end-to-end. Your family's data never trains any model.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {providers.map(p => (
              <button
                key={p.id}
                onClick={onNext}
                style={{
                  height: 54, borderRadius: 999, border: '1px solid rgba(245, 242, 238, 0.16)',
                  background: 'rgba(245, 242, 238, 0.06)', color: '#f5f2ee',
                  fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 500, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                }}
              >
                <span style={{
                  width: 20, height: 20, borderRadius: 5, display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: 13,
                  background: p.id === 'apple' ? '#f5f2ee' : 'transparent',
                  color: p.id === 'apple' ? '#1a2b35' : '#f5f2ee',
                  border: p.id === 'google' ? '1px solid rgba(245,242,238,0.4)' : 'none',
                  fontWeight: 600,
                }}>{p.id === 'apple' ? '' : p.glyph}</span>
                {p.label}
              </button>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '6px 0' }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(245,242,238,0.12)' }}/>
              <span style={{ fontSize: 11, color: 'rgba(245,242,238,0.4)', letterSpacing: '0.04em' }}>or</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(245,242,238,0.12)' }}/>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '0 18px', height: 54,
              borderRadius: 999, background: 'rgba(245, 242, 238, 0.06)',
              border: '1px solid rgba(245, 242, 238, 0.12)',
            }}>
              <Icon.Mail s={18} c="rgba(245,242,238,0.55)"/>
              <input
                placeholder="you@family.org"
                style={{
                  flex: 1, border: 'none', outline: 'none', background: 'transparent',
                  fontFamily: 'var(--sans)', fontSize: 15, color: '#f5f2ee',
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Pill variant="sage" onClick={onNext}>
            {mode === 'create' ? 'Create account' : 'Sign in'}
          </Pill>
          <div style={{ textAlign: 'center', fontSize: 13, color: 'rgba(245,242,238,0.5)' }}>
            {mode === 'create' ? 'Already have an account? ' : 'New to ShareThreads? '}
            <span
              onClick={() => setMode(m => m === 'create' ? 'signin' : 'create')}
              style={{ color: 'var(--sage)', cursor: 'pointer', fontWeight: 500 }}
            >
              {mode === 'create' ? 'Sign in' : 'Create one'}
            </span>
          </div>
        </div>
      </div>
    </Phone>
  );
}

export default ScreenAuth;
