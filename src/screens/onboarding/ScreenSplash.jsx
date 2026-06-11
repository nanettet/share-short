import React from 'react';
import { Phone } from '../../components/Phone.jsx';
import { Pill } from '../../components/Pill.jsx';
import { Icon } from '../../components/Icons.jsx';

export function ScreenSplash({ onNext }) {
  return (
    <Phone dark dataLabel="01 Splash">
      <div className="screen-enter" style={{
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px 80px',
      }}>
        <div/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
          <div style={{
            width: 96, height: 96, borderRadius: 22,
            background: 'linear-gradient(160deg, #b6c7b1, #7a9485)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 80px rgba(158, 184, 159, 0.35), 0 0 0 0.5px rgba(255, 255, 255, 0.18)',
            position: 'relative',
          }}>
            <Icon.Logo size={48} color="#f5f2ee" />
          </div>
          <div style={{ textAlign: 'center', marginTop: 8 }}>
            <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 46, fontWeight: 600 }}>
              ShareThreads
            </h1>
            <p className="body-copy body-copy-dark" style={{
              marginTop: 8, fontSize: 15, fontStyle: 'italic',
              fontFamily: 'var(--serif)', letterSpacing: '0.01em',
            }}>
              The stories already latent in your life.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, width: '100%' }}>
          <Pill variant="sage" glow onClick={onNext} style={{ width: 240 }}>
            Begin
          </Pill>
          <div style={{
            fontFamily: 'var(--sans)', fontSize: 12, color: 'rgba(245, 242, 238, 0.4)',
            letterSpacing: '0.02em',
          }}>
            For families who don't want to forget.
          </div>
        </div>
      </div>
    </Phone>
  );
}

export default ScreenSplash;
