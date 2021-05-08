import React from "react";
import styled from "styled-components";

const SideBannerItem = (props) => {
  return (
    <StyleContainer>
      <div>순위</div>
      <div className="image-container">이미지</div>
      <div className="description">
        <h4>변호사이름</h4>
        <p>변호사 소개</p>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.li`
  display: flex;
  margin: 1.5rem 0;
  div {
    margin: 0 0.5rem;
    color: #555;
    font-weight: bold;
    h4 {
      color: black;
    }
  }
`;

export default SideBannerItem;
