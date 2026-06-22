import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../../config';
import './Gallery.css';

const HARDCODED_GALLERY_ITEMS = [
  {
    id: 16,
    title: 'MoU signing ceremony between NSA and PDEU to jointly promote skill development programs across South India, with a special focus on the renewable energy sector.',
    src: '/images/mou signing.png',
  },
  {
    id: 8,
    title: 'Tripartite MOU signing and exchange between NSA, PDEU and ASAP at Lok Bhavan, Thiruvananthapuram in the esteemed presence of the Kerala Governer, Shri Rajendra V Arlekar, alongside invited diplomats and dignitaries.',
    src: '/images/g10.jpg',
  },
  {
    id: 2,
    title: 'NSA Soft Launch, Lamp Lighting Ceremony',
    src: '/images/g2.jpg',
  },
  {
    id: 1,
    title: 'NSA Soft Launch, Brochure Release Ceremony',
    src: '/images/g1.jpg',
  },
  {
    id: 9,
    title: 'National Conclave on “Transformative Role of Engineers” at FISAT, Angamaly, organised in association with NSA, PDEU and ASAP',
    src: '/images/g11.jpg',
  },
  {
    id: 11,
    title: 'National Conclave on “Transformative Role of Engineers” at FISAT, Angamaly, organised in association with NSA, PDEU and ASAP.',
    src: '/images/g15 (2).jpg',
  },
  {
    id: 3,
    title: 'Celebrating ONAM 2025 @ NSA',
    src: '/images/g3.jpg',
  },
  {
    id: 10,
    title: 'Illuminating minds, inspiring futures. OUR LEADERS',
    src: '/images/g12.jpg',
  },
  {
    id: 4,
    title: 'Christmas Celebration 2025 @NSA',
    src: '/images/g4.jpg',
  },
  {
    id: 5,
    title: 'Valedictory function: NSA faculty training at PDEU',
    src: '/images/g5.jpg',
  },
  {
    id: 6,
    title: 'NSA Global Preventive ONCO Summit 2026, Trivandrum',
    src: '/images/g6.jpg',
  },
  {
    id: 7,
    title: 'Distinguished leaders coming together at the NSA Global Preventive ONCO Summit 2026',
    src: '/images/g8.jpg',
  },
  {
    id: 12,
    title: 'Students at National Skill Academy engaging in a classroom session',
    src: '/images/g16.jpg',
  },
  {
    id: 13,
    title: 'Classroom Session @ NSA',
    src: '/images/g17.jpg',
  },
  {
    id: 17,
    title: 'Students at National Skill Academy engaging in a classroom session',
    src: '/images/students classroom.jpg',
  },
  {
    id: 14,
    title: 'ASAP CMD Dr. Usha Titus’s visit to our academy',
    src: '/images/g18.png',
  },
  {
    id: 15,
    title: 'NSA Stall @ Masters Kerala RE Expo 2026, Tripunithura',
    src: '/images/g19.jpg',
  }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [galleryItems, setGalleryItems] = useState(HARDCODED_GALLERY_ITEMS);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Fetch dynamic gallery items from backend
    fetch(`${API_BASE_URL}/api/gallery`)
      .then((res) => {
        if (!res.ok) throw new Error('API failed');
        return res.json();
      })
      .then((resData) => {
        if (resData.success && resData.data && resData.data.length > 0) {
          setGalleryItems(resData.data);
        }
      })
      .catch((err) => {
        console.warn('Failed to fetch dynamic gallery. Using hardcoded assets instead:', err);
      });
  }, []);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <div className="gallery-page">
      {/* Banner */}
      <section className="contact-banner gallery-banner">
        <div className="contact-banner__overlay" />
        <div className="container contact-banner__content">
          <h1 className="contact-banner__title">Academy Gallery</h1>
          <p className="contact-banner__subtitle">Explore our training sessions, campus events, and celebrations</p>
          <nav className="contact-banner__breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <span className="contact-banner__divider">/</span>
            <span className="contact-banner__current">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Gallery Main */}
      <section className="gallery-main">
        <div className="container">
          {/* Grid */}
          <div className="gallery__grid">
            {galleryItems.map((item, index) => (
              <div
                key={item._id || item.id}
                className="gallery__item animate-scaleIn"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => openLightbox(index)}
              >
                <div className="gallery__image-wrapper">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="gallery__img"
                    style={
                      item.src === '/images/g12.jpg' || item.src === '/images/g10.jpg'
                        ? { objectPosition: 'top' }
                        : {}
                    }
                  />
                  <div className="gallery__overlay">
                    <div className="gallery__zoom-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="gallery__info">
                  <p className="gallery__caption">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox">
            &times;
          </button>
          
          <button className="lightbox__arrow lightbox__arrow--left" onClick={showPrev} aria-label="Previous image">
            &#10094;
          </button>

          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryItems[lightboxIndex].src}
              alt={galleryItems[lightboxIndex].title}
              className="lightbox__img"
            />
            <div className="lightbox__info">
              <p className="lightbox__desc">{galleryItems[lightboxIndex].title}</p>
            </div>
          </div>

          <button className="lightbox__arrow lightbox__arrow--right" onClick={showNext} aria-label="Next image">
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
