import React, { useState, useEffect } from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import Consulting from "../component/consulting/Consulting";
import SideBanner from "../component/consulting/SideBanner";
import { useDispatch, useSelector } from "react-redux";
import { fetchConsultingQuestions } from "../store/action/consulting-questions";
import { useQuery } from "urql";
import Pagination from "../component/common/Pagination";

const POSTS_QUERY = (specificDomainId, page) => ({
  query: `
  query{
    getCurrentPageConsultingQuestions(specificDomainId:${specificDomainId},page:${page}){
      consultingQuestions{
        specificDomain{
          domainName
        }
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
  
      currentPage
      hasNextPage
      hasPreviousPage
      nextPage
      previousPage
      lastPage
    }
  }
  `,
});

const ConsultingPage = (props) => {
  const { specificDomainId } = props.match.params;

  const [currentPage, setCurrentPage] = useState(1);

  const [{ fetching, data }, getQuery] = useQuery(
    POSTS_QUERY(specificDomainId, currentPage)
  );

  useEffect(() => {
    getQuery();
  }, []);

  let body;
  if (fetching) {
    body = <div>Data is loading..</div>;
  } else if (!data.getCurrentPageConsultingQuestions) {
    body = <div>Something went wrong</div>;
  } else {
    body = (
      <div className="consultings">
        {data.getCurrentPageConsultingQuestions.consultingQuestions.map(
          (consultingQuestion) => (
            <Consulting {...consultingQuestion} />
          )
        )}
        <Pagination
          currentPage={currentPage}
          lastPage={data.getCurrentPageConsultingQuestions.lastPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  }

  return (
    <>
      <MainHeader />
      <StyleContainer>
        <h2 className="title">상담사례</h2>
        <div className="flex-container">
          {body}
          <div className="side">
            <SideBanner />
          </div>
        </div>
      </StyleContainer>
      <MainFooter />
    </>
  );
};

const StyleContainer = styled.div`
  width: 1080px;
  margin: 0 auto;

  .title {
    margin: 2rem 0;
    padding: 1rem;
    border-bottom: 1px solid #555;
    color: rgba(0, 0, 0, 0.8);
  }

  .flex-container {
    display: flex;
    .consultings {
      width: 800px;
      .pagination {
        background-color: #f7f7f7;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 4rem 0;
        ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          li {
            margin: 0 1rem;
            font-weight: bold;
          }
        }
      }
    }
    .side {
      width: 280px;
    }
  }
`;

export default ConsultingPage;
