import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './ExpertSupport.css';

export default function ExpertSupport() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="expert-support" id="expert-support" ref={ref}>
      <div className="expert-support__bg">
        <img
          src="/images/about/hero-bg.jpg"
          alt="Modern classroom environment"
          loading="lazy"
        />
        <div className="expert-support__overlay" />
      </div>

      <div className={`container expert-support__inner ${isVisible ? 'visible' : ''}`}>
        <div className="expert-support__content reveal-left">
          <div className="expert-support__badge">
            <span className="expert-support__badge-dot" />
            Emergency Services
          </div>
          <h2 className="expert-support__title">Our Expert Team is Available</h2>
          <p className="expert-support__desc">
            Our expert support team is always ready to assist you with course guidance, enrollment queries, and career counseling. Whether you need help choosing the right program, understanding certification details, or getting placement assistance, our professionals are just a message away.
          </p>

          <div className="expert-support__features">
            <div className="expert-support__feature">
              <div className="expert-support__feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              Course Guidance
            </div>
            <div className="expert-support__feature">
              <div className="expert-support__feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              Career Counseling
            </div>
            <div className="expert-support__feature">
              <div className="expert-support__feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="m22 8-5 5-2-2" />
                </svg>
              </div>
              Placement Assistance
            </div>
          </div>

          <Link to="/contact-us#enquiry-form" className="btn btn--accent" style={{ alignSelf: 'flex-start' }}>
            Contact Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="expert-support__visual reveal-right">
          <img
            src="/images/about/generated/expert-support-team.png"
            alt="Expert support team at National Skill Academy"
            loading="lazy"
          />
          <div className="expert-support__visual-overlay" />
        </div>
      </div>
    </section>
  );
}
