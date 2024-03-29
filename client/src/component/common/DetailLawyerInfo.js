import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DetailLawyerInfo = ({
  lawyerName,
  companyName,
  companyPhoneNumber,
  lawyerProfileImageUrl,
}) => {
  return (
    <StyleContainer>
      <div className="lawyer-info">
        <div className="image-container">{lawyerProfileImageUrl}</div>
        <div className="description">
          <p>
            <span className="lawyer-name">{lawyerName} 변호사</span>&nbsp;
            <span className="company-name">{companyName}</span>
          </p>
          <p className="company-number">사무실 문의 {companyPhoneNumber}</p>
        </div>
      </div>
      <div className="consulting">
        <Link className="link">변호사 전화상담 예약</Link>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 840px;
  margin: 0 auto;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 2rem 0;
  .lawyer-info {
    display: flex;
    align-items: center;
  }
  .lawyer-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .company-name {
    color: #555;
    font-weight: bold;
  }
  .company-number {
    color: #555;
    font-weight: bold;
  }

  .description {
    p {
      margin: 0.5rem;
    }
  }

  .consulting {
    .link {
      background-color: orange;
      border: none;
      padding: 1rem;
      color: white;
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

export default DetailLawyerInfo;
