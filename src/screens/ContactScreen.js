import React from 'react'
import { Col, Container, Form, Label, Row } from 'react-bootstrap'
import Header from '../components/Header'

const ContactScreen = () => {
    return (
        <Container>
            <Header/>
            <Row className="contactIntro">
            <h1>Vrei sa aflii mai multe?</h1>
            <h3>Hai sa ne vedem si iti vom raspunde tuturor intrebarilor!</h3>
            </Row>
            <Row className="justify-content-center">
            <Col lg={8} md={6} xs={12} className="center">
            <Form >
                <Form.Group className="mb-3" controlId="contact.inputNameID">
                    <Form.Label>Nume</Form.Label>
                    <Form.Control type="text" placeholder="Nume"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact.inputMailID">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@exemple.com"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact.ControlTextarea">
                    <Form.Label>Mesaj</Form.Label>
                    <Form.Control as="textarea" rows={4}/>
                </Form.Group>
            </Form>
            </Col>
            </Row>
        </Container>
    )
}

export default ContactScreen

    