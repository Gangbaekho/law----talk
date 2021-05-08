import React from "react";
import MainHeader from "../component/MainHeader";
import MainFooter from "../component/MainFooter";
import styled from "styled-components";
import Consulting from "../component/consulting/Consulting";
import SideBanner from "../component/consulting/SideBanner";

const ConsultingPage = (props) => {
  return (
    <>
      <MainHeader />
      <StyleContainer>
        <h2>상담사례</h2>
        <div className="flex-container">
          <div className="consultings">
            <Consulting />
            <Consulting />
            <Consulting />
            <Consulting />
            <div className="pagination">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
          </div>
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

  h2 {
    margin: 2rem 0;
    padding: 1rem 0;
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
