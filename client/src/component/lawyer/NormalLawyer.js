import React from "react";
import styled from "styled-components";

const NormalLawyer = (props) => {
  return (
    <StyleContainer>
      <div className="lawyer">
        <div className="lawyer-info">
          <h4>남중구 변호사</h4>
          <p className="company">법무법인 인헌</p>
          <p className="title">서울법대, 대형로펌 출신! 경력10년, 친절 명쾌</p>
        </div>
        <div className="image-container">이미지</div>
      </div>
      <div className="consulting">
        <div className="consulting-type">15분 전화상담</div>
        <div className="consulting-type">30분 방문상담</div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  padding: 2rem 0;
  border-bottom: 1px solid #aaa;
  .lawyer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .consulting {
    display: flex;
    margin-top: 1rem;
    .consulting-type {
      background-color: #f6f6f6;
      font-weight: bold;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      margin-right: 5px;
    }
  }
  .company {
    font-weight: bold;
    color: #555;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .title {
    font-weight: bold;
    color: #555;
  }
`;

export default NormalLawyer;
