import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

const IntegrateCarousel = (props) => {
  return (
    <StyleContainer>
      <Carousel className="carousel-container" breakPoints={breakPoints}>
        {props.children}
      </Carousel>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  margin: 5rem 0;

  .carousel-container {
    width: 1200px;
    margin: 0 auto;
  }

  .rec.rec-arrow {
    border-radius: 0;
    background-color: white;
    box-shadow: none;
  }

  .rec.rec-arrow:disabled {
    /* visibility: hidden; */
  }
  .rec-pagination {
    button {
      background-color: orange;
      border: none;
      box-shadow: none;
    }
    .rec-dot_active {
      box-shadow: 0 0 1px 3px #555;
    }
  }
`;

export default IntegrateCarousel;
