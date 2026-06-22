import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  SKILL_COURSES,
  LANGUAGE_COURSES,
  UPCOMING_COURSES,
  ALL_COURSES,
  CATEGORIES,
} from '../../data/coursesData';
import { useScrollReveal } from '../../hooks';
import './Courses.css';

/* ---- Reusable: Check Icon ---- */
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/* ---- Reusable: Arrow Icon ---- */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ---- CourseCard Component ---- */
function CourseCard({ course, index, onViewDetails, onEnquire }) {
  const cardImage = course.image || '/images/courses/courses-hero-bg.jpg';
  const cardHighlights = course.highlights || [];
  const isUpcoming = course.category === 'upcoming';

  return (
    <div
      className="course-card animate-fadeInUp"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="course-card__image-box">
        <img src={cardImage} alt={course.title} className="course-card__img" loading="lazy" />
      </div>
      <div className="course-card__content">
        <div className="course-card__meta">
          {course.courseCode && (
            <span className="course-card__meta-tag">Code: {course.courseCode}</span>
          )}
          {course.nsqfLevel && (
            <span className="course-card__meta-tag">NSQF Level {course.nsqfLevel}</span>
          )}
          {course.credits && (
            <span className="course-card__meta-tag">Credits: {course.credits}</span>
          )}
        </div>
        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__desc">{course.shortDesc}</p>

        {cardHighlights.length > 0 && (
          <ul className="course-card__highlights">
            {cardHighlights.slice(0, 3).map((h, idx) => (
              <li key={idx}>
                <CheckIcon />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="course-card__actions">
          {!isUpcoming && (
            <button
              className="course-card__btn--details"
              onClick={() => onViewDetails(course)}
            >
              View Details
            </button>
          )}
          <button
            onClick={() => onEnquire(course.title)}
            className="btn btn--primary course-card__btn"
            style={isUpcoming ? { width: '100%', justifyContent: 'center' } : {}}
          >
            {isUpcoming ? 'Enquire Now' : 'Enroll Now'}
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- Main Courses Page ---- */
export default function Courses() {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const [refHero] = useScrollReveal(0.1);
  const [refCourses, isCoursesVisible] = useScrollReveal(0.05);
  const [refFuture, isFutureVisible] = useScrollReveal(0.1);
  const [refFaq, isFaqVisible] = useScrollReveal(0.1);
  const [refCta, isCtaVisible] = useScrollReveal(0.1);

  useEffect(() => {
    if (category) {
      if (['skill', 'language', 'upcoming'].includes(category)) {
        setActiveCategory(category);
      } else {
        setActiveCategory('all');
      }
    } else {
      setActiveCategory('all');
    }
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  const handleEnquire = (courseTitle) => {
    navigate(`/contact-us?enquiry=${encodeURIComponent(courseTitle)}#enquiry-form`);
  };

  const handleCategoryChange = (catId) => {
    if (catId === 'all') {
      navigate('/courses');
    } else {
      navigate(`/courses/${catId}`);
    }
  };

  const getFilteredCourses = () => {
    switch (activeCategory) {
      case 'skill': return SKILL_COURSES;
      case 'language': return LANGUAGE_COURSES;
      case 'upcoming': return UPCOMING_COURSES.map((course) => ({
        ...course,
        category: 'upcoming',
        categoryLabel: 'Upcoming Course',
      }));
      default: return ALL_COURSES;
    }
  };

  const filteredCourses = getFilteredCourses();
  const showFuture = activeCategory === 'all';

  const faqItems = [
    {
      question: 'How do I choose the right course?',
      answer: 'If you are unsure, contact our team and we will help you choose a program based on your background, goals, and current skill level.',
    },
    {
      question: 'Are these courses recognized?',
      answer: 'Yes. Our skill programs are aligned with recognized industry and government training frameworks, and the language courses follow CEFR-aligned progression.',
    },
    {
      question: 'Can I submit an enquiry for a specific course?',
      answer: 'Yes. Use the Enroll Now or Enquiry buttons and we will route your request directly to the contact form with the course prefilled.',
    },
    {
      question: 'Do you provide placement support?',
      answer: 'Placement support is available for selected programs along with guidance, counseling, and industry connections where applicable.',
    },
  ];

  return (
    <div className="courses-page">
      {/* ---- Hero Banner ---- */}
      <section className="courses-hero" ref={refHero}>
        <img
          src="/banners/courses-hero-matching.png"
          alt="Students in classroom at National Skill Academy"
          className="courses-hero__bg"
        />
        <div className="courses-hero__overlay" />
        <div className="courses-hero__content">
          <h1 className="courses-hero__title">
            {activeCategory === 'skill' ? 'Skill Courses' :
             activeCategory === 'language' ? 'Language Courses' :
             activeCategory === 'upcoming' ? 'Upcoming Courses' :
             'Our Courses'}
          </h1>
          <p className="courses-hero__subtitle">
            {activeCategory === 'skill' ? 'Government-recognized, industry-certified skill training programs under NSDC, Skill India, and SCGJ.' :
             activeCategory === 'language' ? 'CEFR-aligned international language programs designed to build global confidence and fluency.' :
             activeCategory === 'upcoming' ? 'Exciting upcoming programs in high-demand technologies currently in active development.' :
             'Industry-certified skill development programs designed to make you job-ready with practical, hands-on training.'}
          </p>
          <nav className="courses-hero__breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="courses-hero__divider">/</span>
            {activeCategory === 'all' ? (
              <span className="courses-hero__current">Courses</span>
            ) : (
              <>
                <a href="/courses" onClick={(e) => { e.preventDefault(); navigate('/courses'); }}>Courses</a>
                <span className="courses-hero__divider">/</span>
                <span className="courses-hero__current">
                  {activeCategory === 'skill' ? 'Skill Courses' :
                   activeCategory === 'language' ? 'Language Courses' :
                   'Upcoming Courses'}
                </span>
              </>
            )}
          </nav>
        </div>
      </section>

      {/* ---- Course Cards Grid ---- */}
      {filteredCourses.length > 0 && (
        <section className="courses-section" ref={refCourses}>
          <div className={`container ${isCoursesVisible ? 'visible' : ''}`}>
            {activeCategory !== 'upcoming' ? (
              <>
                <div className="courses-section__header reveal">
                  <span className="section-label">
                    {activeCategory === 'skill' ? 'Skill Courses' :
                     activeCategory === 'language' ? 'Language Courses' :
                     'All Programs'}
                  </span>
                  <h2 className="section-title">
                    {activeCategory === 'skill' ? 'Professional Skill Development Programs' :
                     activeCategory === 'language' ? 'Global Language Training Programs' :
                     'Explore Our Programs'}
                  </h2>
                  <p className="courses-section__subtitle">
                    {activeCategory === 'skill' ? 'Government-recognized, industry-certified training programs under NSDC, Skill India, and SCGJ.' :
                     activeCategory === 'language' ? 'CEFR-aligned international language programs designed to build global confidence and fluency.' :
                     'Industry-certified skill development programs designed to make you job-ready with practical, hands-on training.'}
                  </p>
                </div>

                <div className="courses-grid">
                  {filteredCourses.map((course, index) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      index={index}
                      onViewDetails={(c) => navigate('/course/' + (c.slug || c.id))}
                      onEnquire={handleEnquire}
                    />
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Upcoming Page Layout */}
                <div className="courses-section__header reveal">
                  <span className="section-label">Programs</span>
                  <h2 className="section-title">Explore Our Programs</h2>
                  <p className="courses-section__subtitle">
                    Exciting new career pathways and courses currently in active development. Enquire now to get early access and updates.
                  </p>
                </div>

                <div className="courses-grid">
                  {UPCOMING_COURSES.map((course, index) => (
                    <CourseCard
                      key={course.id}
                      course={{ ...course, category: 'upcoming' }}
                      index={index}
                      onViewDetails={(c) => navigate('/course/' + (c.slug || c.id))}
                      onEnquire={handleEnquire}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ---- Upcoming Courses (Teaser shown when viewing 'All') ---- */}
      {showFuture && (
        <section className="future-courses" ref={refFuture}>
          <div className={`container ${isFutureVisible ? 'visible' : ''}`}>
            <div className="future-courses__header reveal">
              <span className="section-label">Coming Soon</span>
              <h2 className="section-title">Explore Our Programs</h2>
              <p className="future-courses__subtitle">
                Exciting new programs currently in development. Stay tuned for new courses
                that will further expand your career possibilities.
              </p>
            </div>

            <div className="future-grid stagger-children">
              {UPCOMING_COURSES.map((course) => (
                <div className="future-card-new" key={course.id}>
                  <div className="future-card-new__image-box">
                    <img src={course.image} alt={course.title} className="future-card-new__img" loading="lazy" />
                  </div>
                  <div className="future-card-new__content">
                    <h3 className="future-card-new__title">{course.title}</h3>
                    <p className="future-card-new__desc">{course.shortDesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- FAQ Section ---- */}
      <section className="courses-faq" ref={refFaq}>
        <div className={`container ${isFaqVisible ? 'visible' : ''}`}>
          <div className="courses-faq__header reveal">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="courses-faq__subtitle">
              Quick answers to common questions about our programs, enrolment, and support.
            </p>
          </div>

          <div className="courses-faq__list stagger-children">
            {faqItems.map((item) => (
              <details className="courses-faq__item" key={item.question}>
                <summary className="courses-faq__question">{item.question}</summary>
                <p className="courses-faq__answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA Section ---- */}
      <section className="courses-cta" ref={refCta}>
        <div className={`container ${isCtaVisible ? 'visible' : ''}`}>
          <div className="reveal">
            <h2 className="courses-cta__title">Ready to Build Your Future?</h2>
            <p className="courses-cta__desc">
              Join National Skill Academy and gain the skills, certifications, and industry connections
              you need to launch a successful career.
            </p>
            <button onClick={() => navigate('/contact-us#enquiry-form')} className="btn--white">
              Enroll Now
              <ArrowIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
