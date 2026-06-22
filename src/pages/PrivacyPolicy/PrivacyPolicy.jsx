import { useEffect } from 'react';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="policy-page">
      {/* Banner */}
      <section className="contact-banner privacy-banner animate-fadeInUp">
        <div className="contact-banner__overlay" />
        <div className="container contact-banner__content">
          <h1 className="contact-banner__title">Privacy Policy</h1>
          <p className="contact-banner__subtitle">How we collect, use, and protect your information</p>
          <nav className="contact-banner__breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="contact-banner__divider">/</span>
            <span className="contact-banner__current">Privacy Policy</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="policy-body">
        <div className="container">
          <div className="policy-paper">
            <p className="policy-update-date">Last Updated: June 12, 2026</p>
            
            <div className="policy-intro">
              <p>
                At <strong>National Skill Academy</strong>, we are committed to protecting your privacy and ensuring the security of the personal information you share with us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website (<a href="https://nationalskillacademy.net" target="_blank" rel="noopener noreferrer">https://nationalskillacademy.net</a>) or use our services.
              </p>
              <p>
                By accessing our website or registering for our programs, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            <div className="policy-sections-grid">
              <div className="policy-section-card">
                <h2 className="policy-section-title">1. Information We Collect</h2>
                <p>We collect personal and non-personal information to provide and improve our services. This may include:</p>
                
                <div className="policy-sub-section">
                  <h3>a. Personal Information</h3>
                  <ul className="policy-list">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Date of birth</li>
                    <li>Address and location details</li>
                    <li>Educational qualifications</li>
                    <li>Payment or billing information (if applicable)</li>
                  </ul>
                </div>

                <div className="policy-sub-section">
                  <h3>b. Non-Personal Information</h3>
                  <ul className="policy-list">
                    <li>Browser type and version</li>
                    <li>Device information</li>
                    <li>IP address</li>
                    <li>Pages visited and duration of visit</li>
                    <li>Cookies and usage data</li>
                  </ul>
                </div>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">2. How We Use Your Information</h2>
                <p>Your information is used for the following purposes:</p>
                <ul className="policy-list">
                  <li>To process course applications and registrations</li>
                  <li>To communicate important updates, schedules, and notifications</li>
                  <li>To personalize your learning experience</li>
                  <li>To improve our website, courses, and services</li>
                  <li>To send promotional or informational content (only if you opt in)</li>
                  <li>To comply with legal obligations and regulations</li>
                </ul>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">3. Information Sharing and Disclosure</h2>
                <p>We do not sell or rent your personal information to any third party. However, we may share information under the following circumstances:</p>
                <ul className="policy-list">
                  <li>With trusted partners such as NSDC, Skill Councils, or affiliated institutions for certification and verification purposes</li>
                  <li>With service providers who help operate our website, process payments, or communicate with users</li>
                  <li>If required by law, court order, or government authority</li>
                </ul>
                <p className="policy-note">All third parties are bound by confidentiality agreements to ensure your data remains secure.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">4. Data Security</h2>
                <p>We implement advanced security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. These include:</p>
                <ul className="policy-list">
                  <li>Secure Socket Layer (SSL) encryption</li>
                  <li>Regular security audits</li>
                  <li>Restricted access to sensitive information</li>
                </ul>
                <p className="policy-note warning-note">Despite our efforts, no data transmission over the internet is completely secure. You share information at your own risk.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">5. Cookies Policy</h2>
                <p>Our website uses cookies to enhance your browsing experience. Cookies help us:</p>
                <ul className="policy-list">
                  <li>Remember your preferences</li>
                  <li>Improve website performance</li>
                  <li>Analyze site traffic</li>
                </ul>
                <p>You can modify your browser settings to refuse cookies, but some features of the website may not function properly without them.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">6. Third-Party Links</h2>
                <p>Our website may contain links to external websites (such as partner institutions or certification boards). We are not responsible for the privacy practices or content of these external sites. Please review their policies before sharing any information.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="policy-list">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your data</li>
                  <li>Withdraw consent for marketing communications at any time</li>
                  <li>Request a copy of your information (data portability)</li>
                </ul>
                <p>To exercise these rights, contact us at <a href="mailto:admissions@nationalskillacademy.net">admissions@nationalskillacademy.net</a>.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">8. Retention of Data</h2>
                <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy — including legal, accounting, or reporting requirements.</p>
              </div>

              <div className="policy-section-card">
                <h2 className="policy-section-title">9. Updates to This Policy</h2>
                <p>We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. Updates will be posted on this page with a new “Last Updated” date.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
