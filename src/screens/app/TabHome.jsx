import React from 'react';
import { Eyebrow } from '../../components/Eyebrow.jsx';
import { ImagePlaceholder } from '../../components/ImagePlaceholder.jsx';
import { ConnectionCard } from '../../components/ConnectionCard.jsx';

export function TabHome({ goTo }) {
  return (
    <div style={{ padding: '14px 24px 100px', display: 'flex', flexDirection: 'column', gap: 26 }}>
      {/* Greeting */}
      <div style={{ paddingTop: 8 }}>
        <div style={{ fontFamily: 'var(--sans)', fontSize: 12, color: 'var(--muted)', letterSpacing: '0.02em' }}>
          Tuesday, May 12
        </div>
        <h2 style={{
          fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 500, margin: '6px 0 0',
          color: 'var(--ink)', letterSpacing: '-0.01em',
        }}>
          Good morning, Eliza.
        </h2>
      </div>

      {/* Recently connected */}
      <div>
        <Eyebrow>Recently connected</Eyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
          <ConnectionCard
            left={{ date: 'Photo · 1968', kind: 'photo', label: 'Mama at the dock' }}
            right={{ date: 'Photo · 2006', kind: 'photo', label: 'You + cousins, same dock' }}
            connType="Same place · 38 years apart"
            onClick={() => goTo('connection')}
          />
          <ConnectionCard
            left={{ date: 'Journal · 1974', kind: 'text', text: '"Crystal Lake was so cold this morning…"' }}
            right={{ date: 'Voice memo · 2019', kind: 'audio', label: 'Mom teaching swimming' }}
            connType="Same person · 45 years"
            onClick={() => goTo('connection')}
          />
        </div>
      </div>

      {/* Suggested */}
      <div>
        <Eyebrow>Suggested</Eyebrow>
        <div
          style={{
            marginTop: 14,
            background: 'var(--cream-card)',
            borderRadius: 18,
            padding: 18,
            boxShadow: '0 1px 2px rgba(26, 43, 53, 0.04)',
            cursor: 'pointer',
          }}
          onClick={() => goTo('artifact')}
        >
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.3, color: 'var(--ink)',
            fontWeight: 500,
          }}>
            You have <em style={{ color: 'var(--sage-deep)' }}>23 cabin photos</em> and a voice memo of her teaching you to swim.
          </div>
          <div style={{ marginTop: 10, fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--muted)' }}>
            Want to make a Cabin Book?
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
            {[1, 2, 3, 4].map(i => (
              <ImagePlaceholder key={i} label={`Cabin ${i}`} style={{ flex: 1, height: 50, borderRadius: 8 }}/>
            ))}
          </div>
          <div style={{
            marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--line)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            fontFamily: 'var(--sans)', fontSize: 13, color: 'var(--sage-deep)',
          }}>
            <span style={{ letterSpacing: '0.02em' }}>Make Something →</span>
            <span style={{ color: 'var(--muted)' }}>Not now</span>
          </div>
        </div>
      </div>

      {/* This week's discovery */}
      <div>
        <Eyebrow>This week's discovery</Eyebrow>
        <div style={{
          marginTop: 14, background: 'var(--navy)', borderRadius: 18, padding: 18,
          color: '#f5f2ee',
        }}>
          <div style={{
            fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.35, fontWeight: 500,
          }}>
            "Mary Lou" appears in <em style={{ color: 'var(--sage)' }}>seven items</em> across forty years —<br/>
            but only one photograph names her.
          </div>
          <div style={{ marginTop: 14, fontSize: 12, color: 'rgba(245, 242, 238, 0.55)' }}>
            The Clerk · Memorial Vault · Mom's Archive
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabHome;
