import './ContactBanner.css';

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="contact-banner__overlay" />
      <div className="container contact-banner__content">
        <h1 className="contact-banner__title">Contact Us</h1>
        <p className="contact-banner__subtitle">Get in touch with National Skill Academy</p>
        <nav className="contact-banner__breadcrumb" aria-label="breadcrumb">
          <a href="/">Home</a>
          <span className="contact-banner__divider">/</span>
          <span className="contact-banner__current">Contact Us</span>
        </nav>
      </div>
    </section>
  );
}
