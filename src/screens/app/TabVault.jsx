import React, { useState } from 'react';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { Waveform } from '../../components/Waveform.jsx';
import { ImagePlaceholder } from '../../components/ImagePlaceholder.jsx';
import { ConnectionCard } from '../../components/ConnectionCard.jsx';

export function TabVault({ goTo }) {
  const [vault, setVault] = useState('memorial');
  const [filter, setFilter] = useState('all');

  const vaults = [
    { id: 'memorial', name: "Mom's Vault", type: 'memorial', count: 1247, conn: 832, years: '1937–2021', voice: 'The Clerk' },
    { id: 'living',   name: 'Our Family',   type: 'living',   count: 412,  conn: 218, years: '2018–now',  voice: 'The Collaborator' },
  ];
  const active = vaults.find(v => v.id === vault);

  const items = [
    { id: 1, kind: 'photo', label: 'Lake, 1968', conns: 4 },
    { id: 2, kind: 'photo', label: 'Mama, 1972', conns: 6 },
    { id: 3, kind: 'doc',   label: 'Journal entry', conns: 2 },
    { id: 4, kind: 'audio', label: 'Voice memo', conns: 3 },
    { id: 5, kind: 'photo', label: 'Cabin porch', conns: 5 },
    { id: 6, kind: 'photo', label: 'Cousins, 1981', conns: 2 },
    { id: 7, kind: 'doc',   label: 'Letter, 1959',  conns: 8 },
    { id: 8, kind: 'photo', label: 'Wedding', conns: 12 },
    { id: 9, kind: 'audio', label: 'Bedtime story', conns: 1 },
  ];

  const filters = [
    { id: 'all',    label: 'All' },
    { id: 'photo',  label: 'Photos' },
    { id: 'audio',  label: 'Voice' },
    { id: 'doc',    label: 'Docs' },
    { id: 'scan',   label: 'Scans' },
  ];

  const visible = filter === 'all' ? items : items.filter(i => i.kind === filter);

  return (
    <div style={{ padding: '14px 24px 100px', display: 'flex', flexDirection: 'column', gap: 18 }}>
      <div style={{ paddingTop: 8 }}>
        <Eyebrow>Vaults</Eyebrow>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 500, margin: '8px 0 0' }}>
          Two vaults.
        </h2>
      </div>

      {/* Vault selector cards */}
      <div style={{ display: 'flex', gap: 10 }}>
        {vaults.map(v => {
          const isActive = vault === v.id;
          const isMemorial = v.type === 'memorial';
          return (
            <div
              key={v.id}
              onClick={() => setVault(v.id)}
              style={{
                flex: 1,
                background: isMemorial ? 'var(--navy)' : 'var(--cream-card)',
                color: isMemorial ? '#f5f2ee' : 'var(--ink)',
                borderRadius: 18,
                padding: 14,
                border: isActive
                  ? '2px solid var(--sage)'
                  : isMemorial ? '2px solid var(--navy)' : '2px solid var(--cream-card)',
                cursor: 'pointer',
                position: 'relative',
                minHeight: 122,
              }}
            >
              <div className={`badge ${isMemorial ? 'badge-memorial' : 'badge-living'}`} style={{
                background: isMemorial ? 'rgba(245, 242, 238, 0.12)' : 'var(--sage-tint)',
                color: isMemorial ? '#f5f2ee' : 'var(--sage-deep)',
              }}>
                {isMemorial ? 'Memorial' : 'Living'}
              </div>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, marginTop: 10,
              }}>
                {v.name}
              </div>
              <div style={{
                fontSize: 11, color: isMemorial ? 'rgba(245, 242, 238, 0.55)' : 'var(--muted)',
                marginTop: 4, letterSpacing: '0.02em',
              }}>
                {v.years} · {v.count.toLocaleString()} items
              </div>
            </div>
          );
        })}
      </div>

      {/* Hero connection */}
      <div>
        <Eyebrow>This week's discovery</Eyebrow>
        <div style={{ marginTop: 12 }}>
          <ConnectionCard
            left={{ date: 'Letter · 1959', kind: 'text', text: '"He always whistled the same tune coming home from the mill…"' }}
            right={{ date: 'Voice memo · 2003', kind: 'audio', label: 'Dad humming, kitchen' }}
            connType={active.type === 'memorial' ? 'Same melody · 44 years' : 'Same place'}
            onClick={() => goTo('connection')}
          />
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
        {filters.map(f => (
          <div
            key={f.id}
            className={`chip ${filter === f.id ? 'chip-sage' : ''}`}
            onClick={() => setFilter(f.id)}
            style={{ flexShrink: 0 }}
          >
            {f.label}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {visible.map(it => (
          <div
            key={it.id}
            onClick={() => goTo('item')}
            style={{
              position: 'relative', cursor: 'pointer',
              aspectRatio: '1',
              borderRadius: 12, overflow: 'hidden',
              background: 'var(--cream-card)',
            }}
          >
            {it.kind === 'photo' && <ImagePlaceholder label={it.label} style={{ position: 'absolute', inset: 0 }}/>}
            {it.kind === 'audio' && (
              <div style={{
                position: 'absolute', inset: 0, background: 'var(--navy-soft)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>
                <Waveform bars={10}/>
                <div style={{ fontSize: 9, color: 'rgba(245, 242, 238, 0.6)', textAlign: 'center' }}>{it.label}</div>
              </div>
            )}
            {it.kind === 'doc' && (
              <div style={{
                position: 'absolute', inset: 0, background: 'var(--cream-warm)',
                padding: 10,
                fontFamily: 'var(--serif)', fontSize: 9, color: 'var(--ink-2)',
                fontStyle: 'italic', lineHeight: 1.3,
              }}>
                Dear Margaret,<br/>The light at six this morning was the color of the lake.…
              </div>
            )}
            <div style={{
              position: 'absolute', bottom: 6, right: 6,
              padding: '2px 6px',
              borderRadius: 999,
              background: 'rgba(26, 43, 53, 0.7)',
              color: '#f5f2ee', fontSize: 9, letterSpacing: '0.02em',
            }}>
              {it.conns}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TabVault;
