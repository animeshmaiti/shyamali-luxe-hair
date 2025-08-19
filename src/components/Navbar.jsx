import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Shop.
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/home" className="nav__link">
                <i className="ri-home-line"></i>
                <span>Home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/new" className="nav__link">
                <i className="ri-price-tag-3-line"></i>
                <span>New</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/collection" className="nav__link">
                <i className="ri-compass-line"></i>
                <span>Collection</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/products" className="nav__link">
                <i className="ri-t-shirt-line"></i>
                <span>Products</span>
              </Link>
            </li>
          </ul>
        </div>
        {/*  Theme Change button */}
        <i className='ri-moon-line'></i>
      </nav>
    </header>
  );
};

export default Navbar;
