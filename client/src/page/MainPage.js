import React from "react";

import MainHeader from "../component/MainHeader";
import MainCarousel from "../component/MainCarousel";
import SpecificDomainSection from "../component/SpecificDomainSection";
import SepcificRegionSection from "../component/SpecificRegionSection";

const MainPage = (props) => {
  return (
    <>
      <MainHeader />
      <MainCarousel />
      <SpecificDomainSection />
      <SepcificRegionSection />
    </>
  );
};

export default MainPage;
