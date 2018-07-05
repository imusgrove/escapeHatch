import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';


const Auth = (props) => {
    return (
        <Container className="auth-container">
        <h1 href="/">Escape Hatch</h1>
            <Row>
                <Col md="6">
                <Signup setToken={props.setToken}/>
                </Col>
                <Col md="6" className="login-col">
                <Login setToken={props.setToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;