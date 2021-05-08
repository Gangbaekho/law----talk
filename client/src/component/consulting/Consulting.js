import React from "react";
import styled from "styled-components";

const Consulting = (props) => {
  return (
    <StyleContainer>
      <h4>이혼</h4>
      <h2>이혼 조정을 하는데 양육비가 어떻게 나오나요</h2>
      <p>
        <span className="highlight">답변</span> 조현정 변호사
      </p>
      <p>
        1. 귀하의 소득을 고려하면 현재 요구하는 양육비가 지나치게 많은 것으로
        보이지는 않습니다. 만약 10년뒤 귀하의 경제적인 사정이 지금과 달라진다면
        양육비감액청구를 통하여 조정할 수 있을 것입니다. 2. 이와 관련하여 더
        구체적인
      </p>
      <p>다른 변호사 답변 3개</p>
      <div className="flex-container">
        <ul>
          <li>조회수</li>
          <li>좋아요</li>
        </ul>
        <div>3시간 전 답변 작성됨.</div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h4 {
    color: #555555;
  }
  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  p {
    color: #555555;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  .highlight {
    color: orange;
    font-weight: bold;
  }
  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    ul {
      display: flex;
      list-style: none;
      li {
        margin-right: 1rem;
        color: #555555;
        font-weight: bold;
      }
    }
    div {
      color: #555555;
      font-weight: bold;
    }
  }
`;

export default Consulting;
