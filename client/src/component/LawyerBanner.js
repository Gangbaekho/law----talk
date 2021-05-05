import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LawyerBanner = (props) => {
  return (
    <LawyerBannerContainer>
      <div className="flex-container">
        <h2>혹시, 변호사이신가요?</h2>
        <p>로톡과 변호사님이 함꼐하면 좋은 점을 살펴보세요.</p>

        <Link className="link">[로톡변호사가 되면 좋은 점 알아보기]</Link>
      </div>
    </LawyerBannerContainer>
  );
};

const LawyerBannerContainer = styled.div`
  width: 1080px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: #443736;

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  .link {
    color: #e13f36;
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8rem;
  }
`;

export default LawyerBanner;
