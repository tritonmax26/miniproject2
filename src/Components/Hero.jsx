import React from 'react'
import { Carousel } from 'react-bootstrap';
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"

const Hero = () => {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImages"
          src= {banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImages"
          src= {banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 caroImages"
          src= {banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className='backgroundForMovie flexMovementHero'>
      <div className='heroBoxDotted'>
      <h1 className='pt-4'>Movies for Junkies </h1>
      <p className='p-4'>Experience classic movies like never before with our amazing 4K quality visuals. Enhance your movie watching experience and enjoy timeless cinema with our extensive library of old Hollywood pictures, vintage cinema, and cult classics. Stream thousands of old movies and shows for free with no charges. Download or stream your favorites as per your choice and get the best feel of 4K HDR quality visuals on your TV or laptop.</p>
      </div>
    </div>
    </div>
    

  )
}

export default Hero