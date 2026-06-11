import React from 'react';

export const Icon = {
  Logo: ({ size = 36, color = '#1a2b35' }) => (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="10" r="3" fill={color} />
      <circle cx="9"  cy="24" r="3" fill={color} />
      <circle cx="27" cy="24" r="3" fill={color} />
      <path d="M18 13 L9 22 M18 13 L27 22 M11 25 H25" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.6"/>
    </svg>
  ),
  Photo: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2.5"/>
      <circle cx="12" cy="12" r="3.2"/>
      <path d="M8 5l1.5-2h5L16 5"/>
    </svg>
  ),
  Mic: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <rect x="9" y="3" width="6" height="12" rx="3"/>
      <path d="M5 11a7 7 0 0014 0M12 18v3M9 21h6"/>
    </svg>
  ),
  Doc: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z"/>
      <path d="M14 3v5h5M8 13h8M8 17h5"/>
    </svg>
  ),
  Mail: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  ),
  Scan: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <path d="M4 8V6a2 2 0 012-2h2M16 4h2a2 2 0 012 2v2M20 16v2a2 2 0 01-2 2h-2M8 20H6a2 2 0 01-2-2v-2M4 12h16"/>
    </svg>
  ),
  Pen: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 4l6 6-11 11H3v-6L14 4z"/>
      <path d="M13 5l6 6"/>
    </svg>
  ),
  Search: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinecap="round">
      <circle cx="11" cy="11" r="7"/>
      <path d="M20 20l-3.5-3.5"/>
    </svg>
  ),
  Home: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9z"/>
    </svg>
  ),
  Vault: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <path d="M5 4h14l-1 16H6L5 4z"/>
      <path d="M5 8h14M9 12h6M10 16h4"/>
    </svg>
  ),
  Settings: ({ s = 22, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.6" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M5 5l2 2M17 17l2 2M2 12h3M19 12h3M5 19l2-2M17 7l2-2"/>
    </svg>
  ),
  Plus: ({ s = 24, c = '#fdfaf5' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Check: ({ s = 14, c = '#fdfaf5' }) => (
    <svg width={s} height={s} viewBox="0 0 14 14" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7l3 3 5-6"/>
    </svg>
  ),
  ArrowRight: ({ s = 16, c = '#fdfaf5' }) => (
    <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 8h10M9 4l4 4-4 4"/>
    </svg>
  ),
  Close: ({ s = 22, c = '#1a2b35' }) => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round">
      <path d="M5 5l12 12M17 5L5 17"/>
    </svg>
  ),
  Back: ({ s = 18, c = '#1a2b35' }) => (
    <svg width={s} height={s} viewBox="0 0 18 18" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 3L5 9l6 6"/>
    </svg>
  ),
  Tree: ({ s = 18, c = '#5a665e' }) => (
    <svg width={s} height={s} viewBox="0 0 22 22" fill="none" stroke={c} strokeWidth="1.4">
      <circle cx="11" cy="4" r="2"/>
      <circle cx="5"  cy="14" r="2"/>
      <circle cx="17" cy="14" r="2"/>
      <circle cx="11" cy="19" r="1.4"/>
      <path d="M11 6v3M9.5 7.5L6 12.5M12.5 7.5L16 12.5M6.5 15.5L10 18.2M15.5 15.5L12 18.2"/>
    </svg>
  ),
};

export default Icon;
