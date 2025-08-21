import React from 'react';
import collection1 from '@assets/collection1.png';
import collection2 from '@assets/collection2.png';

const Collection = () => {
  return (
    <section class="collection section" id="collection">
      <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
            <h2 className="collection__title">Men <br/> Collection</h2>
            <a href="/" className="button__link">
              Explore
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
          <img src={collection1} alt="" />
        </div>
        <div className="collection__explore">
          <img src={collection2} alt="" />
          <div className="collection__data-women">
            <h2 className="collection__title">Women <br/> Collection</h2>
            <a href="/" className="button__link">
              Explore
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
