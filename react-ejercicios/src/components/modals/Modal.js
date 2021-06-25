import './Modal.css';

/*
 * La propiedad children hace referencia al contendo que se le ponga en modal, ejemplo <Modal>Este es el children</Modal>
 */
const Modal = ({ children }) => {
  return (
    <article className="modal-is-open">
      <div className="modal-container">
        <button className="modal-close">X</button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
