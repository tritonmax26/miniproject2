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
          <h3>Avengers: Infinity War</h3>
          <p>
          Thanos seeks to collect all six Infinity Stones to wipe out half the universe, forcing the Avengers to team up with other heroes to stop him in this epic battle for the fate of the universe.
          </p>
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
          <p>
          When a great white shark starts attacking beachgoers, a police chief, marine biologist, and fisherman team up to hunt it down in a thrilling and iconic summer blockbuster.
          </p>
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
          A group of criminals led by "The Professor" plan a meticulously planned heist on the Royal Mint of Spain, taking hostages and manipulating the police in this high-stakes thriller.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default SearchHero