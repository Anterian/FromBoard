import './HeaderModal.css';
import { useEffect, useState } from 'react';
import InputMask from 'react-input-mask';
import { ChangeEvent } from 'react';

type Props = {
  isHeaderModal: boolean;
  setIsHeaderModal: React.Dispatch<React.SetStateAction<boolean>>;
};










const HeaderModal = ({ isHeaderModal, setIsHeaderModal }: Props) => {
 

    const [numberField, setNumberField] = useState('');
    const [checkFieldError, setCheckFieldError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);


    const sendBid = () => {
        
        

        if (numberField === '') {
            setCheckFieldError(true);
        } else {
            setShowSuccess(true);
            setTimeout(() => {
                
               setIsHeaderModal(false) 
                
              setTimeout (() => {
                setShowSuccess(false)
              },300)


            }, 2000)
            
        }
    }




  useEffect(() => {
    if (isHeaderModal) {
      
      document.body.style.overflow = 'hidden';
    } else {
     
      document.body.style.overflow = 'auto';
    }

  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isHeaderModal]);


  
  return (
    
    <div className={`headerModal ${isHeaderModal ? 'open' : ''}`}>
      {showSuccess ? (
        <p className="success__title">Заявка отправлена! Ожидайте звонка</p>
      ) : (
        <>
          <p className="headerModal-title">Ваш номер телефона для связи</p>

          
          <InputMask
           mask="+7 (999) 999-99-99"
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNumberField(e.target.value)}
            className="headerModal-input"
           
             placeholder="+7 (___) ___-__-__"
          />
                                 
                                    
                                    
                                  
                               



          {checkFieldError && <p className="error-message-header">Заполните поле</p>}
          <button onClick={sendBid} className="headerModal-btn">
            Оставить заявку
          </button>
          <button
            onClick={() =>  {
                setCheckFieldError(false)
                setIsHeaderModal(false)
            }}
            className="headerModal__close-btn"
          >
            &#10006;
          </button>
        </>
      )}
    </div>
  );
}
export default HeaderModal;