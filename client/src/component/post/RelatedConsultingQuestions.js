import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RelatedConsultingQuestions = (props) => {
  return (
    <StyleContainer>
      <p className="title">
        <span className="highlight">관련 사례를 확인해보세요</span>
      </p>
      <ul className="content">
        <li>
          <Link className="link">
            사실혼관계에서 불륜 법적으로 소송이 가능 한가요?
          </Link>
        </li>
        <li>
          <Link className="link">성인이 된 자녀의 성(이름) 변경</Link>
        </li>
        <li>
          <Link className="link">여자친구 임신 문제</Link>
        </li>
        <li>
          <Link className="link">
            아이를 제밑으로 옮길수있는방법이있을까요?
          </Link>
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
    margin: 0 1rem;
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

export default RelatedConsultingQuestions;
