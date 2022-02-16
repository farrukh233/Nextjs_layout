import kamaz from "../img/kamaz.jpg";

const Section_3 = () => {
  return (
    <div>
      <section className='section__three'>
        <h2 className='section__three__title'>ТРАНСПОРТ</h2>
        <div className='section__three__wrapper'>
          <div className='section__three__img'>
            <img src={kamaz.src} />
          </div>
          <div className='section__three__description'>
            <div className='about'>
              <h3>Автотранспорт</h3>
              <ul>
                <li>Собственная автотранспортная компания</li>
                <li>Перевозка негабаритных и тяжеловесных грузов</li>
                <li>Доставка в любую точку России</li>
              </ul>
            </div>
            <h3 className='section__three__description-info'>
              Железнодорожный <br></br>транспорт
            </h3>
            <p className='section__three__description-info'>
              На заводе имеется ж/д ветка, заходящая в производственное здание
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section_3;
