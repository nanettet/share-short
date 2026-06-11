import React, { useState } from 'react';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { ImagePlaceholder } from '../../components/ImagePlaceholder.jsx';
import { Icon } from '../../components/Icons.jsx';

export function TabSearch({ goTo }) {
  const [query, setQuery] = useState('');
  const recent = ['crystal lake', "mama's handwriting", '1987 summer'];
  const results = query
    ? [
        { id: 1, title: 'Crystal Lake, August 1974', kind: 'Journal entry', date: '1974', conns: 4 },
        { id: 2, title: 'Voice memo — long dock',    kind: 'Audio · 2:14',  date: '2019', conns: 3 },
        { id: 3, title: 'Photo — Mama in blanket',   kind: 'Photo',         date: '1968', conns: 6 },
      ]
    : [];

  return (
    <div style={{ padding: '14px 24px 100px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div style={{ paddingTop: 8 }}>
        <Eyebrow>Search</Eyebrow>
        <h2 style={{
          fontFamily: 'var(--serif)', fontSize: 30, fontWeight: 500, margin: '8px 0 0',
        }}>
          Ask anything.
        </h2>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '14px 18px',
        background: 'var(--cream-card)',
        borderRadius: 999,
        border: '1px solid var(--line)',
      }}>
        <Icon.Search s={18} c="#8a857d"/>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ask anything…"
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--sans)', fontSize: 15, color: 'var(--ink)',
          }}
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)' }}
          >
            <Icon.Close s={16} c="#8a857d"/>
          </button>
        )}
      </div>

      {!query && (
        <>
          <div>
            <Eyebrow>Browse</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12 }}>
              {[
                { label: 'By person', sub: '42 named' },
                { label: 'By place',  sub: '18 places' },
                { label: 'By time',   sub: '1932 — now' },
                { label: 'By type',   sub: '6 media' },
              ].map(f => (
                <div key={f.label} style={{
                  background: 'var(--cream-card)', borderRadius: 14, padding: 14,
                  border: '1px solid var(--line)',
                }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)', fontWeight: 500 }}>
                    {f.label}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                    {f.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Recent</Eyebrow>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
              {recent.map(r => (
                <div key={r} className="chip" onClick={() => setQuery(r)}>{r}</div>
              ))}
            </div>
          </div>
        </>
      )}

      {query && (
        <div>
          <Eyebrow>{results.length} results for "{query}"</Eyebrow>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
            {results.map(r => (
              <div
                key={r.id}
                onClick={() => goTo('item')}
                style={{
                  background: 'var(--cream-card)', borderRadius: 14, padding: 14,
                  display: 'flex', alignItems: 'center', gap: 12,
                  border: '1px solid var(--line)', cursor: 'pointer',
                }}
              >
                <ImagePlaceholder label={r.kind} style={{ width: 46, height: 46, borderRadius: 10 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500 }}>{r.title}</div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                    {r.kind} · {r.date}
                  </div>
                </div>
                <div className="chip chip-sage" style={{ fontSize: 11, padding: '4px 10px' }}>
                  {r.conns} conn.
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TabSearch;
