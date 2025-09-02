// src/components/testimonial/Testimonial.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonial.css';

const data = [
  {
    name: 'Aarav Sharma',
    title: 'Product Manager',
    company: 'NovaSoft',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    quote:
      'The onboarding was seamless and our team shipped faster within the first week. Highly recommended!',
  },
  {
    name: 'Maya Patel',
    title: 'Founder',
    company: 'Bloomly',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    quote:
      'Beautifully designed and incredibly intuitive—our NPS went up by 18 points after launch.',
  },
  {
    name: 'Aditya Verma',
    title: 'CTO',
    company: 'FinEdge',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 4,
    quote:
      'Great developer experience and solid documentation. Integration took hours, not days.',
  },
  {
    name: 'Sophia Lee',
    title: 'Head of Marketing',
    company: 'Aurora Labs',
    avatar: 'https://i.pravatar.cc/150?img=20',
    rating: 5,
    quote:
      'Campaign performance improved 32% thanks to better insights and faster iteration.',
  },
  {
    name: 'Rahul Nair',
    title: 'Engineering Lead',
    company: 'VectorIQ',
    avatar: 'https://i.pravatar.cc/150?img=47',
    rating: 4,
    quote:
      'Robust, reliable, and delightful to use. The team support is also top-notch.',
  },
];

const Stars = ({ rating }) => (
  <div className="stars" aria-label={`${rating} out of 5 stars`}>
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>
        ★
      </span>
    ))}
  </div>
);

export default function Testimonial() {
  return (
    <section className="testimonial section" aria-label="Customer Testimonials">
      <h2 className="testimonial__heading">What our customers say</h2>
      <Swiper
        className="testimonial__swiper"
        modules={[Pagination, Keyboard, A11y]}
        pagination={{ clickable: true, dynamicBullets: true }}
        keyboard={{ enabled: true }}
        // autoplay={{
        //   delay: 3500,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        spaceBetween={24}
        slidesPerView={1}
        centeredSlides={false}
        watchSlidesProgress
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 28 },
          1280: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {data.map((t, idx) => (
          <SwiperSlide className='testimonial__slide' key={idx}>
            <article className="card">
              <div className="card__quote">“{t.quote}”</div>
              <div className="card__footer">
                <img
                  className="card__avatar"
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                  loading="lazy"
                />
                <div className="card__meta">
                  <div className="card__name">{t.name}</div>
                  <div className="card__role">
                    {t.title} · {t.company}
                  </div>
                </div>
              </div>
              <Stars rating={t.rating} />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
