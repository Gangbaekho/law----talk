import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

const VideoDetailContent = ({
  videoType,
  title,
  videoUrl,
  reviewCount,
  recommendationCount,
  content,
  createdAt,
}) => {
  return (
    <StyleContainer>
      <div className="type">{videoType}</div>
      <h2 className="title">{title}</h2>
      <div className="flex-container">
        <div className="day">{moment().to(+createdAt)} 작성됨</div>
        <div>조회수 {reviewCount}</div>
        <div> 유용해요 {recommendationCount}</div>
      </div>
      <div className="like">
        동영상 강의, 어떠셨나요? &nbsp;<button>유용해요</button>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  border-bottom: 1px solid #aaa;
  margin: 0 auto;
  padding: 3rem 0;

  .type {
    color: #555;
    font-weight: bold;
  }
  .title {
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .flex-container {
    display: flex;
    color: #555;
    font-weight: bold;
    font-size: 0.8rem;
    div {
      margin-right: 1rem;
    }
  }

  .like {
    color: #555;
    font-weight: bold;
    margin-top: 2rem;
    button {
      border: none;
      background-color: orange;
      padding: 0.5rem;
      cursor: pointer;
      :focus {
        outline: none;
      }
    }
  }
`;

export default VideoDetailContent;
