import { useScrollReveal } from '../../hooks';
import './OurMentors.css';

const mentorMembers = [
  {
    name: 'Fr. Antony Thampi Thaikkoottathil',
    role: 'Director – Global Language Training Program, National Skill Academy',
    image: '/images/about/advisory-antony-thamby.png',
  },
  {
    name: 'Dr. Anil Kumar K. M',
    role: 'Member – Academic Advisory Board, National Skill Academy | HOD and Associate Professor, Department of Physics, M.S.M. College, Kayamkulam',
    image: '/images/anil.jpg',
  },
  {
    name: 'Dr. Manoj T. R',
    role: 'Member – Academic Advisory Board, National Skill Academy | Head, Department of History, M.S.M. College, Kayamkulam',
    image: '/images/manoj.jpeg',
  },
  {
    name: 'Dr. H. Muthurajan',
    role: 'Member – Academic Advisory Board, National Skill Academy | Associate Professor, National Centre for Nanoscience and Nanotechnology, University of Mumbai.',
    image: '/images/about/advisory-h-muthurajan.png',
  },
];

export default function OurMentors() {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="ourmentors-section" id="our-mentors" ref={ref}>
      <div className={`container ${isVisible ? 'visible' : ''}`}>
        <div className="ourmentors-section__header reveal">
          <h2 className="section-title-aqua">Our Mentors</h2>
        </div>

        <div className="ourmentors-grid stagger-children">
          {mentorMembers.map((member, i) => (
            <div className="ourmentors-card" key={i}>
              <img
                src={member.image}
                alt={member.name}
                className="ourmentors-card__image"
                loading="lazy"
              />
              <div className="ourmentors-card__overlay">
                <h3 className="ourmentors-card__name">{member.name}</h3>
                <p className="ourmentors-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
