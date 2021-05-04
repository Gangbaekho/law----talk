import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const MainCarousel = (props) => {
  return (
    <CarouselContainer>
      <Carousel showThumbs={false} autoPlay={true} width={1080}>
        <div className="carousel-item">
          <img src="images/image1.s.jpg" />
        </div>
        <div className="carousel-item">
          <img src="images/image1.s.jpg" />
        </div>
        <div className="carousel-item">
          <img src="images/image1.s.jpg" />
        </div>
      </Carousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  margin-top: 2rem;

  .carousel {
    margin: 0 auto;
  }
  .carousel-item img {
    width: 1080px;
    height: 400px;
  }
`;

export default MainCarousel;
