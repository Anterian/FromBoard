
import { useState } from 'react';
import HeaderModal from '../../components/modals/Header/HeaderModal';
import './HeaderMobile.css';























const HeaderMobile = () => {



    const [isHeaderModal, setIsHeaderModal] = useState(false);
    const [showBurger, setShowBurger] = useState(false);


  


    return (
        <>
            <div className={`overlayMobile ${isHeaderModal ? 'active' : ''}`}>


                <header className='header-mobile'>
                    <div className="container">
                        <div className="header__inner-mobile">


                            <div className="header__logo-mobile">
                                <img src="/images/logo.png" alt="" />
                                <div className="logo__text-mobile">FromBoard Delivery</div>
                            </div>


                            <div onClick={() => setShowBurger(prevState => !prevState)} className="header__number-mobile">
                              
                                
                                <p className="number-tel-mobile">+7 (800) 123 45-67</p>

                                   <div className={`header-mobile-burger ${showBurger ? 'active' : ''}`}>
                                    <div className="line-1"></div>
                                    <div className="line-2"></div>
                                    <div className="line-3"></div>

                                </div>
                                <p className='number-free-mobile' >Звонки по России бесплатны</p>
                            </div>
                        </div>

                         
                       
                        <div className={`burger__wrapper ${showBurger ? 'active' : ''}`}>
                           
                        <div className='for__burger'>

                      

                            <div className={`header__nav-mobile ${showBurger ? 'active' : ''}`}>
                                <ul>
                                    <li> <a href="#section">Калькулятор</a></li>
                                    <li> <a href="#section1">О нас</a></li>
                                    <li> <a href="#section2">Гарантии</a></li>
                                  
                                </ul>
                                <button onClick={() => setIsHeaderModal(true)} style={{ borderRadius: '4px' }}>Оставить заявку</button>
                            </div>
                            <HeaderModal isHeaderModal={isHeaderModal} setIsHeaderModal={setIsHeaderModal} />


                            <div className={`header__delivery__info-mobile ${showBurger ? 'active' : ''}`}>
                                <p id='hello'>Доставляем товары<br /> из заграницы в Россию </p>

                                <p id='hello2'> Стоимость от 550 рублей<br /> за заказ</p>
                                <p id='hello3'>  1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽ <br /></p>

                            </div>



                    
                    
                    </div>
                    </div>









                    </div>
                    





                </header>

            </div>







        </>
    )
}

export default HeaderMobile;