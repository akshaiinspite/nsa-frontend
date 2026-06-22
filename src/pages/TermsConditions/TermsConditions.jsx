import { useEffect } from 'react';
import './TermsConditions.css';

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      {/* Banner */}
      <section className="contact-banner terms-banner animate-fadeInUp">
        <div className="contact-banner__overlay" />
        <div className="container contact-banner__content">
          <h1 className="contact-banner__title">Terms & Conditions</h1>
          <p className="contact-banner__subtitle">Rules and guidelines for using our website and services</p>
          <nav className="contact-banner__breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="contact-banner__divider">/</span>
            <span className="contact-banner__current">Terms & Conditions</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-body">
        <div className="container">
          <div className="terms-paper">
            <p className="terms-update-date">Last Updated: June 12, 2026</p>
            
            <div className="terms-intro">
              <p>
                Welcome to <strong>National Skill Academy</strong>. By accessing or using our website (<a href="https://www.nationalskillacademy.net" target="_blank" rel="noopener noreferrer">www.nationalskillacademy.net</a>) and its services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our website or enrolling in any of our programs.
              </p>
            </div>

            <div className="terms-sections-grid">
              <div className="terms-section-card">
                <h2 className="terms-section-title">1. Acceptance of Terms</h2>
                <p>By using our website, registering for courses, or engaging with our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please refrain from using our website or services.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">2. Eligibility</h2>
                <p>Our programs are open to individuals who meet the eligibility requirements specified under each course. National Skill Academy reserves the right to verify the information provided and deny admission if the eligibility criteria are not met.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">3. Course Enrollment and Payments</h2>
                <p>Enrollment in any program is subject to availability and approval by the Academy. Key terms include:</p>
                <ul className="terms-list">
                  <li>Course fees must be paid as per the payment schedule provided at the time of registration.</li>
                  <li>All fees paid are non-refundable, except in cases where a course is canceled by the Academy.</li>
                  <li>The Academy reserves the right to modify, suspend, or discontinue any course at its discretion.</li>
                </ul>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">4. Certification</h2>
                <p>Certificates are issued only to students who successfully complete the course requirements, including attendance, assignments, and assessments.</p>
                <p>All certifications are provided under the approval and standards of NSA / PDEU / ASAP / NSDC / Skill India / Skill Council for Green Jobs.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">5. Code of Conduct</h2>
                <p>Students are expected to maintain professional and ethical behavior during the course. The Academy reserves the right to suspend or dismiss any participant for:</p>
                <ul className="terms-list">
                  <li>Misconduct or inappropriate behavior</li>
                  <li>Plagiarism or academic dishonesty</li>
                  <li>Non-compliance with attendance or assessment requirements</li>
                </ul>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">6. Intellectual Property</h2>
                <p>All website content — including text, images, graphics, logos, videos, and materials — is the property of National Skill Academy and is protected by copyright law.</p>
                <p>You may not reproduce, distribute, or use any material for commercial purposes without written permission.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">7. Website Use</h2>
                <p>Users agree not to:</p>
                <ul className="terms-list">
                  <li>Use the website for illegal or unauthorized purposes</li>
                  <li>Attempt to gain unauthorized access to data or systems</li>
                  <li>Disrupt or damage the website’s functionality</li>
                </ul>
                <p>National Skill Academy reserves the right to restrict or terminate access to any user found violating these terms.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">8. Privacy Policy</h2>
                <p>Your privacy is important to us. Please refer to our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and protect your personal data in accordance with applicable data protection laws.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">9. Limitation of Liability</h2>
                <p>National Skill Academy is not responsible for any direct or indirect damages resulting from:</p>
                <ul className="terms-list">
                  <li>Website downtime or technical errors</li>
                  <li>Misuse of course content</li>
                  <li>Third-party links or external website interactions</li>
                </ul>
                <p className="terms-note">The Academy provides its services “as is,” without any guarantees of performance or outcome.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">10. Amendments</h2>
                <p>We reserve the right to modify or update these Terms and Conditions at any time. Changes will be posted on this page, and the updated date will be revised accordingly. Continued use of the website after changes implies acceptance.</p>
              </div>

              <div className="terms-section-card">
                <h2 className="terms-section-title">11. Governing Law</h2>
                <p>These Terms and Conditions are governed by and construed in accordance with the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Kochi, Kerala.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
