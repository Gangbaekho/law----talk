import React, { useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";
import PremiumLawyer from "../component/lawyer/PremiumLawyer";
import NormalLawyer from "../component/lawyer/NormalLawyer";
import Consulting from "../component/consulting/Consulting";

const INTEGRATE_QUERY = (specificDomainId) => ({
  query: `
  query{
    specificDomain(id:${specificDomainId}){
      domainName
      lawyers{
        id
        isPremium
        priorityScore
        mongoLawyer{
          _id
          lawyerName
          lawyerCharacters
          companyName
          title
          lawyerProfileImageUrl
          mongoSchedule{
            scheduleDate
          }
          priceInformation{
            serviceName
            minPrice
            serviceTime
          }
        }
      }
      consultingQuestions{
        id
        title
        viewCount
        content
        createdAt
        updatedAt 
        consultingAnswers{
        content
        mongoLawyer
        {
          lawyerName
          lawyerProfileImageUrl
          companyName
          companyPhoneNumber
        }
        createdAt
        updatedAt
        recommendationCount
        }
      }
      posts{
        id
        postType
        postImageUrl
        mongoLawyer{
          lawyerName
        }
      }
      videos{
        id
        videoThumbNailUrl
        mongoLawyer{
          lawyerName
        }
      }
    }
  }
  `,
});

const IntegratePage = (props) => {
  const { specificDomainId } = props.match.params;

  const [{ fetching, data }, getQuery] = useQuery(
    INTEGRATE_QUERY(specificDomainId)
  );

  useEffect(() => {
    getQuery();
  }, []);

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.specificDomain) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        <div>
          {data.specificDomain.lawyers.map((lawyer) => {
            if (lawyer.isPremium === "Y") {
              return <PremiumLawyer key={lawyer.id} {...lawyer} />;
            }
            return <NormalLawyer key={lawyer.id} {...lawyer} />;
          })}
        </div>
        <div>
          {data.specificDomain.consultingQuestions.map((consultingQuestion) => (
            <Consulting
              {...consultingQuestion}
              domainName={data.specificDomain.domainName}
            />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <MainHeader />
      {body}
      <MainFooter />
    </>
  );
};

const StyledContainer = styled.div``;

export default IntegratePage;
