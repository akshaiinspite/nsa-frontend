import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ContactForm.css';

const COURSES = [
  'Skill Courses',
  'Language Courses',
  'Upcoming Courses',
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const enquiry = params.get('enquiry');
    if (enquiry) {
      const lowerEnquiry = enquiry.toLowerCase();
      // Define list of future courses to map correctly
      const futureKeywords = ['healthcare', 'fintech', 'ev technology', 'automobile', 'service technician'];
      const languageKeywords = ['language', 'english', 'ielts', 'german', 'french'];

      if (futureKeywords.some(kw => lowerEnquiry.includes(kw))) {
        setFormData((prev) => ({ ...prev, course: 'Upcoming Courses' }));
      } else if (languageKeywords.some(kw => lowerEnquiry.includes(kw))) {
        setFormData((prev) => ({ ...prev, course: 'Language Courses' }));
      } else {
        // Default to Skill Courses for active courses
        setFormData((prev) => ({ ...prev, course: 'Skill Courses' }));
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError('');
    setSuccess(false);

    const serviceId = 'service_tdbvfa2';
    const templateId = 'template_riquzmi';
    const publicKey = '5e1zULsfncqhfl3Kj';

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        course: formData.course,
        message: formData.message,
      },
    };

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setFormData({
            fullName: '',
            phone: '',
            email: '',
            course: '',
            message: '',
          });
        } else {
          return res.text().then((text) => {
            throw new Error(text || 'Failed to send email. Please try again.');
          });
        }
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setSubmitError(error.message || 'Something went wrong. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="contact-form-card">
      <h3 className="contact-form__title">Send an Enquiry</h3>
      <p className="contact-form__desc">
        Have questions about our training programs? Submit your details and we will contact you shortly.
      </p>

      {success && (
        <div className="contact-form__alert contact-form__alert--success">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="alert-icon">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <div>
            <strong>Enquiry Sent Successfully!</strong>
            <p>Our academic advisor will get in touch with you within 24 hours.</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className="contact-form__alert contact-form__alert--error">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="alert-icon">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>{submitError}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className={errors.fullName ? 'form-control error' : 'form-control'}
            disabled={loading}
          />
          {errors.fullName && <span className="error-text">{errors.fullName}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className={errors.phone ? 'form-control error' : 'form-control'}
              disabled={loading}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className={errors.email ? 'form-control error' : 'form-control'}
              disabled={loading}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="course">Course Interested In</label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={errors.course ? 'form-control error' : 'form-control'}
            disabled={loading}
          >
            <option value="">-- Select a Program --</option>
            {COURSES.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <span className="error-text">{errors.course}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your enquiry message here..."
            className={errors.message ? 'form-control error' : 'form-control'}
            disabled={loading}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <button type="submit" className="btn btn--primary btn--submit" disabled={loading}>
          {loading ? (
            <>
              <span className="spinner" />
              Sending Enquiry...
            </>
          ) : (
            'Send Enquiry'
          )}
        </button>
      </form>
    </div>
  );
}
