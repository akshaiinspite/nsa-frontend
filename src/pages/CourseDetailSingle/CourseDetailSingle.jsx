import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  SKILL_COURSES,
  LANGUAGE_COURSES,
  UPCOMING_COURSES,
} from '../../data/coursesData';
import './CourseDetailSingle.css';

/* ---- Reusable Icons ---- */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const InfoIcon = ({ type }) => {
  switch (type) {
    case 'code':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      );
    case 'level':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      );
    case 'credits':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      );
    case 'certification':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      );
    case 'duration':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
    case 'mode':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      );
    case 'placement':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      );
    default:
      return null;
  }
};

const renderCertLogo = (certName) => {
  const name = certName.trim();
  const cleanName = name.replace('*', '');

  const imageMap = {
    'NSA': '/logos/nsa-logo.png',
    'ASAP': '/images/Screenshot 2026-06-10 100130.png',
    'PDEU': '/logos/pdeu.png',
    'SCGJ': '/logos/scgj.png',
    'Skill India': '/logos/skill-india.png',
    'NSDC': '/logos/nsdc.png',
    'Goethe': '/images/Goethe_logo_German_Certification.png',
    'TELC': '/images/telc_logo_German_Course_Certification.jpg',
    'Mikomi Japanese Language Academy': '/images/Mikomi_Logo_Japanese_Language_Partner.png',
    'The Japan Foundation': '/images/Japan_Foundation_logo_Japanese_language_Certification.png'
  };

  if (imageMap[cleanName]) {
    return (
      <div className="cert-logo-card" key={name}>
        <div className="cert-logo-card__img-wrapper">
          <img src={imageMap[cleanName]} alt={name} className="cert-logo-card__img" />
        </div>
        <span className="cert-logo-card__name">{name}</span>
      </div>
    );
  }

  return (
    <div className="cert-logo-card cert-logo-card--generic" key={name}>
      <div className="cert-logo-card__badge-generic">
        <span>{cleanName}</span>
      </div>
      <span className="cert-logo-card__name">{name}</span>
    </div>
  );
};

