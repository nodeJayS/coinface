import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password2: '',
            usdBalance: 0,
            errors: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }    
    
    handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            usdBalance: parseInt(this.state.usdBalance)
        }
        this.props.register(user)
            .then((res) =>
                {if(res) {
                    this.setState({
                        errors: (Object.values(res.errors)[0])
                    })
                }
                else {
                    this.props.history.push('/dashboard')
                }
            })
    }


    render() {
        return (
        <div className="container  mx-auto justify-content-center">
            <Col className="d-flex justify-content-center">
                <h1 className="sessionTitle">
                    Register
                </h1>
            </Col>
                
            <div className="container justify-content-center">
                <Form className="sessionCont" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="firstName" value={this.state.firstName} onChange={this.handleChange} type="string" placeholder="First name" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="lastName" value={this.state.lastName} onChange={this.handleChange} type="string" placeholder="Last name" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email address" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Col>
                </div>
                
                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="password2" value={this.state.password2} onChange={this.handleChange} type="password" placeholder="Confirm password" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col className="d-flex justify-content-center">
                        <input id="usdBalance" value={this.state.usdBalance} onChange={this.handleChange} type="number" placeholder="Initial deposit amount" />
                    </Col>
                </div>

                <Col className="d-flex justify-content-center">
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button> 
                </Col>
                <div className="sessionWarnings d-flex justify-content-center">{this.state.errors}</div>
                </Form>
            </div>
        </div>
        )
    }
}

export default withRouter(Registration);