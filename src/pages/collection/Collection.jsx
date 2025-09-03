import collection1 from '@assets/collection1.jpg';
import collection2 from '@assets/collection2.jpg';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';
import { Link, Outlet } from 'react-router-dom';
import './collection.css';

const Collection = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.collection__explore:nth-child(1)', { origin: 'right' });
    sr.reveal('.collection__explore:nth-child(2)', { origin: 'left' });
  });
  return (
    <section className="collection section" id="collection">
      <div className="collection__container container">
        <div className="collection__explore">
          <div className="collection__data-men">
            <h2 className="collection__title">
              Curly hair <br /> Collection
            </h2>
            <Link to={`collections/${1}`} className="button__link">
              Explore
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
          <img src={collection1} alt="" />
        </div>
        <div className="collection__explore">
          <img src={collection2} alt="" />
          <div className="collection__data-women">
            <h2 className="collection__title">
              Sort hair <br /> Collection
            </h2>
            <Link to={`collections/${2}`} className="button__link">
              Explore
              <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </div>
      <Outlet/>
    </section>
  );
};

export default Collection;
