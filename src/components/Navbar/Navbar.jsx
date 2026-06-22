import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { SKILL_COURSES, LANGUAGE_COURSES, UPCOMING_COURSES } from '../../data/coursesData';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home', type: 'anchor' },
  { label: 'About Us', href: '/about-us', type: 'route' },
  {
    label: 'Courses',
    href: '/courses',
    type: 'dropdown',
  },
  { label: 'Gallery', href: '/gallery', type: 'route' },
  { label: 'Contact Us', href: '/contact-us', type: 'route' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [dropdownOpen, setDropdownOpen] = useState(null); // 'Courses' or null
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null); // 'skill' | 'language' | 'upcoming' | null
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const anchorLinks = NAV_LINKS.filter((l) => l.type === 'anchor');
    const sections = anchorLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setDropdownOpen(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    setDropdownOpen(null);
    if (link.type === 'route' || !link.type) {
      navigate(link.href);
    } else if (link.type === 'anchor') {
      if (location.pathname !== '/') {
        navigate('/' + link.href);
      } else {
        const el = document.querySelector(link.href);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleDropdownToggle = (e, label) => {
    e.stopPropagation();
    setDropdownOpen(dropdownOpen === label ? null : label);
  };

  const handleChildClick = (child) => {
    setMobileOpen(false);
    setDropdownOpen(null);
    setMobileSubmenuOpen(null);
    navigate(child.href);
  };

  const isLinkActive = (link) => {
    if (link.label === 'Courses') {
      return location.pathname.startsWith('/courses') || location.pathname.startsWith('/course');
    }
    if (link.type === 'route' || !link.type) {
      return location.pathname === link.href || (link.href === '/contact-us' && location.pathname === '/contact');
    }
    return location.pathname === '/' && activeSection === link.href;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__left">
            <span className="topbar__item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Nr. JLN Stadium Metro Station, Metro Pillar No. 549, Kaloor - Palarivattom road, Kochi - 682025
            </span>
          </div>
          <div className="topbar__right">
            <a href="mailto:admissions@nationalskillacademy.net" className="topbar__item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              admissions@nationalskillacademy.net
            </a>
            <a href="tel:+917034593132" className="topbar__item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 70345 93132
            </a>
            <div className="topbar__socials">
              <a href="https://www.facebook.com/people/NationalSkillAcademy/61581828429115/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/nationalskill_academy/?__pwa=1" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://www.youtube.com/@NationalSkill_Academy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C4.482 20.455 12 20.455 12 20.455s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
        <div className="container navbar__inner">
          <a
            href="/"
            className="navbar__logo"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick({ label: 'Home', href: '#home', type: 'anchor' });
            }}
          >
            <img src="/logos/nsa-logo.png" alt="National Skill Academy" />
          </a>

          <nav className={`navbar__nav ${mobileOpen ? 'navbar__nav--open' : ''}`}>
            {NAV_LINKS.map((link) => {
              if (link.type === 'dropdown') {
                return (
                  <div
                    className={`navbar__dropdown ${isLinkActive(link) ? 'navbar__dropdown--active' : ''}`}
                    key={link.label}
                    onMouseEnter={() => {
                      if (window.innerWidth > 1200) {
                        setDropdownOpen(link.label);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth > 1200) {
                        setDropdownOpen(null);
                      }
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <a
                      href={link.href}
                      className={`navbar__link navbar__link--has-dropdown ${isLinkActive(link) ? 'navbar__link--active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleDropdownToggle(e, link.label);
                      }}
                    >
                      {link.label}
                      <svg className="navbar__dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                      <span className="navbar__link-underline" />
                    </a>
                    
                    {/* DESKTOP MEGA DROPDOWN */}
                    <div className={`navbar__mega-menu ${dropdownOpen === link.label ? 'navbar__mega-menu--open' : ''}`}>
                      <div className="navbar__mega-container-vertical">
                        {/* Column 1: Skill Courses */}
                        <div className="navbar__mega-column">
                          <div className="navbar__mega-column-header">
                            <span className="mega-column-title">Skill Courses</span>
                          </div>
                          <div className="navbar__mega-column-list">
                            {SKILL_COURSES.map(course => (
                              <Link
                                key={course.id}
                                to={`/course/${course.slug || course.id}`}
                                className="navbar__mega-column-item"
                                onClick={() => { setDropdownOpen(null); setMobileOpen(false); }}
                              >
                                <span className="navbar__mega-column-dot" />
                                <span className="navbar__mega-column-item-title">{course.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 2: Language Courses */}
                        <div className="navbar__mega-column">
                          <div className="navbar__mega-column-header">
                            <span className="mega-column-title">Language Courses</span>
                          </div>
                          <div className="navbar__mega-column-list">
                            {LANGUAGE_COURSES.map(course => (
                              <Link
                                key={course.id}
                                to={`/course/${course.slug || course.id}`}
                                className="navbar__mega-column-item"
                                onClick={() => { setDropdownOpen(null); setMobileOpen(false); }}
                              >
                                <span className="navbar__mega-column-dot" />
                                <span className="navbar__mega-column-item-title">{course.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Column 3: Upcoming Courses */}
                        <div className="navbar__mega-column">
                          <div className="navbar__mega-column-header">
                            <span className="mega-column-title">Upcoming Courses</span>
                          </div>
                          <div className="navbar__mega-column-list">
                            <Link
                              to="/courses/upcoming"
                              className="navbar__mega-column-item"
                              onClick={() => { setDropdownOpen(null); setMobileOpen(false); }}
                            >
                              <span className="navbar__mega-column-dot" />
                              <span className="navbar__mega-column-item-title">Upcoming Courses Overview</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* MOBILE DRAWER COLLAPSIBLE LIST */}
                    <div className={`navbar__dropdown-menu ${dropdownOpen === link.label ? 'navbar__dropdown-menu--open' : ''}`}>
                      {/* Mobile Skill Accordion */}
                      <div className="navbar__mobile-cat">
                        <button 
                          className="navbar__mobile-cat-header"
                          onClick={(e) => { e.stopPropagation(); setMobileSubmenuOpen(mobileSubmenuOpen === 'skill' ? null : 'skill'); }}
                        >
                          <span>Skill Courses</span>
                          <svg className={`navbar__mobile-cat-arrow ${mobileSubmenuOpen === 'skill' ? 'open' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <div className={`navbar__mobile-cat-list ${mobileSubmenuOpen === 'skill' ? 'open' : ''}`}>
                          {SKILL_COURSES.map(course => (
                            <a 
                              key={course.id}
                              href={`/course/${course.slug || course.id}`}
                              className="navbar__mobile-cat-item"
                              onClick={(e) => { e.preventDefault(); handleChildClick({ href: `/course/${course.slug || course.id}` }); }}
                            >
                              {course.title}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Language Accordion */}
                      <div className="navbar__mobile-cat">
                        <button 
                          className="navbar__mobile-cat-header"
                          onClick={(e) => { e.stopPropagation(); setMobileSubmenuOpen(mobileSubmenuOpen === 'language' ? null : 'language'); }}
                        >
                          <span>Language Courses</span>
                          <svg className={`navbar__mobile-cat-arrow ${mobileSubmenuOpen === 'language' ? 'open' : ''}`} width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        <div className={`navbar__mobile-cat-list ${mobileSubmenuOpen === 'language' ? 'open' : ''}`}>
                          {LANGUAGE_COURSES.map(course => (
                            <a 
                              key={course.id}
                              href={`/course/${course.slug || course.id}`}
                              className="navbar__mobile-cat-item"
                              onClick={(e) => { e.preventDefault(); handleChildClick({ href: `/course/${course.slug || course.id}` }); }}
                            >
                              {course.title}
                            </a>
                          ))}
                        </div>
                      </div>

                      {/* Mobile Upcoming - Direct Link */}
                      <div className="navbar__mobile-cat">
                        <a 
                          href="/courses/upcoming"
                          className="navbar__mobile-cat-header-link"
                          onClick={(e) => { e.preventDefault(); handleChildClick({ href: '/courses/upcoming' }); }}
                        >
                          <span>Upcoming Courses</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '4px' }}>
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar__link ${isLinkActive(link) ? 'navbar__link--active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link);
                  }}
                >
                  {link.label}
                  <span className="navbar__link-underline" />
                </a>
              );
            })}
          </nav>

          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && <div className="navbar__overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
