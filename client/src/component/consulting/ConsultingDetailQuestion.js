import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

const ConsultingDetailQuestion = ({
  id,
  title,
  content,
  viewCount,
  createdAt,
  specificDomain,
}) => {
  return (
    <StyleContainer>
      <div className="space-between">
        <h4>{specificDomain.domainName}</h4>
        <p>{viewCount}</p>
      </div>
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
      <p className="time">{moment().to(+createdAt)} 작성됨</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 2rem 0;

  .space-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #cfd0cf;
    font-weight: bold;
  }
  .title {
    font-size: 3rem;
    margin: 1rem 0;
  }
  .content {
    color: #555;
    font-weight: bold;
    line-height: 1.5rem;
    margin: 1rem 0;
  }
  .time {
    color: #cfd0cf;
    font-weight: bold;
  }
`;

export default ConsultingDetailQuestion;
