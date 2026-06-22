import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutHero from '../../components/About/AboutHero';
import AboutOverview from '../../components/About/AboutOverview';
import AsapPartners from '../../components/About/AsapPartners';
import PdeuPartners from '../../components/About/PdeuPartners';
import AboutVisionMission from '../../components/About/AboutVisionMission';
import AdvisoryBoard from '../../components/About/AdvisoryBoard';
import LeadershipTeam from '../../components/About/LeadershipTeam';
import OurMentors from '../../components/About/OurMentors';
import OurTeam from '../../components/About/OurTeam';
import JoinFutureCta from '../../components/About/JoinFutureCta';

export default function AboutUs() {
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
      <AboutHero />
      <AboutVisionMission />
      <AboutOverview />
      <AsapPartners />
      <PdeuPartners />
      <LeadershipTeam />
      <AdvisoryBoard />
      <OurMentors />
      <OurTeam />
      <JoinFutureCta />
    </>
  );
}
