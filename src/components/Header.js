import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import { Col, Nav, Row, Item, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <header >
        <Row>
            <Col lg={4} md={5} sm={8} xs={12} className="logo">
            <LinkContainer to={`${process.env.PUBLIC_URL}/`}>
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Fresh Memory Photography"></img> 
            </LinkContainer>
            </Col>

            <Col lg={8} md={7} sm={12}>
            <Nav className="justify-content-end pageNavigation">
            <Nav.Item>
            <LinkContainer to={`${process.env.PUBLIC_URL}/services`}>
              <Nav.Link>Servicii</Nav.Link>
            </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to={`${process.env.PUBLIC_URL}/services`}>
              <Nav.Link>Produse</Nav.Link>
              </LinkContainer>
              </Nav.Item>            
            <Nav.Item>  
              <LinkContainer to={`${process.env.PUBLIC_URL}/despre`}>
              <Nav.Link>Despre noi</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            
            <Nav.Item>
              <LinkContainer to={`${process.env.PUBLIC_URL}/contact`}>
              <Button variant="outline-secondary">
              Contacteaza-ne!
              </Button>
              </LinkContainer>
              </Nav.Item>
          </Nav>
            </Col>
          </Row>
        </header>
    )
}

export default Header
