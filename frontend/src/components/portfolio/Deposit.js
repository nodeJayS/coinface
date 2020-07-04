import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

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

    // componentDidUpdate(prevProps) {
    //     if (this.props.user.usdBalance !== prevProps.user.usdBalance) {
    //         this.setState({user: this.state.user})
    //     }
    // }

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

        }
        this.props.deposit(depositAmt)
        .then(() => this.props.history.push('/portfolio'))
        this.setState({
            show: !this.state.show,
            depositAmt: 0,
        })
    }

    render() {
        return (
            <>
            <Button variant="primary" onClick={this.handleShow}>
                Deposit
            </Button>        

            <Modal show={this.state.show} onHide={this.handleShow}>
                <Form onSubmit={this.handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Deposit</Modal.Title>
                </Modal.Header>
            
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