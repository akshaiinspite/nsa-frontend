import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ContactBanner from '../../components/ContactBanner/ContactBanner';
import ContactForm from '../../components/ContactForm/ContactForm';
import GoogleMap from '../../components/GoogleMap/GoogleMap';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import ContactCta from '../../components/ContactCta/ContactCta';
import './Contact.css';

export default function Contact() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="contact-page">
      <ContactBanner />
      
      {/* Form and Map section (immediate section below banner) */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main__grid">
            <div className="contact-main__form-col">
              <div id="enquiry-form">
                <ContactForm />
              </div>
            </div>
            <div className="contact-main__map-col">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />
      <SocialLinks />
      <ContactCta />
    </div>
  );
}
