import React from "react";

import MainHeader from "../component/MainHeader";
import MainCarousel from "../component/MainCarousel";
import SpecificDomainSection from "../component/SpecificDomainSection";
import SepcificRegionSection from "../component/SpecificRegionSection";
import ConsultingSection from "../component/ConsultingSection";
import PredictionSection from "../component/PredictionSection";
import LawyerBanner from "../component/LawyerBanner";
import MainFooter from "../component/MainFooter";

const MainPage = (props) => {
  return (
    <>
      <MainHeader />
      <MainCarousel />
      <SpecificDomainSection />
      <SepcificRegionSection />
      <ConsultingSection />
      <PredictionSection />
      <LawyerBanner />
      <MainFooter />
    </>
  );
};

export default MainPage;
