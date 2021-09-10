import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'

const Gallery = () => {
    return (
        <Carousel fade>
            <CarouselItem>
            <img
            className="d-block w-100"
            src={`${process.env.PUBLIC_URL}/img/bride-decoration-fashion-flowers-265705.jpg`}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
            </CarouselItem>
            
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/photo-of-woman-674268.jpg`}
              alt="Second slide"
            />
        
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${process.env.PUBLIC_URL}/img/photo-of-woman-674268.jpg`}
              alt="Third slide"
            />
        
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
    )
}

export default Gallery

