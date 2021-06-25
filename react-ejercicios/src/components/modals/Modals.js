import React from 'react';
import Modal from './Modal';

const Modals = () => {
  return (
    <div>
      <h2>Modales</h2>
      <button>Modal 1</button>
      <Modal>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido de la modal 1</p>
        <img src="https://placeimg.com/400/400/arch" alt="Architecture" />
      </Modal>
    </div>
  );
};

export default Modals;
