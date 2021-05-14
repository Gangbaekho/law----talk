import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OthersPosts = (props) => {
  return (
    <StyleContainer>
      <p className="title">
        <span className="highlight">박성애 변호사</span>가 작성한 다른 포스트
      </p>
      <ul className="content">
        <li>
          <Link className="link">양육비 청구</Link>
        </li>
        <li>
          <Link className="link">업무방해죄</Link>
        </li>
        <li>
          <Link className="link">재산분할 합의서</Link>
        </li>
        <li>
          <Link className="link">재산분할, 남편 재산 찾아내기</Link>
        </li>
        <li>
          <Link className="link">부부별거중 바람 이혼</Link>
        </li>
      </ul>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 840px;
  margin: 2rem auto;
  border: 1px solid #fcfbf9;
  .title {
    padding: 1rem;
    background-color: #fcfbf9;
    .highlight {
      font-weight: bold;
    }
  }
  .content {
    list-style: none;
    padding: 1rem;
    li {
      margin: 1rem 0;
      .link {
        color: #555;
        font-weight: bold;
        text-decoration: none;
      }
      .link:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default OthersPosts;
