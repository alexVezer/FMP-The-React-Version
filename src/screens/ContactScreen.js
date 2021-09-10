import React from "react";
import { Button, Col, Container, Form, Label, Row } from "react-bootstrap";
import Header from "../components/Header";

const ContactScreen = () => {
  return (
    <Container>
      <Header />
      <Row className="contactIntro spacing">
        <Col lg={8} md={8} sm={11} xs={12} className="center">
          <div>
            <h1>Vrei sa afli mai multe?</h1>
            <h3>Hai sa ne vedem si iti vom raspunde tuturor intrebarilor!</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={8} md={6} xs={12} className="center">
          <Form className="spacing">
            <Form.Group className="mb-3" controlId="inputNameID">
              <Form.Label>Nume</Form.Label>
              <Form.Control type="text" placeholder="Nume" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="inputMailID">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="ControlTextarea">
              <Form.Label>Mesaj</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={4} md={6} sm={8} className="center">
          <Button
            as="input"
            type="submit"
            value="Trimite"
            size="lg"
            variant="outline-secondary"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
