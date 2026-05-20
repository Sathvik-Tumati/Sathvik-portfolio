import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname}>
        {/* Amber line */}
        <motion.div
          className="page-transition-line"
          initial={{ scaleX: 0, transformOrigin: 'left' }}
          animate={{ scaleX: [0, 1, 1, 0] }}
          transition={{
            duration: 0.48,
            times: [0, 0.46, 0.58, 1],
            ease: 'easeInOut',
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background: '#C8922A',
            zIndex: 300,
          }}
        />

        {/* Page content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.28,
            ease: 'easeOut',
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
