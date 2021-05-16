import React from "react";
import styled from "styled-components";

const VideoDetailContent = (props) => {
  return (
    <StyleContainer>
      <div className="type">[법률 가이드]</div>
      <h2 className="title">
        #2 결혼생활 중 재산분할합의 이혼시에도 유효할까? / 한승미 이혼전문
        변호사
      </h2>
      <div className="flex-container">
        <div className="day">2일 전 작성됨</div>
        <div>조회수 4</div>
        <div> 유용해요 0</div>
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
