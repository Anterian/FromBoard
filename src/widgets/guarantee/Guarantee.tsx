import './Guarantee.css';
import { useState } from 'react';
import GuarantModal from '../../components/modals/Guarant/GuarantModel';

const Guarantee = () => {
    
    
    const [isGuarantModal, setIsGuarantModal] = useState(false);
    

    return (
        <>
            <div id='section2'className="section__guarantee">
                <div className="container">


                    <p className="guarantee__title">Гарантии качества</p>
                    <p className="guarantee__subtitle">Наши гарантии качества включают в себя полный спектр документов, необходимых <br />для ввоза и вывоза товаров, а также для успешного бизнеса на мировом рынке. <br />
                        Мы предоставляем вам надёжность и уверенность</p>
                    <div className="guarantee__photos">

                        <div className='photo'>
                            <img src="./images/Rectangle1.png" alt="" />
                            <p className="photo__title">Свидетельство о регистрации в РФ</p>
                        </div>

                        <div className='photo'>
                            <img src="./images/Rectangle2.png" alt="" />
                            <p className="photo__title">Свидетельство о регистрации в США</p>
                        </div>

                        <div className='photo'>
                            <img src="./images/Rectangle3.png" alt="" />
                            <p className="photo__title">Свидетельство о регистрации в Китае</p>
                        </div>

                        <div className='photo'>
                            <img src="./images/Rectangle4.png" alt="" />
                            <p className="photo__title">Свидетельство о регистрации в <br />Великобритнии</p>
                        </div>


                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <button onClick={() => setIsGuarantModal(true)} className='guarantee__button'>Показать больше документов</button>
                    </div>
                    <GuarantModal isGuarantModal={isGuarantModal} setIsGuarantModal={setIsGuarantModal}/>

                </div>
            </div>

        </>
    )
}

export default Guarantee;
