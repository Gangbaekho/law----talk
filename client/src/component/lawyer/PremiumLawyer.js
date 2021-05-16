import React from "react";
import styled from "styled-components";

const PremiumLawyer = (props) => {
  return (
    <StyleContainer>
      <div className="lawyer">
        <div className="lawyer-info">
          <ul className="lawyer-characters">
            <li>해결사</li>
            <li>쉽고친절한 변호사</li>
          </ul>
          <h3 className="lawyer-name">방정환 변호사</h3>
          <div className="company">법무법인 인화</div>
          <div className="lawyer-title">
            [법학박사/대표변호사] 21년의 경험과 실력이 결과로.
          </div>
          <div className="evaluation">
            별점 &nbsp; <span className="review">(관련분야 후기 7개)</span>
          </div>
        </div>
        <div className="image-container">이미지</div>
      </div>
      <div className="consulting-container">
        <div className="consulting">
          <div className="consulting-type">
            <span className="bold">15분 전화상담</span>
            <br />
            35,000원
          </div>
          <div className="consulting-type">
            <span className="bold">30분 방문상담.</span>
            <br />
            110,000원
          </div>
          <div className="reserve">
            예약
            <br />
            하기
          </div>
        </div>
        <div className="more">더 알아보기</div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  border-bottom: 1px solid #aaa;

  .lawyer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lawyer-characters {
    display: flex;
    list-style: none;
    margin: 1rem 0;
    li {
      margin-right: 1rem;
      color: orange;
      font-weight: bold;
    }
  }
  .company {
    color: #555;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .lawyer-title {
    color: #555;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  .evaluation {
    font-weight: bold;
    .review {
      color: #555;
      font-size: 0.9rem;
    }
  }
  .consulting-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem 0;
    .consulting {
      display: flex;
      align-items: flex-end;
      div {
        padding: 1rem;
      }
    }
  }
  .consulting-type {
    background-color: #f6f6f6;
    font-size: 0.9rem;
    .bold {
      font-weight: bold;
    }
  }
  .reserve {
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .more {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export default PremiumLawyer;
