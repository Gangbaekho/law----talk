import React from "react";
import styled from "styled-components";

const Video = (props) => {
  return (
    <StyleContainer>
      <div className="image-container">이미지</div>
      <div className="video-info">
        <h2>
          아들하고 며느리가 이혼했는데 며느리 대신 할머니인 제가 손자를 양육할
          수 있나요?
        </h2>
        <p>윤유호 변호사</p>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 1080px;
  height: 200px;
  border: 2px solid black;
  margin: 2rem auto;

  .image-container {
    border: 2px solid black;
    background-image: url("/images/image1.s.jpg");
    background-size: cover;
    background-position: center;
  }
  .video-info {
    padding: 1rem;
    border: 2px solid black;
    color: #222;
    p {
      margin: 1rem 0;
      color: #555;
      font-weight: bold;
    }
  }
`;

export default Video;
