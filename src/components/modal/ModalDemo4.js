import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function ModalDemo4() {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  
  function openModal1(){
    setFlag1(true);
  }
  function closeModal1(){
    setFlag1(false);
  }
  function openModal2(){
    setFlag2(true);
  }
  function closeModal2(){
    setFlag2(false);
  }

  return (
    <>
      <Button className="m-1" onClick={openModal1}>Table Inside Modal</Button>
      <Button className="m-1" onClick={openModal2}>Form Inside Modal</Button>

      <Modal show={flag1} onHide={closeModal1}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table className="table table-bordered table-stripped">
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>Centro comercial Moctezuma</td>
              <td>Francisco Chang</td>
              <td>Mexico</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <h2>This is My Footer</h2>
          <Button variant="secondary" onClick={closeModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <hr />
      <Modal show={flag2} onHide={closeModal2}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading2</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </Modal.Body>
        <Modal.Footer>
          <h2>This is My Footer</h2>
          <Button variant="secondary" onClick={closeModal2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
