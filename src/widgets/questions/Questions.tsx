import './Questions.css';
import QuestionsModal from '../../components/modals/Questions/QuestionsModal';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { ChangeEvent } from 'react';











const Questions = () => {

    const [isQuestionsModal, setIsQuestionsModal] = useState(false);
    const [startVerify, setStartVerify] = useState(false);


    const [questionData, setQuestionData] = useState({
        name: '',
        mail: '',
        number: '',
        theme: '',
        message: '',
    })



    const [questionErrors, setQuestionErrors] = useState({
        name: false,
        mail: false,
        number: false,
        theme: false,
        message: false,
    })



    const checkErrors = {

        name: questionData.name === '',
        mail: questionData.mail === '',
        number: questionData.number === '',
        theme: questionData.theme === '',
        message: questionData.message === '',
    }


    const updateInput = (name: any, e: any) => {

        const value = e;

        setQuestionData(prevObj => ({...prevObj, [name]: e}));

        
        if (startVerify) {
            if (value !== '') {
                setQuestionErrors(prevObj => ({...prevObj, [name]: false}));
            } else if (value === '') {
                setQuestionErrors(prevObj => ({...prevObj, [name]: true}));
            }
               
            }
        }



   const handleShowModal = () => {

        setStartVerify(true);
        const checkError = Object.values(checkErrors).some(error => error === true);


        
        if (!checkError) {
            
            setIsQuestionsModal(true);

        } else {
            setQuestionErrors(checkErrors);

        }
   }





 
    

    return (
        <>
            <div className="questions">
                <div className="container">
                    

                   <div className="question__wrapper">

                   
                    <p className="questions__title">Остались вопросы?</p>
                    <div className="questions__inputs">
                        <div className="questions__first-row">
                        


                            <input type="text" placeholder="Имя" 
                             value={questionData.name} 
                            onChange={e => updateInput('name', e.target.value)}
                            />


                            
                           {questionErrors.name && <p className='error-message-question-name'>Заполните поле</p>}
                            <input type="text" placeholder="Почта"
                             value={questionData.mail}  
                             onChange={e => updateInput('mail', e.target.value)}
                            />
                          
                           {questionErrors.mail && <p className='error-message-question-mail'>Заполните поле</p>}
                        </div>
                        <div className="questions__second-row">
                                <InputMask
                                    mask="+7 (999) 999-99-99"
                                    value={questionData.number}
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => updateInput('number', e.target.value)}
                                    placeholder="+7 (___) ___-__-__"
                                />
                                
                            {questionErrors.number && <p className='error-message-question-number'>Заполните поле</p>}

                            <input type="text" placeholder="Тема вопроса" 
                             onChange={e => updateInput('theme', e.target.value)}
                             value={questionData.theme} 
                            />
                            {questionErrors.theme && <p className='error-message-question-theme'>Заполните поле</p>}
                        </div>
                        <textarea className='question__long' placeholder="Сообщение..."
                        onChange={e => updateInput('message', e.target.value)}
                        value={questionData.message} 
                        ></textarea>
                        {questionErrors.message && <p className='error-message-question-message'>Заполните поле</p>}

                    </div>
                    <button onClick={handleShowModal} className='question__button'>Оставить заявку</button>
                    </div>
                    <QuestionsModal isQuestionsModal={isQuestionsModal} setIsQuestionsModal={setIsQuestionsModal} setQuestionData={setQuestionData}/>
                </div>
            </div>

        </>
    )

}

export default Questions;