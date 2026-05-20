import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);
  const scaleValue = useMotionValue(1);
  const scale = useSpring(scaleValue, { damping: 20, stiffness: 300 });
  const ref = useRef(null);

  useEffect(() => {
    // Don't enable custom cursor on mobile/touch
    if ('ontouchstart' in window || window.innerWidth < 768) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);
    };

    const handleMouseOver = (e) => {
      const el = e.target;
      if (
        el.tagName === 'A' ||
        el.tagName === 'BUTTON' ||
        el.closest('a') ||
        el.closest('button') ||
        el.dataset.cursor === 'pointer'
      ) {
        scaleValue.set(3.2);
      }
    };

    const handleMouseOut = () => {
      scaleValue.set(1);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, scaleValue]);

  // Don't render on mobile
  if (typeof window !== 'undefined' && ('ontouchstart' in window || window.innerWidth < 768)) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid #C8922A',
        background: 'transparent',
        pointerEvents: 'none',
        zIndex: 9999,
        x,
        y,
        scale,
        mixBlendMode: 'difference',
      }}
    />
  );
}
