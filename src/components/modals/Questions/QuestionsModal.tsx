import './QuestionsModal.css';
import { useEffect, useState } from 'react';

type Props = {
    isQuestionsModal: boolean;
    setIsQuestionsModal: React.Dispatch<React.SetStateAction<boolean>>;
    setQuestionData: React.Dispatch<React.SetStateAction<{
        name: string;
        mail: string;
        number: string;
        theme: string;
        message: string;
      }>>;
    
};




const QuestionsModal = ({ isQuestionsModal, setIsQuestionsModal, setQuestionData }: Props) => {

    const [secondModal, setSecondModal] = useState(false);
    const [instantClose, setInstantClose] = useState(false);



    useEffect(() => {
        if (isQuestionsModal || secondModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isQuestionsModal, secondModal]);




    const handleCloseSmooth = () => {
        setIsQuestionsModal(false); 
    };

    const handleCloseInstant = () => {
        setInstantClose(true); 
        setTimeout(() => setIsQuestionsModal(false), 0); 
    };

    const handleSecondModal = () => {
        setQuestionData({
            name: '',
            mail: '',
            number: '',
            theme: '',
            message: '',
        })
        setSecondModal(true);

        handleCloseInstant(); 
     

        setTimeout(() => {
            setSecondModal(false);
            setInstantClose(false);
            
        }, 2000);
    };



    return (
        <>
            <div
                className={`questionModal ${
                    isQuestionsModal
                        ? instantClose
                            ? 'no-animation'
                            : 'open'
                        : 'closing'
                }`}
            >
                <p className="questionModal-title">Отправить заявку?</p>
                <div className="questionsButtons">
                    <button onClick={handleSecondModal} className="questionModal-btn">
                        Да
                    </button>
                    <button onClick={handleCloseSmooth} className="questionModal-btn">
                        Нет
                    </button>
                </div>
            </div>

            {secondModal && (
                <div className="questionModal2 open">
                    <p className="questionModal-title">Успешно отправлено!</p>
                </div>
            )}
        </>
    );
};

export default QuestionsModal;