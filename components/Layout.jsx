import tanks from "../img/tanks.png";
import arrow from "../img/arrow.png";
const Layout = () => {
  return (
    <div>
      <section className='section__one'>
        <header className='header'>
          <div className='wrapper'>
            <div className='header__wrapper'>
              <div className='header__logo'>
                <svg
                  className='logo'
                  width='39'
                  height='38'
                  viewBox='0 0 39 38'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M11.375 38H0V0H16.8409V10.3636H11.375L19.5 17.2727L27.625 10.3636H22.1591V0H39V38H27.625V22.4545L19.5 29.3636L11.375 22.4545V38Z'
                    fill='#F6F6F6'
                  />
                </svg>
                <p className='header__logo-name'>ПЕЗГИДРОМАШ</p>
              </div>
              <nav className='header__nav'>
                <ul className='header__list'>
                  <li className='header__item'>
                    <a href='#' className='header__link'>
                      КОМПАНИЯ
                    </a>
                  </li>
                  <li className='header__item'>
                    <a href='#' className='header__link'>
                      ПРОДУКТЫ И УСЛУГИ
                    </a>
                  </li>
                  <li className='header__item'>
                    <a href='#' className='header__link'>
                      ПРОЕКТЫ
                    </a>
                  </li>
                  <li className='header__item'>
                    <a href='#' className='header__link'>
                      НОВОСТИ
                    </a>
                  </li>
                  <li className='header__item'>
                    <a href='#' className='header__link'>
                      КОНТАКТЫ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <div className='title__content'>
          <div className='title__about'>
            <p>Главная</p>
            <div class='arrow-2'>
              <div class='arrow-2-top'></div>
              <div class='arrow-2-bottom'></div>
            </div>
            <p>Компания</p>
          </div>
          <h1 className='title__content-h1'>Компания</h1>
          <div className='title__line'></div>
          <span className='title__content-description'>
            <p>
              Основная сфера деятельности «ПензГидромаш» — создание систем для
              нефтяной, газовой, химической и нефтехимической сфер
              промышленности.
            </p>
          </span>
          <img
            className='title__pic'
            src={tanks.src}
            width='900'
            height='809'
          />
        </div>
        <div className='navbar'>
          <div className='navbar__burger'></div>
          <div className='navbar__burger_1'></div>
          <p className='navbar__text'>МЕНЮ</p>
          <p className='navbar__text1'>ЛИСТАЙТЕ ВНИЗ</p>
          <div className='navbar__arrow__line'></div>
          <div className='navbar__arrow__line_1'></div>
          <div className='navbar__arrow__line_2'></div>
          <div className='navbar__arrow__line_3'></div>
          <div className='navbar__arrow__line_4'></div>
          <div className='navbar__arrow__line_5'></div>
        </div>
        <div className='wrapper__burger'>
          <input type='checkbox' id='check-menu' />
          <label for='check-menu'></label>
          <div className='burger-line first'></div>
          <div className='burger-line second'></div>
          <nav className='main-menu'>
            <a className='burger__link' href='#'>
              {" "}
              КОМПАНИЯ
            </a>
            <a className='burger__link' href='#'>
              ПРОЕКТЫ
            </a>
            <a className='burger__link' href='#'>
              ПРОДУКТЫ И УСЛУГИ
            </a>
            <a className='burger__link' href='#'>
              НОВОСТИ
            </a>
            <a className='burger__link' href='#'>
              КОНТАКТЫ
            </a>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Layout;
