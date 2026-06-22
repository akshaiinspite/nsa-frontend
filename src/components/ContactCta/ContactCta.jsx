import './ContactCta.css';

export default function ContactCta() {
  return (
    <section className="contact-cta">
      <div className="contact-cta__overlay" />
      <div className="container contact-cta__inner">
        <h2 className="contact-cta__title animate-fadeInUp">Ready to Start Your Career Journey?</h2>
        <p className="contact-cta__desc animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Join National Skill Academy and build your future with industry-focused skill development programs.
        </p>
        <div className="contact-cta__actions animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <a href="/#cta" className="btn btn--accent contact-cta__btn">
            Apply Now
          </a>
          <a href="tel:+917034593132" className="btn btn--outline contact-cta__btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '6px', verticalAlign: 'middle' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
}
