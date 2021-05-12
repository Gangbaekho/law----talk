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
// import styled from "styled-components";
// import Consulting from "../component/consulting/Consulting";
// import SideBanner from "../component/consulting/SideBanner";
import Pagination from "../component/common/Pagination";

const TestPage = (props) => {
  return (
    <>
      <Pagination currentPage={1} lastPage={10} />
    </>
  );
};

export default TestPage;
