import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './About.css';

export default function About() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section className="about" id="about" ref={ref}>
      <div className={`container about__inner ${isVisible ? 'visible' : ''}`}>
        <div className="about__header reveal" style={{ width: '100%', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label">About Us</span>
          <h2 className="section-title">National Skill Academy</h2>
        </div>

        <div className="about__grid">
          <div className="about__image reveal-left">
            <div className="about__image-wrapper">
              <img src="/images/anout us image.jpeg" alt="Collaborative learning at National Skill Academy" />
              <div className="about__image-accent" />
            </div>
          </div>

          <div className="about__content reveal-right">
            <p className="about__text">
              At National Skill Academy, we believe in transforming potential into performance. As part of the <strong>NSDC (National Skill Development Corporation)</strong> and <strong>Skill India – SCGJ (Skill Council for Green Jobs)</strong> initiatives, we provide cutting-edge training programs that empower individuals to achieve success in the evolving global job market.
            </p>
            <p className="about__text">
              Our mission is to equip every learner with practical skills, confidence, and the mindset to thrive in today's fast-changing world — whether they aspire to start a career, upgrade their abilities, or launch their own business.
            </p>

            <Link to="/about-us" className="btn btn--primary">
              Explore More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
