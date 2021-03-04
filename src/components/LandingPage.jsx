import React from "react";
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

const carouselItemStyling = {
  height: '500px',
}

const carouselImgStyling = {
  height: '500px'
}

function Landing() {
  return (
    <div className="Landing">
      <Container>

        <Carousel className='mb-5 shadow' interval={2000}>
          <Carousel.Item style={carouselItemStyling}>
            <img
              class="d-block w-100"
              style={carouselImgStyling}
              src={process.env.PUBLIC_URL + "/products/mug.jpg"}
            />
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyling}>
            <img
              class="d-block w-100"
              style={carouselImgStyling}
              src={process.env.PUBLIC_URL + "/products/coozie.jpg"}
            />
          </Carousel.Item>
          <Carousel.Item style={carouselItemStyling}>
            <img
              class="d-block w-100"
              style={carouselImgStyling}
              src={process.env.PUBLIC_URL + "/products/fork.jpg"}
            />
          </Carousel.Item>
        </Carousel>

        <h1>About Our Business</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae nibh gravida, mollis enim sed, ultrices ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dui sapien, euismod sit amet aliquet ac, ultricies ut purus. Aenean venenatis bibendum lectus. Cras placerat lectus eget orci porttitor dictum. Praesent vitae consectetur neque. Cras tempor in lectus sit amet tincidunt. Proin fermentum est sed leo semper, non rutrum ligula imperdiet. Proin porttitor porttitor lacinia. Curabitur imperdiet quis nibh ut facilisis. In ut finibus tellus. Fusce volutpat libero sed nisl placerat, eget bibendum magna hendrerit. Aliquam interdum massa ac nisl lobortis, varius ultrices eros maximus. Donec quis enim nulla. Morbi mollis elit nisl, sit amet viverra felis molestie feugiat.
        </p>

      </Container>
    </div>
  );
}

export default Landing;