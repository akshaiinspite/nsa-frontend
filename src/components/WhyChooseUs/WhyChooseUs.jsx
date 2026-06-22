import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './WhyChooseUs.css';

const TABS = [
  {
    number: '01',
    title: 'Certifications Powered by PDEU and ASAP Kerala',
    image: '/images/why-us-1.png',
  },
  {
    number: '02',
    title: 'Structured curriculum with mandatory attendance',
    image: '/images/why-us-2.png',
  },
  {
    number: '03',
    title: 'Highly Qualified and Experienced faculty',
    image: '/images/why-us-3.png',
  },
  {
    number: '04',
    title: 'Training backed by top institutions - ASAP & PDEU',
    image: '/images/why-us-4.png',
  },
  {
    number: '05',
    title: 'Practical Lab-based Learning',
    image: '/images/why-us-5.png',
  },
  {
    number: '06',
    title: 'Strong Placement Assistance',
    image: '/images/why-us-6.png',
  },
];

const KOCHI_CARDS = [
  {
    title: 'Accessible',
    desc: 'With its excellent connectivity and well-developed infrastructure, Kochi ensures that educational resources are always within reach. Unlike other crowded skill hubs, Kochi strikes the perfect balance — offering all essential facilities in a calm, focused environment ideal for effective learning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    ),
  },
  {
    title: 'Affordable',
    desc: 'Kochi offers a cost-effective alternative to other major skill centres. The lower cost of living allows students to access high-quality coaching and facilities without the heavy financial burden — letting you focus entirely on your growth and preparation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    title: 'Active',
    desc: "Kochi is a city that never sleeps. While many cities slow down after dark, Kochi stays vibrant and active 24/7. This round-the-clock energy ensures that students have flexible access to resources, support, and learning opportunities — anytime they need it.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const [refNSA, isNSAVisible] = useScrollReveal(0.15);
  const [refKochi, isKochiVisible] = useScrollReveal(0.15);

  return (
    <div id="why-choose-us">
      {/* SECTION 1: Why Choose National Skill Academy */}
      <section className="nsa-why" ref={refNSA}>
        <div className={`container nsa-why__inner ${isNSAVisible ? 'visible' : ''}`}>
          <div className="nsa-why__header reveal">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Why choose National Skill Academy?</h2>
            
            <div className="nsa-why__intro-content">
              <p className="nsa-why__text">
                At National Skill Academy, experiential and immersive learning is at the core of everything we do. Our programs are designed to prepare students to solve real-world problems using technology, creativity, skill, and innovation.
              </p>
              <p className="nsa-why__text">
                Our pedagogy is co-designed with industry stalwarts, focusing on employability, enhancing technical and soft skills, and providing exposure to real-life projects across various industries. The objective is to ensure students are ready for tomorrow's workplace.
              </p>
              
              <div className="nsa-why__cta-wrapper">
                <Link to="/contact-us#enquiry-form" className="btn btn--primary">
                  Contact Now
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Grid of 6 Square Tabs/Cards */}
          <div className="nsa-why__cards-grid reveal">
            {TABS.map((tab, index) => (
              <div 
                className="nsa-why__image-card" 
                key={index}
                style={{ backgroundImage: `url(${tab.image})` }}
              >
                <div className="nsa-why__card-overlay" />
                <div className="nsa-why__card-content">
                  <h3 className="nsa-why__card-title">{tab.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Why Kochi */}
      <section className="kochi-why" ref={refKochi}>
        {/* Banner with just the image and title */}
        <div className={`kochi-why__banner ${isKochiVisible ? 'visible' : ''}`}>
          <img src="/images/kochi-bg.png" alt="Kochi Backwaters" className="kochi-why__banner-img" />
          <div className="kochi-why__banner-overlay" />
          <div className="kochi-why__banner-content reveal">
            <h2 className="kochi-why__title">
              <span className="kochi-why__title-serif">Why</span>
              <span className="kochi-why__title-sans">Kochi ?</span>
            </h2>
          </div>
        </div>

        {/* Content below the banner so it doesn't hide the image */}
        <div className={`kochi-why__content ${isKochiVisible ? 'visible' : ''}`}>
          <div className="container">
            <div className="kochi-why__grid">
              {KOCHI_CARDS.map((card, index) => (
                <div 
                  className="kochi-why__card reveal" 
                  key={card.title}
                  style={{ transitionDelay: `${0.15 * (index + 1)}s` }}
                >
                  <div className="kochi-why__card-top">
                    <div className="kochi-why__card-icon">{card.icon}</div>
                    <h3 className="kochi-why__card-label">{card.title}</h3>
                  </div>
                  <div className="kochi-why__card-body">
                    <p className="kochi-why__card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="kochi-why__footer reveal" style={{ transitionDelay: '0.5s' }}>
              <p className="kochi-why__footer-text">
                Kochi’s unique blend of accessibility, affordability, and 24/7 energy creates the perfect environment for dedicated skill aspirants. At National Skill Academy, we harness these strengths to deliver an unmatched platform for your growth — empowering you with the tools, support, and opportunities to turn potential into success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
