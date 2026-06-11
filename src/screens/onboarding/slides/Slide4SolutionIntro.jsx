import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';
import { Icon } from '../../../components/Icons.jsx';

export function Slide4SolutionIntro() {
  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 18,
          background: 'linear-gradient(160deg, #b6c7b1, #7a9485)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 40px rgba(158, 184, 159, 0.3)',
        }}>
          <Icon.Logo size={32} color="#f5f2ee" />
        </div>

        <Eyebrow light>Introducing ShareThreads</Eyebrow>
        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 44, lineHeight: 1.06 }}>
          One place for<br/><em>everything</em> your family<br/>knows —
        </h1>
        <h2 className="headline headline-dark" style={{ margin: 0, fontSize: 34, fontWeight: 400, lineHeight: 1.1 }}>
          and is still<br/>finding out.
        </h2>
      </div>
    </div>
  );
}

export default Slide4SolutionIntro;
