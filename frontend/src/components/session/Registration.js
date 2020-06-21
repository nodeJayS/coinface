import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     if (nextProps.signedIn === true) {
    //       this.props.history.push('/signin');
    //     }
    
    //     this.setState({errors: nextProps.errors})
    // }
    
    handleChange(e) {
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
            password2: this.state.password2
        }
        this.props.register(user)
            .then(() => this.props.history.push('/signin'))
    }
    
    // renderErrors() {
    //     return(
    //         <div>
    //         <ul>
    //             {Object.keys(this.state.errors).map((error, i) => (
    //                 <li key={`error-${i}`}>
    //                 {this.state.errors[error]}
    //                 </li>
    //             ))}
    //         </ul>
    //         </div>
    //     );
    // }

    render() {
        return (
        <>
        <Container>
            <Col>
                <h1>
                    Register
                </h1>
            </Col>
                
            <Form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <Col>
                        <input id="firstName" value={this.state.firstName} onChange={this.handleChange} type="string" placeholder="First name" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col>
                        <input id="lastName" value={this.state.lastName} onChange={this.handleChange} type="string" placeholder="Last name" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col>
                        <input id="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email address" />
                    </Col>
                </div>

                <div className="form-group">
                    <Col>
                        <input id="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Col>
                </div>
                
                <div className="form-group">
                    <Col>
                        <input id="password2" value={this.state.password2} onChange={this.handleChange} type="password" placeholder="Confirm password" />
                    </Col>
                </div>

                <Col>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button> 
                </Col>
            </Form>
        </Container>
        </>
        )
    }
}

export default withRouter(Registration);