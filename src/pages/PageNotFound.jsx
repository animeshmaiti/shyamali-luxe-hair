import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <section className="section notfound">
      <div className="container notfound__container">
        <h1 className="notfound__title">404 — Page Not Found</h1>
        <p className="notfound__description">
          The page requested doesn't exist or was moved.
        </p>
        <div className="notfound__actions">
          <Link to="/" className="button__link">
            Go Home <i className="ri-arrow-right-line"></i>
          </Link>
          <Link to="/collection" className="button__link">
            Explore Collections <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
