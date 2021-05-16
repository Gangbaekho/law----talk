import React, { useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";
import PremiumLawyer from "../component/lawyer/PremiumLawyer";
import NormalLawyer from "../component/lawyer/NormalLawyer";

const LAWYERS_QUERY = (specificDomainId) => ({
  query: `
  query{
    getLawyers(specificDomainId:${specificDomainId}){
      id
      mongodbId
      isPremium
      priorityScore    
    mongoLawyer{
      lawyerCharacters
      lawyerName
      companyName
      title
      lawyerProfileImageUrl
      priceInformation{
        serviceName
        minPrice
        serviceTime      
      }
      mongoSchedule{
        scheduleDate
      }
    }
    }
  }
  `,
});

const LawyerPage = (props) => {
  const { specificDomainId } = props.match.params;
  const [{ fetching, data }, getQuery] = useQuery(
    LAWYERS_QUERY(specificDomainId)
  );

  useEffect(() => {
    getQuery();
  }, []);

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.getLawyers) {
    body = <div>Something went wrong</div>;
  } else {
    body = data.getLawyers.map((lawyer) => {
      if (lawyer.isPremium === "Y") {
        return <PremiumLawyer {...lawyer} />;
      }
      return <NormalLawyer {...lawyer} />;
    });
  }

  return (
    <>
      <MainHeader />
      {body}
      <MainFooter />
    </>
  );
};

export default LawyerPage;