export default function CourseDetailSingle() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    // Find the course in all lists
    const allLists = [...SKILL_COURSES, ...LANGUAGE_COURSES, ...UPCOMING_COURSES];
    const foundCourse = allLists.find(
      (c) => c.slug === courseSlug || c.id === courseSlug
    );

    if (foundCourse) {
      setCourse(foundCourse);
      window.scrollTo(0, 0);
    } else {
      // If course is not found, redirect to main courses page
      navigate('/courses');
    }
  }, [courseSlug, navigate]);

  if (!course) {
    return (
      <div className="course-detail-loading">
        <div className="spinner"></div>
        <p>Loading course details...</p>
      </div>
    );
  }

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const getCategoryLabel = () => {
    if (course.category === 'skill') return 'Skill Development Course';
    if (course.category === 'language') return 'Global Language Training';
    if (course.category === 'upcoming') return 'Upcoming Program (Coming Soon)';
    return 'Professional Program';
  };

  const getCategoryLink = () => {
    if (course.category === 'skill') return '/courses/skill';
    if (course.category === 'language') return '/courses/language';
    if (course.category === 'upcoming') return '/courses/upcoming';
    return '/courses';
  };

  const hasVerificationMode = course.certification && course.certification.includes('*');

  return (
    <div className="single-course-page">
      {/* ---- HERO SECTION ---- */}
      <section className="single-course-hero">
        <div className="container single-course-hero__inner">
          <div className="single-course-hero__grid">
            <div className="single-course-hero__content">
              <Link to="/courses" className="single-course-hero__back">
                <ArrowLeftIcon />
                Back to All Courses
              </Link>
              <span className="single-course-hero__badge">{getCategoryLabel()}</span>
              <h1 className="single-course-hero__title">{course.title}</h1>
              <nav className="single-course-hero__breadcrumb" aria-label="breadcrumb">
                <Link to="/">Home</Link>
                <span className="single-course-hero__divider">/</span>
                <Link to="/courses">Courses</Link>
                <span className="single-course-hero__divider">/</span>
                <Link to={getCategoryLink()}>{course.categoryLabel || 'Programs'}</Link>
                <span className="single-course-hero__divider">/</span>
                <span className="single-course-hero__current">{course.title}</span>
              </nav>
            </div>
            {course.image && (
              <div className="single-course-hero__image-wrapper">
                <img
                  src={course.image}
                  alt={course.title}
                  className="single-course-hero__img"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---- QUICK INFO BAR ---- */}
      <section className="quick-info-bar">
        <div className="container quick-info-bar__inner">
          {course.courseCode && (
            <div className="quick-info-bar__item">
              <div className="quick-info-bar__icon">
                <InfoIcon type="code" />
              </div>
              <div className="quick-info-bar__text">
                <span className="quick-info-bar__label">Course Code</span>
                <span className="quick-info-bar__value">{course.courseCode}</span>
              </div>
            </div>
          )}
          {course.duration && (
            <div className="quick-info-bar__item">
              <div className="quick-info-bar__icon">
                <InfoIcon type="duration" />
              </div>
              <div className="quick-info-bar__text">
                <span className="quick-info-bar__label">Duration</span>
                <span className="quick-info-bar__value">{course.duration}</span>
              </div>
            </div>
          )}
          {course.courseMode && (
            <div className="quick-info-bar__item">
              <div className="quick-info-bar__icon">
                <InfoIcon type="mode" />
              </div>
              <div className="quick-info-bar__text">
                <span className="quick-info-bar__label">Course Mode</span>
                <span className="quick-info-bar__value">{course.courseMode}</span>
              </div>
            </div>
          )}
          {course.placement && (
            <div className="quick-info-bar__item">
              <div className="quick-info-bar__icon quick-info-bar__icon--placement">
                <img src="/images/placement_100.png" alt="100% Placed Icon" className="placement-icon-img" />
              </div>
              <div className="quick-info-bar__text">
                <span className="quick-info-bar__label">Placement Support</span>
                <span className="quick-info-bar__value">{course.placement}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ---- MAIN BODY LAYOUT ---- */}
      <section className="course-body-section">
        <div className="container course-body-section__grid">
          {/* LEFT COLUMN: Overview, Highlights, Accordion */}
          <div className="course-main-content">
            {/* Certification Details */}
            {course.certification && (
              <div className="course-content-block">
                <h2 className="course-content-block__title">Accreditation & Certification Partners</h2>
                <div className="cert-logos-grid">
                  {course.certification.split('|').map((cert) => renderCertLogo(cert))}
                </div>
                {hasVerificationMode && (
                  <p className="cert-note">* Verification Mode.</p>
                )}
              </div>
            )}

            {/* Overview */}
            <div className="course-content-block">
              <h2 className="course-content-block__title">Course Overview</h2>
              <div className="course-content-block__desc">
                <p>{course.shortDesc}</p>
                {course.overviewPoints && (
                  <ul className="course-overview-points" style={{ marginTop: '16px', listStyleType: 'none', paddingLeft: '0' }}>
                    {course.overviewPoints.map((point, index) => (
                      <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '8px', color: 'var(--clr-gray-650)', fontSize: '0.95rem', fontWeight: '600', lineHeight: '1.6' }}>
                        <span style={{ color: 'var(--clr-primary)', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1' }}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div className="course-content-block">
                <h2 className="course-content-block__title">
                  {course.category === 'language' ? 'Program Highlights & Key Features' : 'Key Highlights & Skills Covered'}
                </h2>
                <ul className="course-highlights-list">
                  {course.highlights.map((item, index) => (
                    <li key={index} className="course-highlights-list__item">
                      <div className="course-highlights-list__icon">
                        <CheckIcon />
                      </div>
                      <span className="course-highlights-list__text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Levels for Language */}
            {course.levels && course.levels.length > 0 && (
              <div className="course-content-block">
                <h2 className="course-content-block__title">Program Structure Levels</h2>
                <div className="language-levels-grid">
                  {course.levels.map((lvl, index) => (
                    <div key={index} className="language-level-card">
                      <div className="language-level-card__header">
                        <span className="language-level-card__tag">{lvl.level}</span>
                        <span className="language-level-card__label">{lvl.label}</span>
                      </div>
                      <p className="language-level-card__desc">{lvl.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ Accordion Section */}
            {course.faqs && course.faqs.length > 0 && (
              <div className="course-content-block course-faq-section">
                <h2 className="course-content-block__title">Frequently Asked Questions</h2>
                <div className="faq-accordion">
                  {course.faqs.map((faq, index) => {
                    const isOpen = activeFaq === index;
                    return (
                      <div key={index} className={`faq-accordion__item ${isOpen ? 'faq-accordion__item--open' : ''}`}>
                        <button
                          className="faq-accordion__header"
                          onClick={() => setActiveFaq(isOpen ? null : index)}
                          aria-expanded={isOpen}
                        >
                          <span className="faq-accordion__question">{faq.question}</span>
                          <span className="faq-accordion__arrow">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </button>
                        <div className="faq-accordion__body">
                          <p className="faq-accordion__answer">{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Sidebar Cards */}
          <div className="course-sidebar">
            {/* Eligibility Card */}
            {course.eligibility && (
              <div className="course-sidebar-card course-sidebar-card--eligibility">
                <h3 className="course-sidebar-card__title">Who Can Enroll?</h3>
                <p className="course-sidebar-card__desc">{course.eligibility}</p>
              </div>
            )}

            {/* Training Partner Card (Japanese specific) */}
            {course.trainingPartner && (
              <div className="course-sidebar-card course-sidebar-card--partner">
                <h3 className="course-sidebar-card__title">Training Partner</h3>
                <p className="course-sidebar-card__desc">
                  Delivered in partnership with <strong>{course.trainingPartner}</strong>.
                </p>
              </div>
            )}

            {/* Enquiry Button Card */}
            <div className="course-sidebar-card course-sidebar-card--form">
              <h3 className="course-sidebar-card__title">Admissions & Enquiries</h3>
              <p className="course-sidebar-card__desc" style={{ marginBottom: '24px' }}>
                Interested in enrolling or have questions about syllabus booklets, course fees, batch timings, or certifications? Get in touch with our academic advisors.
              </p>
              <Link
                to="/contact-us#enquiry-form"
                className="btn btn--primary enquiry-submit-btn"
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                Enquire Now
              </Link>
            </div>

            {/* Quick Contact Card */}
            <div className="course-sidebar-card course-sidebar-card--contact">
              <h3 className="course-sidebar-card__title">Need Immediate Help?</h3>
              <p className="course-sidebar-card__desc">
                Speak directly to an education counsellor for guidance and career support.
              </p>
              <div className="sidebar-contact-links">
                <a href="tel:+917034593132" className="sidebar-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 70345 93132
                </a>
                <a href="mailto:admissions@nationalskillacademy.net" className="sidebar-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  admissions@nationalskillacademy.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
