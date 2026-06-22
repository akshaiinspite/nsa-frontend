import { useScrollReveal } from '../../hooks';
import './Partners.css';

const PARTNERS = [
  {
    src: '/images/Screenshot 2026-06-10 100130.png',
    alt: 'Additional Skill Acquisition Programme (ASAP) Kerala',
    title: 'Additional Skill Acquisition Program - ASAP',
    subtitle: 'A Government of Kerala Undertaking',
  },
  {
    src: '/images/Screenshot 2026-06-10 100353.png',
    alt: 'Pandit Deendayal Energy University - PDEU',
    title: 'Pandit Deendayal Energy University - PDEU (Formerly PDPU)',
    subtitle: 'Gandhinagar, Gujarat',
  },
];

export default function Partners() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section className="partners" id="partners" ref={ref}>
      <div className={`container partners__inner ${isVisible ? 'visible' : ''}`}>
        <div className="partners__header reveal">
          <span className="section-label partners__title-large">Our Partners</span>
        </div>

        <div className="partners__grid reveal">
          {PARTNERS.map((partner, i) => (
            <div className="partners__card" key={i}>
              <div className="partners__card-logo">
                <img src={partner.src} alt={partner.alt} />
              </div>
              <div className="partners__card-info">
                <h3 className="partners__card-title">{partner.title}</h3>
                <span className="partners__card-subtitle">{partner.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

