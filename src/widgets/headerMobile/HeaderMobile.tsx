import { useState, useEffect } from 'react';
import HeaderModal from '../../components/modals/Header/HeaderModal';
import './HeaderMobile.css';




const HeaderMobile = () => {
    const [isHeaderModal, setIsHeaderModal] = useState(false); // Состояние модального окна
    const [showBurger, setShowBurger] = useState(false); // Состояние бургер-меню

    // Управляем блокировкой скролла
    useEffect(() => {
        if (showBurger || isHeaderModal) {
            document.body.style.overflow = 'hidden'; // Блокируем скролл
        } else {
            document.body.style.overflow = ''; // Разблокируем скролл
        }
        return () => {
            document.body.style.overflow = ''; // Сбрасываем стиль при размонтировании
        };
    }, [showBurger, isHeaderModal]); // Срабатывает при изменении состояния меню или модалки

    // Закрытие бургер-меню
    const closeMenu = () => {
        setShowBurger(false);
    };

    return (
        <>
            <div className={`overlayMobile ${isHeaderModal ? 'active' : ''}`}>
                <header className="header-mobile">
                    <div className="container">
                        <div className="header__inner-mobile">
                            <div className="header__logo-mobile">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                                    alt=""
                                />
                                <div className="logo__text-mobile">
                                    FromBoard Delivery
                                </div>
                            </div>
                            <div
                                onClick={() =>
                                    setShowBurger((prevState) => !prevState)
                                }
                                className="header__number-mobile"
                            >
                                <p className="number-tel-mobile">
                                    +7 (800) 123 45-67
                                </p>
                                <div
                                    className={`header-mobile-burger ${
                                        showBurger ? 'active' : ''
                                    }`}
                                >
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <div className="line-3"></div>
                                </div>
                                <p className="number-free-mobile">
                                    Звонки по России бесплатны
                                </p>
                            </div>
                        </div>
                        <div
                            className={`burger__wrapper ${
                                showBurger ? 'active' : ''
                            }`}
                        >
                            <div
                                className={`header__nav-mobile ${
                                    showBurger ? 'active' : ''
                                }`}
                            >
                                <ul>
                                    <li>
                                        <a
                                            href="#section"
                                            onClick={closeMenu} // Закрываем бургер-меню и разблокируем скролл
                                        >
                                            Калькулятор
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section1"
                                            onClick={closeMenu} // Закрываем бургер-меню и разблокируем скролл
                                        >
                                            О нас
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#section2"
                                            onClick={closeMenu} // Закрываем бургер-меню и разблокируем скролл
                                        >
                                            Гарантии
                                        </a>
                                    </li>
                                </ul>
                                <button
                                    onClick={() => {
                                        setIsHeaderModal(true); // Открываем модальное окно
                                        setShowBurger(false); // Закрываем бургер-меню
                                    }}
                                    style={{ borderRadius: '4px' }}
                                >
                                    Оставить заявку
                                </button>
                            </div>
                            <HeaderModal
                                isHeaderModal={isHeaderModal}
                                setIsHeaderModal={setIsHeaderModal}
                            />
                            <div
                                className={`header__delivery__info-mobile ${
                                    showBurger ? 'active' : ''
                                }`}
                            >
                                <p id="hello">
                                    Доставляем товары<br /> из заграницы в Россию{' '}
                                </p>
                                <p id="hello2">
                                    {' '}
                                    Стоимость от 550 рублей<br /> за заказ
                                </p>
                                <p id="hello3">
                                    {' '}
                                    1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽ <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default HeaderMobile;