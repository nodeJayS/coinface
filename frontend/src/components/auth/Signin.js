import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

export default class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <>
            <Container>
                <Col>
                    <h1>
                        Sign in
                    </h1>
                </Col>
                
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <Col>
                            <input id="email" onChange={this.handleChange} type="email" placeholder="Email address" />
                        </Col>
                    </div>

                    <div className="form-group">
                        <Col>
                            <input id="password" onChange={this.handleChange} type="password" placeholder="Password" />
                        </Col>
                    </div>
                
                    <Col>
                        <button className="btn btn-primary" type="submit">
                            Sign in
                        </button> 
                    </Col>
                </Form>
            </Container>
            </>
        )
    }
}
