import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const IntegrateCarousel = (props) => {
  const items = [
    { id: 1, title: "item #1" },
    { id: 2, title: "item #2" },
    { id: 3, title: "item #3" },
    { id: 4, title: "item #4" },
    { id: 5, title: "item #5" },
  ];

  return (
    <StyleContainer>
      <Carousel>
        {items.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Carousel>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .rec.rec-arrow {
    border-radius: 0;
    background-color: white;
    box-shadow: none;
  }

  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  .rec-pagination {
    button {
      background-color: orange;
      border: none;
      box-shadow: none;
    }
  }
`;

export default IntegrateCarousel;
