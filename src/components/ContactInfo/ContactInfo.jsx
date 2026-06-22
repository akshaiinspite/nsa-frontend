import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="container">
        <div className="contact-info__grid">
          {/* Card 1: Academy Campus */}
          <div className="contact-info__card">
            <div className="contact-info__icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
              </svg>
            </div>
            <h4 className="contact-info__card-title">Academy Campus</h4>
            <p className="contact-info__card-detail">
              NATIONAL SKILL ACADEMY<br />
              Nr. JLN Stadium Metro Station, Metro Pillar No. 549,<br />
              Kaloor - Palarivattom road, Kochi - 682025
            </p>
            <a
              href="https://www.google.com/maps/place/NATIONAL+SKILL+ACADEMY/@10.0013668,76.2984496,17z/data=!3m1!4b1!4m6!3m5!1s0xa341573b5c27b26d:0xe338ac5bd8f2db4a!8m2!3d10.0013615!4d76.3010245!16s%2Fg%2F11vjfmr_m_?entry=ttu&g_ep=EgoyMDI2MDYwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__link"
            >
              Get Directions →
            </a>
          </div>

          {/* Card 2: Corporate Office */}
          <div className="contact-info__card">
            <div className="contact-info__icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h4 className="contact-info__card-title">Corporate Office</h4>
            <p className="contact-info__card-detail">
              Adroit Universe Pvt. Ltd.<br />
              Vembully Lane, Near Power House,<br />
              Vyttila, Kochi – 682019
            </p>
            <a
              href="https://maps.google.com/?q=Adroit+Universe+Pvt+Ltd+Kochi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__link"
            >
              Get Directions →
            </a>
          </div>

          {/* Card 3: Call Us */}
          <div className="contact-info__card">
            <div className="contact-info__icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h4 className="contact-info__card-title">Call Us</h4>
            <p className="contact-info__card-detail">
              For admissions, corporate training, and queries:
            </p>
            <div className="contact-info__phones">
              <a href="tel:+917559843132" className="contact-info__phone-link">+91 75598 43132</a>
              <a href="tel:+917034593132" className="contact-info__phone-link">+91 70345 93132</a>
            </div>
          </div>

          {/* Card 4: Email & Hours */}
          <div className="contact-info__card">
            <div className="contact-info__icon-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h4 className="contact-info__card-title">Email & Working Hours</h4>
            <div className="contact-info__emails">
              <a href="mailto:admissions@nationalskillacademy.net" className="contact-info__email-link">
                admissions@nationalskillacademy.net
              </a>
            </div>
            <p className="contact-info__card-detail contact-info__card-detail--hours">
              <strong>Mon - Sat:</strong> 9:00 AM – 5:30 PM<br />
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
