import { useScrollReveal } from '../../hooks';
import './AdvisoryBoard.css';

const advisoryMembers = [
  {
    name: 'Dr. S. Sundar Manoharan',
    role: 'President, Advisory Board – Planning & Curriculum, National Skill Academy | Director General – PDEU',
    image: '/images/about/advisory-sundar-manoharan.png',
  },
  {
    name: 'Dr. Anirbid Sircar',
    role: 'Vice President, Advisory Board – Planning & Curriculum, National Skill Academy | Director, SOT and Professor in Petroleum Engineering, PDEU',
    image: '/images/about/advisory-anirbid-sircar.jpg',
  },
  {
    name: 'Adv. Meenakshi Lekhi',
    role: 'Member - Advisory Board, National Skill Academy | Former Minister of State for External Affairs of India',
    image: '/images/about/advisory-meenakshi-lekhi.png',
  },
  {
    name: 'Dr. Usha Titus',
    role: 'Member - Advisory Board, National Skill Academy | Former Chairperson & Managing Director – ASAP',
    image: '/images/about/advisory-usha-titus.jpg',
  },
  {
    name: 'Mr. Raju Abraham',
    role: 'Member - Advisory Board, National Skill Academy | Ex MLA, Ranni',
    image: '/images/about/advisory-raju-abraham.jpg',
  },
  {
    name: 'Mr. Sumith George',
    role: 'Member - Advisory Board, National Skill Academy | Social Entrepreneur',
    image: '/images/about/advisory-sumith-george.jpg',
  },
];

export default function AdvisoryBoard() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="advisory-section" id="advisory-board" ref={ref}>
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <div className="advisory-section__header reveal">
          <h2 className="section-title-aqua">Our Advisors</h2>
        </div>

        <div className="advisory-grid stagger-children">
          {advisoryMembers.map((member, i) => (
            <div className="advisory-card" key={i}>
              <img
                src={member.image}
                alt={member.name}
                className="advisory-card__image"
                loading="lazy"
              />
              <div className="advisory-card__info">
                <h3 className="advisory-card__name">{member.name}</h3>
                <p className="advisory-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
