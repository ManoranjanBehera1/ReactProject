import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";

export default function ModalDemo3() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={handleShow} className="m-1">click me</Button>
    </>
  );
}
