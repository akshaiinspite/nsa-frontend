import { useScrollReveal } from '../../hooks';
import './LeadershipTeam.css';

const leadershipMembers = [
  {
    name: 'Dr. M. P. Chandran',
    role: 'Chairman, National Skill Academy – A Division of Adroit Universe Pvt. Ltd. | President, JG University | Chairman, ASIA Charitable Trust',
    image: '/images/chandran.jpg',
    isTop: true,
  },
  {
    name: 'Mr. Jose Mathew',
    role: 'Managing Director, National Skill Academy – A division of Adroit Universe Pvt. Ltd.',
    image: '/images/about/leadership-jose-mathew.png',
  },
  {
    name: 'Mr. Flemy Abraham',
    role: 'Director, National Skill Academy – A division of Adroit Universe Pvt. Ltd.',
    image: '/images/about/leadership-flemy-abraham.png',
  },
  {
    name: 'Ms. Ankita C.',
    role: 'Director, National Skill Academy – A division of Adroit Universe Pvt. Ltd.',
    image: '/images/about/leadership-ankita-c.png',
  },
];

export default function LeadershipTeam() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="leadership-section" id="leadership-team" ref={ref}>
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <div className="leadership-section__header reveal">
          <h2 className="section-title-aqua">Our Visionary Leaders</h2>
        </div>

        <div className="leadership-grid stagger-children">
          {leadershipMembers.map((member, i) => (
            <div className={`leadership-card ${member.isTop ? 'leadership-card--top' : ''}`} key={i}>
              <div className="leadership-card__image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="leadership-card__info">
                <h3 className="leadership-card__name">{member.name}</h3>
                <p className="leadership-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
