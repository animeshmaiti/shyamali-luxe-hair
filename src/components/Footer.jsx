import React from 'react';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div>
          <a href="/" className="footer__logo">
            Shop.
          </a>
          <p className="footer__description">
            Committed to bringing you the best products
          </p>
        </div>
        <div className="footer__content">
          <div>
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Category
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contact Info
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Blog</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Popular News
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Recent News
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Office</h3>
            <p className='footer__information'>
              123 Market St, San Francisco, CA 94103 <br/>
              Monday - Friday, 9AM - 6PM <br/>
            </p>
          </div>
          <div>
            <h3 className="footer__title">Contact Us</h3>
            <ul className="footer__social">
              <li>
                <a href="#" target='_blank' className="footer__social-link">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li>
                <a href="#" target='_blank' className="footer__social-link">
                  <i class="ri-instagram-fill"></i>
                </a>
              </li>
              <li>
                <a href="#" target='_blank' className="footer__social-link">
                  <i class="ri-whatsapp-line"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer__info container'>
        <span className='footer__copy'>
          &#169; 2025 Shop. All rights reserved.
        </span>
        <a href="/" className='footer__privacy'>
          Terms & Conditions | Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
