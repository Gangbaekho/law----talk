import React, { useEffect } from "react";
import styled from "styled-components";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import ConsultingDetailQuestion from "../component/consulting/ConsultingDetailQuestion";
import ConsultingDetailAnswer from "../component/consulting/ConsultingDetailAnswer";
import { useQuery } from "urql";

const CONSULTING_DETAIL_QUERY = (consultingQuestionId) => ({
  query: `
  query{
    getConsultingQuestionDetail(consultingQuestionId:${consultingQuestionId}){
      id
      title
      content
      viewCount
      createdAt
      specificDomain{
        domainName
      }
      consultingAnswers{
        id
        content
        recommendationCount
        mongoLawyer{
          lawyerName
          lawyerProfileImageUrl
          companyName
          companyPhoneNumber
          mongoSchedule{
            lawyerId
            mysqlLawyerId
            fifteenConsultingAvailableTime{
              time
              isAvailable
            }
            thirtyConsultingAvailableTime{
              time
              isAvailable
            }
            scheduleDate
          }
        }
        createdAt
      }
    }
  }
  `,
});

const ConsultingDetailPage = (props) => {
  const [{ fetching, data }] = useQuery(CONSULTING_DETAIL_QUERY(1));

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.getConsultingQuestionDetail) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <>
        <ConsultingDetailQuestion {...data.getConsultingQuestionDetail} />
        <div className="answers">
          {/* <ConsultingDetailAnswer
            {...data.getConsultingQuestionDetail.consultingAnswers} */}
          {/* /> */}
          {data.getConsultingQuestionDetail.consultingAnswers.map(
            (consultingAnswer) => (
              <ConsultingDetailAnswer
                key={consultingAnswer.id}
                {...consultingAnswer}
              />
            )
          )}
        </div>
      </>
    );
  }

  return (
    <StyleContainer>
      <MainHeader />
      {body}
      <MainFooter />
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .answers {
    padding: 3rem 0;
    background-color: #e1dedd;
  }
`;

export default ConsultingDetailPage;
