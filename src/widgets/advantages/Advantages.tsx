import './Advantages.css';


const Advantages = () => {



    return (
        
        <>
         <div  className="section__advantages">
                    <div className="container">

                        <p  className="our__advantage">Наши преимущества</p>

                        <div className="advantages__rows">
                            
                            <div style={{display: 'flex'}}>

                            
                            <img src="./images/Board.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Расстаможка груза</h2>
                            <p className='advantage__info'>Мы берём на себя все формальности <br />и бумажную волокиту, связанную<br /> с растаможкой груза</p>
                            </div>
                            </div>

                            <div style={{display: 'flex'}}>
                            <img src="./images/Package.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Надёжная упаковка</h2>
                            <p className='advantage__info'>Все товары упаковываются нашими<br /> специалистами с особым вниманием<br /> к деталям, гарантируя, что они дойдут<br /> в безопасности и в отличном состоянии</p>
                            </div>
                            </div>

                            <div style={{display: 'flex'}}>
                            <img style={{marginRight: '6px'}} src="./images/Delivery.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Быстро и выгодно</h2>
                            <p className='advantage__info'>Мы предлагаем быструю и выгодную<br /> доставку, чтобы вы могли насладиться<br /> покупками как можно скорее.</p>
                            </div>
                            </div>




                       
                            
                            <div style={{display: 'flex'}}>

                            
                            <img src="./images/BestSupport.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Удобный сервис</h2>
                            <p className='advantage__info'>Стремимся сделать процесс доставки <br />максимально удобным для вас, чтобы<br /> опыт остался приятным и беззаботным</p>
                            </div>
                            </div>

                            <div style={{display: 'flex'}}>
                            <img src="./images/ClearInfo.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Прозрачность работы</h2>
                            <p className='advantage__info'>Мы предоставляем полный контроль<br /> над каждым этапом доставки, от момента<br /> заказа до момента прибытия заказа</p>
                            </div>
                            </div>

                            <div style={{display: 'flex'}}>
                            <img src="./images/Garantee.png" alt="" />
                            <div className="advantages__info-row">
                            <h2 className='advantage__title'>Страхование груза</h2>
                            <p className='advantage__info'>Наше страхование обеспечивает полную<br /> защиту и покрытие почти все неприятные<br /> и неожиданные ситуации</p>
                            </div>
                            </div>

                            
                        </div>







                        
                    </div>
                </div>

        </>
    )
}

export default Advantages;