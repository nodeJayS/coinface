import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';

class Withdraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            usdAmount: '',
            warning0: false,
            warningBalance: false,
        };
        this.handleShow = this.handleShow.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show,
            warning0: false,
            warningBalance: false,
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }  

    handleSubmit = (e) => {
        e.preventDefault();
        let withdraw = {
            userid: this.props.userid,
            id: 'USD',
            quantity: this.state.usdAmount,
            price: 1,
            usdAmount: this.state.usdAmount,
            txType: 'WITHDRAW USD'

        }
        if(this.state.usdAmount > 0) {
            if(withdraw.usdAmount <= this.props.usdBalance) {
                this.props.withdraw(withdraw)
                this.props.newTx(withdraw)
                    .then(() => this.props.history.push('/portfolio'))
                this.setState({
                    show: !this.state.show,
                    usdAmount: 0,
                    warning0: false,
                    warningBalance: false,
            })}
            else {
                this.setState({
                    warning0: false,
                    warningBalance: true
                })
            }
        }
        else {
            this.setState({
                warningBalance: false,
                warning0: true
            })
        }
    }

    render() {
        return (
            <>
            <Button variant="primary" onClick={this.handleShow}>
                Withdraw
            </Button>        

            <Modal show={this.state.show} onHide={this.handleShow}>
                <Form onSubmit={this.handleSubmit}>
                <Modal.Header>
                    <Modal.Title>Withdraw</Modal.Title>
                </Modal.Header>
            
                <Modal.Body className='modalContent'>
                    <div>Input amount to withdraw here.</div>
                    <input id="usdAmount" value={this.state.depositAmt} onChange={this.handleChange} type="number" placeholder="$0" />
                    {this.state.warning0 ? <div>Amount must be higher than 0.</div> : ''}
                    {this.state.warningBalance ? <div>Not enough USD in balance.</div> : ''}

                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" variant="primary">
                        Withdraw
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

export default withRouter(Withdraw)