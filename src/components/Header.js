import React from 'react'
import {Link} from 'react-router-dom'
import { Col, Nav, Row, Item, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <Row >
            <Col lg={4} md={5} sm={8} xs={12} className="logo">
            <Link to="/">
                <img src="/img/logo.png" alt="Fresh Memory Photography" >
                </img>
                </Link>
            </Col>
            <Col lg={8} md={7} sm={12}>
            <Nav className="justify-content-end pageNavigation" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/services">Servicii</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/produse" eventKey="link-1">Produse</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" eventKey="contact">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/despre" eventKey="despre">Despre noi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact" eventKey="contact" >
              <Button variant="outline-secondary">
              Contacteaza-ne!
              </Button>
              </Nav.Link>
            </Nav.Item>
          </Nav>
            </Col>
        </Row>
    )
}

export default Header
