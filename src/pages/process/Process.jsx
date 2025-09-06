import React from 'react';
import bgAbout from '@assets/banner.jpg';
import process1 from '@assets/new1.jpg';
import process2 from '@assets/new2.jpg';
import process3 from '@assets/new3.jpg';
import { Link } from 'react-router-dom';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';
import './process.css';
import { processItem } from './processItem';

const Process = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.process-hero__inner', { delay: 200 });
    sr.reveal('.process-content .container', { delay: 400 });
    sr.reveal('.process__card', { interval: 100 });
  });
  return (
    <div className="process-page">
      {/* Hero */}
      <section
        className="process-hero section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${bgAbout})`,
        }}
      >
        <div className="container process-hero__inner">
          <h1 className="process-hero__title">How We Process Our Product</h1>
          <nav className="process-hero__breadcrumbs">
            <Link to="/" className="process-crumb">
              Home
            </Link>
            <span className="process-crumb-sep">/</span>
            <span className="process-crumb current">Process</span>
          </nav>
        </div>
      </section>

      {/* Description */}
      <section className="process-content">
        <div className="container">
          <p className="process-lead">
            DCS International Trading Company is a leading manufacturer and
            exporter of 100% Indian Human Hair products including Double Drawn,
            Single Drawn, Remy and Non‑Remy varieties, with extensions,
            closures, and bulk hair across styles from straight to wavy and
            curly.
          </p>
          <p>
            With decades of experience, operations ship significant volumes
            monthly to partners across Asia, Europe, Africa, and North America,
            focusing on consistent quality, ethical sourcing, and customer
            satisfaction.
          </p>
        </div>
      </section>
      <section className="process" id="process">
        <h2 className="section__title">Our Quality Services</h2>
        <div>
          <div className="process__container container">
            {processItem.map((item) => (
              <article key={item.id} className="process__card">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="process__img"
                />
                <div className="process__data">
                  <h2 className="process__title">{item.title}</h2>
                  <span className="process__subtitle">{item.subtitle}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
