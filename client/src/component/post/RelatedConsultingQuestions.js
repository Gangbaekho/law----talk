import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RelatedConsultingQuestions = ({ consultingQuestions }) => {
  return (
    <StyleContainer>
      <p className="title">
        <span className="highlight">관련 사례를 확인해보세요</span>
      </p>
      <ul className="content">
        {consultingQuestions.map((consultingQuestion) => (
          <li key={consultingQuestion.id}>
            <Link
              to={`/consulting/consultingQuestionIds/${consultingQuestion.id}`}
              className="link"
            >
              {consultingQuestion.title}
            </Link>
          </li>
        ))}
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
