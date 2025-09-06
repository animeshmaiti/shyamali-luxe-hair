import './collectionItem.css';
import { useParams } from 'react-router-dom';
import { curlyHairData } from './itemsData';
import { straightHairData } from './itemsData';
import { useRevealOnRoute } from '../../hook/useRevealOnRoute';

const CollectionItem = () => {
  useRevealOnRoute((sr) => {
    sr.reveal('.item__card', { interval: 100 });
  });
  const { id } = useParams();
  const itemsData = id == 1 ? curlyHairData : straightHairData;
  return (
    <section className="item section" id="item">
      <h2 className="section__title">{itemsData[0].section_title}</h2>
      <div className="item__container container grid">
        {itemsData.slice(1).map((item) => (
          <article key={item.id} className="item__card">
            <img src={item.imgSrc} alt={item.title} className="item__img" />
            <a href={item.itemLink} className="item__link">
              <div className="item__data">
                <h2 className="item__title">{item.title}</h2>
                <span className="item__subtitle">
                  {item.subtitle}
                </span>
              </div>
              <i className="ri-arrow-right-line"></i>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CollectionItem;
