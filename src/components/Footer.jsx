import { Link } from 'react-router-dom';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link to="/" className="footer__logo">sathvik.</Link>

        <nav className="footer__nav">
          <Link to="/" className="footer__nav-link">Home</Link>
          <Link to="/about" className="footer__nav-link">About</Link>
          <Link to="/projects" className="footer__nav-link">Projects</Link>
          <Link to="/skills" className="footer__nav-link">Skills</Link>
          <Link to="/education" className="footer__nav-link">Education</Link>
          <Link to="/contact" className="footer__nav-link">Contact</Link>
        </nav>

        <div className="footer__socials">
          <a href="https://github.com/Sathvik-Tumati" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <IconBrandGithub size={17} stroke={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/sathvik-tumati/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconBrandLinkedin size={17} stroke={1.5} />
          </a>
          <a href="mailto:sats.tumati@gmail.com" aria-label="Email">
            <IconMail size={17} stroke={1.5} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© 2025 Sathvik Tumati</span>
        <span className="footer__built">Designed & built with intention.</span>
      </div>
    </footer>
  );
}
