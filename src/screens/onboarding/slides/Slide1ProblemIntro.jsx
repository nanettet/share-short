import React from 'react';
import { Eyebrow } from '../../../components/Eyebrow.jsx';

export function Slide1ProblemIntro() {
  return (
    <div style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      padding: '20px 32px 60px',
      justifyContent: 'center',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Eyebrow light>Sound familiar?</Eyebrow>
        <h1 className="headline headline-dark" style={{ margin: 0, fontSize: 48, lineHeight: 1.06 }}>
          Seven boxes<br/>upstairs.
        </h1>
        <h2 className="headline headline-dark" style={{ margin: 0, fontSize: 36, fontWeight: 400, lineHeight: 1.1 }}>
          Forty thousand<br/>photos on your phone.
        </h2>
        <p className="body-copy body-copy-dark" style={{ fontSize: 17, marginTop: 4 }}>
          A lifetime of memory — preserved, but unreachable.
        </p>
      </div>
    </div>
  );
}

export default Slide1ProblemIntro;
