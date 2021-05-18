import React from "react";
import LawyerDetailHeader from "../component/lawyer/LawyerDetailHeader";
import LawyerDetailInfo from "../component/lawyer/LawyerDetailInfo";
import LawyerDetailStrength from "../component/lawyer/LawyerDetailStrength";

const LawyerDetailPage = (props) => {
  return (
    <>
      <LawyerDetailHeader />
      <LawyerDetailInfo />
      <LawyerDetailStrength />
    </>
  );
};

export default LawyerDetailPage;
