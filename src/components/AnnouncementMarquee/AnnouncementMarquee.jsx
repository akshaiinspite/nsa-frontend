import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config';
import './AnnouncementMarquee.css';

const DEFAULT_ANNOUNCEMENT = {
  text: '3 Day Career Orientation Program on 6th, 7th and 8th July 2026 for the following courses: Oil & Gas, Semiconductor Technology, and Drone Technology.',
  pdfUrl: '/Orientation_Program_Details.pdf'
};

export default function AnnouncementMarquee() {
  const [announcement, setAnnouncement] = useState(DEFAULT_ANNOUNCEMENT);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/announcement`)
      .then((res) => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then((resData) => {
        if (resData.success && resData.data) {
          setAnnouncement(resData.data);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch dynamic announcement. Using default marquee:', err);
      });
  }, []);

  return (
    <div className="announcement-bar">
      <div className="announcement-bar__label">
        <span className="announcement-bar__icon">📢</span>
        <span>ANNOUNCEMENT</span>
      </div>
      <div className="announcement-bar__marquee-container">
        <div className="announcement-bar__marquee">
          <div className="announcement-bar__marquee-track">
            <span className="announcement-bar__text">
              {announcement.text}&nbsp;
              <a href={announcement.pdfUrl} target="_blank" rel="noopener noreferrer" className="announcement-bar__link">
                Click Here to Know More and Register
              </a>
            </span>
            <span className="announcement-bar__text" aria-hidden="true">
              {announcement.text}&nbsp;
              <a href={announcement.pdfUrl} target="_blank" rel="noopener noreferrer" className="announcement-bar__link">
                Click Here to Know More and Register
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
