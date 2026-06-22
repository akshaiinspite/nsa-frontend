import { Link } from 'react-router-dom';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="about-hero" id="about-hero">
      <div className="about-hero__bg">
        <img
          src="/images/about/hero-bg.jpg"
          alt="Students in a modern classroom at National Skill Academy"
          loading="eager"
        />
        <div className="about-hero__overlay" />
      </div>

      <div className="about-hero__content">
        <span className="about-hero__label">National Skill Academy</span>
        <h1 className="about-hero__title">About Us</h1>
        <div className="about-hero__breadcrumb">
          <Link to="/">Home</Link>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
          <span>About Us</span>
        </div>
      </div>

      <div className="about-hero__decor">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
          <path d="M0 40C360 80 720 0 1080 40C1260 60 1380 50 1440 40V80H0V40Z" fill="var(--clr-white)" />
        </svg>
      </div>
    </section>
  );
}
