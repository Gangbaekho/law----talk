import React from "react";

import MainHeader from "../component/MainHeader";
import MainCarousel from "../component/MainCarousel";
import SpecificDomainSection from "../component/SpecificDomainSection";

const MainPage = (props) => {
  return (
    <>
      <MainHeader />
      <MainCarousel />
      <SpecificDomainSection />
    </>
  );
};

export default MainPage;
