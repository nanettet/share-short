import React from 'react';
import { Icon } from './Icons.jsx';

export function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Icon.Home },
    { id: 'search', label: 'Search', icon: Icon.Search },
    { id: 'capture', label: 'Capture', center: true },
    { id: 'vault', label: 'Vault', icon: Icon.Vault },
    { id: 'settings', label: 'Settings', icon: Icon.Settings },
  ];
  return (
    <div className="tabbar" style={{ paddingBottom: 28 }}>
      {tabs.map(t => {
        if (t.center) {
          return (
            <div key={t.id} className="tab center" onClick={() => onChange(t.id)}>
              <div className="tab-center-fab">
                <Icon.Plus s={22} c="#fdfaf5" />
              </div>
              <div style={{ fontSize: 10, marginTop: 4 }}>{t.label}</div>
            </div>
          );
        }
        const isActive = active === t.id;
        const C = t.icon;
        return (
          <div key={t.id} className={`tab ${isActive ? 'active' : ''}`} onClick={() => onChange(t.id)}>
            <C s={22} c={isActive ? 'var(--sage-deep)' : '#8a857d'} />
            <div>{t.label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default TabBar;
