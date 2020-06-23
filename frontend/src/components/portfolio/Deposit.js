import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';
import * as APIUTil from '../../util/session_api_util'

class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            depositAmt: 0,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }  

    handleSubmit = (e) => {
        e.preventDefault();
        let depositAmt = {
            depositAmt: this.state.depositAmt,
            user: this.props.user

        }
        APIUTil.deposit(depositAmt)
        // this.props.deposit(this.state.depositAmt)
        //     .then(() => this.props.history.push('/dashboard'))
    }

    render() {
        return (
            <>
            <Button variant="primary" onClick={this.handleShow}>
                Deposit
            </Button>        

            <Modal show={this.state.show} onHide={this.handleShow}>
                <Modal.Header>
                    <Modal.Title>Deposit</Modal.Title>
                </Modal.Header>
                
                <Form onSubmit={this.handleSubmit}>
                <Modal.Body>
                        <input id="depositAmt" value={this.state.depositAmt} onChange={this.handleChange} type="number" placeholder="$0.00" />
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" variant="primary">
                        Deposit
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

export default withRouter(Deposit)