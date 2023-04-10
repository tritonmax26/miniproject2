import React from 'react'
import { Carousel } from 'react-bootstrap';
import banner1 from "../assets/HS1.jpg"
import banner2 from "../assets/HS2.jpg"
import banner3 from "../assets/HS3.jpg"

const SearchHero = () => {
  return (
    <div>
    <Carousel className= "karo">
      <Carousel.Item>
        <img
          className="d-block w-100 caroImageSearch"
          src= {banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avengers</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImageSearch"
          src= {banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Jaws</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImageSearch"
          src= {banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Money Heist</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default SearchHero