import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Close with Escape
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);
  const handleNavClick = () => setIsOpen(false);
  return (
    <>
      <header
        ref={headerRef}
        className={`header ${scrolled ? 'scroll-header' : ''}`}
        id="header"
      >
        <nav className="nav container">
          {/* Mobile: hamburger button to the left of the logo */}
          <button
            className="nav__toggle"
            aria-label="Open menu"
            aria-controls="mobile-drawer"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <i className={isOpen ? 'ri-close-line' : 'ri-menu-2-line'}></i>
          </button>

          <Link to="/" className="nav__logo">
            Shop.
          </Link>

          {/* Desktop menu (visible >= 1024px) */}
          <div className="nav__menu nav__menu--desktop">
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

          {/* Theme toggle */}
          <button className="theme-btn" aria-label="Toggle theme">
            <i className="ri-moon-line"></i>
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        className={`drawer__overlay ${isOpen ? 'is-open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Side drawer for mobile */}
      <aside
        id="mobile-drawer"
        className={`drawer ${isOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="drawer__header">
          <span className="drawer__title">Menu</span>
          <button
            className="drawer__close"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <ul className="drawer__list">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'drawer__link--active' : ''}`
              }
              end
              onClick={handleNavClick}
            >
              <i className="ri-home-line"></i>
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'drawer__link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="ri-price-tag-3-line"></i>
              <span>New</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/collection"
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'drawer__link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="ri-compass-line"></i>
              <span>Collection</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'drawer__link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="ri-t-shirt-line"></i>
              <span>Products</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
