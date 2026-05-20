import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/education', label: 'Education' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <Link to="/" className="navbar__logo">
          sathvik.
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar__right">
          <a
            href="https://github.com/Sathvik-Tumati"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon"
            aria-label="GitHub"
          >
            <IconBrandGithub size={20} stroke={1.5} />
          </a>
          <a
            href="https://www.linkedin.com/in/sathvik-tumati/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__icon"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={20} stroke={1.5} />
          </a>
          <Link to="/contact" className="navbar__pill">
            say hello ↗
          </Link>
        </div>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 size={24} stroke={1.5} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="mobile-nav__close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <IconX size={28} stroke={1.5} />
            </button>

            <div className="mobile-nav__links">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <div className="mobile-nav__socials">
              <a href="https://github.com/Sathvik-Tumati" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <IconBrandGithub size={22} stroke={1.5} />
              </a>
              <a href="https://www.linkedin.com/in/sathvik-tumati/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <IconBrandLinkedin size={22} stroke={1.5} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
