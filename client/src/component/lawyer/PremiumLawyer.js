import React from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const PremiumLawyer = ({ mongoLawyer }) => {
  const {
    lawyerCharacters,
    lawyerName,
    companyName,
    title,
    lawyerProfileImageUrl,
    priceInformation,
    mongoSchedule,
  } = mongoLawyer;

  return (
    <StyleContainer>
      <div className="lawyer">
        <div className="lawyer-info">
          <ul className="lawyer-characters">
            {lawyerCharacters.map((character) => (
              <li key={v4()}>{character}</li>
            ))}
          </ul>
          <h3 className="lawyer-name">{lawyerName}</h3>
          <div className="company">{companyName}</div>
          <div className="lawyer-title">{title}</div>
          <div className="evaluation">
            별점 &nbsp; <span className="review">(관련분야 후기 7개)</span>
          </div>
        </div>
        <div className="image-container">{lawyerProfileImageUrl}</div>
      </div>
      <div className="consulting-container">
        <div className="consulting">
          {priceInformation.map((price) => (
            <div className="consulting-type">
              <span className="bold">
                {price.serviceTime} {price.serviceName}
              </span>
              <br />
              {price.minPrice}원
            </div>
          ))}

          <div className={`reserve ${mongoSchedule === null && "unable"}`}>
            예약
            <br />
            하기
          </div>
        </div>
        <div className="more">더 알아보기</div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 740px;
  border-bottom: 1px solid #aaa;
  margin-right: 3rem;
  padding: 2rem 0;

  .lawyer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .lawyer-characters {
    display: flex;
    list-style: none;
    margin: 1rem 0;
    li {
      margin-right: 1rem;
      color: orange;
      font-weight: bold;
    }
  }
  .company {
    color: #555;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .lawyer-title {
    color: #555;
    font-weight: bold;
    margin: 0.5rem 0;
  }
  .evaluation {
    font-weight: bold;
    .review {
      color: #555;
      font-size: 0.9rem;
    }
  }
  .consulting-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 1rem 0;
    .consulting {
      display: flex;
      align-items: flex-end;
      div {
        padding: 1rem;
      }
    }
  }
  .consulting-type {
    background-color: #f6f6f6;
    font-size: 0.9rem;
    .bold {
      font-weight: bold;
    }
  }
  .reserve {
    background-color: orange;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
  }
  .more {
    font-weight: bold;
    text-decoration: underline;
  }
  .unable {
    background-color: #cfcfcf;
  }
`;

export default PremiumLawyer;
