import React, { Component } from 'react'
import Modal from 'react-modal';

export default class ModalDemo1 extends Component {
  constructor() {
    super();
    this.state = {
        modalIsOpen: false
    };
}

openModal = ()=> {
    this.setState({ modalIsOpen: true });
}
closeModal = () => {
    this.setState({ modalIsOpen: false });
}
  render() {
    return <div>
    <button onClick={this.openModal} className='m-1'>Open Modal</button>
    <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        contentLabel="Example Modal"
    >

        <button onClick={this.closeModal}>close</button>

        <h2>I am a Modal</h2>
        <div>I am a modal</div>

    </Modal>
</div>
    
  }
}

