import React from "react";
// import MainHeader from "../component/MainHeader";
// import MainCarousel from "../component/MainCarousel";
// import SpecificDomainSection from "../component/SpecificDomainSection";
// import SpecificRegionSection from "../component/SpecificRegionSection";
// import ConsultingSection from "../component/ConsultingSection";
// import PredictionSection from "../component/PredictionSection";
// import LawyerBanner from "../component/LawyerBanner";
// import MainFooter from "../component/MainFooter";
// import SignupForm from "../component/signup/SignupForm";
import styled from "styled-components";
import Consulting from "../component/consulting/Consulting";

const TestPage = (props) => {
  return (
    <StyleContainer>
      <h2>상담사례</h2>
      <div className="flex-container">
        <div className="consultings">
          <Consulting />
          <Consulting />
          <Consulting />
          <Consulting />
        </div>
        <div className="side"></div>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;
  border: 2px solid black;

  .flex-container {
    display: flex;
    .consultings {
      width: 800px;
      border: 2px solid black;
    }
    .side {
      width: 280px;
      border: 2px solid black;
    }
  }
`;

export default TestPage;
