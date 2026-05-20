import { motion } from 'framer-motion';
import './Portrait.css';

export default function PortraitB() {
  return (
    <div className="portrait-b">
      <div className="portrait-b__img-wrap">
        <img
          src="/images/about-banner.png"
          alt="Sathvik Tumati Banner"
          loading="eager"
        />
      </div>
      <div className="portrait-b__gradient" />
      <motion.h2
        className="portrait-b__name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        Sathvik Tumati
      </motion.h2>
    </div>
  );
}
