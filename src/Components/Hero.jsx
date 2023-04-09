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
      <p className='p-4'>Experience these great movies like never before. Enhance your movie watching experience with amazing movie 4k quality visuals. Stream through thousands of movies and shows for free. Download or stream as per your choice. We bring the best of cinema viewing experience to you. Watch 4K movies online free. Free download and streaming, No registration or charges. Watch movie 4k quality videos and audio. Get the best feel of 4K HDR quality visuals on your Tv or laptop.</p>
      </div>
    </div>
    </div>
    

  )
}

export default Hero