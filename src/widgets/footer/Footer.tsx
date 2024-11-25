import './Footer.css';



const Footer = () => {



    return (

        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <div className="footer__first-row">


                            <div className="footer__logo">
                              
                                <div className="footer__text">FromBoard Delivery</div>
                            </div>

                            <div className="footer__nav">
                                <ul>
                                <li> <a href="#">Калькулятор</a></li>
                                 <li> <a href="#section1">О нас</a></li>
                                 <li> <a href="#section2">Гарантии</a></li>
                                
                                </ul>

                            </div>



                            <div className="footer__number">
                                <p className="number-tel-footer">+7 (800) 123 45-67</p>
                                <p className="number-free-footer">Звонки по России бесплатны</p>
                            </div>
                        </div>


                        <p className="footer__right">
                            2024 © Права не защищены, это учебный проект
                        </p>


                        <div className="footer__last-info">
                            <p className="last__info-text">
                                НЕ ЯВЛЯЕТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ. Просим обратить внимание на то, что цены носят информационный и ознакомительный характер, а значит ни в какой мере не являются публичной<br /> офертой, которая определена в ст. 437 ГК РФ. Вся информация на сайте может содержать неточности, орфографические и иные ошибки, она не является полной, окончательно и исчерпывающей
                            </p>

                            <p className="last__info-title">Вёрсткой макета занимался<br /> Лепетуха Антон</p>
                        </div>





                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;