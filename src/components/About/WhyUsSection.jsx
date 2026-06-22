import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './WhyUsSection.css';

const features = [
  {
    title: 'Government-Recognized Training Programs',
    desc: 'under NSDC, Skill India, and SCGJ',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'Strong Placement Assistance',
    desc: 'through verified industry connections',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Practical Lab-Based Learning',
    desc: 'for real industry experience',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
  },
  {
    title: 'Training Backed by Top Institutions',
    desc: 'and technical universities',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
  {
    title: 'Highly Qualified & Experienced Faculty',
    desc: 'Learn directly from experienced professionals and domain experts.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Structured Curriculum with Mandatory Attendance',
    desc: 'to ensure discipline and growth',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export default function WhyUsSection() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="why-us" id="why-us" ref={ref}>
      <div className={`container why-us__inner ${isVisible ? 'visible' : ''}`}>
        <div className="why-us__cards stagger-children">
          {features.map((f, i) => (
            <div className="why-us__card" key={i}>
              <div className="why-us__card-icon">{f.icon}</div>
              <h3 className="why-us__card-title">{f.title}</h3>
              <p className="why-us__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-us__content reveal-right">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Why Us? – Reinventing Learning</h2>
          <p className="why-us__text">
            At National Skill Academy, experiential and immersive learning is at the core of everything we do. Our programs are designed to prepare students to solve real-world problems using technology, creativity, skill, and innovation.
          </p>
          <p className="why-us__text">
            Our pedagogy is co-designed with industry stalwarts, focusing on employability, enhancing technical and soft skills, and providing exposure to real-life projects across various industries. The objective is to ensure students are ready for tomorrow's workplace.
          </p>
          <Link to="/contact-us#enquiry-form" className="btn btn--primary" style={{ alignSelf: 'flex-start', marginTop: '12px' }}>
            Contact Now
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
