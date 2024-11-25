import { useState } from 'react';
import './Calculator.css';
import axios from 'axios';
import CalcModal from '../../components/modals/Calculator/CalcModal';
import InputMask from 'react-input-mask';
import { ChangeEvent } from 'react';






const Calculator = () => {















    const [isModal, setIsModal] = useState(false);


    const [showErrors, setShowErrors] = useState(false);




    const [calcData, setCalcData] = useState({
        name: '',
        mail: '',
        number: '',
        square: '',
        weight: '',
        buyCountry: '',
        buyCity: '',
        devArea: '',
        devCity: '',
    });



    const [updateErrors, setUpdateErrors] = useState({
        name: false,
        mail: false,
        number: false,
        square: false,
        weight: false,
        buyCountry: false,
        buyCity: false,
        devArea: false,
        devCity: false,
    });



    const checkErrors = {
        name: calcData.name.trim() === '',
        mail: calcData.mail.trim() === '',
        number: calcData.number.trim() === '',
        square: calcData.square.trim() === '',
        weight: calcData.weight.trim() === '',
        buyCountry: calcData.buyCountry.trim() === '',
        buyCity: calcData.buyCity.trim() === '',
        devArea: calcData.devArea.trim() === '',
        devCity: calcData.devCity.trim() === '',
    };



    const handleCalcClick = () => {


        setShowErrors(true);


        setUpdateErrors(checkErrors);





        const hasErrors = Object.values(checkErrors).some((error) => error);

        if (!hasErrors) {
            setCalcData(
                {
                    name: '',
                    mail: '',
                    number: '',
                    square: '',
                    weight: '',
                    buyCountry: '',
                    buyCity: '',
                    devArea: '',
                    devCity: '',
                }

            )

            axios
                .post('https://example.com/api/post', {
                    newCalcData: calcData,
                })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });

            setIsModal(true);
        }
    };



    const checkMistakes = (name: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;


        setCalcData((prev) => ({ ...prev, [name]: value }));

        if (showErrors) {
            setUpdateErrors((prevErrors) => ({
                ...prevErrors,
                [name]: value.trim() === '',
            }));
        }
       
    };





    return (
        <div className="container">
            <div className="section__calc">

                <div className="calc__info">
                    <div className="info__texts">

                    
                    <div className="info__title">
                        Без проблемная доставка купленных<br /> вещей из США, Европы и Азии<br /> в Россию
                    </div>
                    <div className="info__sub-title">
                        Сэкономьте на покупках и наслаждайтесь мировыми брендами —
                        <br />
                        наш сервис позволяет вам легко и удобно заказывать товары со всего
                        <br />
                        мира и получать их в России
                    </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/Box.png`} alt="" />
                </div>

                <div className="calc_calculator">
                    <div className="calculator__title">Калькулятор доставки</div>
                    <div className="calculator__subtitle">
                        Посчитайте, сколько будет стоить перевозка <br />
                        покупки из зарубежа
                    </div>




                    <div className="calculator__inputs">
                        <div>
                            <input
                                onChange={e => checkMistakes('name', e)}
                                value={calcData.name}
                                className="input__name"
                                type="text"
                                placeholder="Имя"
                            />
                            {updateErrors.name && <p className="error-message">Заполните поле</p>}
                        </div>

                        <div className="input__groups">
                            <div className="group-1">
                                <div>
                                    <input
                                        onChange={e => checkMistakes('mail', e)}
                                        className="input__mail"
                                        type="text"
                                        placeholder="Почта"
                                        value={calcData.mail}
                                    />
                                    {updateErrors.mail && <p className="error-message">Заполните поле</p>}
                                </div>
                                <div>
                                  <InputMask
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => checkMistakes('number', e)}
                                          mask="+7 (999) 999-99-99"
                                        className="input__number"
                                       placeholder="+7 (___) ___-__-__"
                                      
                                        value={calcData.number}
                                    />
                                   
                                                    
                                   {updateErrors.number && <p className="error-message">Заполните поле</p>}
                                </div>
                            </div>

                            <div className="group-2">
                                <div>
                                    <input
                                        onChange={e => checkMistakes('square', e)}
                                        className="input__area"
                                        type="number"
                                        placeholder="Общая площадь, м&sup2;"
                                        value={calcData.square}
                                    />
                                    {updateErrors.square && <p className="error-message">Заполните поле</p>}
                                </div>
                                <div>
                                    <input
                                        onChange={e => checkMistakes('weight', e)}
                                        className="input__weight"
                                        type="number"
                                        placeholder="Вес, кг"
                                        value={calcData.weight}
                                    />
                                    {updateErrors.weight && <p className="error-message">Заполните поле</p>}
                                </div>
                            </div>

                            <div className="group-3">
                                <div>
                                    <input
                                        onChange={e => checkMistakes('buyCountry', e)}
                                        className="input__country"
                                        type="text"
                                        placeholder="Страна покупки"
                                        value={calcData.buyCountry}
                                    />
                                    {updateErrors.buyCountry && <p className="error-message">Заполните поле</p>}
                                </div>
                                <div>
                                    <input
                                        onChange={e => checkMistakes('buyCity', e)}
                                        className="input__city"
                                        type="text"
                                        placeholder="Город покупки"
                                        value={calcData.buyCity}
                                    />
                                    {updateErrors.buyCity && <p className="error-message">Заполните поле</p>}
                                </div>
                            </div>

                            <div className="group-4">
                                <div>
                                    <input
                                        onChange={e => checkMistakes('devArea', e)}
                                        className="input__dilivery-area"
                                        type="text"
                                        placeholder="Область доставки"
                                        value={calcData.devArea}
                                    />
                                    {updateErrors.devArea && <p className="error-message">Заполните поле</p>}
                                </div>
                                <div>
                                    <input
                                        onChange={e => checkMistakes('devCity', e)}
                                        className="input__dilivery-city"
                                        type="text"
                                        placeholder="Город доставки"
                                        value={calcData.devCity}
                                    />
                                    {updateErrors.devCity && <p className="error-message">Заполните поле</p>}
                                </div>
                            </div>
                        </div>

                        <button onClick={handleCalcClick} id="section1" className="calculator__calc">
                            Заказать расчёт
                        </button>
                        <CalcModal isModal={isModal} setIsModal={setIsModal} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;