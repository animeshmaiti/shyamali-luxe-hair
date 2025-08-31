import { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import './products.css';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1598188306155-25e400eb5078?auto=format&fit=crop&w=1200&q=80',
    title: 'Lorem ipsum dolor',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, nobis tempora quam ducimus veritatis sint aut adipisci quibusdam repudiandae autem at! At nihil repudiandae dicta obcaecati',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=80',
    title: 'Dolore minus quibusdam',
    desc: 'Enim facilis dolorem maiores quis exercitationem vitae numquam fugiat ex cupiditate deserunt praesentium. Nesciunt autem quasi assumenda exercitationem cupiditate...',
  },
  {
    image:
      'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?auto=format&fit=crop&w=1200&q=80',
    title: 'Sequi provident ratione',
    desc: 'Ipsa quos earum nobis eius voluptates neque dolores mollitia illum quae hic! Aspernatur delectus quas praesentium debitis doloribus velit, fugiat error veritatis est dolorum!',
  },
  {
    image:
      'https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?auto=format&fit=crop&w=1200&q=80',
    title: 'Aspernatur fugiat qui dolorum',
    desc: 'Cupiditate voluptas facere nostrum illum quo mollitia ut natus, maiores ipsam veritatis deserunt dignissimos sed harum perferendis dolores quisquam consequuntur tempore!',
  },
  {
    image:
      'https://images.unsplash.com/photo-1511275539165-cc46b1ee89bf?auto=format&fit=crop&w=1200&q=80',
    title: 'Tempora repellat aliquam',
    desc: 'Odio ullam iure quisquam tempora eaque, dolores officia harum, perspiciatis nobis amet vitae optio, deserunt maxime delectus atque laborum iusto voluptatem.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1596854307943-279e29c90c14?auto=format&fit=crop&w=1200&q=80',
    title: 'Debitis rem soluta nulla',
    desc: 'Eligendi non sunt dolorem nulla iste atque quos suscipit omnis, numquam culpa mollitia, earum inventore, reprehenderit ipsum cumque debitis repellat.',
  },
];

const Products = () => {
  const heroRef = useRef(null);
  const fullsizeWrapRef = useRef(null);
  const slideContentRefs = useRef([]);
  const [fullsizeClones, setFullsizeClones] = useState([]);
  const stateRef = useRef({ top: null, bottom: null });

  // NEW: refs for nav buttons and swiper instance
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!fullsizeWrapRef.current) return;
    const clones = slideContentRefs.current
      .map((el) => {
        if (!el) return null;
        const clone = el.cloneNode(true);
        Splitting({ target: clone, by: 'words' });
        clone.classList.add(
          'hero__content',
          'hero__content--hidden',
          'content--hero'
        );
        clone.classList.remove('content--slide');
        return clone;
      })
      .filter(Boolean);
    clones.forEach((c) => fullsizeWrapRef.current.appendChild(c));
    setFullsizeClones(clones);
    return () => {
      clones.forEach((c) => c.remove());
      stateRef.current = { top: null, bottom: null };
    };
  }, []);

  const showInitial = useCallback(
    (realIndex) => {
      if (!fullsizeClones.length) return;
      const idx =
        ((realIndex % fullsizeClones.length) + fullsizeClones.length) %
        fullsizeClones.length;
      const content = fullsizeClones[idx];
      if (!content) return;
      content.classList.remove('hero__content--hidden');
      content.classList.add('hero__content--top');
      stateRef.current.top = content;
    },
    [fullsizeClones]
  );

  const handleRealIndexChange = useCallback(
    (swiper) => {
      const total = fullsizeClones.length || slides.length;
      if (!total || !heroRef.current) return;

      const idx = ((swiper.realIndex % total) + total) % total;
      const content = fullsizeClones[idx];
      if (!content) return;

      const { top, bottom } = stateRef.current;
      if (bottom) {
        bottom.classList.remove('hero__content--bottom');
        bottom.classList.add('hero__content--hidden');
      }
      if (top) {
        top.classList.remove('hero__content--top');
        top.classList.add('hero__content--bottom');
      }
      stateRef.current.bottom = stateRef.current.top;
      stateRef.current.top = content;

      const slideEl = swiper.slides[swiper.activeIndex];
      const heroRect = heroRef.current.getBoundingClientRect();
      const slideRect = slideEl.getBoundingClientRect();

      content.style.transition = 'none';
      content.style.left = `${slideRect.left - heroRect.left}px`;
      content.style.top = `${slideRect.top - heroRect.top}px`;
      content.style.width = `${slideRect.width}px`;
      content.style.height = `${slideRect.height}px`;
      content.style.borderRadius = 'var(--border-radius, 0)';
      content.getBoundingClientRect();
      content.classList.remove('hero__content--hidden');
      content.classList.add('hero__content--top', 'hero__content--grow');
      content.style.transition = '';
      content.style.left = '';
      content.style.top = '';
      content.style.width = '';
      content.style.height = '';
      content.style.borderRadius = '';

      const onShowTextEnd = (event) => {
        if (event.target !== event.currentTarget) {
          event.currentTarget.classList.remove('hero__content--show-text');
          event.currentTarget.removeEventListener(
            'transitionend',
            onShowTextEnd
          );
        }
      };
      const onGrowEnd = (event) => {
        event.currentTarget.classList.remove('hero__content--grow');
        event.currentTarget.classList.add('hero__content--show-text');
        event.currentTarget.addEventListener('transitionend', onShowTextEnd);
      };
      content.addEventListener('transitionend', onGrowEnd, { once: true });
    },
    [fullsizeClones]
  );

  // Wire navigation after refs exist to avoid selector mismatches
  const handleSwiperInit = useCallback(
    (swiper) => {
      swiperRef.current = swiper;
      // Attach real elements to navigation params, then init/update
      if (nextRef.current && prevRef.current) {
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
      showInitial(swiper.realIndex);
    },
    [showInitial]
  );

  // Optional: also stop autoplay on manual clicks and keep manual mode
  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const stopAuto = () => {
      if (swiper.autoplay) swiper.autoplay.stop();
      swiper.params.autoplay = false; // lock it off
    };
    const nextEl = nextRef.current;
    const prevEl = prevRef.current;
    nextEl?.addEventListener('click', stopAuto);
    prevEl?.addEventListener('click', stopAuto);
    return () => {
      nextEl?.removeEventListener('click', stopAuto);
      prevEl?.removeEventListener('click', stopAuto);
    };
  }, []);

  return (
    <div className="hero" ref={heroRef}>
      <div className="hero__fullsize" ref={fullsizeWrapRef} />
      <Swiper
        modules={[Autoplay, Navigation]}
        className="hero__swiper"
        slidesPerView={3.5}
        spaceBetween={25}
        loop
        speed={1000}
        allowTouchMove={false}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        navigation={{
          // placeholders; real elements attached on init
          nextEl: null,
          prevEl: null,
        }}
        onInit={handleSwiperInit}
        onRealIndexChange={handleRealIndexChange}
        // If DOM changes around buttons, these help keep bindings fresh:
        observer={true}
        observeParents={true}
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="content content--slide"
              ref={(el) => {
                slideContentRefs.current[idx] = el;
              }}
            >
              <img className="content__image" src={s.image} alt="" />
              <div className="content__text">
                <h2 className="content__title">{s.title}</h2>
                <p className="content__desc">{s.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Use unique elements and refs to avoid selector clashes */}
        <div className="swiper-button-prev" ref={prevRef} />
        <div className="swiper-button-next" ref={nextRef} />
      </Swiper>
    </div>
  );
};

export default Products;
