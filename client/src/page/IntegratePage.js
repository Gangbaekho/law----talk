import React, { useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import { useQuery } from "urql";

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
          mongoSchedule{
            scheduleDate
          }
        }
      }
      consultingQuestions{
        id
        title
        viewCount
        consultingAnswers{
          mongoLawyer{
            lawyerProfileImageUrl
            lawyerName
          }
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
    body = <h2>Fetch done</h2>;
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
