import React from 'react'
import { Col, Container, Image , Row } from 'react-bootstrap'
import Header from '../components/Header'

const AboutScreen = () => {
    return (
        <Container className="container">
        <Header/>
            <Row lg={8} md={10} sm={12} className="justify-content-md-center spacing">
            <Col className="center">
            <Image src="/img/thumbnail.jpg" roundedCircle />
            </Col>
            <Col className="center">
            <Image src="/img/thumbnail.jpg" roundedCircle />
            </Col>
            <Col className="center">
            <Image src="/img/thumbnail.jpg" roundedCircle />
            </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col lg={11} md={10} sm={12} >
                <p className="desc spacing"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas? </p>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutScreen
