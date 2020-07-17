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
            usdAmount: '',
            warningShow: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show,
            warningShow: false
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }  

    handleSubmit = (e) => {
        e.preventDefault();
        let deposit = {
            userid: this.props.userid,
            id: 'USD',
            quantity: this.state.usdAmount,
            price: 1,
            usdAmount: this.state.usdAmount,
            txType: 'DEPOSIT USD'

        }
        if(this.state.usdAmount > 0) {
            this.props.deposit(deposit)
            this.props.newTx(deposit)
                .then(() => this.props.history.push('/portfolio'))
            this.setState({
                show: !this.state.show,
                usdAmount: 0,
                warningShow: false,
            })
        }
        else {
            this.setState({
                warningShow: true
            })
        }
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
            
                <Modal.Body className='modalContent'>
                    <div>Input amount to deposit here.</div>
                    <input id="usdAmount" value={this.state.depositAmt} onChange={this.handleChange} type="number" placeholder="$0" />
                    {this.state.warningShow ? <div>Amount must be higher than 0.</div> :''}
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