import new1 from '@assets/new1.jpg';
import new2 from '@assets/new2.jpg';
import new3 from '@assets/new3.jpg';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';
import './new.css';

const New = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.new__card', { interval: 100 });
  });
  return (
    <section className="new section" id="new">
      <h2 className="section__title">New Arrivals</h2>
      <div className="new__container container grid">
        <article className="new__card">
          <img src={new1} alt="new image" className="new__img" />
          <a href="/" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Check out</h2>
              <span className="new__subtitle">
                Discover the newest additions
              </span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </a>
        </article>
        <article className="new__card">
          <img src={new2} alt="new image" className="new__img" />
          <a href="/" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Check out our latest products 2</h2>
              <span className="new__subtitle">
                Discover the newest additions to our collection and elevate your
                style.2
              </span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </a>
        </article>
        <article className="new__card">
          <img src={new3} alt="new image" className="new__img" />
          <a href="/" className="new__link">
            <div className="new__data">
              <h2 className="new__title">Check out our latest products 3</h2>
              <span className="new__subtitle">
                Discover the newest additions to our collection and elevate your
                style. 3
              </span>
            </div>
            <i className="ri-arrow-right-line"></i>
          </a>
        </article>
      </div>
    </section>
  );
};

export default New;
