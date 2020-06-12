import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

export default function RegistrationModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Get started
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create account</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
            <Form.Control type="String" placeholder="First name" />
            <Form.Control type="String" placeholder="Last name" />
            <Form.Control type="email" placeholder="Email address" />
            <Form.Control type="password" placeholder="Password" />
              
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Create account
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
  