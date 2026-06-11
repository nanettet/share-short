import React, { useState, useRef } from 'react';
import { Dots } from '../../components/Dots.jsx';
import { Phone } from '../../components/Phone.jsx';

// Dark slides: 0-5 (indices), light slides: 6-8
const DARK_SLIDES = new Set([0, 1, 2, 3, 4, 5]);

export function TutorialSwiper({ slides, onComplete }) {
  const [index, setIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const isDark = DARK_SLIDES.has(index);

  const handlePointerDown = (e) => {
    startX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    setDragX(e.clientX - startX.current);
  };

  const handlePointerUp = () => {
    if (dragX < -50 && index < slides.length - 1) {
      setIndex(i => i + 1);
    } else if (dragX > 50 && index > 0) {
      setIndex(i => i - 1);
    } else if (dragX < -50 && index === slides.length - 1) {
      onComplete();
    }
    setDragging(false);
    setDragX(0);
  };

  const translateX = -(index * 100) + (dragX / 390 * 100);

  return (
    <Phone dark={isDark} scroll={false} dataLabel={`Tutorial slide ${index + 1}`}>
      <div
        className="tutorial-swiper"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{ height: '100%', touchAction: 'pan-y' }}
      >
        {/* Dots at top */}
        <div style={{
          position: 'absolute', top: 68, left: 0, right: 0,
          display: 'flex', justifyContent: 'center',
          zIndex: 10, pointerEvents: 'none',
        }}>
          <Dots count={slides.length} active={index} dark={isDark} />
        </div>

        {/* Slides track */}
        <div
          className="tutorial-slides-track"
          style={{
            transform: `translateX(${translateX}%)`,
            transition: dragging ? 'none' : 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          {slides.map((SlideComponent, i) => (
            <div key={i} className="tutorial-slide">
              <SlideComponent />
            </div>
          ))}
        </div>

        {/* Chevron hint — hide on last slide */}
        {index < slides.length - 1 && (
          <div className={`swipe-hint ${!isDark ? 'light' : ''}`}>
            ›
          </div>
        )}
      </div>
    </Phone>
  );
}

export default TutorialSwiper;
