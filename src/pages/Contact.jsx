import { motion } from 'framer-motion';
import { IconMail, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import PortraitC from '../components/PortraitC';
import './Contact.css';

const contactRows = [
  {
    label: 'EMAIL',
    Icon: IconMail,
    value: 'sats.tumati@gmail.com',
    href: 'mailto:sats.tumati@gmail.com',
    external: false,
  },

  {
    label: 'GITHUB',
    Icon: IconBrandGithub,
    value: 'github.com/Sathvik-Tumati',
    href: 'https://github.com/Sathvik-Tumati',
    external: true,
  },
  {
    label: 'LINKEDIN',
    Icon: IconBrandLinkedin,
    value: 'linkedin.com/in/sathvik-tumati',
    href: 'https://www.linkedin.com/in/sathvik-tumati/',
    external: true,
  },
];

export default function Contact() {
  return (
    <div className="contact-page zone-a">
      <div className="contact__inner">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <PortraitC />
        </motion.div>

        <motion.h1
          className="contact__signature"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          sathvik.
        </motion.h1>

        <motion.p
          className="contact__invitation"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          If something you've seen here
          <br />
          feels like a conversation
          <br />
          worth having —
        </motion.p>

        <motion.p
          className="contact__lets-talk"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          let's talk.
        </motion.p>

        <motion.div
          className="hairline"
          style={{ margin: '36px auto' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        />

        <motion.div
          className="contact__rows"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          {contactRows.map((row) => (
            <a
              key={row.label}
              href={row.href}
              target={row.external ? '_blank' : undefined}
              rel={row.external ? 'noopener noreferrer' : undefined}
              className="contact__row"
            >
              <span className="contact__row-label">{row.label}</span>
              <row.Icon size={15} stroke={1.5} className="contact__row-icon" />
              <span className="contact__row-value">{row.value}</span>
            </a>
          ))}
        </motion.div>

        <motion.div
          className="contact__availability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <span className="contact__seeking-label">CURRENTLY SEEKING</span>
          <p className="contact__seeking-text">
            ML engineering internships · Open to collaborations
          </p>
        </motion.div>

        <motion.p
          className="contact__copyright"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          © 2025 Sathvik Tumati · Designed & built with intention.
        </motion.p>
      </div>
    </div>
  );
}
