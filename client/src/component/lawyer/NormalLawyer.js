import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const NormalLawyer = ({ mongoLawyer }) => {
  const {
    lawyerName,
    companyName,
    title,
    lawyerProfileImageUrl,
    priceInformation,
  } = mongoLawyer;

  return (
    <StyleContainer>
      <div className="lawyer">
        <div className="lawyer-info">
          <h4>{lawyerName}</h4>
          <p className="company">{companyName}</p>
          <p className="title">{title}</p>
        </div>
        <div className="image-container">{lawyerProfileImageUrl}</div>
      </div>
      <div className="consulting">
        {priceInformation.map((price) => (
          <div key={v4()} className="consulting-type">
            {price.serviceTime} {price.serviceName}
          </div>
        ))}
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  /* width: 740px; */
  padding: 2rem 0;
  border-bottom: 1px solid #aaa;
  /* margin-right: 3rem; */
  .lawyer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .consulting {
    display: flex;
    margin-top: 1rem;
    .consulting-type {
      background-color: #f6f6f6;
      font-weight: bold;
      padding: 0 0.5rem;
      font-size: 0.9rem;
      margin-right: 5px;
    }
  }
  .company {
    font-weight: bold;
    color: #555;
    font-size: 0.9rem;
    margin: 0.5rem 0;
  }
  .title {
    font-weight: bold;
    color: #555;
  }
`;

export default NormalLawyer;
