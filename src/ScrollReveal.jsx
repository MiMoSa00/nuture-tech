import React, { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children,  threshold = 0.1 }) => {
  const ref = useRef(null);
  const inViewport = useInView(ref, {  threshold });

  useEffect(() => {
    if (inViewport) {
      ref.current.classList.add('visible');
    } else {
      ref.current.classList.remove('visible');
    }
  }, [inViewport]);

  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
};

export default ScrollReveal;