import React from "react";
import styled from "styled-components";

const IntegrateCarouselItem = (props) => {
  return (
    <StyleContainer>
      <div className="image-container"></div>
      <h4>포스트 타입</h4>
      <h3>상속인 중에 미성년자가 있는 경우의 상속재산 분할?</h3>
      <p>박정식 변호사</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 260px;
  .image-container {
    height: 170px;
    background-image: url("/images/image1.s.jpg");
    background-size: cover;
    background-position: center;
  }

  h4 {
    color: #555;
    margin: 0.5rem 0;
  }
  h3 {
    color: #333;
    margin: 1rem 0;
  }
  p {
    color: #555;
    font-weight: bold;
    font-size: 0.9rem;
  }
`;

export default IntegrateCarouselItem;
