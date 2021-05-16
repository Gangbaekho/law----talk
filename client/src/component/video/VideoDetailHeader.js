import React from "react";
import styled from "styled-components";

const VideoDetailHeader = (props) => {
  return (
    <StyleContainer>
      <div className="title">
        <h3>동영상</h3>
      </div>
      <div className="video-container"></div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #372e2c;
    color: #aa9999;
    h3 {
      padding: 1rem 0;
    }
  }

  .video-container {
    height: 450px;
    background-color: #372e2c;
  }
`;

export default VideoDetailHeader;
