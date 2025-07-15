import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Container className="p-5">
      <Row className="bg-dark p-5 rouded">
        <Col md={6}>
          {/* Login FORM */}
          <LoginForm />
        </Col>
        <Col md={6}>
          <div>
            <h1>Login</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
