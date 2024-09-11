import Modal from 'react-modal';
import React from 'react'

export default function ModalDemo2() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
  return <div>
  <button onClick={openModal} className='m-1'>Open Modal</button>

  <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      shouldCloseOnOverlayClick={false}>

      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>
      <div>this is a div</div>
      <input />
  </Modal>
</div>
  
}
