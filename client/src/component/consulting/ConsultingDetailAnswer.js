import React from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";

const ConsultingDetailAnswer = ({
  id,
  content,
  recommendationCount,
  mongoLawyer,
  createdAt,
}) => {
  return (
    <StyleContainer>
      <div className="flex-container">
        <div className="lawyer">
          <div className="image-container">
            {mongoLawyer.lawyerProfileImageUrl}
          </div>
          <div className="info">
            <div>
              <span className="lawyer-name">{mongoLawyer.lawyerName}</span>
              &nbsp;
              <span className="company-name">{mongoLawyer.companyname}</span>
            </div>
            <div className="phone-number">{mongoLawyer.companyPhoneNumber}</div>
          </div>
        </div>
        <div className="consulting">
          상담
          <br />
          예약
        </div>
      </div>
      <hr />
      <p className="content">{content}</p>
      <p className="time">{moment().to(+createdAt)} 작성됨</p>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  background-color: white;

  .flex-container {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lawyer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div {
        margin: 0 0.5rem;
      }
    }
  }

  .lawyer-name {
    font-weight: bold;
    font-size: 1rem;
  }
  .company-name {
    color: #555;
    font-weight: bold;
  }
  .phone-number {
    color: #555;
    font-weight: bold;
  }
  .consulting {
    background-color: orange;
    padding: 1rem;
    color: white;
    font-weight: bold;
  }
  .content {
    line-height: 1.5rem;
    font-weight: bold;
    color: #555;
    padding: 1rem;
  }
  .time {
    font-weight: bold;
    color: #555;
    margin: 1rem 0;
    padding: 1rem;
  }
`;

export default ConsultingDetailAnswer;
