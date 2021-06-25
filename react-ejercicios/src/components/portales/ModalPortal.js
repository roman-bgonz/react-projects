import ReactDOM from 'react-dom';
import '../modals/Modal.css';

/*
 * La propiedad children hace referencia al contendo que se le ponga en modal, ejemplo <Modal>Este es el children</Modal>
 */
const ModalPortal = ({ children, isOpen, closeModal }) => {
  //Evitamos que al dar click dentro de nuestro article, se cierre la modal
  const handleModalContainerClick = (e) => e.stopPropagation();
  return ReactDOM.createPortal(
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modal')
  );
};

export default ModalPortal;
