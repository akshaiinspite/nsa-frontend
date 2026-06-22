import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import AnnouncementMarquee from '../../components/AnnouncementMarquee/AnnouncementMarquee';
import Partners from '../../components/Partners/Partners';
import About from '../../components/About/About';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Cta from '../../components/Cta/Cta';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AnnouncementMarquee />
      <Partners />
      <About />
      <WhyChooseUs />
      <Cta />
    </>
  );
}
