import { useScrollReveal } from '../../hooks';
import './VisionMission.css';

export default function VisionMission() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section className="vm" id="vision-mission" ref={ref}>
      <div className="vm__bg">
        <img src="/images/vision-mission-bg.jpg" alt="Students in modern classroom" />
        <div className="vm__overlay" />
      </div>

      <div className={`container vm__content ${isVisible ? 'visible' : ''}`}>
        <div className="vm__header reveal">
          <span className="section-label" style={{ color: 'var(--clr-accent)' }}>Our Foundation</span>
          <h2 className="section-title section-title--light">Vision & Mission</h2>
        </div>

        <div className="vm__cards">
          <div className="vm__card vm__card--vision reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="vm__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2a10 10 0 0 1 0 20"/>
                <path d="M12 2a10 10 0 0 0 0 20"/>
                <path d="M2 12h20"/>
              </svg>
            </div>
            <div className="vm__card-label">Our Vision</div>
            <h3 className="vm__card-title">Empowering Future Leaders</h3>
            <p className="vm__card-desc">
              To empower students to explore infinite possibilities and become national change-makers equipped with the right skills and strong values.
            </p>
            <a href="#about" className="vm__card-link" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <div className="vm__card vm__card--mission reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="vm__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5Z"/>
                <path d="m2 17 10 5 10-5"/>
                <path d="m2 12 10 5 10-5"/>
              </svg>
            </div>
            <div className="vm__card-label">Our Mission</div>
            <h3 className="vm__card-title">World-Class Education</h3>
            <p className="vm__card-desc">
              To impart world-class education that enables, empowers, and enriches youth to become ethically and socially responsible professionals through structured learning, practical exposure, and continuous mentorship.
            </p>
            <a href="#about" className="vm__card-link" onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Read More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
