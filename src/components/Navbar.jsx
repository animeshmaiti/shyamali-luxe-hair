import { useEffect, useRef, useState, useMemo } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';

const DARK_CLASS = 'dark-theme';
const ICON_DARK = 'ri-moon-line';
const ICON_LIGHT = 'ri-sun-line';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();
  const [theme, setTheme] = useState(getInitialTheme);

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

  function getInitialTheme() {
    const saved = localStorage.getItem('selected-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    const prefersDark = window.matchMedia?.(
      '(prefers-color-scheme: dark)'
    )?.matches;
    return prefersDark ? 'dark' : 'light';
  }

  const iconClass = useMemo(
    () => (theme === 'dark' ? ICON_LIGHT : ICON_DARK),
    [theme]
  );
  useEffect(() => {
    document.body.classList.toggle(DARK_CLASS, theme === 'dark');
    localStorage.setItem('selected-theme', theme);
    localStorage.setItem('selected-icon', iconClass);
  }, [theme, iconClass]);

  const themeToggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

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
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  end
                >
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/new"
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  end
                >
                  <span>New</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/collection"
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  end
                >
                  <span>Collection</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  end
                >
                  <span>Products</span>
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav__link ${isActive ? 'nav__link--active' : ''}`
                  }
                  end
                >
                  <span>About Us</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Theme toggle */}
          <button
            className="theme-btn"
            aria-label="Toggle theme"
            onClick={themeToggle}
          >
            <i className={`change-theme ${iconClass}`} id="theme-button"></i>
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
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `drawer__link ${isActive ? 'drawer__link--active' : ''}`
              }
              onClick={handleNavClick}
            >
              <i className="ri-information-line"></i>
              <span>About Us</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
