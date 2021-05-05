import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PredictionSection = (props) => {
  return (
    <PredictionSectionContainer>
      <h2>형사문제, 시작은 형량예측부터.</h2>
      <div>
        <h3>
          로톡 형량예측<sup className="beta">beta</sup>
        </h3>
        <p>
          로톡AI가 40만건의 판결문을 바탕으로 분석한 형량예측결과를 첨부해
          변호사와 더 정확히 상담하세요.
        </p>
        <Link className="link">할인정보 더보기</Link>
      </div>
    </PredictionSectionContainer>
  );
};

const PredictionSectionContainer = styled.div`
  width: 1080px;
  margin: 6rem auto;

  h2 {
    color: #333333;
  }

  h3 {
    margin-top: 1rem;
    color: #333333;
  }

  p {
    margin: 1rem 0;
    margin-bottom: 2rem;
  }

  .beta {
    color: blue;
    font-weight: bold;
  }

  .link {
    color: #ff5a4a;
    text-decoration: none;
    font-weight: bold;
  }
`;

export default PredictionSection;
