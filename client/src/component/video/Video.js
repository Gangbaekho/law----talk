import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Video = ({ id, videoThumbNailUrl, title, mongoLawyer }) => {
  const history = useHistory();

  return (
    <StyleContainer
      onClick={() => {
        history.push(`/video/videoIds/${id}`);
      }}
    >
      <div className="image-container">{videoThumbNailUrl}</div>
      <div className="video-info">
        <h2>{title}</h2>
        <p>{mongoLawyer.lawyerName} 변호사</p>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 1080px;
  height: 200px;
  margin: 2rem auto;
  cursor: pointer;

  .image-container {
    background-image: url("/images/image1.s.jpg");
    background-size: cover;
    background-position: center;
  }
  .video-info {
    padding: 1rem;
    color: #222;
    p {
      margin: 1rem 0;
      color: #555;
      font-weight: bold;
    }
  }
`;

export default Video;
