import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';
import { Icon } from '../../../components/Icons.jsx';

export function Slide9Living() {
  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 28px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Eyebrow>The living vault</Eyebrow>
        <h1 className="headline" style={{ margin: 0, fontSize: 46, lineHeight: 1.06 }}>
          The thread that<br/>holds <em>three<br/>generations.</em>
        </h1>
        <p className="body-copy" style={{ fontSize: 17, lineHeight: 1.5 }}>
          Memorial vaults preserve the past exactly as it was. Living vaults grow — every new memory connects to everything already there.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
          {[
            { badge: 'Memorial', color: 'var(--navy)', textColor: '#f5f2ee', badgeBg: 'rgba(245,242,238,0.12)', badgeColor: '#f5f2ee', desc: 'For preserving a life that was.' },
            { badge: 'Living', color: 'var(--cream-card)', textColor: 'var(--ink)', badgeBg: 'var(--sage-tint)', badgeColor: 'var(--sage-deep)', desc: 'For the story still being written.' },
          ].map((v, i) => (
            <div key={i} style={{
              background: v.color,
              borderRadius: 16,
              padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 14,
              border: '1.5px solid transparent',
              boxShadow: '0 1px 3px rgba(26,43,53,0.06)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14,
                background: v.badgeBg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon.Vault s={22} c={v.badgeColor} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--sans)', fontSize: 11, fontWeight: 500,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: v.badgeColor, marginBottom: 2,
                }}>{v.badge}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 14, color: v.textColor }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="body-copy" style={{ fontSize: 16, color: 'var(--muted)', fontStyle: 'italic', textAlign: 'center' }}>
          Swipe to set up your account →
        </p>
      </div>
    </div>
  );
}

export default Slide9Living;
