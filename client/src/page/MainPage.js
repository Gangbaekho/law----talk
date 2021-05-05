import React from "react";

import MainHeader from "../component/MainHeader";
import MainCarousel from "../component/MainCarousel";
import SpecificDomainSection from "../component/SpecificDomainSection";
import SepcificRegionSection from "../component/SpecificRegionSection";
import ConsultingSection from "../component/ConsultingSection";
import PredictionSection from "../component/PredictionSection";

const MainPage = (props) => {
  return (
    <>
      <MainHeader />
      <MainCarousel />
      <SpecificDomainSection />
      <SepcificRegionSection />
      <ConsultingSection />
      <PredictionSection />
    </>
  );
};

export default MainPage;
