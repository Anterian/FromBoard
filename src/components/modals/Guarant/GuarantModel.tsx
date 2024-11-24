
import { useEffect } from "react";
import './GuarantModel.css';


type Props = {
    isGuarantModal: boolean;
    setIsGuarantModal: React.Dispatch<React.SetStateAction<boolean>>;
  };
  


const GuarantModal = ({ isGuarantModal, setIsGuarantModal }: Props) => {
 


    useEffect(() => {

      if (isGuarantModal) {
        
        document.body.style.overflow = 'hidden';
      } else {
       
        document.body.style.overflow = 'auto';
      }
  
    
      return () => {
        document.body.style.overflow = 'auto';
      };
    }, [isGuarantModal]);
  
  
    
  
    return (
      <>
        <div className={`guarantModal ${isGuarantModal ? 'open' : ''}`}>
          <p className="guarantModal-title">
            Пока что это все доступные документы
          </p>
          <button onClick={() => setIsGuarantModal(false)} className="guarantModal-btn">
            Хорошо
          </button>

        </div>
      </>
    );
  };
  
  export default GuarantModal;