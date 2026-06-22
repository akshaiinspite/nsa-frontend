import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          {/* Logo & About Column */}
          <div className="footer__col footer__col--about">
            <div className="footer__logo">
              <img src="/logos/nsa-logo.png" alt="National Skill Academy Logo" />
            </div>
            <p className="footer__about-text">
              National Skill Academy (NSA) is dedicated to bridging the gap between education and employment. We empower individuals through industry-relevant skill training.
            </p>
            <div className="footer__socials">
              <a href="https://www.facebook.com/people/NationalSkillAcademy/61581828429115/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/nationalskill_academy/?__pwa=1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@NationalSkill_Academy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <a href="/about-us" onClick={(e) => handleLinkClick(e, '/about-us')}>About Us</a>
              </li>
              <li>
                <a href="/courses" onClick={(e) => handleLinkClick(e, '/courses')}>Courses</a>
              </li>
              <li>
                <a href="/gallery" onClick={(e) => handleLinkClick(e, '/gallery')}>Gallery</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Useful Links</h3>
            <ul className="footer__links">
              <li>
                <a href="/contact-us#enquiry-form" onClick={(e) => handleLinkClick(e, '/contact-us#enquiry-form')}>Contact Us</a>
              </li>
              <li>
                <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')}>Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-conditions" onClick={(e) => handleLinkClick(e, '/terms-conditions')}>Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer__col footer__col--contact">
            <h3 className="footer__col-title">Contact Info</h3>
            <ul className="footer__contact-list">
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>Nr. JLN Stadium Metro Station, Metro Pillar No. 549, Kaloor - Palarivattom road, Kochi - 682025</span>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                <a href="mailto:admissions@nationalskillacademy.net">admissions@nationalskillacademy.net</a>
              </li>
              <li>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div className="footer__phones">
                  <a href="tel:+917559843132">+91 75598 43132</a>
                  <a href="tel:+917034593132">+91 70345 93132</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} National Skill Academy. All Rights Reserved.</p>
          <p className="footer__credits">
            Created with <a href="https://inspitetech.com/" target="_blank" rel="noopener noreferrer">inspite technologies pvt ltd</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
