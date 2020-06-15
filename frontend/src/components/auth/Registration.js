import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import InputGroup from 'react-bootstrap/InputGroup'

export default class Registration extends Component {
    render() {
        return (
        <>
        <Container>
            <InputGroup className="mb-3">
                <Col>
                    <Form.Control type="String" placeholder="First name" />
                </Col>

                <Col>
                    <Form.Control type="String" placeholder="Last name" />
                </Col>
            </InputGroup>

            <InputGroup className="mb-3">
                <Col>
                    <Form.Control type="email" placeholder="Email address" />
                </Col>
            </InputGroup>

            <InputGroup className="mb-3">
                <Col>
                    <Form.Control type="String" placeholder="Password" />
                </Col>

                <Col>
                    <Form.Control type="String" placeholder="Confirm password" />
                </Col>
            </InputGroup>

            <InputGroup className="mb-3">
                <Col>
                    <Button variant="primary">
                        Create account
                    </Button>
                </Col>
            </InputGroup>
        </Container>
        </>
        )
    }
}
