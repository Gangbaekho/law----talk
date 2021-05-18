import React from "react";
import styled from "styled-components";

const LawyerDetailStrength = (props) => {
  return (
    <StyleContainer>
      <div className="strength">
        <div className="strength-item">대한변협 인증</div>
        <div className="strength-item">세무사 자격</div>
        <div className="strength-item">대형 로펌 경험</div>
        <div className="strength-item">사업 경험</div>
        <div className="strength-item">국선변호인 경험</div>
        <div className="strength-item">영어가능</div>
      </div>
      <div className="description">
        최한겨레 변호사님은 대한변호사협회 형사법, 가사법 전문분야 인증을
        획득하였고 세무사 자격이 있으며 대형 로펌, 사업, 국선변호인 경험을
        보유했고 영어가 가능합니다.
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  border-top: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem 0;

  .strength {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0 2rem;
    .strength-item {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
  }
  .description {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default LawyerDetailStrength;
