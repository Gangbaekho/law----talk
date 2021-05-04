import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const SpecificRegionSection = (props) => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  return (
    <SepcificRegionSectionContainer>
      <h2>지역으로 변호사를 찾으세요.</h2>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))}
        </Carousel>
      </div>
    </SepcificRegionSectionContainer>
  );
};

const SepcificRegionSectionContainer = styled.div`
  width: 1080px;
  border: 2px solid black;
  margin: 2rem auto;
`;

export default SpecificRegionSection;
