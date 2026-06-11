import React from 'react';

export function Modal({ open, onClose, children, fromBottom = false }) {
  if (!open) return null;
  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        background: 'rgba(26, 43, 53, 0.4)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        zIndex: 100,
        display: 'flex',
        alignItems: fromBottom ? 'flex-end' : 'center',
        justifyContent: 'center',
        padding: fromBottom ? 0 : 16,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          background: 'var(--cream)',
          borderRadius: fromBottom ? '24px 24px 0 0' : 22,
          maxHeight: fromBottom ? '85%' : '90%',
          overflow: 'auto',
          animation: fromBottom ? 'slideUp 0.3s ease-out' : 'fadeUp 0.25s ease-out',
        }}
      >
        {children}
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Modal;
