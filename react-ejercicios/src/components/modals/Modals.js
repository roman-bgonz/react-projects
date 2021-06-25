import React from 'react';
import { useModal } from '../hooks/useModal';
import Modal from './Modal';

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola, este es el contenido de la modal 1</p>
        <img src="https://placeimg.com/400/400/arch" alt="Architecture" />
      </Modal>

      <button onClick={openModal2}>Modal 2</button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otor modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          similique dolorum, fugit dolores laboriosam porro voluptatibus
          excepturi rerum aliquid odit corporis necessitatibus quo numquam quos.
          Quo dolor optio facere quis.
        </p>
        <img src="https://placeimg.com/400/400/nature" alt="Nature" />
      </Modal>
    </div>
  );
};

export default Modals;
