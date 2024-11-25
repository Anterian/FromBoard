import './Header.css';
import { useState } from 'react';
import HeaderModal from '../../components/modals/Header/HeaderModal';






function spinWords(string: string){

 return string.split('').forEach(word => {

        if (word.length <= 5) {
          word.split('').reverse()
        }
        
   })
  }



  console.log(spinWords('This is another test'))











const Header = () => {

    const [isHeaderModal, setIsHeaderModal] = useState(false);
    
    return (
        <>
            <div className={`overlay ${isHeaderModal ? 'active' : ''}`}>

            
            <header className='header'>
                <div className="container">
                    <div className="header__inner">


                        <div className="header__logo">
                            <img src={`${process.env.PUBLIC_URL}/images/Logo.png`} alt="" />
                            <div className="logo__text">FromBoard Delivery</div>
                        </div>

                        <div className="header__delivery__info">
                            Доставляем товары из заграницы в Россию <br />
                            <div className="delivery__info__flex">
                                Стоимость от 550 рублей за заказ<br />
                                1 $ = 93 ₽ | 1 € = 99 ₽ | 1 ¥ = 13 ₽ <br />
                            </div>

                        </div>

                        <div className="header__number">
                            <p className="number-tel">+7 (800) 123 45-67</p>
                            <p className="number-free">Звонки по России бесплатны</p>
                        </div>
                    </div>

                    <div className="header__nav">
                        <ul>
                            <li> <a href="#">Калькулятор</a></li>
                            <li> <a href="#section1">О нас</a></li>
                            <li> <a href="#section2">Гарантии</a></li>
                            
                        </ul>
                        <button onClick={() => setIsHeaderModal(true)} style={{borderRadius: '4px'}}>Оставить заявку</button>
                    </div>
                    <HeaderModal isHeaderModal={isHeaderModal} setIsHeaderModal={setIsHeaderModal} />



                </div>
            </header>

            </div>








        
        </>
    )
}

export default Header;