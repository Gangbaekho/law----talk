import React, { useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";
import PremiumLawyer from "../component/lawyer/PremiumLawyer";
import NormalLawyer from "../component/lawyer/NormalLawyer";
import Consulting from "../component/consulting/Consulting";
import IntegrateCarousel from "../component/common/IntegrateCarousel";
import IntegrateCarouselItem from "../component/integrate/IntegrateCarouselItem";
import { v4 } from "uuid";

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
        title
        mongoLawyer{
          lawyerName
        }
      }
      videos{
        id
        videoThumbNailUrl
        title
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
      <StyledContainer>
        <div className="center">
          {data.specificDomain.lawyers.map((lawyer) => {
            if (lawyer.isPremium === "Y") {
              return <PremiumLawyer key={lawyer.id} {...lawyer} />;
            }
            return <NormalLawyer key={lawyer.id} {...lawyer} />;
          })}
        </div>
        <div className="center">
          {data.specificDomain.consultingQuestions.map((consultingQuestion) => (
            <Consulting
              {...consultingQuestion}
              domainName={data.specificDomain.domainName}
            />
          ))}
        </div>

        <IntegrateCarousel>
          {data.specificDomain.posts.map((post) => (
            <IntegrateCarouselItem key={v4()} {...post} itemType="post" />
          ))}
        </IntegrateCarousel>
        <IntegrateCarousel>
          {data.specificDomain.videos.map((video) => (
            <IntegrateCarouselItem key={v4()} {...video} itemType="video" />
          ))}
        </IntegrateCarousel>
      </StyledContainer>
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

const StyledContainer = styled.div`
  .center {
    width: 1080px;
    margin: 0 auto;
  }
`;

export default IntegratePage;
