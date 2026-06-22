import { useScrollReveal } from '../../hooks';
import './AsapPartners.css';

export default function AsapPartners() {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <section className="asap-partners" id="asap-partners" ref={ref}>
      <div className={`container asap-partners__inner ${isVisible ? 'visible' : ''}`}>
        <div className="asap-partners__header reveal" style={{ width: '100%', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label">About Our Partners</span>
          <h2 className="section-title">About ASAP (Additional Skill Acquisition Programme)</h2>
        </div>

        <div className="asap-partners__grid-cols">
          <div className="asap-partners__image reveal-left">
            <div className="asap-partners__badge-container">
              <span className="asap-partners__image-badge">Official Partner</span>
            </div>
            <div className="asap-partners__image-wrapper">
              <img
                src="/images/Screenshot 2026-06-10 100130.png"
                alt="ASAP Kerala - Additional Skill Acquisition Programme"
                loading="lazy"
              />
            </div>
          </div>

          <div className="asap-partners__content reveal-right">
            <p className="asap-partners__text">
              ASAP — the Additional Skill Acquisition Programme — is a Section-8 company under the Department of Higher Education, Government of Kerala, established in 2012 to bridge the gap between education and industry. It serves as a trusted link between academia and employers, equipping students and the wider community with skills that make them job-ready.
            </p>
            <p className="asap-partners__text">
              With over <strong>2.5 lakh students trained</strong>, <strong>150+ contemporary courses</strong> across <strong>19 sectors</strong>, and a network of <strong>16 Community Skill Parks</strong> and <strong>126 Skill Development Centres</strong> across Kerala, ASAP has become synonymous with skilling, upskilling, and reskilling in the state.
            </p>
            <div className="asap-partners__highlight">
              <strong>National Skill Academy (NSA)</strong> is proud to be recognized by <strong>ASAP Kerala</strong> as one of its approved training partners, underscoring our commitment to delivering excellence in skill education and workforce development. As a valued partner within ASAP Kerala’s skill ecosystem, NSA contributes to the shared vision of nurturing a highly skilled, competent, and future-ready talent pool equipped to meet the dynamic demands of modern industries.
            </div>

            <div className="asap-partners__stats">
              <div className="asap-partners__stat">
                <div className="asap-partners__stat-number">2.5L+</div>
                <div className="asap-partners__stat-label">Students Trained</div>
              </div>
              <div className="asap-partners__stat">
                <div className="asap-partners__stat-number">150+</div>
                <div className="asap-partners__stat-label">Courses</div>
              </div>
              <div className="asap-partners__stat">
                <div className="asap-partners__stat-number">19</div>
                <div className="asap-partners__stat-label">Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
