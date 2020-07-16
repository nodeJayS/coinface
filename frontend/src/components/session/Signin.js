import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
// import Container from 'react-bootstrap/Container'
import { withRouter } from 'react-router-dom';

import DummySignin from './dummy/DummySigninCont'

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
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
            email: this.state.email,
            password: this.state.password
    };

        this.props.signin(user)
            .then(() => this.props.history.push('/dashboard'))
    }
    
    render() {
        return (
            <div className="container mx-auto justify-content-center">
                <Col className="d-flex justify-content-center">
                    <h1 className="sessionTitle">
                        Sign in
                    </h1>
                </Col>
                
                <div className="container justify-content-center">
                    <Form className="sessionCont" onSubmit={this.handleSubmit}>
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
                
                    <Col className="buttonCont d-flex justify-content-sm-around">
                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button> 
                        <DummySignin />
                    </Col>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withRouter(Signin);