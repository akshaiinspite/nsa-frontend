import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks';
import './Cta.css';

export default function Cta() {
  const [ref, isVisible] = useScrollReveal(0.2);

  return (
    <section className="cta-section" id="cta" ref={ref}>
      <div className="cta-section__bg">
        <img src="/images/join-us-bg.jpg" alt="Solar engineer working at photovoltaic station" />
        <div className="cta-section__overlay" />
      </div>

      <div className={`container cta-section__content ${isVisible ? 'visible' : ''}`}>
        <div className="cta-section__text reveal">
          <span className="section-label" style={{ color: 'var(--clr-accent)' }}>Get Started</span>
          <h2 className="section-title section-title--light">
            Ready to Transform Your Future?
          </h2>
          <p className="cta-section__desc">
            At National Skill Academy, we don't just train — we transform. Step into a future full of opportunities and become part of India's growing green energy movement.
          </p>
          <div className="cta-section__actions">
            <a href="tel:+917034593132" className="btn btn--accent">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Contact Us
            </a>
            <Link to="/contact-us#enquiry-form" className="btn btn--outline">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
