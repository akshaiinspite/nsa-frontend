import { useState } from 'react';
import { useScrollReveal } from '../../hooks';
import './AboutOverview.css';

export default function AboutOverview() {
  const [ref, isVisible] = useScrollReveal(0.15);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="about-overview" id="about-overview" ref={ref}>
      <div className={`container about-overview__inner ${isVisible ? 'visible' : ''}`}>
        <div className="about-overview__header reveal" style={{ width: '100%', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label">About Us – National Skill Academy</span>
          <h2 className="section-title">Empowering India Through Skill Development</h2>
        </div>

        <div className="about-overview__grid">
          <div className="about-overview__image reveal-left">
            <div className="about-overview__image-wrapper">
              <img
                src="/images/nsa studensts.png"
                alt="Students in classroom at National Skill Academy"
                loading="lazy"
              />
            </div>
            <div className="about-overview__image-accent" />
            <div className="about-overview__image-dots" />
          </div>

          <div className="about-overview__content reveal-right">
            <p className="about-overview__text">
              <strong>National Skill Academy (NSA)</strong> is dedicated to empowering individuals through transformative learning experiences that nurture talent, innovation, and professional excellence. Aligned with the vision of the <strong>National Skill Development Corporation (NSDC)</strong> and the <strong>Skill India – Skill Council for Green Jobs (SCGJ)</strong>, we equip learners with the skills, confidence, and adaptability needed to succeed in a rapidly evolving global landscape.
            </p>
            <p className="about-overview__text">
              Through strategic Memorandums of Understanding (MoUs) signed with:
              <br />
              1) <strong>Additional Skill Acquisition Programme Kerala (ASAP Kerala)</strong>, a Government of Kerala undertaking governed by the Higher Education Department, and
              <br />
              2) <strong>Pandit Deendayal Energy University (PDEU)</strong>, Gandhinagar, Gujarat, a premier private university located in Gandhinagar, Gujarat
              <br />
              - National Skill Academy (NSA) has established strong knowledge partnerships that bridge government-led skill development initiatives with practical learning, skill excellence, and employability-focused training.
            </p>

            {isExpanded && (
              <>
                <p className="about-overview__text animate-fadeInUp">
                  At <strong>NSA</strong>, learning extends beyond conventional education. We empower individuals to build new competencies, strengthen existing capabilities, and embrace emerging opportunities across industries. Whether pursuing career advancement, adapting to evolving technologies, or exploring entrepreneurial aspirations, learners are equipped with the knowledge, exposure, and mindset to realise their full potential.
                </p>
                <p className="about-overview__text animate-fadeInUp">
                  Rooted in innovation and industry relevance, <strong>NSA</strong> prepares learners for success beyond boundaries. We empower individuals to embrace opportunities across national and international platforms, enabling them to build careers marked by excellence, innovation, and enduring success.
                </p>
              </>
            )}

            <button
              className="btn btn--primary"
              onClick={() => setIsExpanded(!isExpanded)}
              style={{ alignSelf: 'flex-start', marginTop: '10px' }}
            >
              {isExpanded ? 'Read Less' : 'Read More'}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: isExpanded ? 'rotate(-90deg)' : 'rotate(90deg)',
                  transition: 'transform 0.3s ease',
                  marginLeft: '6px'
                }}
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
