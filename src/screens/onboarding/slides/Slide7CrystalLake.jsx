import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';
import { ImagePlaceholder } from '../../../components/ImagePlaceholder.jsx';

export function Slide7CrystalLake() {
  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 28px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Eyebrow>The connection engine</Eyebrow>
        <h1 className="headline" style={{ margin: 0, fontSize: 40, lineHeight: 1.07 }}>
          Same lake.<br/>Same family.<br/><em>Thirty years apart.</em>
        </h1>

        {/* Connection card demo */}
        <div className="conn-card" style={{ marginTop: 4 }}>
          <div className="conn-pair">
            <div className="conn-pane">
              <div className="date">Journal · 1974</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 13, fontStyle: 'italic', lineHeight: 1.35, color: '#3d4a52' }}>
                "The lake was so cold this morning. Mama swam out past the dock. I watched from the porch with a blanket."
              </div>
            </div>
            <div className="conn-line-wrap">
              <div className="conn-line"/>
            </div>
            <div className="conn-pane photo">
              <ImagePlaceholder label="Photo · 2006" style={{ width: '100%', height: '100%', borderRadius: 12 }}/>
            </div>
          </div>
          <div className="conn-meta">
            <span className="label">Same lake · 32 years</span>
            <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>2 items</span>
          </div>
        </div>

        <p className="body-copy" style={{ fontSize: 16 }}>
          ShareThreads found it. You'd never have thought to search.
        </p>
      </div>
    </div>
  );
}

export default Slide7CrystalLake;
