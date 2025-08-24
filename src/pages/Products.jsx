import React from 'react';
import product1 from '@assets/product1.png';
import product2 from '@assets/product2.png';
import product3 from '@assets/product3.png';
import product4 from '@assets/product4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Products = () => {
  return (
    <section className="products section" id="products">
      <h2 className="section__title">Products Page</h2>
      <div className="products__container container ">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={32}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={false}
          breakpoints={{
            1024: {
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className="products__slide">
            <article className="products__card">
              <img src={product1} alt="" />
              <h2 className="products__title">Product 1</h2>
              <span className="product__price">$123.55</span>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="products__card">
              <img src={product2} alt="" />
              <h2 className="products__title">Product 2</h2>
              <span className="product__price">$123.55</span>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="products__card">
              <img src={product3} alt="" />
              <h2 className="products__title">Product 3</h2>
              <span className="product__price">$123.55</span>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="products__card">
              <img src={product4} alt="" />
              <h2 className="products__title">Product 4</h2>
              <span className="product__price">$123.55</span>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
