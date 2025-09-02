import { Link } from 'react-router-dom';
import home1 from '@assets/home1.jpg';
import home2 from '@assets/home2.jpg';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';
import './home.css';
import Testimonial from '../../components/testimonial/Testimonial';

const Home = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.home__data');
    sr.reveal('.home__images',{delay: 600,origin: 'bottom'})
  });
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">Welcome to Shyamali Luxi Hair</h1>
          <p className="home__description">
            Discover our exclusive collection of premium hair products designed
            to enhance your beauty and confidence.
          </p>
          <Link to="/new" className="button__link">
            Explore New Arrivals <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
        <div className="home__images">
          <img src={home1} alt="home image" />
          <img src={home2} alt="home image" />
        </div>
      </div>
      <Testimonial/>
    </section>
  );
};

export default Home;
