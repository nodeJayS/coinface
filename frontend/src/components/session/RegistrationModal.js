import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import { withRouter } from 'react-router-dom';
import * as APIUtil from '../../util/session_api_util';

function RegistrationModal() {
    const [show, setShow] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChangeFirstName = (e) => setFirstName(e.target.value);
    const handleChangeLastName = (e) => setLastName(e.target.value);
    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
    const handleChangePassword2 = (e) => setPassword2(e.target.value);

    const handleOnSubmit = (e) => {
      e.preventDefault();

      let user = {
        firstName,
        lastName,
        email,
        password,
        password2,
      };
  
      console.log(user)
      APIUtil.register(user)
      user = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
      };
      handleClose()
    };
  
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
              <Form.Group>
                <Form.Row>
                  <Col>
                    <Form.Control value={firstName} id="firstName" onChange={handleChangeFirstName} type="string" placeholder="First name" />
                  </Col>

                  <Col>
                    <Form.Control value={lastName} id="lastName" onChange={handleChangeLastName} type="string" placeholder="Last name" />
                  </Col>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Control value={email} id="email" onChange={handleChangeEmail} type="email" placeholder="Email address" />
              </Form.Group>

              <Form.Group>
                <Form.Control value={password} id="password" onChange={handleChangePassword} type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group>
                <Form.Control value={password2} id="password2" onChange={handleChangePassword2} type="password" placeholder="Confirm password" />
              </Form.Group>

            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button type="submit" variant="primary" onClick={handleOnSubmit}>
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

export default withRouter(RegistrationModal)