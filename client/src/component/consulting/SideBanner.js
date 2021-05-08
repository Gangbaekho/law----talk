import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SideBannerItem from "../consulting/SideBannerItem";

const SideBanner = (props) => {
  return (
    <StyleContainer>
      <div className="consulting-write">
        <h3>
          상담글 작성하고 <br />
          무료로 변호사의 답변 받는
        </h3>
        <Link to="consulting-write" className="link">
          상담글 작성하기
        </Link>
      </div>
      <div className="lawyer-rank">
        <h3>최근 답변이 활발한 변호사</h3>
        <ul>
          <SideBannerItem />
          <SideBannerItem />
          <SideBannerItem />
          <SideBannerItem />
          <SideBannerItem />
        </ul>
      </div>
    </StyleContainer>
  );
};

const StyleContainer = styled.div`
  .consulting-write {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 0;
    h3 {
      text-align: center;
      margin: 1rem 0;
      color: #555;
    }
    .link {
      text-decoration: none;
      color: orange;
      font-weight: bold;
    }
  }

  .lawyer-rank {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    h3 {
      color: #555;
      font-weight: bold;
    }
    ul {
      list-style: none;
      padding: 1rem 0;
      /* li {
        display: flex;
        div {
          margin: 0 0.5rem;
          color: #555;
          font-weight: bold;
          h4 {
            color: black;
          }
        }
      } */
    }
  }
`;

export default SideBanner;
