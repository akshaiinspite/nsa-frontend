import { useScrollReveal } from '../../hooks';
import './PdeuPartners.css';

export default function PdeuPartners() {
  const [ref, isVisible] = useScrollReveal(0.15);

  const stats = [
    { number: '500+', label: 'Faculty & Staff' },
    { number: '9500+', label: 'Students' },
    { number: '200+', label: 'Guest Faculty' },
    { number: '98%', label: 'PhD Faculty' },
    { number: '50+', label: 'Body Associations' },
  ];

  return (
    <section className="pdeu-partners" id="pdeu-partners" ref={ref}>
      <div className={`container pdeu-partners__inner ${isVisible ? 'visible' : ''}`}>
        <div className="pdeu-partners__header reveal" style={{ width: '100%', marginBottom: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span className="section-label">About Our Partners</span>
          <h2 className="section-title">About PDEU (Pandit Deendayal Energy University)</h2>
        </div>

        <div className="pdeu-partners__grid-cols">
          <div className="pdeu-partners__image reveal-left">
            <div className="pdeu-partners__image-wrapper">
              <img
                src="/images/Screenshot 2026-06-10 100353.png"
                alt="PDEU - Pandit Deendayal Energy University"
                loading="lazy"
              />
            </div>
          </div>

          <div className="pdeu-partners__content reveal-right">
            <p className="pdeu-partners__text">
              <strong>PDEU</strong> was established as a Petroleum University in 2007 with a focus on fossil fuels and later emerged as India's only energy university in the year 2021, dedicated to energy education and research. Today, the university has marked its presence as a renowned institution with noteworthy national and international visibility. PDEU is aggressively contributing towards the Nation's <strong>Aatma Nirbhar Bharat Abhiyan</strong>.
            </p>
            <p className="pdeu-partners__text">
              As a Strategic Knowledge Partner of the <strong>National Skill Academy</strong>, PDEU plays a pivotal role in promoting industry-aligned education and innovation-driven learning. Under the visionary leadership of <strong>Dr. S. Sundar Manoharan</strong>, Director General of PDEU, the university continues to strengthen academia-industry collaboration, creating meaningful opportunities for students to gain practical exposure and develop globally relevant competencies. Through this partnership, PDEU significantly contributes to the National Skill Academy’s mission of empowering learners with world-class education, professional excellence, and career-oriented skill development.
            </p>

            <div className="pdeu-partners__quotes">
              <div className="pdeu-partners__quote-card">
                <p className="pdeu-partners__quote-text">
                  "As there is a global quest for more efficiency through Industry 4.0, we are prepared with the opportunity of finding innovative solutions to these challenges, and becoming reservoir of knowledge for radical yet sustainable societal transformation."
                </p>
                <div className="pdeu-partners__quote-author">
                  <strong>Dr. S. Sundar Manoharan</strong>
                  <span>Director General, PDEU</span>
                </div>
              </div>

              <div className="pdeu-partners__quote-card">
                <p className="pdeu-partners__quote-text">
                  "I have always believed that just physical infrastructure of an institution does not make it world class. It is the intellectual infrastructure that matters more. It is the faculty members who have made our institution a Centre of Excellence."
                </p>
                <div className="pdeu-partners__quote-author">
                  <strong>Dr. Mukesh Ambani</strong>
                  <span>Founder President & Chairman of BoG, PDEU</span>
                </div>
              </div>
            </div>

            <div className="pdeu-partners__stats">
              {stats.map((stat, i) => (
                <div className="pdeu-partners__stat" key={i}>
                  <div className="pdeu-partners__stat-number">{stat.number}</div>
                  <div className="pdeu-partners__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
