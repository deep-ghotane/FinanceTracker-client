import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <Container>
      <Row className="bg-dark p-5">
        <Col md={6}>
          <div>
            <h1>Financial tips</h1>
          </div>
        </Col>
        <Col md={6}>
          {/* fignup form */}
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
