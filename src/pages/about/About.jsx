import bgAbout from '@assets/product5.jpg';
import './about.css';
import { Link } from 'react-router-dom';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';

const About = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.about-hero__inner', { delay: 200 });
    sr.reveal('.about-content .container', { delay: 400 });
  });
  return (
    <div className='about-page'>
      {/* Hero */}
      <section
        className="about-hero section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bgAbout})`,
        }}
      >
        <div className="container about-hero__inner">
          <h1 className="about-hero__title">Who We Are</h1>
          <nav className="about-hero__breadcrumbs">
            <Link to="/" className="about-crumb">Home</Link>
            <span className="about-crumb-sep">/</span>
            <span className="about-crumb current">About</span>
          </nav>
        </div>
      </section>

      {/* Description */}
      <section className="about-content">
        <div className="container">
          <p className="about-lead">
            DCS International Trading Company is a leading manufacturer and exporter of 100% Indian Human Hair products including Double Drawn, Single Drawn, Remy and Non‑Remy varieties, with extensions, closures, and bulk hair across styles from straight to wavy and curly. 
          </p>
          <p>
            With decades of experience, operations ship significant volumes monthly to partners across Asia, Europe, Africa, and North America, focusing on consistent quality, ethical sourcing, and customer satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
