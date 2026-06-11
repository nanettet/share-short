import React from 'react';

export const MobileCtx = React.createContext(false);

export function StatusBar({ dark = false }) {
  const c = dark ? '#f5f2ee' : '#1a2b35';
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '18px 32px 0', height: 54, pointerEvents: 'none',
    }}>
      <div style={{ fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600, color: c }}>9:41</div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center', opacity: 0.9 }}>
        <svg width="16" height="11" viewBox="0 0 16 11" fill={c}>
          <circle cx="2" cy="9" r="1.4"/><circle cx="7" cy="9" r="1.4"/><circle cx="12" cy="9" r="1.4"/>
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11" fill="none" stroke={c} strokeWidth="1">
          <rect x="0.5" y="0.5" width="20" height="10" rx="2.5"/>
          <rect x="2" y="2" width="17" height="7" rx="1.2" fill={c} stroke="none"/>
          <rect x="21.5" y="3.5" width="1.5" height="4" rx="0.5" fill={c} stroke="none"/>
        </svg>
      </div>
    </div>
  );
}

export function Phone({ children, dark = false, scroll = true, dataLabel }) {
  const mobile = React.useContext(MobileCtx);

  if (mobile) {
    return (
      <div
        data-screen-label={dataLabel}
        style={{
          position: 'fixed', inset: 0,
          width: '100vw', height: '100dvh', overflow: 'hidden',
          background: dark ? 'var(--navy)' : 'var(--cream)',
          fontFamily: 'var(--sans)',
        }}
      >
        <div
          className={scroll ? 'scroll-y no-scrollbar' : ''}
          style={{
            height: '100%', width: '100%',
            paddingTop: 'env(safe-area-inset-top, 8px)',
          }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      data-screen-label={dataLabel}
      style={{
        width: 390, height: 844, borderRadius: 52, overflow: 'hidden',
        position: 'relative',
        background: dark ? 'var(--navy)' : 'var(--cream)',
        boxShadow: '0 30px 90px rgba(26, 43, 53, 0.22), 0 0 0 10px #0a0d10, 0 0 0 11px #2a3138',
        fontFamily: 'var(--sans)',
      }}
    >
      <StatusBar dark={dark} />
      <div
        className={scroll ? 'scroll-y no-scrollbar' : ''}
        style={{
          height: '100%', width: '100%',
          paddingTop: 54,
        }}
      >
        {children}
      </div>
      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: 8, left: 0, right: 0,
        display: 'flex', justifyContent: 'center', pointerEvents: 'none', zIndex: 60,
      }}>
        <div style={{
          width: 134, height: 5, borderRadius: 999,
          background: dark ? 'rgba(245, 242, 238, 0.5)' : 'rgba(26, 43, 53, 0.35)',
        }}/>
      </div>
    </div>
  );
}

export default Phone;
