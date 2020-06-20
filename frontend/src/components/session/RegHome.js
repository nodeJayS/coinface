import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegistrationModal from './RegistrationModal'

export default class RegistrationBar extends Component {
    render() {
        return (
            <>
                <Form>
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Email address" />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <RegistrationModal />
                            </Col>
                        </Row>
                    </Container>
                </Form>
            </>
        )
    }
}