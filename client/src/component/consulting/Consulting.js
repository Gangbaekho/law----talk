import React from "react";
import styled from "styled-components";

const Consulting = ({
  specificDomain,
  title,
  consultingAnswers,
  content,
  recommendationCount,
  viewCount,
  mongoLawyer,
  createdAt,
  updatedAt,
}) => {
  return (
    <StyleContainer>
      <h4>{specificDomain.domainName}</h4>
      <h2>{title}</h2>
      <p>
        <span className="highlight">답변</span>
        {consultingAnswers[0]
          ? consultingAnswers[0].mongoLawyer.lawyerName
          : "아직 답변 없음."}
      </p>
      <p>{consultingAnswers[0] ? consultingAnswers[0].content : ""}</p>
      <p>다른 변호사 답변 {consultingAnswers.length}개</p>
      <div className="flex-container">
        <ul>
          <li>{viewCount}</li>
          <li>{recommendationCount}</li>
        </ul>
        <div>{createdAt}</div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  padding: 2rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  h4 {
    color: #555555;
  }
  h2 {
    margin-top: 0px;
    margin-bottom: 1rem;
    border-bottom: none;
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
