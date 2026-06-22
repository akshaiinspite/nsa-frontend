import { useScrollReveal } from '../../hooks';
import './AboutVisionMission.css';

export default function AboutVisionMission() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="about-vm" id="about-vision-mission" ref={ref}>
      <div className="about-vm__bg" />

      <div className={`container about-vm__inner ${isVisible ? 'visible' : ''}`}>
        <div className="about-vm__header reveal">
          <span className="section-label" style={{ color: 'var(--clr-accent)' }}>Our Foundation</span>
          <h2 className="section-title">Vision &amp; Mission</h2>
        </div>

        <div className="about-vm__grid stagger-children">
          {/* Vision */}
          <div className="about-vm__card">
            <div className="about-vm__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2a10 10 0 0 1 0 20" />
                <path d="M12 2a10 10 0 0 0 0 20" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <div className="about-vm__card-label">Our Vision</div>
            <h3 className="about-vm__card-title">Empowering Future Leaders</h3>
            <p className="about-vm__card-text">
              Skill accessibility for all, industry-focused practical learning, youth and women empowerment, globally recognized certifications, and green innovation and sustainability.
            </p>
          </div>

          {/* Center Image */}
          <div className="about-vm__image">
            <img
              src="/images/about/generated/vision-mission-v2.png"
              alt="Vision and Mission of National Skill Academy"
              loading="lazy"
            />
          </div>

          {/* Mission */}
          <div className="about-vm__card">
            <div className="about-vm__card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </div>
            <div className="about-vm__card-label">Our Mission</div>
            <h3 className="about-vm__card-title">World-Class Education</h3>
            <p className="about-vm__card-text">
                To empower India’s economy by providing a next-generation learning environment where skills meet purpose. Through practical, hands‑on training and global language programs, we develop confident professionals in emerging sectors and technologies, who are equipped to drive national energy independence, achieve self‑employment, build international career opportunities, and shape a sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
