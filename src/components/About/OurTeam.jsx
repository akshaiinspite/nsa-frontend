import { useScrollReveal } from '../../hooks';
import './OurTeam.css';

export default function OurTeam() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="ourteam-section" id="our-team" ref={ref}>
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <div className="ourteam-section__header reveal">
          <h2 className="section-title-aqua">Our Team</h2>
        </div>

        <div className="ourteam-group-photo reveal">
          <img
            src="/images/nsa teams.jpg"
            alt="National Skill Academy Staff Group Photo"
            className="ourteam-group-photo__img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
