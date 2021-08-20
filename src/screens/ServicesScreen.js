import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Gallery from '../components/Gallery'
import Header from '../components/Header'

const ServicesScreen = () => {
    return (
        <Container>
        <Header/>
            <Row>
            <Col md={4} className="descCard">
                <h2>Fotografie de eveniment</h2>
                <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </Col>
            <Col md={8} className="gallery">
                <Gallery/>
                
            </Col>
            </Row>
            <Row md={4} className="justify-content-md-center">
            
            </Row>
        </Container>
    )
}

export default ServicesScreen
