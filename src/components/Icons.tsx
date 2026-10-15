import React from 'react';

export const ArrowRight = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.25">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export const MenuIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.25">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M3 12h18M3 6h18M3 18h18" />
  </svg>
);

export const CloseIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.25">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ArrowUp = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.25">
    <path strokeLinecap="square" strokeLinejoin="miter" d="M12 20V4M6 10l6-6 6 6" />
  </svg>
);