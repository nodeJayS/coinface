import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

class DummySignin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            usdAmount: '',
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: 'test@test.com',
            password: 'password'
            };

        this.props.signin(user)
            .then(() => this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <>
            <Button className="startButton" variant="success" onClick={this.handleShow}>
                Quick start
            </Button>        

            <Modal show={this.state.show} onHide={this.handleShow}>
                <Form onSubmit={this.handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Quick start</Modal.Title>
                </Modal.Header>

                <Modal.Body className='modalContent'>
                    <div>
                        Use this to sign in with a demo account if you want to try out this website's features without registering!
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" variant="primary">
                        Sign in with demo account
                    </Button>   

                    <Button variant="secondary" onClick={this.handleShow}>
                        Cancel
                    </Button> 
                </Modal.Footer>
                </Form>           
            </Modal>
            </>
        )
    }
}

export default withRouter(DummySignin)