import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTypingEffect } from '../../hooks';
import './Hero.css';

const HERO_SLIDES = [
  {
    image: '/banners/hero-solar-v2.png',
    alt: 'Solar PV Installer & Green Jobs Training',
    label: 'Green Energy',
  },
  {
    image: '/banners/hero-solar-engineers.webp',
    alt: 'Solar Farm Engineers with Photovoltaic Panels',
    label: 'Solar Farm',
  },
  {
    image: '/banners/hero-drone.png',
    alt: 'Industrial Drone Technology Training',
    label: 'Drone Tech',
  },
  {
    image: '/banners/hero-petroleum.png',
    alt: 'Petroleum Engineering & Exploration Geology',
    label: 'Petroleum',
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const typingText = useTypingEffect(
    ['with National Skill Academy', 'with Green Job Skills'],
    70,
    35,
    2500
  );

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      {/* Background Slides */}
      <div className="hero__bg">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.alt}
            className={`hero__bg-slide ${index === activeSlide ? 'hero__bg-slide--active' : ''}`}
          />
        ))}
        <div className="hero__overlay" />
      </div>

      {/* Animated Grid Lines */}
      <div className="hero__grid-lines" aria-hidden="true">
        <span /><span /><span /><span />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className={`hero__content ${isLoaded ? 'hero__content--loaded' : ''}`}>


          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--1">Empowering Skills.</span>
            <span className="hero__title-line hero__title-line--2">
              Enabling <span className="hero__title-gradient">Futures.</span>
            </span>
          </h1>

          <div className="hero__typing">
            <span className="hero__typing-text">{typingText}</span>
            <span className="hero__typing-cursor" />
          </div>

          <p className="hero__subtitle">
            Government-recognized training that bridges education and employment
            through innovation, technology, and real-world experience.
          </p>

          <div className="hero__actions">
            <Link to="/contact-us#enquiry-form" className="hero__btn hero__btn--primary">
              <span>Enquire Now</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            <Link to="/courses" className="hero__btn hero__btn--ghost">
              <span>Explore Programs</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
            </Link>
          </div>


        </div>
      </div>

      {/* Slider Navigation */}
      <div className="hero__slider-nav">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={index}
            className={`hero__slider-btn ${index === activeSlide ? 'hero__slider-btn--active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="hero__slider-btn-progress" />
            <span className="hero__slider-btn-label">{slide.label}</span>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll" onClick={() => handleScroll('about')}>
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
