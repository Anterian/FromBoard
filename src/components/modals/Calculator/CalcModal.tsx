import './CalcModal.css';
import { useEffect } from 'react';

type Props = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;

};

const CalcModal = ({ isModal, setIsModal }: Props) => {
 


  useEffect(() => {
    if (isModal) {
      
      document.body.style.overflow = 'hidden';
    } else {
     
      document.body.style.overflow = 'auto';
    }

  
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModal]);


  

  return (
    <>
      <div className={`calcModal ${isModal ? 'open' : ''}`}>
        <p className="calcModal-title">
          Ваша заявка отправлена, ответ придёт к вам на почту в течении 2-х рабочих дней.
        </p>
        <button onClick={() => setIsModal(false)} className="calcModal-btn">
          &#10006;
        </button>
      </div>
    </>
  );
};

export default CalcModal;