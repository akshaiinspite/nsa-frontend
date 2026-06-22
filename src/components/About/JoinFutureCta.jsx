import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './JoinFutureCta.css';

export default function JoinFutureCta() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="join-future" id="join-future" ref={ref}>
      <div className="join-future__wave">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
          <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z" fill="var(--clr-white)" />
        </svg>
      </div>

      <div className="join-future__bg">
        <img
          src="/images/about/join-future-bg.jpg"
          alt="Environmental engineers working at solar farm"
          loading="lazy"
        />
        <div className="join-future__overlay" />
      </div>

      <div className={`container join-future__content ${isVisible ? 'visible' : ''}`}>
        <div className="reveal">
          <span className="join-future__badge">Join the Future</span>
          <h2 className="join-future__title">Join the Future of Skill Development</h2>
          <p className="join-future__desc">
            Whether you're a student starting your journey, a professional upgrading your skills, or an entrepreneur looking to enter the renewable energy space — National Skill Academy is your trusted partner in growth.
          </p>
          <div className="join-future__actions">
            <Link to="/courses" className="btn btn--accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              View Courses
            </Link>
            <Link to="/contact-us#enquiry-form" className="btn btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
